import { Card } from 'react-bootstrap';
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import '../styles/skills.css';

const Skills = () => {
    return (<>
        <div className="skills-component my-4">
            <h1 className='text-center'>Skills</h1>
            <div className='skillDiv-card'>
                <Card className='skillCard'>
                    <DiJavascript size={108} />
                    <p className='text-center'>HTML</p>
                </Card>
                <Card className='skillCard'>
                    <FaCss3Alt size={100} />
                    <p className='text-center'>CSS</p>
                </Card>
                <Card className='skillCard'>
                    <TbBrandJavascript size={108} />
                    <p className='text-center'>Javascript</p>
                </Card>
                <Card className='skillCard'>
                    <BsBootstrapFill style={{marginBottom: '10px', marginTop: '10px'}} size={88} />
                    <p className='text-center'>Bootstrap</p>
                </Card>
                <Card className='skillCard'>
                    <SiMongodb style={{marginBottom: '10px', marginTop: '10px'}} size={100} />
                    <p className='text-center'>MongoDB</p>
                </Card>
                <Card className='skillCard'>
                    <FaNode size={100} />
                    <p className='text-center'>Nodejs</p>
                </Card>
                <Card className='skillCard'>
                    <FaReact style={{marginBottom: '10px', marginTop: '10px'}} size={100} />
                    <p className='text-center'>Reactjs</p>
                </Card>
                <Card className='skillCard'>
                    <SiExpress style={{marginBottom: '10px', marginTop: '10px'}} size={100} />
                    <p className='text-center'>Expressjs</p>
                </Card>
            </div>
        </div>
    </>)
}

export default Skills;