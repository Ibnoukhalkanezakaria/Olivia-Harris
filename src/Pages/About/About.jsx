import React from "react";
import SectionCnp from "../../Components/Sections/SectionCnp";
import MainAbout from "../../Components/Sections/MainAbout";

import EmailSection from "../../Components/Sections/EmailSection";

const About = () => {
  return (
    <div>
      <SectionCnp first="About" second="My story, skills & awards" />
      <MainAbout />
      <EmailSection />
    </div>
  );
};

export default About;
