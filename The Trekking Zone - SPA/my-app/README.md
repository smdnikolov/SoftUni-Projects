# MyApp

## First thing to do
Do not forget to type npm -install in your console to install the node_modules

## Project requeirments
The task is to design and implement a web application using Angular. Use a service like Kinvey or Firebase for your back-end or create your own with Node.js and MongoDB or a framework in another language (ASP.NET, Spring, Symfony). It can be a discussion forum, blog system, e-commerce site, online gaming site, social network, or any other web application by your choice.
1.	Application Structure
The application should have:
•	public part (accessible without authentication)
•	private part (available for registered users) and
1.1 Public Part
The public part of your projects should be visible without authentication. This public part could be the application start page, the user login and user registration forms, as well as the public data of the users, e.g. the blog posts in a blog system, the public offers in a bid system, the products in an e-commerce system, etc.
1.2 Private Part (User Area)
Registered users should have personal area in the web application accessible after successful login. This area could hold for example the user's profiles management functionality, the user's offers in a bid system, the user's posts in a blog system, the user's photos in a photo sharing system, the user's contacts in a social network, etc.
2.	General Requirements
Your Web application should use the following technologies, frameworks and development techniques:
•	At least 3 different dynamic pages (pages like about, contacts, login, register do not count towards that figure). If your project doesn’t cover this condition you will not be graded.
•	Use Angular for the client-side
•	Communicate to a remote service (via REST, sockets, GraphQL, or a similar client-server technique).
•	Implement authentication
•	Use a source control system like GitHub, Bitbucket etc. Commit inside the repository for at least 3 days.
3.	Other Requirements
•	Apply error handling and data validation to avoid crashes when invalid data is entered
•	Brief documentation on the project and project architecture (as .md file)
•	Good usability. Good UI and UX. (Bootstrap, MDL, CSS Grids or another method of your choice)

## Project description and functionalites

The application simmulates a type of pseudo social network for sharing information about hiking treks. A user is able to register and view the availabe information about other users's treks. Also a user is able to create his own trek events. The app's functionality allows the user to edit or remove his own trek events or like the ones of the other users.

For the backend of the application is used Kinvey.

The application features the following functionalites:
•	Register and Login with credentials
•	View user's own profile where a list of his trek events will be displayed(if any)
•	Ability to create a trek event via form
•	The home page has a few different views depending on if user is authenticated;there are or there are not any treks
•	When exploring the trek events the user has two options to interact with the event page - if the user is creator of the event he or she is able to edit the trek via form or remove it completly from the frontend as well from the backend; if the user have not created the trek event he is able to "like" the trek updating its like counter.
•	A simple form of error handling of the REST API services.
•	Form and input fields validations
•	Protected routing i.e if a unauthorized user tries to access protected route he will be redirected to an informative page
•	Fading message boxes for successfull CRUD operations
•	Smoothness of rendering the html templates is achieved by providing a loading page which will be viewd until the data from the requestes is handled.

For any questions or suggestions contact me at smdnikolov@gmail.com

## Project realization
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
