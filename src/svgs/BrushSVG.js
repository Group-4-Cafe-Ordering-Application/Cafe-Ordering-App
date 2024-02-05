import { useTheme } from "@emotion/react";

const BrushSVG = ({ isMenuStyle }) => {
  const theme = useTheme();

  return (
    <div className="popup-container flex items-evenly">
      {isMenuStyle ? null : <div className="popup-content">Theme</div>}
      <div
        className="flex rounded-xl justify-center"
        style={{
          backgroundColor: theme.palette.secondary.main,
          height: isMenuStyle ? "36px" : "48px",
          width: isMenuStyle ? "36px" : "48px",
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
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <g fill={theme.palette.secondary.buttonText}>
            <path
              className="st0"
              d="M446.53,4.85c-13.186-10.668-33.202-3.163-53.148,16.868c-18.109,17.776-112.788,112.51-161.468,170.404
		c-34.295,36.87-60.292,72.024-64.249,96.424c-2.504,15.428,0.893,28.152,6.873,32.983l19.257,15.577
		c5.98,4.837,19.138,5.49,33.7-0.184c23.032-8.98,51.957-41.757,80.833-83.01c46.417-59.717,119.235-172.135,132.825-193.564
		C456.574,36.656,459.716,15.512,446.53,4.85z"
            />
            <path
              className="st0"
              d="M149.315,322.195c-23.57-4-48.545,4.49-64.647,24.4C46.061,394.333,50.338,474.272,83.811,512
		c0,0,3.099-4.831,14.115-13.98c30.543-25.408,67.441-33.813,93.04-65.47c16.101-19.917,19.166-46.119,10.328-68.32L149.315,322.195
		z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BrushSVG;
