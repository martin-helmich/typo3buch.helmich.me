import React from 'react';
import { Edition } from "./Edition";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

interface EditionDisplayProps {
    edition: Edition;
}

export function EditionDownloadButton({ edition }: EditionDisplayProps) {
    return <a href="?" target="_blank" className="btn btn-block btn-primary">
        <FontAwesomeIcon icon={faDownload} />
        Dateien herunterladen
    </a>;
}

export default EditionDownloadButton;