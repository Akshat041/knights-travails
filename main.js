const board = [];

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    board.push([i, j]);
  }
}

// console.table(board);

function knightMoves(src, dest) {
  if (src[0] > 7 || src[1] > 7 || dest[0] > 7 || dest[1] > 7) {
    console.log("Invalid index!");
  }

  const queue = [src];

  queue.push(
    [src[0] + 2, src[1] - 1],
    [src[0] + 2, src[1] + 1],
    [src[0] - 1, src[1] + 2],
    [src[0] + 1, src[1] + 2],
    [src[0] - 2, src[1] - 1],
    [src[0] - 2, src[1] + 1],
    [src[0] - 1, src[1] - 2],
    [src[0] + 1, src[1] - 2],
  );
  console.log(queue);

  //   console.log(queue[5][0] === dest[0] && queue[5][1] === dest[1]);

  for (let i = 0; i < queue.length; i++) {
    if (queue[i][0] === dest[0] && queue[i][1] === dest[1]) {
      console.log(
        `Destination found, Here's your path: [${src}] -> [${queue[i]}]`,
      );
    }
  }
}

knightMoves([3, 3], [1, 2]);
