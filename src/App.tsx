import React, { useState } from 'react'
import '../dist/App.css'
import {Button, Input} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLightbulb, faLightbulbOn} from '@fortawesome/pro-thin-svg-icons'
import SiteHeader from "./components/SiteHeader";
import {Listbox, ListboxItem} from "@nextui-org/react";

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [showSearchResults, queryAPI] = useState(false);

    let searchResults;

    const themeMode = () => {
        // 👇️ toggle isActive state on click
        setDarkMode(darkMode => !darkMode);
    };

    const fetchSearchResults = () => {
        searchResults = 'foo';
        queryAPI(showSearchResults => true);
    };

    const searchResultStartContent = '';

    return (
        <main className={darkMode ? 'dark' : 'light'}>

            <Button id="btn-theme-mode" size="md" onClick={themeMode}>
                <FontAwesomeIcon icon={darkMode ? faLightbulb : faLightbulbOn} />
            </Button>

            <div className="page-container">

                {/* @todo: move to component */}
                <section id="header-search">
                    <SiteHeader />

                    <div className="w-1/2 m-auto">
                        <Input
                            key="default"
                            type="email"
                            color="default"
                            label="Search"
                            placeholder="Start typing"
                            defaultValue=""
                            className=""
                            onKeyUp={fetchSearchResults}
                        />
                    </div>
                </section>

                {/* @todo:
                only display when search results are returned
                move to component
                */}
                <section id="search-results" className={showSearchResults ? 'flex' : 'hidden'}>
                    {/* @todo: {searchResults} */}
                    <Listbox variant="flat" aria-label="Search Results" className="gap-2">
                        <ListboxItem
                            key="1"
                            description="Description"
                            startContent={searchResultStartContent}
                        >
                            Result #1
                        </ListboxItem>
                        <ListboxItem
                            key="2"
                            description="Description"
                            startContent={searchResultStartContent}
                        >
                            Result #2
                        </ListboxItem>
                        <ListboxItem
                            key="3"
                            description="Description"
                            startContent={searchResultStartContent}
                        >
                            Result #3
                        </ListboxItem>
                    </Listbox>
                </section>
            </div>
        </main>
    )
}

export default App
