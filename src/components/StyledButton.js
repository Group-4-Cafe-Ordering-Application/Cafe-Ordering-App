import { useTheme } from "@emotion/react";
import React, { useState } from "react";

const StyledButton = ({ selectedButton, handleModeChange, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  const buttonStyle = {
    backgroundColor: isHovered
      ? theme.palette.secondary.main
      : theme.palette.primary.main,
    color: theme.palette.primary.text,
    borderColor:
      selectedButton === type
        ? theme.palette.primary.light
        : theme.palette.secondary.main,
  };

  return (
    <button
      className="styled-button"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleModeChange(type)}
    >
      {type}
    </button>
  );
};

export default StyledButton;
