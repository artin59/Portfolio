import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/artin-kiany/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/artin59" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </div>
        </div>
    );
}
