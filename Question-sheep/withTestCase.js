function warnTheSheep(queue) {
  // your code here
  let message = "";

  const findWolf = queue.reverse().indexOf("wolf");
  if (findWolf === 0) {
    message = "Pls go away and stop eating my sheep";
  } else {
    message = `Oi! Sheep number ${findWolf}! You are about to be eaten by a wolf!`;
  }

  return message;
}

// Test Function do not edit
function Test(fun, result) {
  console.log(fun === result);
}

// Test assertions
Test(
  warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]),
  "Oi! Sheep number 1! You are about to be eaten by a wolf!"
);
Test(
  warnTheSheep(["sheep", "sheep", "wolf"]),
  "Pls go away and stop eating my sheep"
);
Test(
  warnTheSheep(["sheep", "wolf", "sheep"]),
  "Oi! Sheep number 1! You are about to be eaten by a wolf!"
);
Test(
  warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]),
  "Oi! Sheep number 6! You are about to be eaten by a wolf!"
);
