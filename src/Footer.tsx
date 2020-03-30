import React from "react";

function Footer() {
    return <footer className="pt-4 my-4 my-md-5 pt-md-5 border-top">
        <div className="row">
            <div className="col-6 col-md">
                © Martin Helmich 2020
            </div>
            <div className="col-6 col-md text-right">
                <h5>Weiteres</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="https://www.martin-helmich.de/de/ueber-mich.html">Über mich</a></li>
                    <li><a className="text-muted" href="https://www.martin-helmich.de/de/impressum.html">Impressum</a></li>
                </ul>
            </div>
        </div>
    </footer>;
}

export default Footer;