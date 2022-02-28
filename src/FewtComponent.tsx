import React, { useState } from "react";
import _ from "lodash";

export type FewtRow = {
  name: string;
  callries: number;
}

export type FewtComponentProps = {
  data: FewtRow[];
}

type SortState =
  | "Default"
  | "Name Ascending"
  | "Name Descending"
  | "Callries Ascending"
  | "Callries Descending"

export const FewtComponent: React.FC<FewtComponentProps> = ({ data }) => {
  const [sortState, setSortState] = useState<SortState>("Default");

  const renderedData = sortState === "Name Ascending"
    ? _.sortBy(data, row => row.name)
    : sortState === "Name Descending"
    ? _.orderBy(data, row => row.name, ["desc"])
    : sortState === "Callries Ascending"
    ? _.orderBy(data, row => row.callries)
    : sortState === "Callries Descending"
    ? _.orderBy(data, row => row.callries, ["desc"])
    : data;

  const handleNameSortClick = () => {
    if(sortState === "Name Ascending") {
      setSortState("Name Descending");
    } else {
      setSortState("Name Ascending");
    }
  }

  const handleCallriesSortClick = () => {
    if(sortState === "Callries Ascending") {
      setSortState("Callries Descending");
    } else {
      setSortState("Callries Ascending");
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            Fewt
            <button onClick={handleNameSortClick}>
              Sort by name
            </button>
          </th>
          <th>
            Callries
            <button onClick={handleCallriesSortClick}>
              Sort by callries
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        { renderedData.map(({ name, callries }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{callries}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}