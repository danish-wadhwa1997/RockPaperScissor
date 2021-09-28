import React from "react";
import { Result } from "../../configuration/Interfaces";
type AppProps = {
  result: Result;
};
const ResultSection = ({ result }: AppProps) => {
  return (
    <React.Fragment>
      <h3 className="display-3 text-center my-3">Results</h3>
      <table className="table table-hover my-3">
        <thead>
          <tr>
            <th>Player 1</th>
            <th>Tied</th>
            <th>Player 2</th>
            <th>Total Rounds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{result.player1}</td>
            <td>{result.tie}</td>
            <td>{result.player2}</td>
            <td>{result.player1 + result.tie + result.player2}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ResultSection;
