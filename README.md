# Object-oriented-Programming-Challenge-Team-Profile-Generator

## Description
Focus of this application was to build node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Requirements of this application includes creating constructors and classes to create employee objects. Total of four classes were created under Employee, Manager, Engineer and Intern. In addition to the classes, four tests that correspondences to each class were tested using jest. Lastly, node.js library Inquirer was used.

  ## Table of Contents
  - [User Story](#user)
  - [Acceptance Criteria](#acceptance)
  - [Screenshot](#screenshot)
  - [Walkthrough Video](#walkthrough)
  - [Credits](#credits)



## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles


## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated


## Screenshot
![MyTeam](https://user-images.githubusercontent.com/109834827/194978715-03551d2a-0ff6-455e-b03b-47feac1ea7be.PNG)


## Walkthrough video demonstration
https://www.youtube.com/watch?v=d7OyK9wVo5U

## Credits
- Trilogy Education Services, LLC: https://www.trilogyed.com/
- Bootstrap: https://getbootstrap.com/
- NodeJS: https://nodejs.org/en/
- Jest: https://www.npmjs.com/package/jest
- Inquirer: https://www.npmjs.com/package/inquirer
