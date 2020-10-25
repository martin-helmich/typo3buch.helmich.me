import React, { FunctionComponent, useState } from 'react';
import { Edition } from "./Edition";
import EditionDisplay from "./EditionDisplay";
import './EditionSelector.scss';
import EditionSelectorItem from "./EditionSelectorItem";

interface EditionSelectorProps {
    editions: Edition[];
}

function selectEdition(editions: Edition[]): Edition {
    const p = document.location.hash.replace(/^#/, "");

    for (const e of editions) {
        if (!e.available) {
            continue;
        }

        if (p === "") {
            return e;
        }

        if (e.version.startsWith(p)) {
            return e;
        }
    }

    if (p !== "") {
        console.error(`no matching release for ${p} could be found; defaulting to latest available release`);
        for (const e of editions) {
            if (e.available) {
                return e;
            }
        }
    }

    throw new Error("no editions given");
}

const EditionSelector: FunctionComponent<EditionSelectorProps> = ({ editions, children }) => {
    const [selected, setSelected] = useState(selectEdition(editions));

    const editionButtons: JSX.Element[] = [];
    const now = new Date();

    for (const e of editions) {
        const item = <EditionSelectorItem
            key={e.edition}
            edition={e}
            selected={selected}
            now={now}
            onClick={() => {
                setSelected(e);
                document.location.hash = e.version;
            }}
        />;

        editionButtons.push(item);
    }

    return <div className="row align-items-center">
        <div className="col-lg-7 col-md-6 col-sm-4 mt-md-3 mb-5 left">
            {children}

            <h3>Mit welcher Auflage arbeiten Sie?</h3>
            {editionButtons}
        </div>
        <div className="col-lg-5 col-md-6 col-sm-8 right">
            <EditionDisplay edition={selected} />
        </div>
    </div>;
}

export default EditionSelector;