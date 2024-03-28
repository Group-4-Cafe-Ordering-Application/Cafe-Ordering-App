import { useTheme } from "@emotion/react";
import { useState } from "react";

const SubtSVG = () => {
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
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={theme.palette.primary.main}
            stroke={
              isHovered
                ? theme.palette.secondary.buttonText
                : theme.palette.secondary.main
            }
            strokeWidth="2"
            d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M6,12 L18,12"
          />
        </svg>
      </div>
    </div>
  );
};

export default SubtSVG;
