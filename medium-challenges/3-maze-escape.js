// Given a two-dimensional array of maze and an array of directions. Your task is to follow the given directions.

// If you can reach the endpoint before all your moves have gone, return "Finish".
// If you hit any walls or go outside the maze border, return "Dead".
// If you find yourself still in the maze after using all the moves, return "Lost".
// The maze array will look like this:

// maze = [
//   [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
//   [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
//   [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
//   [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
//   [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//   [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
//   [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
//   [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
//   [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]
// ]

//  0 = Safe place to walk
//  1 = Wall
//  2 = Start Point
//  3 = Finish Point
//  N = North, E = East, W = West and S = South
// See the below examples for a better understanding:

// Examples
// exitMaze(maze, ["N", "E", "E"]) ➞ "Dead"
//  Hitting the wall should return "Dead".

// exitMaze(maze, ["N", "N", "N", "E"]) ➞ "Lost"
// Couldn't reach the finish point.

// exitMaze(maze, ["N", "W", "W", "W", "N", "N", "N", "N", "W", "W", "S", "S", "S", "S", "W", "W", "N", "N", "N", "N", "N", "N", "N"]) ➞ "Finish"
// Notes
// N/A