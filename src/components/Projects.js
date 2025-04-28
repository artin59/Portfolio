import { Col, Container, Tab, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/applemusic.jpg";
import projImg2 from "../assets/img/houseprice.jpg";
import projImg3 from "../assets/img/hobowiz.jpg";
import projImg4 from "../assets/img/portfolio.jpg";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { Link } from 'react-router-dom'; // <-- ADD THIS

export const Projects = () => {

    const projects = [
        {
            title: "Cover Letter",
            imgUrl: projImg1,
            link: "/project1"  // <-- NORMAL path (no /#/)
        },
        {
            title: "Interview",
            imgUrl: projImg2,
            link: "/project2"  
        },
        {
            title: "Technical Report",
            imgUrl: projImg3,
            link: "/project3"  
        },
        {
            title: "ENG 1102 Design Project",
            imgUrl: projImg4,
            link: "/project4"  
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                            <h2>Showcase</h2>
                            <p></p>
                            </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <Col sm={6} md={3} key={index}>
                                                        <Link to={project.link} className="project-link">
                                                            <div className="proj-imgbx">
                                                                <img src={project.imgUrl} alt={project.title} />
                                                                <div className="proj-txtx">
                                                                    <h4 className="project-card-title">{project.title}</h4>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}
