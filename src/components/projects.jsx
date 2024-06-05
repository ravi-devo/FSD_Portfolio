import { Card, Button } from "react-bootstrap";
import faceOfTamizhanImage from '../assets/projectSnips/faceOfTamizhan.png';
import serviceAnytime from '../assets/projectSnips/serviceAnytime.png';
import expenseTrackerImage from '../assets/projectSnips/expenseTracker.png';
import taskManager from '../assets/projectSnips/taskManager.png';
import '../styles/projects.css';

const MyProjects = () => {
    return (
        <div className="projects-component my-4">
            <h1 className='text-center mb-5'>My Projects</h1>
            <h3>Demo Credentials for all projects</h3>
            <p>Username: testuser@gmail.com</p>
            <p>Password: Welcome@123</p>
            <div className="projects-div my-4">
                <Card className="image-Card">
                    <Card.Img src={faceOfTamizhanImage} alt="Face-Of-Tamizan project" variant="top" />
                    <Card.Body className="text-center">
                        <Button onClick={() => window.open('https://main.d1uzfwgx5uwlqf.amplifyapp.com/', '_blank', 'noopener noreferrer')}
                            variant="primary" className="m-1">Demo</Button>
                        <Button
                            onClick={() => window.open('https://github.com/ravi-devo/faceOfTamizhan-frontend', '_blank', 'noopener noreferrer')}
                            variant="secondary" className="m-1">Frontend Code</Button>
                        <Button
                            onClick={() => window.open('https://github.com/ravi-devo/faceOfTamizhan-backend', '_blank', 'noopener noreferrer')}
                            variant="success" className="m-1">Backend Code</Button>
                    </Card.Body>
                </Card>
                <Card className="image-Card">
                    <Card.Img src={serviceAnytime} alt="Service anytime project" variant="top" />
                    <Card.Body className="text-center">
                        <Button
                            onClick={() => window.open('https://main.d3m137m9inkje1.amplifyapp.com/', '_blank', 'noopener noreferrer')}
                            variant="primary" className="m-1">Demo</Button>
                        <Button
                            onClick={() => window.open('https://github.com/ravi-devo/serviceAnytime_FE', '_blank', 'noopener noreferrer')}
                            variant="secondary" className="m-1">Frontend Code</Button>
                        <Button
                            onClick={() => window.open('https://github.com/ravi-devo/serviceAnytime_BE', '_blank', 'noopener noreferrer')}
                            variant="success" className="m-1">Backend Code</Button>
                    </Card.Body>
                </Card>
                <Card className="image-Card">
                    <Card.Img className="mb-3" src={expenseTrackerImage} alt="Expense tracker project" variant="top" />
                    <Card.Body className="text-center">
                        <Button
                            onClick={() => window.open('https://main.d4ed8we1flo2r.amplifyapp.com/', '_blank', 'noopener noreferrer')}
                            variant="primary" className="m-1">Demo</Button>
                        <Button
                            onClick={() => window.open('https://github.com/ravi-devo/expenseTracker_FE', '_blank', 'noopener noreferrer')}
                            variant="secondary" className="m-1">Frontend Code</Button>
                        <Button
                            onClick={() => window.open('https://github.com/ravi-devo/expenseTracker_BE', '_blank', 'noopener noreferrer')}
                            variant="success" className="m-1">Backend Code</Button>
                    </Card.Body>
                </Card>
                <Card className="image-Card">
                    <Card.Img className="mb-3" src={taskManager} alt="Expense tracker project" variant="top" />
                    <Card.Body className="text-center">
                        <Button
                            onClick={() => window.open('https://main.dvin4agi4z8cq.amplifyapp.com/', '_blank', 'noopener noreferrer')}
                            variant="primary" className="m-1">Demo</Button>
                        <Button
                            onClick={() => window.open('https://github.com/ravi-devo/taskManager_FE', '_blank', 'noopener noreferrer')}
                            variant="secondary" className="m-1">Frontend Code</Button>
                        <Button
                            onClick={() => window.open('https://github.com/ravi-devo/taskManager_BE', '_blank', 'noopener noreferrer')}
                            variant="success" className="m-1">Backend Code</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default MyProjects;