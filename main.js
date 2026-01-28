function knightMoves(src, dest) {
  const sqr = [0, 0];

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

function explorePossiblePositions(coordinate) {
  const possiblePositions = [];
  const correctPos = [];
  possiblePositions.push(
    [coordinate[0] + 2, coordinate[1] - 1],
    [coordinate[0] + 2, coordinate[1] + 1],
    [coordinate[0] - 1, coordinate[1] + 2],
    [coordinate[0] + 1, coordinate[1] + 2],
    [coordinate[0] - 2, coordinate[1] - 1],
    [coordinate[0] - 2, coordinate[1] + 1],
    [coordinate[0] - 1, coordinate[1] - 2],
    [coordinate[0] + 1, coordinate[1] - 2],
  );

  console.log(possiblePositions);

  checkValidCoordinate(
    possiblePositions.map((pos) => {
      if (checkValidCoordinate(pos) === 1) {
        correctPos.push(pos);
      }
    }),
  );
}

function checkValidCoordinate(co) {
  if (co[0] < 0 || co[0] > 7 || co[1] < 0 || co[1] > 7) {
    // console.log(`${co} is invalid coordinate. Continue to find others.`);
    return 0;
  } else return 1;
}

// knightMoves([3, 3], [1, 2]);
explorePossiblePositions([3, 7]);
