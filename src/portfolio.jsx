import Certification from "./components/certification";
import Divider from "./components/divider";
import IntroComponent from "./components/intro";
import Profession from "./components/profession";
import MyProjects from "./components/projects";
import Skills from "./components/skills";
import Timeline from "./components/timeline";

const Portfolio = () => {
    return (
        <>
            <IntroComponent />
            <Divider />
            <Timeline />
            <Divider />
            <Skills />
            <Divider />
            <MyProjects />
            <Divider />
            <Profession />
            <Divider />
            <Certification />
            <Divider />
            <h2 className="text-center my-5">Thanks for scrolling</h2>
        </>
    )
}

export default Portfolio;