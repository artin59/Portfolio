import { Col, Container, Tab, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/headspace.png";
import projImg2 from "../assets/img/houseprice.jpg";
import projImg3 from "../assets/img/hobowiz.jpg";
import projImg4 from "../assets/img/portfolio.jpg";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { Link } from 'react-router-dom'; 

export const Hobbies = () => {

    const hobbies = [
        {
            title: "HeadSpace",
            imgUrl: projImg1,
            link: "https://artin59.github.io/Portfolio/#/hobby1" 
        },
        {
            title: "Interview",
            imgUrl: projImg2,
            link: "https://artin59.github.io/Portfolio/#/project2"  
        },
        {
            title: "Technical Report",
            imgUrl: projImg3,
            link: "https://artin59.github.io/Portfolio/#/project3"  
        },
        {
            title: "ENG 1102 Design Project",
            imgUrl: projImg4,
            link: "https://artin59.github.io/Portfolio/#/project4"  
        },
    ]
    return (
        <section className="project" id="hobbies">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                            <h2>Projects</h2>
                            <p></p>
                            </div>}
                        </TrackVisibility>
                        <Tab.Container id= "projects-tab" defaultActiveKey="first">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            hobbies.map((hobbies, index) => {
                                                return (
                                                    <Col sm={6} md={3} key={index}>
                                                        <Link to={hobbies.link} className="project-link">
                                                            <div className="proj-imgbx">
                                                                <img src={hobbies.imgUrl} alt={hobbies.title} />
                                                                <div className="proj-txtx">
                                                                    <h4 className="project-card-title">{hobbies.title}</h4>
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
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}