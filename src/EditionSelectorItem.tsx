import React from 'react';
import {Edition} from "./Edition";

interface EditionSelectorItemProps {
    edition: Edition;
    selected: Edition;
    onClick: () => any;
}

function EditionSelectorItem({edition, selected, onClick}: EditionSelectorItemProps) {
    const classNames = ["btn", "btn-light", "btn-block"];

    if (!edition.available) {
        return <button className={classNames.join(" ")} disabled={true}>
            {edition.edition}. Auflage, für TYPO3 {edition.version}&nbsp;
            <span className="badge badge-success">COMING SOON</span>
        </button>;
    }

    if (edition === selected) {
        classNames.push("active");
    }

    return <button className={classNames.join(" ")} onClick={onClick}>
        {edition.edition}. Auflage, für TYPO3 {edition.version}
    </button>;
}

export default EditionSelectorItem;