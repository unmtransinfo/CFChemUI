import {Dispatch, SetStateAction} from "react";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MoleculeStructure from "./MoleculeStructure.tsx";


export default function ChemPage(props: { result: Molecule, setChem: Dispatch<SetStateAction<any>> }) {
    return (
        <div id="chem-page" className="relative z-10">
            <button onClick={() => {
                props.setChem(undefined)
            }} className="btn-back">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
                <span>Back</span>
            </button>
            <div className="glass-container active p-3">
                <header className="mb-4">
                    <h1 className="text-3xl font-bold mb-2">{props.result.pert_name}</h1>
                    <span
                        className="text-secondary-100 bg-secondary rounded-full text-sm px-2 py-1">{props.result.moa}</span>
                </header>
                <section className="py-2">
                    <span className="text-xl">{props.result.smiles}</span>
                </section>
                <section>
                    <MoleculeStructure
                        id="smile-svg"
                        structure={props.result.smiles}
                        width={350}
                        height={300}
                        svgMode
                    />
                </section>
            </div>
            <div className="glass-container active p-3 mt-4">
                <section>
                    <h3>Molecule Details</h3>
                    <table className="chem-details-table">
                        <tbody>
                        <tr>
                            <th className="font-bold">MOA:</th>
                            <td>{props.result.moa}</td>
                        </tr>
                        <tr>
                            <th className="font-bold">Target:</th>
                            <td>{props.result.target}</td>
                        </tr>
                        <tr>
                            <th className="font-bold">Compound Aliases:</th>
                            <td>{props.result.compound_aliases}</td>
                        </tr>
                        <tr>
                            <th className="font-bold">SIG Count:</th>
                            <td>{props.result.sig_count}</td>
                        </tr>
                        <tr>
                            <th className="font-bold">LCS ID:</th>
                            <td>{props.result.lcs_id}</td>
                        </tr>
                        <tr>
                            <th className="font-bold">MOL ID:</th>
                            <td>{props.result.mol_id}</td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    )
}
