# Trivia

This is an application that allow users to play trivia and display a score at the end of each game. The application consists of a spring RESTful API and a React Typescript frontend. 

## Table of Contents

- [Snippets](#snippets)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
    - [MVP](#mvp)
    - [Bonus](#bonus)
- [Features](#features)
- [Known Issues](#known-issues)
- [Future Goals](#future-goals)

## Snippets
 
![home page](./trivia-frontend/src/assets/home.png)


## Tech Stack

- React
- Typescript
- SCSS
- Fetch
- Java
- Spring boot

## Requirements


### MVP
-   Create an interface that will allow a user to choose level of difficulty and start a new game
-   When game starts, the user should see a question card with 4 possible answers
-   If they answer the question correct, a new question should appear on the screen
-   If their answer is incorrect, the game is over
-   Display the score (number of question answered correctly) at the end of each game
-   Add a "Play Again" button under the score
-   When the user completes a quiz it gets submitted to the API that keeps track of all game details:
    -   score
    -   date played
    -   questions answered
    -   submitted answer for each question
    -   correct answer for each question
    -   if a question was failed or not
-   One of the API endpoints should allow filtering questions by failed
-   On the frontend, the user should be able to view questions that they answered wrong
-   They should be able to attempt those questions again
-   If they answer the question correct, it should get archived in the database

### Bonus

-   Allow the user to select a category of questions
-   Add a time countdown to each question, when a question is not answered before the time is up, game ends

## Features

- This trivia game application has two options: play a new game or re-play a failed game
![home page](./trivia-frontend/src/assets/home.png)
- When click the "Start new game" button, a new game setting option will be shown and the user can choose the category of game from the select category options. And there are also three options of difficulty - easy, medium and hard for users to choose 
![new game](./trivia-frontend/src/assets/new.png)
- After click the start game, a new game will start and being saved in the database, each game contains 10 questions, which are all multiple choices, the user can choose an answer from the four options and if the answer is correct, the option box will turn green and a message of "Your answer is correct" will appear under the question. And after one second, it will automatically show the next question
![correct answer](./trivia-frontend/src/assets/correctanswer.png)  
- If the answer the user choose is incorrect, the wrong answer box is in red color and the game is over, there is a game over message under the question with two buttons: retry and quit. If clicking retry, a new game will start with another 10 questions, and if click quit, it will return to the home page
![incorrect answer](./trivia-frontend/src/assets/incorrect.png)  
- There is a timer on the top left corner counting down from 10, if the user still not choose an answer when it count down to 0, the game is over automatically. And there is a score on the top right corner, it will add one when answer one question correctly
![timer and score](./trivia-frontend/src/assets/timerandscore.png)  
- When choose "replay faild questions" from the home page, a game will start with all the questions the user has answered incorrectly. Same as playing a new game, the questions will show one by one if answer correctly and the game will be over if answered incorrectly. When a question is answered correctly, it won't be contained in the game next time

## Known Issues  
 - The timer is not showing the correct number when the user gives a incorrect answer. For example, if the user choose the wrong answer when there are 5 seconds left, the timer should stop at 5, but currently it jumps back to 10. Plus there is always a delay of showing back to 10 when move to the next question
 - The speed of the deployed app is a bit slow due to location of the server (in US) and the free version of database

## Future Goals

- Fix the timer
- Maybe will try to deploy it on AWS to optimise the speed

