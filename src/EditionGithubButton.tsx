import React from 'react';
import { Edition } from "./Edition";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

interface EditionDisplayProps {
    edition: Edition;
}

export function EditionGithubButton({ edition }: EditionDisplayProps) {
    return <a href={edition.githubURL} target="_blank" className="btn btn-block btn-light">
        <FontAwesomeIcon icon={faGithub} />
        GitHub
    </a>;
}

export default EditionGithubButton;