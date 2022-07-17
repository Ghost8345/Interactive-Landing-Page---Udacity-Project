# Landing Page

This project aims to introduce you to manipulating the DOM by appending sections dynamically and introducing various interactive functionality.

## Table of Contents

- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
	- [Instructions](#instructions)
- [Development](#development)
- [Features](#features)
- [Running the App](#running-the-app)

## Gettiing Started

The starter project can be downloaded from [here](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page).

### Tools Required

No additional tools are required apart from a text-editor of your choice. 

### Installation

No additional installation is required for this project

### Instructions

* The starter code has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.  

* To get started, open `js/app.js` and start building out the app's functionality  

* For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Development

* First we have to build the navbar dynamically according to the sections of the page. We could use the following functions:
    > `for of or forEach loop` </br>
      `document.getElementById` or  `document.querySelector` </br>
      `document.createElement` </br>
      `.setAttribute` </br>
      `.appendChild` </br>

* Next step would be to check which section is currently being viewed and distinguish it using css. We can check if element is in viewport or not using `getBoundingClientRect()`.  

* Last part is to add the functionality to scroll to sections. We can use `scrollIntoView()`

## Features

* Active State change for sections and nav links as user scrolls the viewport
* Smooth scrolling using `scrollIntoView()` when a nav link is clicked 

## Running the App

* Open `index.html` in the browser of your choice.

