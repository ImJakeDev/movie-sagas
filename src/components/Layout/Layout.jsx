// React Imports:
import React from "react";

// Component imports:

// This component passes the childern prop which will wrap the Content components
const Layout = (props) => {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
