import React from 'react';
import { Edition } from "./Edition";

interface EditionSelectorItemProps {
    edition: Edition;
    selected: Edition;
    now: Date;
    onClick: () => any;
}

function EditionSelectorItem({ edition, selected, now, onClick }: EditionSelectorItemProps) {
    const classNames = ["btn", "btn-light", "btn-block"];

    if (!edition.available) {
        return <button className={classNames.join(" ")} disabled={true}>
            {edition.edition}. Auflage, für TYPO3 {edition.version}&nbsp;
            <span className="badge badge-success">COMING SOON</span>
        </button>;
    }

    if (edition.release && edition.release > now) {
        const month = edition.release.getMonth() + 1;
        const year = edition.release.getFullYear();
        const day = edition.release.getDate();

        return <button className={classNames.join(" ")} onClick={onClick}>
            {edition.edition}. Auflage, für TYPO3 {edition.version}&nbsp;
            <span className="badge badge-success">Verfügbar ab {day}. {month}. {year}</span>
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