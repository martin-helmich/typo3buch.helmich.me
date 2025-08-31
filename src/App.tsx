import React from 'react';
import './App.css';
import { Edition } from './Edition';
import e10 from './edition10.jpg';
import e11 from './edition11.jpg';
import e12 from './edition12.jpg';
import e9 from './edition9.jpg';
import EditionSelector from './EditionSelector';
import Footer from "./Footer";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";

const editions = [
    new Edition(12, "13.4", "https://dpunkt.de/produkt/praxiswissen-typo3-cms-13-lts/", e12, true, new Date("2025-09-25")),
    new Edition(11, "10.4", "https://dpunkt.de/produkt/praxiswissen-typo3-cms-10-lts/", e11, true, new Date("2020-11-30")),
    new Edition(10, "9.5", "https://www.oreilly.de/buecher/13303.html", e10),
    new Edition(9, "8.7", "https://www.oreilly.de/buecher/13123.html", e9),
];

library.add(fab, fas);

function App() {
    const header = <>
        <h1>Praxiswissen TYPO3</h1>
        <div className="mb-5">
            Auf dieser Seite finden Sie die Beispieldateien, Vorlagen & Skripte zum
            Buch <em>Praxiswissen TYPO3</em>, erschienen im O'Reilly-Verlag.
        </div>
    </>;

    return (
        <div className="App">
            <div className="container-lg">
                <div className="d-md-none mt-5">{header}</div>
                <div className="my-md-4">
                    <EditionSelector editions={editions}>
                        <div className="d-none d-md-block">{header}</div>
                    </EditionSelector>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
