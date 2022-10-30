let islandCollection = [];
let seaNode = [];
let nodeInQueue = [];

function findIsland(grid, row, col) {
  seaNode = [];
  islandCollection = [];
  getAllNode(grid);

  grid[row][col].queueNumber = 0;

  while (!!nodeInQueue.length) {
    nodeInQueue.sort(compareQueueNumber);

    const currentNode = nodeInQueue.shift();

    if (!currentNode.isLand) seaNode.push(currentNode);
    else if (!currentNode.isVisited) {
      updateIsland(currentNode, grid);
    }

    updateUnvisitedNeighbour(currentNode, grid);
  }
  return { sea: seaNode, islands: islandCollection };
}

function updateIsland(currentNode, grid) {
  const { row, col } = currentNode;
  const island = exploreIsland(row, col, grid);

  if (island.length === 1) {
    seaNode.push(currentNode);

    return;
  }
  islandCollection.push(island);

  return;
}

function exploreIsland(row, col, grid) {
  const rowInbound = row >= 0 && row < grid.length;
  const colInbound = col >= 0 && col < grid[0].length;
  if (!rowInbound || !colInbound) return [];

  const currentNode = grid[row][col];

  if (!currentNode.isLand) return [];

  if (currentNode.isVisited) return [];

  updateUnvisitedNeighbour(currentNode, grid);
  return [
    currentNode,
    ...exploreIsland(row + 1, col, grid),
    ...exploreIsland(row - 1, col, grid),
    ...exploreIsland(row, col + 1, grid),
    ...exploreIsland(row, col - 1, grid),
  ];
}

function compareQueueNumber(a, b) {
  return a.queueNumber - b.queueNumber;
}

function getAllNode(grid) {
  for (let row of grid) {
    for (let node of row) {
      nodeInQueue.push(node);
    }
  }
}

function updateUnvisitedNeighbour(currentNode, grid) {
  currentNode.isVisited = true;
  const unvistedNeighbour = visitNeighbourNode(currentNode, grid);
  for (let neighbour of unvistedNeighbour) {
    neighbour.queueNumber = currentNode.queueNumber + 1;
  }
}

function visitNeighbourNode(currentNode, grid) {
  const neighbourNode = [];
  const { row, col } = currentNode;

  if (row < grid.length - 1) neighbourNode.push(grid[row + 1][col]);
  if (row > 0) neighbourNode.push(grid[row - 1][col]);
  if (col < grid[0].length - 1) neighbourNode.push(grid[row][col + 1]);
  if (col > 0) neighbourNode.push(grid[row][col - 1]);
  return neighbourNode.filter((neighbour) => !neighbour.isVisited);
}

export default findIsland;
