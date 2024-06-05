import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaCircle } from "react-icons/fa";
import 'react-vertical-timeline-component/style.min.css';
import '../styles/profession.css';

const Profession = () => {
    return (<>
        <div className="profession-content mb-2">
            <h1 className="text-center mb-4">Professional Summary</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    contentStyle={{ background: 'black', color: '#fff', border: '1px solid white' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2019 - Present"
                    iconStyle={{ background: 'white', color: 'black' }}
                    icon={<FaCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Infosys</h3>
                    <h4 className="vertical-timeline-element-subtitle">Cyber Security Analyst</h4>
                    <p>
                    Managing Life-Cycle of a identities for a client through Okta SSO which includes application integration, 
                    conﬁguring MFA policies, automating the tasks with Okta workﬂow

                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </>)
}

export default Profession;