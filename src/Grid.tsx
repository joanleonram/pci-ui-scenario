import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo, useRef } from "react";

import { formatDateTo } from "./commons/utils/formatDateTo";
import { compareNumbers } from "./commons/utils/compareNumbers";
import { compareDates } from "./commons/utils/compareDates";
import {
  getDateValue,
  getHMagValue,
  getIDegValue,
  getMoidAuValue,
  getPeriodYrValue,
  getPhaValue,
  getQAu1Value,
  getQAu2Value,
} from "./commons/utils/valueGetters";

const columnDefs: ColDef[] = [
  {
    field: "designation",
    headerName: "Designation",
  },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    valueFormatter: (params) => formatDateTo(params),
    filter: "agDateColumnFilter",
    comparator: compareDates,
    filterValueGetter: getDateValue,
  },
  {
    field: "h_mag",
    headerName: "H (mag)",
    comparator: compareNumbers,
    filter: "agNumberColumnFilter",
    valueGetter: getHMagValue,
  },
  {
    field: "moid_au",
    headerName: "MOID (au)",
    comparator: compareNumbers,
    filter: "agNumberColumnFilter",
    valueGetter: getMoidAuValue,
  },
  {
    field: "q_au_1",
    headerName: "q (au)",
    comparator: compareNumbers,
    filter: "agNumberColumnFilter",
    valueGetter: getQAu1Value,
  },
  {
    field: "q_au_2",
    headerName: "Q (au)",
    comparator: compareNumbers,
    filter: "agNumberColumnFilter",
    valueGetter: getQAu2Value,
  },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    comparator: compareNumbers,
    filter: "agNumberColumnFilter",
    valueGetter: getPeriodYrValue,
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    comparator: compareNumbers,
    filter: "agNumberColumnFilter",
    valueGetter: getIDegValue,
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    valueGetter: getPhaValue,
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
  },
];

const NeoGrid = (): JSX.Element => {
  const gridRef = useRef<AgGridReact>(null);
  
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      sortable: true,
      filter: "agTextColumnFilter",
      menuTabs: ["filterMenuTab"],
    };
  }, []);

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
        <AgGridReact
          ref={gridRef}
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowGroupPanelShow={"always"}
          rowSelection={"multiple"}
        />
      </div>
    </>
  );
};

export default NeoGrid;
