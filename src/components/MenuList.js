import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import MenuBurger from "../svgs/MenuBurger";
import HideMenuSVG from "../svgs/HideMenuSVG";
import axios from "axios";

function MenuList({
  setSelectedCategory,
  setSelectedCategoryID,
  selectedCategoryID,
}) {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const primaryTextColor = theme.palette.primary.text;
  const [menuToggle, setMenuToggle] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.post(
          "https://cafe-app-api-7aztvwb6hq-uc.a.run.app/category"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("There was an error fetching the menu items:", error);
      }
    };

    fetchData();
  }, []);

  const StyledListItem = styled.li`
    border-color: ${primaryColor};
    background-color: ${(props) =>
      props.isSelected ? secondaryColor : primaryColor};
    color: ${(props) => (props.isSelected ? primaryColor : primaryTextColor)};
    font-weight: ${(props) => (props.isSelected ? "bolder" : "normal")};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 6rem;
    @media (min-width: 768px) {
      width: 10rem;
    }
    cursor: pointer;
    &:hover {
      color: ${primaryColor};
      font-weight: bolder;
      background-color: ${secondaryColor};
      fill: ${secondaryColor};
    }
  `;

  function handleToggle() {
    setMenuToggle(!menuToggle);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedCategoryID(category.category_id);
  };

  return menuToggle ? (
    <div className="w-12">
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
        {categories.map((category) => (
          <StyledListItem
            key={category.category_id}
            isSelected={category.category_id === selectedCategoryID}
            onClick={() => handleCategoryChange(category)}
          >
            {category.sub_category}
          </StyledListItem>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
