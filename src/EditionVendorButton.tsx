import React from 'react';
import { Edition } from "./Edition";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

interface EditionVendorButtonProps {
    edition: Edition;
}

export function EditionVendorButton({ edition }: EditionVendorButtonProps) {
    return <a href={edition.vendorURL} target="_blank" className="btn btn-block btn-light">
        <FontAwesomeIcon icon={faShoppingBasket} />
        Kaufen
    </a>;
}

export default EditionVendorButton;