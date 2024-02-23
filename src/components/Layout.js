import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import "./Loading.css";
import "../index.css";

const Layout = ({ title, header, children }) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some delay for demonstration purposes
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Cleanup function to cancel the timeout in case the component unmounts before the timeout finishes
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div
      className=""
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.backgroundColor,
      }}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Header className="flex flex-none">{header}</Header>

      <Container
        className="flex flex-1 flex-col min-h-max overflow-y-scroll min-w-full scroll-container2"
        sx={{
          paddingLeft: { xs: 0, sm: 2, md: 4 },
          paddingRight: { xs: 0, sm: 2, md: 4 },
        }}
      >
        {isLoading ? (
          <div className="flex items-center">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </Container>
    </div>
  );
};

export default Layout;
