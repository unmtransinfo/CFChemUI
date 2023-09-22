import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFlask} from "@fortawesome/pro-thin-svg-icons";
import React from "react";

export default function SiteHeader() {
    return (
        <header className="text-center mb-4">
            <FontAwesomeIcon icon={faFlask} className="text-6xl mb-4" />
            <h1 className="text-xl font-bold">CF Chem</h1>
        </header>
    )
}
