import { Card } from "react-bootstrap";
import faceOfTamizhanImage from '../assets/projectSnips/faceOfTamizhan.png';
import serviceAnytime from '../assets/projectSnips/serviceAnytime.png';
import expenseTrackerImage from '../assets/projectSnips/expenseTracker.png';
import taskManager from '../assets/projectSnips/taskManager.png';
import '../styles/projects.css';

const MyProjects = () => {
    return (<>
        <div className="projects-component my-4">
            <h1 className='text-center mb-5'>My Projects</h1>
            <div className="projects-div my-4">
                <Card className="image-Card">
                    <a href="https://github.com/ravi-devo/faceOfTamizhan-frontend" target="_blank" rel="noopener noreferrer">
                        <Card.Img src={faceOfTamizhanImage} alt="Face-Of-Tamizan project" variant="top" />
                    </a>
                </Card>
                <Card className="image-Card">
                    <a href="https://github.com/ravi-devo/serviceAnytime_FE" target="_blank" rel="noopener noreferrer">
                        <Card.Img src={serviceAnytime} alt="Service anytime project" variant="top" />
                    </a>
                </Card>
                <Card className="image-Card">
                    <a href="https://github.com/ravi-devo/expenseTracker_FE" target="_blank" rel="noopener noreferrer">
                        <Card.Img src={expenseTrackerImage} alt="Expense tracker project" variant="top" />
                    </a>
                </Card>
                <Card className="image-Card">
                    <a href="https://github.com/ravi-devo/taskManager_FE" target="_blank" rel="noopener noreferrer">
                        <Card.Img src={taskManager} alt="Task manager project" variant="top" />
                    </a>
                </Card>
            </div>
        </div>
    </>)
}

export default MyProjects;