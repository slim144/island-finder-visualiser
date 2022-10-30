import React from "react";
import NodeRow from "./NodeRow";

function Grid(props) {
  return (
    <div className="body-content body-grid">
      <table id="grid">
        <tbody>
          {props.grid.map((row, rowIndex) => {
            return (
              <NodeRow
                key={rowIndex}
                id={rowIndex}
                nodeRow={row}
                onMouseDown={props.onMouseDown}
                onMouseEnter={props.onMouseEnter}
                onMouseUp={props.onMouseUp}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
