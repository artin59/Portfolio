import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
        <Col sm={6} md={3}>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4 className="project-card-title">{title}</h4>
                    </div>
                </div>
            </a>
        </Col>
    );
}
