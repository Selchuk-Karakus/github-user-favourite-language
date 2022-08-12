## Github User Favourite Language

An application used to get a github user's top programming language based on how frequent the language has been used in each repo by the user, and display that as the favourite language in the app, built with React, JavaScript, HTML, CSS and GitHub REST API.

## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

## Installation:

npm install

## To Start Server:

npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## To Visit App:

localhost:3000/

## Reflection

This was a 4 day project built during my final project extension week at CodeYourFuture. Project goals included using technologies learned up until this point and familiarizing myself with gitHub REST API documentation.

I wanted to build an application that allowed users to pull data from the github REST API based on what they typed in the search bar (github user account name), such as 'selchuk-karakus'. I started this process by using the create-react-app, then deleted all the unnecessary boiler plate before starting to code.

One of the main challenges I ran into was X-RateLimit-Limit. Due to it's constraints to the number of calls you can make to the github REST API I had to be careful with how many calls I made within a certain time frame to be able to test the app.

At the end of the day, the technologies implemented in this project are React, and significant amount of VanillaJS ES6, JSX, HTML and CSS. I chose to use the create-react-app to minimize initial setup and invest more time in diving into coming up with a program that outputs the end goal which is to display the most occurring language for the given github user account.
