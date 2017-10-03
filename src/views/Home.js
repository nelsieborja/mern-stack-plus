import React from "react";
import Helmet from "react-helmet";
import Page from "../components/Page";

export default () => (
  <Page>
    <Helmet title="Home" />
    <h1>
      This is the <strong>Home</strong> view.
    </h1>
    <p>
      Elementum cras id suspendisse mi ut eros elit a enim curabitur posuere
      adipiscing eleifend auctor dictumst hac porttitor iaculis dis. Ut
      porttitor neque etiam primis et vestibulum parturient consectetur a etiam
      class consectetur a in massa parturient hac sed litora massa. Arcu enim
      arcu ac interdum ullamcorper consectetur aptent natoque curae mattis
      adipiscing a non metus netus arcu accumsan nam quisque condimentum posuere
      platea congue nisl mollis id nascetur.
    </p>
  </Page>
);
