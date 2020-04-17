import React from 'react';
import './App.css';
import {Edition} from './Edition';
import e10 from './edition10.jpg';
import e9 from './edition9.jpg';
import EditionSelector from './EditionSelector';
import Footer from "./Footer";

const editions = [
    // new Edition(11, "10.4", "", e10, false),
    new Edition(10, "9.5", "13303", e10),
    new Edition(9, "8.7", "13123", e9),
];

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
                <Footer/>
            </div>
        </div>
    );
}

export default App;
