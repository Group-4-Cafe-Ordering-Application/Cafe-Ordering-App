import { useTheme } from "@emotion/react";
import { useState } from "react";

const LogoutSVG = ({ isMenuStyle }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="popup-container flex items-evenly"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isMenuStyle ? null : <div className="popup-content">Logout</div>}
      <div
        className="flex rounded-xl justify-center"
        style={{
          backgroundColor: theme.palette.secondary.main,
          height: isMenuStyle ? "36px" : "48px",
          width: isMenuStyle ? "36px" : "48px",

          boxShadow: isHovered
            ? "1px 1px 4px 4px " + theme.palette.secondary.buttonShadow
            : null,
        }}
      >
        <svg
          className=" m-auto"
          style={{
            width: isMenuStyle ? "36px" : "40px",
            height: isMenuStyle ? "36px" : "48px",
            fill: theme.palette.secondary.main,
          }}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <path
            stroke={theme.palette.secondary.buttonText}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12h-9.5m7.5 3l3-3-3-3m-5-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2v-1"
          />
        </svg>
      </div>
    </div>
  );
};

export default LogoutSVG;
