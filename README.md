# Javascript Coding Quiz

A simple web-app that allows you to take a quiz about javascript. Once you hit start, a timer will begin counting down and you must finish the quiz before the timer runs out. If you don't, the quiz will end for you. After you answer each question, the correct answer will appear green and the incorrect answers will appear red. You get points for correct answers. After you have completed the quiz or time as run out, your score will be displayed for you to see. You can experience the deployed project here: https://jds21171.github.io/Javascript-Coding-Quiz/

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that shows me my score when I am finished
SO THAT I can see how I performed on the quiz
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a random question
WHEN I answer a question
THEN I am presented with another random question
When I answer a question correctly
Then the answer shows up with a green background
WHEN I answer a question incorrectly
THEN time is subtracted from the clock and the answer shows up with a red background
WHEN all questions are answered or the timer reaches 0
THEN the game is over and my score is displayed for me to see
WHEN the game is over
THEN I am prompted to restart the quiz