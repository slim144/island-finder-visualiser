import React from "react";
import LegendIcon from "./LegendIcon";
import LegendDescription from "./LegendDescription";

function LegendContent(props) {
  return (
    <div className="legend-content">
      <LegendIcon iconName={props.iconName} />
      <LegendDescription iconDescription={props.iconDescription} />
    </div>
  );
}

export default LegendContent;
