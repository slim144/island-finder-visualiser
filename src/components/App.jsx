import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Grid from "./Grid/Grid";
import findIsland from "./algorithm/findIsland";
import Header from "./Header/BodyHeader";
import "./styles.css";

let rowSearch = 12;
let colSearch = 35;
let searchName = "Middle";

function App() {
  const elements = [false, false, false, false, true];

  const [grid, setGrid] = useState(gridInit(25, 70));
  const [isMousePressed, setMousePressed] = useState(false);
  const [countIsland, setCount] = useState(0);
  const [searchState, setSearchState] = useState("START");

  function gridInit(setRow, setCol) {
    const grid = [];
    for (let row = 0; row < setRow; row++) {
      const gridRow = [];
      for (let col = 0; col < setCol; col++) {
        const node = createNode(row, col);
        gridRow.push(node);
      }
      grid.push(gridRow);
    }
    return grid;
  }

  function createNode(row, col) {
    return {
      row: row,
      col: col,
      isSearchPoint: row === rowSearch && col === colSearch,
      isVisited: false,
      isLand: false,
      queueNumber: Infinity,
      animate: false,
    };
  }

  function updateNodePressed(grid, row, col) {
    const newGrid = [...grid];
    const nodePressed = newGrid[row][col];
    newGrid[row][col] = {
      ...nodePressed,
      isLand: !nodePressed.isLand,
    };
    return newGrid;
  }

  function setNewGrid(row, col) {
    switch (searchName) {
      case "Middle":
        rowSearch = Math.floor(row / 2);
        colSearch = Math.floor(col / 2);
        break;
      case "Top Left":
        rowSearch = 0;
        colSearch = 0;
        break;
      case "Top Right":
        rowSearch = 0;
        colSearch = col - 1;
        break;
      case "Bottom Left":
        rowSearch = row - 1;
        colSearch = 0;
        break;
      case "Bottom Right":
        rowSearch = row - 1;
        colSearch = col - 1;
        break;
      default:
        console.log("An error has occured");
    }
    setGrid(gridInit(row, col));
  }

  function setNewSearchPoint(row, col, name) {
    rowSearch = row;
    colSearch = col;
    searchName = name;
    setGrid((prevGrid) =>
      prevGrid.map((gridRow) =>
        gridRow.map((node) => {
          return {
            ...node,
            isSearchPoint: node.row === row && node.col === col,
          };
        })
      )
    );
  }

  function handleMouseDown(row, col) {
    setGrid((prevGrid) => updateNodePressed(prevGrid, row, col));
    setMousePressed(true);
  }

  function handleMouseEnter(row, col) {
    if (!isMousePressed) return;
    setGrid((prevGrid) => updateNodePressed(prevGrid, row, col));
  }

  function handleMouseUp(row, col) {
    setMousePressed(false);
  }

  function visualiseIslandFinder() {
    const { sea, islands } = findIsland(grid, rowSearch, colSearch);
    animateIslandFinder(sea, islands);
  }

  function animateIslandFinder(sea, islands) {
    setSearchState("SEARCHING");
    sea.map((node, nodeIndex) => {
      const updatedGrid = [...grid];

      return setTimeout(() => {
        updatedGrid[node.row][node.col] = {
          ...node,
          searchPoint: false,
          isLand: false,
          animate: true,
        };
        setGrid(updatedGrid);
      }, 5 * nodeIndex);
    });
    setTimeout(() => animateIslandFound(islands), 5 * sea.length + 2000);
  }

  function animateIslandFound(islands) {
    islands.map((island, islandIndex) => {
      const updatedGrid = [...grid];

      return setTimeout(() => {
        setCount(islandIndex + 1);
        island.map((node) => {
          return (updatedGrid[node.row][node.col] = {
            ...node,
            isSearchPoint: false,
            animate: true,
          });
        });
        setGrid(updatedGrid);
      }, 500 * islandIndex);
    });
    setTimeout(() => setSearchState("END"), 500 * islands.length + 500);
  }

  function handleClickNavBtn() {
    if (searchState === "END") {
      clearLand();
    } else if (searchState === "START") {
      console.log("SEARCH CLICK");
      visualiseIslandFinder();
    }
  }

  function randomGenerateLand() {
    setSearchState("START");
    setCount(0);
    setGrid((prevGrid) =>
      prevGrid.map((row) => {
        return row.map((node) => {
          return {
            ...node,
            isVisited: false,
            isLand: elements[Math.floor(Math.random() * elements.length)],
            queueNumber: Infinity,
            animate: false,
          };
        });
      })
    );
  }

  function clearLand() {
    setSearchState("START");
    setCount(0);
    setGrid((prevGrid) =>
      prevGrid.map((row) => {
        return row.map((node) => {
          return {
            ...node,
            isVisited: false,
            isLand: false,
            queueNumber: Infinity,
            animate: false,
          };
        });
      })
    );
  }

  return (
    <div className="container-fluid">
      <React.StrictMode>
        <NavBar
          onClickGridSize={setNewGrid}
          onClickSearchPoint={setNewSearchPoint}
          onClickNavBtn={handleClickNavBtn}
          onClickGenerateLand={randomGenerateLand}
          onClickClearLand={clearLand}
          row={grid.length}
          col={grid[0].length}
          searchState={searchState}
        />
        <Header
          searchState={searchState}
          countIsland={countIsland}
          row={grid.length}
          col={grid[0].length}
          searchName={searchName}
        />
        <Grid
          grid={grid}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseUp={handleMouseUp}
        />
      </React.StrictMode>
    </div>
  );
}

export default App;
