import React from "react";

import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// const Person = [
//   {
//     invoice: "1201",
//     ammount: "300",
//     categiry: "income",
//     Date: "22-02-2023",
//     admin: "Nahid",
//   },
//   {
//     invoice: "1001",
//     ammount: "300",
//     categiry: "income",
//     Date: "22-02-2023",
//     admin: "Nahid",
//   },
//   {
//     invoice: "1001",
//     ammount: "300",
//     categiry: "income",
//     Date: "22-02-2023",
//     admin: "sabbir",
//   },
//   {
//     invoice: "1001",
//     ammount: "300",
//     categiry: "income",
//     Date: "22-01-2023",
//     admin: "sabbir",
//   },
// ];
// () => [
//   {
//     Header: "ID",
//     accessor: "id", // accessor is the "key" in the data
//   },
//   {
//     Header: "Amount",
//     accessor: "ammount",
//     Cell:(prop)=>{
//       return prop.row.original.id
//     }
//   },
//   {
//     Header: "Category",
//     accessor: "categiry",
//   },
//   {
//     Header: "Date",
//     accessor: "Date",
//   },
//   {
//     Header: "Admin",
//     accessor: "admin",
//   },
// ],
const Table = ({ datas, colunm, nav = true }) => {
  const data = React.useMemo(() => datas, [datas]);
  const columns = colunm;

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    page,
    nextPage,
    previousPage,
    canNextPage,
    pageOptions,
    canPreviousPage,
    setGlobalFilter,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <div className="w-full relative">
      {nav ? (
        <div className="w-full px-3 mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              value={globalFilter || ""}
              onChange={(e) => {
                setGlobalFilter(e.target.value);
              }}
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="relative w-full overflow-hidden">
        <table className="table table-zebra" {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup, i) => (
                // Apply the header row props
                <tr key={i + 1 / 3} {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column, i) => (
                      // Apply the header cell props
                      <th
                        key={i}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        {/* Add a sort direction indicator */}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              page.map((row, i) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr key={i + 2 / 3} {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell, lo) => {
                        // Apply the cell props
                        return (
                          <td key={lo + 3 / 2} {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      {nav ? (
        <div className="w-full flex justify-center py-5 gap-2">
          <button
            className=" btn btn-sm btn-outline btn-primary"
            disabled={!canPreviousPage}
            onClick={() => gotoPage(0)}
          >
            {" "}
            <span><SubwayPrevious/></span>
            first{" "}
          </button>
          <button
            className=" btn btn-sm btn-outline btn-primary"
            disabled={!canPreviousPage}
            onClick={() => previousPage()}
          >
            <span>
              <SubwayBackward />
            </span>{" "}
            prev
          </button>
          <span className="relative mx-3">
            page : {pageIndex + 1} of {pageOptions.length} <span> </span>
            <select
            className="input input-sm input-bordered input-primary"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              <option value="10">Show 10</option>
              <option value="20">Show 20</option>
              <option value="30">Show 30</option>
              <option value="40">Show 40</option>
              <option value="50">Show 50</option>
              <option value="60">Show 60</option>
              <option value="70">Show 70</option>
              <option value="80">Show 80</option>
              <option value="90">Show 90</option>
              <option value="100">Show 100</option>
              <option value="150">Show 150</option>
              <option value="200">Show 200</option>
            </select>
          </span>
          <button
            className=" btn btn-sm btn-outline btn-primary"
            disabled={!canNextPage}
            onClick={() => nextPage()}
          >
            <span><SubwayFroward/></span> next
          </button>
          <button
            className=" btn btn-sm btn-outline btn-primary"
            disabled={!canNextPage}
            onClick={() => gotoPage(pageCount - 1)}
          >
            <span><SubwayNext/></span> last
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Table;

// icone

export function SubwayBackward(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="m257 271.5l256 128v-256l-256 128zm-256 0l256 128v-256L1 271.5z"
      ></path>
    </svg>
  );
}


export function SubwayFroward(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="m0 382.5l256-128l-256-128v256zm512-128l-256-128v256l256-128z"></path></svg>
  )
}


export function SubwayPrevious(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M274.3 262.5L512 381.4V143.6L274.3 262.5zm-237.7 0l237.7 118.9V143.6L36.6 262.5zM0 143.6v237.7h36.6V143.6H0z"></path></svg>
  )
}

export function SubwayNext(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="m0 381.4l237.7-118.9L0 143.6v237.8zm237.7-118.9v118.9l237.7-118.9l-237.7-118.9v118.9zm237.7-118.9v237.8H512V143.6h-36.6z"></path></svg>
  )
}