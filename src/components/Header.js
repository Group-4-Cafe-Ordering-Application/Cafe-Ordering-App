import "./Header.css";
import logo from "../images/logo.png";

import MobileMenu from "./MobileMenu";
import SettingsMenu from "./SettingsMenu";

import HomeSVG from "../svgs/HomeSVG";
import CartSVG from "../svgs/CartSVG";
import MenuBurger from "../svgs/MenuBurger";
import LogoutSVG from "../svgs/LogoutSVG";
import BrushSVG from "../svgs/BrushSVG";
import PresentSVG from "../svgs/PresentSVG";

import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { AuthContext } from "../context/authContext";
import React, {
  useCallback,
  useEffect,
  useState,
  useContext,
  useMemo,
  useRef,
} from "react";

const Header = () => {
  const theme = useTheme();
  const { logout } = useContext(AuthContext);

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

    const handleClick = (e) => {
      if (props.onClick) {
        e.preventDefault();
        props.onClick();
      }
      setOpen(!open);
    };

    return (
      <div ref={nodeRef}>
        <li className="nav-item">
          <a
            href={props.href}
            className="icon-button"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
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
        <NavItem icon={<MenuBurger />}>
          <MobileMenu />
        </NavItem>
      </Navbar>
    ),
    []
  );

  const large = useMemo(
    () => (
      <Navbar>
        <NavItem href="/" text="Home" icon={<HomeSVG />} />
        <NavItem href="/cart" text="Cart" icon={<CartSVG />} />
        <NavItem href="/rewards" text="Rewards" icon={<PresentSVG />} />
        <NavItem text="Theme" icon={<BrushSVG />}>
          <SettingsMenu />
        </NavItem>
        <NavItem text="Logout" icon={<LogoutSVG />} onClick={logout} />
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
      <Link to="/">
        <div className="flex">
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-auto pl-1 -ml-6 md:ml-0"
          />{" "}
          <h1
            className="flex text-xl md:text-3xl items-center -ml-8 text-white"
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
