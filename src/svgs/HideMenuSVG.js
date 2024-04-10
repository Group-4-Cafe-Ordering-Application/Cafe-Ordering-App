import { useTheme } from "@emotion/react";

function HideMenuSVG() {
  const theme = useTheme();

  return (
    <div className="flex items-evenly">
      <div
        className="flex rounded-xl justify-center"
        style={{
          backgroundColor: theme.palette.secondary.main,
          height: "40px",
          width: "40px",
        }}
      >
        <svg
          className=" m-auto"
          viewBox="-3 0 19 19"
          height="24px"
          width="24px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.711 9.182a1.03 1.03 0 0 1-1.03 1.03H1.319a1.03 1.03 0 1 1 0-2.059h10.364a1.03 1.03 0 0 1 1.029 1.03z"
            fill={theme.palette.secondary.buttonText}
          />
        </svg>
      </div>
    </div>
  );
}

export default HideMenuSVG;
