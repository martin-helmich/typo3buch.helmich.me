import React from 'react';
import {Edition} from "./Edition";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface EditionVendorButtonProps {
    edition: Edition;
}

export function EditionVendorButton({edition}: EditionVendorButtonProps) {
    return <a
        href={edition.vendorURL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-block btn-light">
        <FontAwesomeIcon icon="shopping-basket"/>
        Kaufen
    </a>;
}

export default EditionVendorButton;