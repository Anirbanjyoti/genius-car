import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>{title} - Genius Car Services</title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
