import "./Header.css";
import logo from "../images/logo.png";

import MobileMenu from "./MobileMenu";
import SettingsMenu from "./SettingsMenu";

import HomeSVG from "../svgs/HomeSVG";
import CartSVG from "../svgs/CartSVG";
import MenuBurger from "../svgs/MenuBurger";
import ProfileSVG from "../svgs/ProfileSVG";
import BrushSVG from "../svgs/BrushSVG";
import PresentSVG from "../svgs/PresentSVG";

import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";

const Header = () => {
  const theme = useTheme();

  function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }

  function NavItem(props) {
    const [open, setOpen] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (nodeRef.current && !nodeRef.current.contains(e.target)) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);

    return (
      <div ref={nodeRef}>
        <li className="nav-item">
          <a
            href={props.href}
            className="icon-button"
            onClick={() => setOpen(!open)}
          >
            {props.icon}
          </a>
          {open && props.children}
        </li>
      </div>
    );
  }

  const small = useMemo(
    () => (
      <Navbar>
        <NavItem href="#" icon={<MenuBurger />}>
          <MobileMenu />
        </NavItem>
      </Navbar>
    ),
    []
  );

  const large = useMemo(
    () => (
      <Navbar>
        <NavItem href="/home" text="Home" icon={<HomeSVG />} />
        <NavItem href="/cart" text="Cart" icon={<CartSVG />} />
        <NavItem href="/profile" text="Profile" icon={<ProfileSVG />} />
        <NavItem href="/rewards" text="Rewards" icon={<PresentSVG />} />
        <NavItem href="#" text="Theme" icon={<BrushSVG />}>
          <SettingsMenu />
        </NavItem>
      </Navbar>
    ),
    []
  );

  const [navToUse, setNavToUse] = useState(large);

  const updateNavSize = useCallback(() => {
    const width = window.innerWidth;

    setNavToUse((prevNavToUse) => {
      if (width <= 800) {
        return prevNavToUse !== small ? small : prevNavToUse;
      } else {
        return prevNavToUse !== large ? large : prevNavToUse;
      }
    });
  }, [small, large]);

  useEffect(() => {
    updateNavSize();

    const handleResize = () => {
      updateNavSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateNavSize]);

  return (
    <div
      className="flex justify-between px-2 "
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <Link to="/home">
        <div className="flex">
          <img src={logo} alt="Logo" className="h-24 w-auto pl-1" />{" "}
          {/* need to adjust height and change the logo to w/o the word */}
          <h1
            className="flex text-2xl items-center -ml-8 text-white"
            style={{ fontFamily: "Arial" }}
          >
            Cafe Ordering App
          </h1>
        </div>
      </Link>

      <div className="flex items-center">{navToUse}</div>
    </div>
  );
};

export default Header;
