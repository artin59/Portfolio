import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl }) => {
    return (
        <Col sm={6} md={3}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4 className="project-card-title">{title}</h4>
                </div>
            </div>
        </Col>
    );
}
