import { faArrowLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Tooltip } from "@heroui/react";
import { Dispatch, SetStateAction } from "react";
import { CSVLink } from "react-csv";
import { Molecule } from "../models/Molecule.ts";
import MoleculeStructure from "./MoleculeStructure.tsx";

export default function ChemPage(props: {
  result: Molecule;
  setChem: Dispatch<SetStateAction<any>>;
}) {
  const CSV_DATA = [
    ["MOA", "Target", "Compound Aliases", "SIG Count", "LCS ID", "MOL ID"],
    [
      props.result.moa,
      props.result.target,
      props.result.compound_aliases,
      props.result.sig_count,
      props.result.lcs_id,
      props.result.mol_id,
    ],
  ];

  const DownloadLink = () => (
    <div className="csv-download-link-wrapper">
      <CSVLink data={CSV_DATA} target="_blank" filename="molecule-details.csv">
        <FontAwesomeIcon icon={faDownload} className="mr-2" />
        Export
      </CSVLink>
    </div>
  );

  const DetailsHeading = ({ label, source }) => (
    <th className="font-bold text-nowrap">
      <Tooltip content={`Data source: ${source}`} color="foreground">
        <Link color="secondary" className="cursor-pointer">{`${label}:`}</Link>
      </Tooltip>
    </th>
  );

  return (
    <div id="chem-page" className="relative z-10">
      <button
        onClick={() => {
          props.setChem(undefined);
        }}
        className="btn-back"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        <span>Back</span>
      </button>
      <div className="glass-container active p-3">
        <header className="mb-4">
          <h1 className="text-3xl font-bold mb-2">{props.result.pert_name}</h1>
          <span className="text-secondary-100 bg-secondary rounded-full text-sm px-2 py-1">
            {props.result.moa}
          </span>
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
            svgMode={true}
          />
        </section>
      </div>
      <div className="glass-container active p-3 mt-4">
        <section>
          <div className="flex flex-row justify-between items-center">
            <h3>Molecule Details</h3>
            <DownloadLink />
          </div>
          <table className="chem-details-table">
            <tbody>
              <tr>
                <DetailsHeading label="MOA" source="IDG" />
                <td>{props.result.moa}</td>
              </tr>
              <tr>
                <DetailsHeading label="Target" source="LINCS" />
                <td>{props.result.target}</td>
              </tr>
              <tr>
                <DetailsHeading label="Compound&nbsp;Aliases" source="LINCS" />
                <td>{props.result.compound_aliases}</td>
              </tr>
              <tr>
                <DetailsHeading label="SIG Count" source="LINCS" />
                <td>{props.result.sig_count}</td>
              </tr>
              <tr>
                <DetailsHeading label="LCS ID" source="LINCS" />
                <td>{props.result.lcs_id}</td>
              </tr>
              <tr>
                <DetailsHeading label="MOL ID" source="IDG" />
                <td>{props.result.mol_id}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
