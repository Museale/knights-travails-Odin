const createGameboard = () => {
  const gameboard = [];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      gameboard.push([row, col]);
    }
  }
  return gameboard;
};

const createNode = (position) => {
  const node = {
    position: position,
    x: position[0],
    y: position[1],
    next: null,
  };
  return node;
};

const knightMoves = (start, goal) => {

  const graph = {};

  const possibleMoves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  const nodeToString = (node) => {
    return [node.x, node.y];
  };

  const gameboard = createGameboard();
  //iterate through array
  gameboard.forEach((element) => {
    const node = createNode(element);
    const validMoves = [];
    //calculate valid moves for each square
    for (const [dx, dy] of possibleMoves) {
      const newX = node.x + dx;
      const newY = node.y + dy;

      if (newX >= 0 && newY >= 0 && newX < 8 && newY < 8) {
        validMoves.push([newX, newY]);
      }
    }
    //add edges to each node
    return (graph[nodeToString(node)] = validMoves);
  });

  const traverse = (start, goal) => {
    //BFS search alg
    //check if node is visited & queue !empty
    const visited = {};
    const queue = [start];
    const parent = {};

    visited[start] = true;

    while (queue.length) {
      //dequeue currvertx 
      const currentVertex = queue.shift();
      //check if goal === currvertx
      if (currentVertex[0] === goal[0] && currentVertex[1] === goal[1]) {
        //if goal is reached, construct shortest path
        const path = [currentVertex];
        let node = parent[currentVertex];
        //traverse paarent pointers to build path
        while (node) {
          path.unshift(node);
          node = parent[node];
        }
        console.log("Shortest path:", path);
        return;
      }
      //iterate through neighbouors of currvertx
      for (const neighbour of graph[currentVertex]) {
        //if !visited
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          //update parent of neighbour to currvertx
          parent[neighbour] = currentVertex;
          queue.push(neighbour);
        }
      }
    }
  };
  traverse(start, goal);
};

knightMoves([3, 3], [4, 3]);
