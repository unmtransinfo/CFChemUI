import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { Dispatch, SetStateAction, useMemo } from "react";
import { Molecule } from "../models/Molecule.ts";

interface Props {
  searchResults: Molecule[];
  setChem: Dispatch<SetStateAction<object>>;
}

export default function SearchResultsTable(props: Props) {
  const COLUMNS = useMemo<MRT_ColumnDef<Molecule>[]>(
    () => [
      {
        accessorKey: "moa",
        header: "MOA",
      },
      {
        accessorKey: "pert_name",
        header: "Name",
      },
      {
        accessorKey: "target",
        header: "target",
      },
      {
        accessorKey: "compound_aliases",
        header: "Compound Aliases",
      },
      {
        accessorKey: "sig_count",
        header: "SIG Count",
      },
      {
        accessorKey: "lcs_id",
        header: "LCS ID",
      },
      {
        accessorKey: "mol_id",
        header: "MOL ID",
      },
    ],
    []
  );

  const { searchResults, setChem } = props;

  const table = useMaterialReactTable({
    columns: COLUMNS,
    data: searchResults,
    enableRowSelection: false,
    enableColumnOrdering: true,
    enableGlobalFilter: true,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => {
        setChem(row.original);
      },
      sx: { cursor: "pointer" },
    }),
  });

  return <MaterialReactTable table={table} />;
}
