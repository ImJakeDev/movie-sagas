// React Imports:
import React from "react";

// This component passes the children prop which will wrap the Content components
const Layout = (props) => {
  return (
    <>
        <div>{props.children}</div>
    </>
  );
};

export default Layout;
