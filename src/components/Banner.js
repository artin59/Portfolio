import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Computer Engineer", "Embedded Systems Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 600;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return() => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    
        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(250);
            }
        
    }
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
      };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm a `}<span className="wrap">{text}</span></h1>
                                <p>My name is Artin Kiany and I'm a 3rd year Computer Engineering student at York University</p>
                                <a href={`https://www.linkedin.com/in/artin-kiany/`} target={"_blank"}style={linkStyle}><button>Let's connect <ArrowRightCircle size={25} /></button></a>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt= "Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}