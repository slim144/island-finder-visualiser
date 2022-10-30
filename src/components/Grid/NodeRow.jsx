import React from "react";
import Node from "./Node";

function NodeRow(props) {
  const row = props.nodeRow;

  return (
    <tr>
      {row.map((node, nodeIndex) => {
        return (
          <Node
            key={nodeIndex + props.id * row.length}
            id={nodeIndex + props.id * row.length}
            node={node}
            onMouseDown={props.onMouseDown}
            onMouseEnter={props.onMouseEnter}
            onMouseUp={props.onMouseUp}
          />
        );
      })}
    </tr>
  );
}

export default NodeRow;
