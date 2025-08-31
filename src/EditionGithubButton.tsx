import React from 'react';
import {Edition} from "./Edition";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface EditionDisplayProps {
    edition: Edition;
}

export function EditionGithubButton({edition}: EditionDisplayProps) {
    return <a
        href={edition.githubURL}
        /* eslint-disable-next-line react/jsx-no-target-blank */
        target="_blank"
        className="btn btn-block btn-light"
    >
        <FontAwesomeIcon icon="github" />
        GitHub
    </a>;
}

export default EditionGithubButton;