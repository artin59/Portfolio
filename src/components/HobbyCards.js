import { Col } from "react-bootstrap";

export const HobbyCard = ({ title, description, imgUrl, link }) => {
    return (
        <Col sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center"> {/* Centering the card */}
            <a href={link} target="_blank" rel="noopener noreferrer" className="hobby-link">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt={title} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                    </div>
                </div>
            </a>
        </Col>
    );
};
