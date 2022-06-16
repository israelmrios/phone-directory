# Book-Search-Engine
![GitHub](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)

## Description
This application is a fully functioning MERN Stack application. It uses Redux Tool Kit and Axios to make HTTP requests. The application can be found in [Heroku](https://dbphonedirectory.herokuapp.com/) but can also be cloned and run locally, see [Installation](#installation) and [Usage](#usage) for more details. This application was created to implement a company directory and to give the Admin the capability to manage the directory. It has the ability to filter the directory by department and to search the entire directory for specific employees.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Future Developments](#FutureDevelopments)
- [Questions](#questions)
- [License](##license)

## Installation

How to install this application and get started:

* Clone the repo to your local machine
* Open the integrated terminal
* Enter `npm install` which will install all dependencies
* Rename the `.envexample` to `.env` and add your `MONGO_URI`
* Enter `npm run develop` which will use the concurrently package and run the server and client host at the same time

## Usage
You can find the deployed application by clicking on this link https://dbphonedirectory.herokuapp.com/.

### Step 1
> **Note**: Not all available options and steps will be demonstrated here
* After starting the application locally or if you visit the Heroku App you will see the landing page
* Your initial view will be of all the available departments in the directory

![Screenshot of landing page.](./assets/

### Step 2
* You can view employees based on their department by clicking each individual department
* You can always get back the landing page by clicking on `Dunder Mifflin Phone Directory`

### Step 3
* For Admin access and in order to make CRUD requests
* Click on `Admin` there's no registration page so use Credentials Posted on Admin Login Page
* Click `Submit`

![Screenshot of login and sign up page.](./assets/)

### Step 4
* After login in you will be redirected to the Admin Page where you can Add New Departments or New Employees
* If you go back to the Landing Page you will see an `X` button on the corner of each Department or Employee
* If clicked it will remove that Department or Employee from the database
* To return to the Admin Page you can click on the `+` button now displaying

![Screenshot of searching and saving a book.](./assets/)
![Screenshot of saved books page.](./assets/)
> **Note**: Not all applications options are demonstrated or depicted here

## Future Developments
Some future developments include:
* Update UI to include Update capability
* Fully functioning Search capability with ability to open Singe Employee Page

## Questions
To find more information and the repository on this project please visit my [GitHub](https://github.com/israelmrios).

For any additional questions please email me [here](mailto:israelm.riosjr@gmail.com).

## License
Copyright (c) 2022 Israel M Rios.
Licensed under the [MIT License](LICENSE).
