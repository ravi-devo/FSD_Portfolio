import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaCircle } from "react-icons/fa";
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css';

const Timeline = () => {
    return (<>
        <div className='timeline-component'>
            <h1 className='mb-2'>Education Timeline</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    contentStyle={{ background: 'black', color: '#fff', border: '1px solid white' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2018 - 2020"
                    iconStyle={{ background: 'white', color: 'black' }}
                    icon={<FaCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Master in Computer Application</h3>
                    <h4 className="vertical-timeline-element-subtitle">Madras University, Chepauk</h4>
                    <p>
                        Completed my post graduate with 73%
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    contentStyle={{ background: 'black', color: '#fff', border: '1px solid white' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2014 - 2017"
                    iconStyle={{ background: 'white', color: 'black' }}
                    icon={<FaCircle />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor in Computer Application</h3>
                    <h4 className="vertical-timeline-element-subtitle">Potheri, Chennai</h4>
                    <p>
                        Completed my post graduate with 73%
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    contentStyle={{ background: 'black', color: '#fff', border: '1px solid white' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2013-2014"
                    iconStyle={{ background: 'white', color: 'black' }}
                    icon={<FaCircle />}
                >
                    <h3 className="vertical-timeline-element-title">HSC</h3>
                    <h4 className="vertical-timeline-element-subtitle">St.Pauls.Mat.HR.School, Chennai</h4>
                    <p>
                        Completed my post graduate with 69%
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    contentStyle={{ background: 'black', color: '#fff', border: '1px solid white' }}
                    contentArrowStyle={{ borderRight: '7px solid white' }}
                    date="2011-2012"
                    iconStyle={{ background: 'white', color: 'black' }}
                    icon={<FaCircle />}
                >
                    <h3 className="vertical-timeline-element-title">SSLC</h3>
                    <h4 className="vertical-timeline-element-subtitle">St.Pauls.Mat.HR.School, Chennai</h4>
                    <p>
                        Completed my post graduate with 80%
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </>)
}

export default Timeline;