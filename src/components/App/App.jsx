// React imports:
import React from "react";
// Material-ui Imports:
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
// Components Imports:
import Layout from "../Layout/Layout";
import Content from "../Content/Content";

// Renders the entire app on the DOM our main App component:
const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Container maxWidth="lg">
          <Content />
        </Container>
      </Layout>
    </>
  );
};

export default App;
