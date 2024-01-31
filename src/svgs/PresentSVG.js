import { useTheme } from "@emotion/react";

const PresentSVG = ({ isMenuStyle }) => {
  const theme = useTheme();

  return (
    <div className="popup-container flex items-evenly">
      {isMenuStyle ? null : <div className="popup-content">Rewards</div>}
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
            fill: theme.palette.secondary.text,
          }}
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
        >
          <path d="M32 10.015c0-1.104-0.895-2-2-2h-3.414c0.884-0.872 1.449-2.014 1.449-3.421 0-1.732-0.995-3.615-3.788-3.615-3.675 0-6.745 3.913-8.188 6.106-1.444-2.193-4.607-6.106-8.282-6.106-2.793 0-3.788 1.882-3.788 3.614 0 1.407 0.581 2.55 1.482 3.421h-3.472c-1.105 0-2 0.896-2 2v5.986h2.018v13.017c0 1.105 0.895 2 2 2h23.99c1.105 0 2-0.895 2-2v-13.018h1.992v-5.986zM24.247 2.981c1.236 0 1.788 0.52 1.788 1.615 0 2.221-2.479 3.42-4.811 3.42h-3.386c1.421-2.111 3.922-5.035 6.409-5.035zM7.778 2.981c2.487 0 5.083 2.924 6.504 5.034h-3.386c-2.332 0-4.905-1.229-4.905-3.451 0-1.095 0.551-1.583 1.788-1.583zM30 14.002h-13v-3.986h13v3.986zM2 10.015h13v3.986h-13zM4.018 16.002h10.982v13.018h-10.982zM28.008 29.020h-11.008v-13.017h11.008v13.017z"></path>
        </svg>
      </div>
    </div>
  );
};

export default PresentSVG;
