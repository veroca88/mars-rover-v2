const rover = {
  direction: 'E',
  path: { x: 0, y: 0 },
  travelLog: []
}
const turn = ['N', 'W', 'S', 'E']

function turnLeft(rover) {
  console.log(`Rover is facing now ${rover.direction}`)

  const coordinate = turn.indexOf(rover.direction)
  rover.direction = turn[(coordinate + 1) % turn.length]

  console.log(`Rover is facing now ${rover.direction}`)
}

function turnRight(rover) {
  console.log(`Rover is facing now ${rover.direction}`)

  const coordinate = turn.indexOf(rover.direction)
  rover.direction = turn[(coordinate + 3) % turn.length]

  console.log(`Rover is facing now ${rover.direction}`)

}

function oneStep(rover) {
  if (rover.direction === 'N') {
    rover.path.y--
    console.log(`The current position of rover is x:${rover.path.x}, y:${rover.path.y}`)
  } else if (rover.direction === 'E') {
    rover.path.x++
    console.log(`The current position of rover is x:${rover.path.x}, y:${rover.path.y}`)
  } else if (rover.direction === 'S') {
    rover.path.y++
    console.log(`The current position of rover is x:${rover.path.x}, y:${rover.path.y}`)
  } else if (rover.direction === 'W') {
    rover.path.x--
    console.log(`The current position of rover is x:${rover.path.x}, y:${rover.path.y}`)
  }
}

function commandsRover(commands) {
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i]
    switch (command) {
      case 'l':
        turnLeft(rover)
        break
      case 'r':
        turnRight(rover)
        break
      case 'f':
        oneStep(rover)
        break
      default:
        console.log(`Please give rover the correct instructions l:left, r: right, f, forward`)
    }
  }
  console.log(rover.path)
}

var commands = 'flr'