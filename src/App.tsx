import {useState} from 'react'
import './App.css'
import SiteHeader from "./components/SiteHeader";
import ChemPage from "./components/ChemPage.tsx";
import SearchResults from "./components/SearchResults.tsx";

function App() {
    const [chem, setChem] = useState();

    return (
        <main className="text-foreground bg-background dark">
            <div className="page-container">
                <SiteHeader />
                <section className="relative min-h-[6rem]">
                    {(!!chem ? <ChemPage result={chem} setChem={setChem} /> : <SearchResults setChem={setChem} />)}
                </section>
            </div>
        </main>
    )
}

export default App
