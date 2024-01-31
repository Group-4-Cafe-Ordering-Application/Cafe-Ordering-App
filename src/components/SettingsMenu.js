import React, { useEffect, useRef, useState } from "react";
import { useThemeContext } from "./themeContext";
import styled from "@emotion/styled";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@emotion/react";

function SettingsMenu() {
  const theme = useTheme();
  const { setTheme } = useThemeContext();
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const StyledDropdownItem = styled.a`
    border-color: ${primaryColor};
    background-color: ${secondaryColor};
    &:hover {
      background-color: ${primaryColor};
    }
  `;

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function handleThemeChange(themeName) {
    setTheme(themeName);
  }

  function DropdownItem(props) {
    return (
      <StyledDropdownItem
        href={props.href}
        className="menu-item"
        onClick={() => handleThemeChange(props.themeName)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </StyledDropdownItem>
    );
  }

  return (
    <div
      className="dropdown shadow-xl"
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <div className="menu">
        <DropdownItem
          href="#"
          themeName="default"
          leftIcon={<Brightness4Icon className=" rotate-180" />}
        >
          Default Theme
        </DropdownItem>
        <DropdownItem href="#" themeName="dark" leftIcon={<DarkModeIcon />}>
          Dark Theme
        </DropdownItem>
      </div>
    </div>
  );
}

export default SettingsMenu;
