# Color Hue Game

The **Color Hue Game** is a fun and interactive browser-based game where you need to identify the odd-colored box among a grid of similar-colored boxes. The game gradually increases in difficulty as you progress and keeps track of your high score.

## Features

- **Progressive Difficulty:**
  - Starts with an easy-to-identify odd color.
  - Gradually reduces the color hue difference as your score increases.
  - The grid size increases every 5 points for added challenge.

- **Score Tracking:**
  - Displays your current score.
  - Tracks the highest score achieved in the current session.

- **Game Over:**
  - Clicking the wrong box ends the game.
  - The game can be restarted with the click of a button.

## How to Play

1. **Objective:** Spot the odd-colored box among the grid.
2. **Scoring:** Click on the odd box to earn points. The difficulty increases as your score rises.
3. **Game Over:** The game ends if you click the wrong box.
4. **Restart:** Use the "Restart Game" button to start over.

## Technical Details

- **HTML:** Used to structure the game elements.
- **CSS:** Styles the game, including animations for hover effects and dynamic grid layouts.
- **JavaScript:**
  - Handles game logic.
  - Dynamically generates the grid and colors.
  - Tracks score and high score.
  - Manages game difficulty.

## Code Overview

### HTML Structure

- A heading (`<h1>`) for the game title.
- Score and high score displays.
- A container (`#gameContainer`) where the game grid is dynamically generated.
- A restart button (`#restartButton`) to reset the game.

### CSS Styling

- The game grid adjusts dynamically based on the difficulty level.
- Hover effects on the boxes make the gameplay more interactive.

### JavaScript Logic

- **Dynamic Grid Creation:**
  - The grid size and box colors are generated dynamically based on the current score.

- **Game Difficulty:**
  - The color difference (hue variation) decreases as the score increases.

- **High Score Tracking:**
  - Updates the high score if the current score surpasses it.

- **Game Over State:**
  - Displays a "Game Over" message and clears the grid when the player selects the wrong box.

## Usage

1. Copy the provided HTML code into a `.html` file.
2. Open the file in a browser to start playing.
3. Challenge yourself to beat your high score!

Enjoy the **Color Hue Game** and test your color perception skills!

