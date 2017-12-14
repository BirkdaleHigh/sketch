# Sketches made with processing
This project provides a server to run and share works created that use the [p5.js](https://p5js.org/) library.

## Start
1. Open the command line, us `ls` to find out where you are, use `cd` to change to the right folder
1. Repeat until found the correct folder you download this project into.
1. Type `npm run start` to host the server on your computer
1. Go to [http://localhost:3000/](http://localhost:3000/) and see the work.
1. Now go open an editor to change the code in sketch-#.js files in the public folder.

## Create a new sketch
1. Stop the server with `ctrl-c` for cancel in the command line.
1. type `npm run create` to add your own `sketch-#.js` files under the `public/` folder.

### Tasks
command | description
-|-
`npm run start` | Start a web server on your own computer
`npm run create` | Create a new sketch file to start editing
`ctrl-c` | Stop a running task

# Related Topics
## Command Line
You will find having the done command line project very useful in order to understand how to start the program and understand what files and paths are and how they relate. Including how to move around the file system.
## [Website Starter](https://github.com/BirkdaleHigh/website-starter)
Our website start project can introduce you to learning more about creating things on the web.
## Python to Javascript
For those familiar with python, this [python to javascript](://birkdalehigh.club/static/py-js.pdf) document will help you get into JS from some common concepts.

# How it works
You don't need to read this to get started, but for the curious this is how the project functions

1. A server makes the contents of the `public` folder accessible by a web browser from the computer running the server.
1. When starting, this server lists the files named "sketch-#.js" in that folder to create the menu you see on the page.
1. When a page is requested by a user through a browser the server creates an HTML document from the templates in `views`.
1. Depending on the path the users browsers wants to get, the matching sketch number is added into the page. This logic is contained within `server.js`

`npm run start` starts the server by running the program "node" with the file `server.js` for you.

The language you are coding is javascript. This project introduces you to using a library called [p5.js](https://p5js.org/) which itself is written in javascript. A library is a set of functions already written for you to use. p5 gives you nice functions to use for drawing on the screen.
