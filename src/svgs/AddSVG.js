import { useTheme } from "@emotion/react";
import { useState } from "react";

const AddSVG = () => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="popup-container flex items-evenly"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex rounded-full justify-center"
        style={{
          height: "40px",
          width: "40px",
        }}
      >
        <svg
          className=" m-auto"
          style={{
            fill: theme.palette.primary.main,
          }}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={
              isHovered
                ? theme.palette.secondary.buttonText
                : theme.palette.secondary.main
            }
            strokeWidth="1.5"
          />
          <path
            d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
            stroke={
              isHovered
                ? theme.palette.secondary.buttonText
                : theme.palette.secondary.main
            }
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default AddSVG;
