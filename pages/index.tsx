import Home from "../src/containers/home/Home";
import Education from "../src/containers/education/Education";
import Skills from "../src/containers/skills/Skills";
import Certifications from "../src/containers/certifications/Certifications";
import Projects from "../src/containers/projects/Projects";
import HardSkills from "../src/containers/tools/HardSkills";
import About from "../src/containers/about/About";

const Index = () => (
    <>
      <Home key='root_home'/>,
      <Education key='root_educ'/>,
      <Skills key='root_skills'/>,
      <Certifications key='root_certifications'/>,
      <Projects key='root_projects' expanded={false}/>,
      <HardSkills key='root_tools' expanded={false}/>,
      <About key='root_about'/>
    </>
);

export default Index;