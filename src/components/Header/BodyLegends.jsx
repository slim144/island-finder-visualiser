import React from "react";
import LegendContent from "./LegendContent";

function Legends() {
  return (
    <div className="legends">
      <LegendContent iconName="water" iconDescription="Unvisited Water" />
      <LegendContent iconName="land" iconDescription="Unvisted Land" />
      <LegendContent iconName="search-point" iconDescription="Search Point" />
      <LegendContent iconName="sea-found" iconDescription="Sea Found" />
      <LegendContent iconName="island-found" iconDescription="Island Found" />
    </div>
  );
}

export default Legends;
