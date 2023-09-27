import {useEffect, useState} from 'react'
import '../dist/App.css'
import {Button, Input} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLightbulb, faLightbulbOn, faChartNetwork, faSpinner, faCircleNotch} from '@fortawesome/pro-light-svg-icons'
import SiteHeader from "./components/SiteHeader";
import {Listbox, ListboxItem} from "@nextui-org/react";
// import axios from "axios";

const dummyData = [
    {'title': 'foo', 'desc': 'test description'},
    {'title': 'bar', 'desc': 'test description'},
    {'title': 'foobar', 'desc': 'test description'}
];

async function fetchSearchResults(inputVal: string) {
    // @todo: api endpoint
    //  const apiUrl = `http://url/api/data/${inputVal}`;

    return new Promise(resolve => {
        setTimeout(() => resolve(dummyData.filter(
            x => x.title.includes(inputVal)
        )), 1000);
    })

    // @todo: a real fetch
    // return await axios.get(apiUrl)
    //     .then(promise => {
    //         return promise.data;
    //     })
    //     .catch(e => {
    //         console.error(e);
    //     })
}

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [loader, setLoader] = useState(false);
    const searchResultBullet = <FontAwesomeIcon icon={faChartNetwork} className="text-primary mr-2" />;

    const themeMode = () => {
        // 👇️ toggle isActive state on click
        setDarkMode(darkMode => !darkMode);
    };

    useEffect(() => {
        const fetchData = async () => {
            setSearchResults([]);

            if (searchInput && searchInput.length) {
                setLoader(true);

                const data = await fetchSearchResults(searchInput);

                if (data.length) {
                    setSearchResults(data);
                }
            }

            setLoader(false);
        }

        fetchData();
    }, [ searchInput ]);

    const onSearchInput = (e) => {
        setSearchInput(e);
    }

    return (
        <main className={(darkMode ? 'dark' : 'light') + ' text-foreground bg-background'}>
            <div className="relative z-10">

                <Button id="btn-theme-mode" size="md" onClick={themeMode}>
                    <FontAwesomeIcon icon={darkMode ? faLightbulb : faLightbulbOn} />
                </Button>

                <div className="page-container">

                    {/* @todo: move to component */}
                    <section id="header-search">
                        <SiteHeader />

                        <div className="w-1/2 m-auto">
                            <Input
                                id="search-input"
                                key="default"
                                type="email"
                                color="default"
                                size="lg"
                                label="Search"
                                placeholder="Start typing"
                                defaultValue=""
                                onValueChange={onSearchInput}
                                isClearable
                                onClear={() => setSearchResults([])}
                                classNames={{
                                    inputWrapper: [
                                        "border",
                                        "dark:border-gray-600/40",
                                        "backdrop-blur-md",
                                        "dark:bg-gray-600/30",
                                        "dark:hover:bg-gray-600/50",
                                        "dark:focus:bg-gray-600/50",
                                        "dark:active:bg-gray-600/50",
                                    ],
                                }}
                            />
                        </div>
                    </section>

                    {/* @todo: move to component */}
                    <section id="search-results">
                        <div className={'loader ' + (loader ? 'active' : '')}>
                            <FontAwesomeIcon icon={faCircleNotch} className="text-primary animate-spin" />
                        </div>

                        <Listbox id="search-results-list" variant="flat" aria-label="Search Results"
                            className={(searchResults.length ? 'active' : '') + ' gap-0 p-0'}
                        >
                            {
                                searchResults.map((result, index) => (
                                    <ListboxItem
                                        key={index}
                                        description={result.desc}
                                        startContent={searchResultBullet}
                                        className="search-result"
                                        color="primary"
                                        classNames={{
                                            base: "text-xl",
                                            title: "text-lg transition-colors",
                                            description: "text-sm transition-colors"
                                        }}
                                    >
                                        {result.title}
                                    </ListboxItem>
                                ))
                            }
                        </Listbox>
                    </section>
                </div>

            </div>
        </main>
    )
}

export default App
