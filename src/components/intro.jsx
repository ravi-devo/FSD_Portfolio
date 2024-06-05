import '../styles/intro.css';
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const IntroComponent = () => {

    const githubURL = 'https://github.com/ravi-devo/';
    const linkedInURL = 'https://www.linkedin.com/in/ravichandran-venkatesan-a465b7129/';
    const resumeURL = 'https://drive.google.com/file/d/1ItJIu4viwhkecrgMMobMgUfl2FtAK5qC/view?usp=drive_link';

    const handleClick = (url) => {
        window.open(url, '_blank');
    }

    return (<>
        <div className='intro-component'>
            <h1>Hey, I&apos;m Ravichandran</h1>
            <h1>Full Stack Developer</h1>
            <div className='my-4 buttons-container'>
                <div className='button-prop' onClick={() => handleClick(githubURL)}><FaGithub style={{marginRight: '5px'}} />Github</div>
                <div className='button-prop' onClick={() => handleClick(linkedInURL)}>LinkedIn</div>
                <div className='button-prop' onClick={() => handleClick(resumeURL)}><BsBoxArrowUpRight style={{marginRight: '5px'}} />Resume</div>
            </div>
            <p className='my-4'>
                Dynamic and detail-oriented Full Stack Developer in designing, developing, and implementing applications and 
                solutions using a range of technologies and programming languages. Proﬁcient in both front-end and back-end development, 
                adept at creating robust, scalable, and efﬁcient web applications. Strong background in JavaScript frameworks, 
                RESTful services, database management, and cloud services. Demonstrates excellent problem-solving skills and 
                the ability to thrive in a fast-paced environment.
            </p>
        </div>
    </>)
}

export default IntroComponent;