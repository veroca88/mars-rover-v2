const rover = {
  direction: 'N',
  x: 0,
  y: 0,
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

function moveForward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.y--
      break
    case 'E':
      rover.x++
      break
    case 'S':
      rover.y++
      break
    case 'W':
      rover.x--
      break
  }
  console.log(`The current position of rover is x:${rover.x}, y:${rover.y}`)
}

function moveBackward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.y++
      break
    case 'E':
      rover.x--
      break
    case 'S':
      rover.y--
      break
    case 'W':
      rover.x++
      break
  }
  console.log(`The current position of rover is x:${rover.x}, y:${rover.y}`)
}

function commands (command) {
  for (let i = 0; i < command.length; i++) {
    var commandRover = command[i]

    switch (commandRover) {
      case 'l':
        turnLeft(rover)
        rover.travelLog.push(`x:${rover.x}, y:${rover.y}`)
        break
      case 'r':
        turnRight(rover)
        rover.travelLog.push(`x:${rover.x}, y:${rover.y}`)
        break
      case 'f':
        moveForward(rover)
        rover.travelLog.push(`x:${rover.x}, y:${rover.y}`)
        break
      case 'b':
        moveBackward(rover)
        rover.travelLog.push(`x:${rover.x}, y:${rover.y}`)
    }
  }
}
