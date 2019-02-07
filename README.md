# G-radius
## Background
Released in 1985 by Konami, Gradius was one of the first side-scrolling shoot-'em-up arcade games. The player maneuvers a spacecraft around enemies and obstacles, shooting them to obtain points. My version, G-radius, will be a circle-themed version of this game, also loosely based on a minigame within Cuphead, a run and gun indie game released in 2017. In this minigame, players control an airplane and shoot gaps in columns in order to continue along the side-scrolling path of the level.

## Functionality & MVP
In G-radius, a player will be able to:
1. Start, pause, and (possibly?) restart the game
2. Control the main circle by using W/A/S/D or the arrow keys to fly in between gaps in columns
3. Shoot indicated sections of columns in order to destroy them and create a gap

## Technologies and Libraries
For this project, I expect to utilize sprites from https://www.spriters-resource.com/ as well as vanilla JavaScript and HTML5 Canvas. Classes will include:
* `Game` to hold game logic
* `Board` to render the board
* `Player` for the player-controlled circle
* `Column` for the obstacles
* `Target` for the destructable column segments
* `Bullet` for shots fired by the player

## Playing the Game
Players will use `W/A/S/D` or the `arrow keys` to move their circle around the screen. Floor-to-ceiling columns appear on the right-hand side, each with a segment that can blown up by the player. Players shoot using `space`. Blowing up a column segment leaves a gap for the player to pass through.

## Difficulty
As time progresses, columns will spawn more rapidly and the background will move more quickly in order to increase difficulty.


## Implementation Timeline
**Day 1:** Barebones classes, entry file, webpack, learn what I will need from Canvas.

**Day 2:** Build out the game and board logic, making sure that the player-controlled circle and columns appear and move properly on the board and collision logic is in place.

**Day 3:** Implement bullet shooting as well as the targets on columns, including their destruction. Clean up any sprite work necessary.

## Future Features
* Add additional obstacles
* Make targets on columns rotate and also display a 'getting hit' animation
* Allow players to turn into a bomb to 1-shot targets
