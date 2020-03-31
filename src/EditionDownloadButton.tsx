import React, {useState} from 'react';
import {Edition} from "./Edition";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faExclamationTriangle, faSpinner} from "@fortawesome/free-solid-svg-icons";

interface EditionDownloadButtonProps {
    edition: Edition;
}

type EditionDownloadButtonState = undefined
    | { knownReleases: Release[] }
    | { error: any };

interface ReleaseAsset {
    browser_download_url: string;
}

interface Release {
    name: string,
    assets: ReleaseAsset[];
}

export function EditionDownloadButton({edition}: EditionDownloadButtonProps) {
    const [knownReleases, setKnownReleases] = useState<Release[]>();
    const [error, setError] = useState<any>();
    const url = `https://api.github.com/repos/martin-helmich/praxiswissen-typo3/releases`;

    if (!knownReleases) {
        fetch(url)
            .then(async resp => {
                setKnownReleases(await resp.json());
            })
            .catch(error => {
                setError(error)
            });

        return <button disabled={true} className="btn btn-block btn-primary">
            <FontAwesomeIcon icon={faSpinner}/>
            Dateien herunterladen
        </button>
    }

    if (error) {
        return <button disabled={true} className="btn btn-block btn-danger">
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            Download nicht verfügbar
        </button>
    }

    const releasesForEdition = knownReleases
        .filter(r => r.name.startsWith(edition.branch))
        .sort((a, b) => a.name > b.name ? 1 : -1);

    if (releasesForEdition.length === 0) {
        throw new Error(`no release available`);
    }

    return <a
        href={releasesForEdition[0].assets[0].browser_download_url}
        rel="noopener noreferrer"
        target="_blank"
        className="btn btn-block btn-primary"
    >
        <FontAwesomeIcon icon={faDownload}/>
        Dateien herunterladen
    </a>;
}

export default EditionDownloadButton;