import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from 'react';
import {Edition} from "./Edition";

interface EditionDownloadButtonProps {
    edition: Edition;
}

interface ReleaseAsset {
    browser_download_url: string;
}

interface Release {
    name: string,
    assets: ReleaseAsset[];
}

export function EditionDownloadButton({ edition }: EditionDownloadButtonProps) {
    const [knownReleases, setKnownReleases] = useState<Release[]>();
    const [error, setError] = useState<any>();
    const url = `https://api.github.com/repos/martin-helmich/praxiswissen-typo3/releases`;

    if (!knownReleases) {
        fetch(url)
            .then(async resp => {
                setKnownReleases(await resp.json());
                setError(undefined);
            })
            .catch(error => {
                setError(error)
            });

        return <button disabled={true} className="btn btn-block btn-primary">
            <FontAwesomeIcon icon="spinner" />
            Dateien herunterladen
        </button>
    }

    if (error) {
        return <button disabled={true} className="btn btn-block btn-danger">
            <FontAwesomeIcon icon="exclamation-triangle" />
            Download nicht verfügbar
        </button>
    }

    const releasesForEdition = knownReleases
        .filter(r => r.name.startsWith(edition.branch))
        .sort((a, b) => a.name < b.name ? 1 : -1);

    if (releasesForEdition.length === 0) {
        return <button disabled={true} className="btn btn-block btn-warning">
            <FontAwesomeIcon icon="exclamation-triangle" />
            Download nicht verfügbar
        </button>
    }

    return <a
        href={releasesForEdition[0].assets[0].browser_download_url}
        rel="noopener noreferrer"
        target="_blank"
        className="btn btn-block btn-primary"
    >
        <FontAwesomeIcon icon="download" />
        Dateien herunterladen
    </a>;
}

export default EditionDownloadButton;