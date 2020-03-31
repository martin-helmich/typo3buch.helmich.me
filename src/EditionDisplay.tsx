import React from 'react';
import { Edition } from "./Edition";
import EditionDownloadButton from "./EditionDownloadButton";
import EditionGithubButton from "./EditionGithubButton";
import EditionVendorButton from "./EditionVendorButton";
import "./EditionDisplay.scss";

interface EditionDisplayProps {
    edition: Edition;
}

export function EditionDisplay({ edition }: EditionDisplayProps) {
    const title = `Praxiswissen TYPO3 ${edition.version}, ${edition.edition}. Auflage`;
    return <div className="card">
        <img
            className="card-img-top"
            src={edition.image}
            alt={title}
            title={title}
        />
        <div className="card-body">
            <EditionDownloadButton edition={edition} />
            <EditionGithubButton edition={edition}/>
            <EditionVendorButton edition={edition}/>
        </div>
    </div>;
}

export default EditionDisplay;