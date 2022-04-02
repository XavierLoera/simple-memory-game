# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Xavier Alonso Loera**

Time spent: **7** hours spent in total

Link to project: (https://glitch.com/~codepath-light-sound-memory-game)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Made timer start after the sequence to give the player most time possible to finish the pattern.
- [x] Removed the ability to press any buttons while the sequence is playing to prevent misclicks and bugs that happen while clicking midsequence.
- [x] Added level and lives html elements to give the player more knowledge on how many lives they have and to show their progress.
- [x] Added lose, win, and incorrect audio.
- [x] Added more shapes, rather than just squares.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![x](https://media.giphy.com/media/yQGAtdftZcD5AHgOle/giphy.gif)
![x]https://media.giphy.com/media/51sw0EjipCaj6rShsU/giphy.gif)
![x](https://media.giphy.com/media/sbNCnD1KwtziT67aKv/giphy.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

https://www.w3schools.com/colors/colors_names.asp
https://www.w3schools.com/jsref/met_win_clearinterval.asp
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
https://www.w3schools.com/js/js_htmldom.asp
https://www.youtube.com/watch?v=kOcFZV3c75I
https://css-tricks.com/the-shapes-of-css/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I definitely had alot of challenges when creating this submission such as creating a timer, adding custom audio and images, and some difficulty with the logic I implimented in the program. what helped me a lot was debugging and using console.log to figure out what was happening and when it was happening. For example I wanted to start the timer after the clue sequence was finished, so I decided to put a startTimer() function after the sequence for loop but to my surprice, the timer started imediatly. I then figured out with console logging that the for loop finished imediatly but in the for loop they used a setInterval to playsingleclue (delay) miliseconds later, and I used that same trick to start the timer. I also used console to log progress and guessCounting to implement the logic needed to create the game. Lastly, I did have issue with the audio and images, while I knew how to switch out the audio and background color with something new, The instructitions specified that, 'each image is hidden except when the user is pressing the appropriate button.' so I had to figure out how to only change the background of the button only when the user clicks the button. To solve this I looked at the javascript and use the same code that was used to remove the .hidden class the start and stop buttons. Then I created a new fucntion that removes the class thats hides the background image from the buttons.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I would like to know how to comment your code efficiently and correctly. I know that with web development you are creating code that other people will need to read and understand and I guess I would like to know what is necessary and what is not necessary in the comments of your code. Another question that I have is that with errors that I see in the console, how do I learn more about what is causing those errors and how to get rid of them/solve those errors. I would also like to know how do you know if your spending to much time on a certain problem. I found out that I spent a lot of time on creating the timer,even though I finished it I worry that spending to much time on a certain problem could get me in trouble in a work place. I also know that different browser have different limitations on what could be done in them. How do we prepare our code to handle all these browsers?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

There are a lot of things that I would have loved to impement into the game and also bugs that I would have liked to fix. Like for example I know that when you click the start/end button repeatedly I makes it impossible to tell what button you have to click due to the setInterval function constently being behind. I would have also like to make the game more intresting such as adding menu ui where you can selects certain levels and each having interesting and unique features that make the memory game a lot more fun to play. I also did like how bland everything looked for the css. I would have definitly added more things such as a colorful or image background, maybe also center the text or remove it all entirly whenever you start playing.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.kapwing.com/videos/6247d4c4cace9c0067208311)


## License

    Copyright Xavier Alonso Loera

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
