import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import MenuBurger from "../svgs/MenuBurger";
import HideMenuSVG from "../svgs/HideMenuSVG";

function MenuList({ setSelectedCategory }) {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  const categories = ["Drinks", "Food"];

  const [menuToggle, setMenuToggle] = useState(false);

  const StyledListItem = styled.li`
    border-color: ${primaryColor};
    background-color: ${secondaryColor};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 6rem;
    @media (min-width: 768px) {
      width: 10rem;
    }
    cursor: pointer;
    &:hover {
      color: ${secondaryColor};
      font-weight: bolder;
      background-color: ${primaryColor};
      fill: ${secondaryColor};
    }
  `;

  function handleToggle() {
    setMenuToggle(!menuToggle);
  }

  return menuToggle ? (
    <div className="h-screen w-12">
      <button onClick={handleToggle}>
        <MenuBurger />
      </button>
    </div>
  ) : (
    <div className="ml-1 mr-2">
      <button onClick={handleToggle}>
        <HideMenuSVG />
      </button>
      <ul>
        {categories.map((category, index) => (
          <StyledListItem
            key={index}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </StyledListItem>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
