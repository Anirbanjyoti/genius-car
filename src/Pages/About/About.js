import React from "react";
import MyLocation from "../Shared/MyLocation/MyLocation";
import PageTitle from "../Shared/PageTitle/PageTitle";

const About = () => {
  return (
    <div>
      <PageTitle title='About'></PageTitle>
      <h1>Thus is About page</h1>
      <MyLocation></MyLocation>
    </div>
  );
};

export default About;
