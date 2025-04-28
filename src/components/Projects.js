import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/applemusic.jpg";
import projImg2 from "../assets/img/houseprice.jpg";
import projImg3 from "../assets/img/hobowiz.jpg";
import projImg4 from "../assets/img/portfolio.jpg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "Cover Letter",
            imgUrl: projImg1,
            link: "/project1"  
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
                        <Tab.Container id= "projects-tab" defaultActiveKey="first">
                            {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav> */}
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((projects, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...projects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Artin</Tab.Pane>
                                <Tab.Pane eventKey="third">Kiany</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}