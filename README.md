# Jenkins Analogue

---
## Description

This is a course work project for the course "Architecture of Software Systems". The project is a Jenkins analogue. It is a web application that allows you to create, configure, manage microservices and run multiple microservices in parallel. It also has a web interface for viewing the status of microservices and their logs, as well as load balancing. All of that is implemented using Rust, Docker, Google Pub/Sub and Nginx.

---
## Installation

1. Clone the repository
2. Install Docker and Docker Compose
3. Run `docker-compose up --build` in the root directory of the project
4. Open `http://localhost:8080` in your browser

---
## Usage

1. Create a new microservice by clicking the "Create" button
2. Configure the microservice by specifying the name, the number of instances, the command to run, and the environment variables
3. Click the "Save" button
4. Click the "Run" button to run the microservice
5. Click the "Logs" button to view the logs of the microservice
6. Click the "Stop" button to stop the microservice
7. Click the "Delete" button to delete the microservice
8. Click the "Load Balancer" button to view the load balancer

---
## Key Features

- Github and Google authentication
- CRUD operations for microservices
- Running multiple microservices in parallel
- Viewing the status and logs of microservices
- Load balancing
- Real-time updates
- Local Google Pub/Sub interconnection
- Automated testing (unit and integration)
- AI-based testing? (if time allows)

---
## Technologies

- Rust
- Docker
- Google Pub/Sub
- Nginx
- React
- Vercel

## Flows

- Authentication flow
    - User logs in
    - User logs out
    - User signs up
    - User changes password
    - User changes email
    - User changes username
    - User deletes account

- Microservice management flow
    - User creates a microservice
    - User configures the microservice
    - User runs the microservice
    - User stops the microservice
    - User deletes the microservice

---
## Notes

### Authentication
Should be implemented via GitHub authentication. We can use the GitHub API to authenticate users and get required information about them, such as their username, email, and avatar. We can also gather the information about the user's repositories and use it to allow the user to manage their wished repository.



---
## Questions

- What should be in the form of creating a microservice?
There should be:
- Microservice name
- Number of instances
- Local Environment (development, testing, production) (should be implemented if there is enought time to do that)
- Command to run (ci/cd pipeline or just series of commands?)
- Environment variables
- Port for Docker container to know where to send requests

- What should be in the form of configuring a microservice?
In some sense, it's just a creation form, but with some options may be blocked to change, unless the microservice is stopped.

- What would look like the structure of the microservice?
It should have:
    - A config file, where we can specify all the infomration about it (such as load threshold, number of allowed instances, etc.)
    - A Dockerfile
    - A google pub/sub topic for logs

- Where to store those running microservices?
On a docker container volume, so that we can easily access and restore them.

---
## Key Tabs

A user needs to see the dashboard while just opening up the app. The dashboard should contain the following tabs:
    - Will contain a list of all microservices available with links to each of them separately;
    - Will contain a chart where we can filter out by the microservice and see the load over time;
    - We should give a user an ability to choose for what microservices does he want to see the logs, and for which status (error, warning, info, etc.).

Also, we have a separate tab for monitoring microservices:
    - Will contain a list of all microservices with their status (running, stopped, etc.);
    - Will contain a chart where we can see the load over time;
    - Will contain a buttons to run, stop, delete a microservice;
    - Will contain a button to view the logs of a microservice;
    - Will contain a button to view the configuration of a microservice.

And a separate tab for CI/CD pipelining:
    - Will contain a list of all the microservices versions available (with the ability to rollback);
    - Will contain a list of all the tests available;
    - Will contain a button to run all the tests;
    - Will contain a visually pleasing CI/CD pipeline configuration.

---
## Detailed Development Plan

1. [ ] Create a web application that allows to download and run Jenkins Analogue.
    - [ ] Create a React application.
    - [ ] Write all the necessary text to display.
    - [ ] Deploy the application to the vercel.
2. [ ] Create a web interface for creating, configuring, managing microservices.
    - [ ] Create a web interface for creating microservices.
        - [ ] Create a form for creating microservices.
            - [ ] Create a field for the name of the microservice.
            - [ ] Create a field for the number of instances of the microservice.
            - [ ] Create a dropdown for the local environment of the microservice.
                - [ ] Create a field for the development environment of the microservice.
                - [ ] Create a field for the testing environment of the microservice.
                - [ ] Create a field for the production environment of the microservice.
            - [ ] Create a field for the command to run the microservice.
            - [ ] Create a field for the environment variables of the microservice.
        - [ ] Create a button for creating microservices.
    - [ ] Create a web interface for configuring microservices.
        - [ ] Create a button for configuring microservices.
        - [ ] Create a form for configuring microservices.
    - [ ] Create a web interface for managing microservices.
        - [ ] Create a button for running microservices.
        - [ ] Create a button for stopping microservices.
        - [ ] Create a button for deleting microservices.
3. [ ] Create a button for viewing the status of microservices in real-time.
    - [ ] Create a web interface for viewing the status of microservices.
    - [ ] Display the status of microservices in real-time.
    - [ ] Display the status of microservices for a specific period of time.
4. [ ] Create a web interface for load balancing.
    - [ ] Create a button for viewing the load balancer in real-time.
    - [ ] Display the graph of the load over time.
    - [ ] (Maybe) Display a scheme of the load balancer for each microservice.
5. [ ] Implement the ability to create microservices.
6. [ ] Implement the ability to delete microservices.
7. [ ] Implement the ability to run microservices.
8. [ ] Implement the ability to stop microservices.
9. [ ] Implement the ability to configure microservices.
10. [ ] Implement the ability to view the logs of microservices.
    - [ ] Implement the ability to view the logs of microservices in real-time.
    - [ ] Implement the ability to view the logs of microservices for a specific period of time.
11. [ ] Implement load balancing.
    - [ ] Check the load of each microservice.
    - [ ] If the load of a microservice is too high, redirect the request to another available instance of the microservice.
12. [ ] Implement the ability to create and generate a tests for microservices.
    - [ ] Implement the ability to create unit tests for microservices.
    - [ ] Implement the ability to create integration tests for microservices.
13. [ ] Implement the ability to run tests for microservices.
    - [ ] Implement the ability to run unit tests for microservices.
    - [ ] Implement the ability to run integration tests for microservices.
14. [ ] Implement the ability to view the results of tests for microservices.
    - [ ] Implement the ability to view the results of unit tests for microservices.
    - [ ] Implement the ability to view the results of integration tests for microservices.

