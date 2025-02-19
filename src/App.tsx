import NeoGrid from "./Grid";
import { useRef } from "react";
import { AgGridReact } from "ag-grid-react";

const App = () => {
  const gridRef = useRef<AgGridReact>(null);

  const handleResetFiltersAndSorters = () => {
    if (gridRef.current) {
      gridRef.current.api.applyColumnState({
        defaultState: { sort: null },
      });
      gridRef.current.api.setFilterModel(null);
    } else {
      console.error("Grid reference is not available.");
    }
  };

  return (
    <>
      <div className="app__header">
        <h1 className="app__title">Near-Earth Object Overview</h1>
        <button
          className="button--clear-filters"
          onClick={handleResetFiltersAndSorters}
        >
          Clear Filters and Sorters
        </button>
      </div>

      <NeoGrid gridRef={gridRef} />
    </>
  );
};

export default App;
