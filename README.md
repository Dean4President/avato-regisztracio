# NIKHÖK Korsó- és Gyűrűavató<br />Registration Site Plan

## Database

Try to experience with PostgreSQL

### Current Structure of Database

Currently there is two different database for each type of registration (kors or gyuru)

#### Registered Students

| Field name | Type         | Comment                            |
| ---------- | ------------ | ---------------------------------- |
| id         | INT(10)      | Primary Key, Auto increment        |
| name       | TEXT         |                                    |
| email      | TEXT         |                                    |
| neptun     | VARCHAR(6)   |                                    |
| tipus      | VARCHAR(50)  | No longer necessary                |
| neptun     | VARCHAR(6)   |                                    |
| megjegyzes | TEXT         |                                    |
| reg_time   | TIMESTAMP    |                                    |
| verif      | VARCHAR(200) | Unique hash needed for confimation |
| active     | INT(10)      | Register is confirmed or not       |

#### Voucher (eligible Neptun codes)

| Field name | Type        | Comment                                                     |
| ---------- | ----------- | ----------------------------------------------------------- |
| neptun_k   | VARCHAR(6)  | Primary Key                                                 |
| tipus      | VARCHAR(50) | No longer necessary                                         |
| db         | INT(10)     | Remaining number of possible registrations (usually 1 or 0) |

#### Registration Options

| Field name | Type      | Comment                                                                   |
| ---------- | --------- | ------------------------------------------------------------------------- |
| id         | INT(10)   | Primary Key, Auto Increment                                               |
| letszam    | INT(10)   | Maximum number of participants                                            |
| kezdes     | TIMESTAMP | Time when registration opens                                              |
| vege       | TIMESTAMP | Time when registration closes (if there is less participant then maximum) |

## Backend

### Language

Will be developed in C#

### Uncertainties

- Authenticate API calls
    - maybe use BFF to hide Backend API from the public?
- user management fro admin pages?
    - maybe synch it with HÖK emails

## Backend For Frontend (BFF)

Do we need this? If yes, what language we want to write in it?

## Frontend

### Language

Will be developed in React

### CSS Framwork

Not decided yet. Depend on UX Design

Worth to notice: React Bootstrap library

### UX Design

Need to come up with some new design for the project.

It includes the following pages:
- Registration pages:
    - Landing page: Choose between korso and gyuru registration (type of registration)
    - Second Page: Only Neptun code
    - Third Page: Registration form
- Alert pages:
    - Can be implemted inside another page for error messages
    - There are some scenario an own page would be more clear (i.e. Successful registration)

### Routing

Public pages can be done without their own routing, in one component and determine what we show based on type of the registration and do we have a neptun code or not.
alerts pages may be difficult to implement in this way (yet router needed here as well?)

For admin pages, routing is needed with guards to prevent unathorized access.

### Validation

Need to prevent any type of attack that can be used against frontends and apis. Should implement the current SQLInjection Prevention methods.

Neptun code must be validated once it's entered and once when the form is submitted

## Repository

- Placed inside the NIKHÖK Organization on GitHub.
- Monorepository structure
    - One repository for all  the projects.
- **Should follow best practices**

## Deployment

Deployment is a blackbox for me. Definitely need to do deep research in this topic. Consider the using of the kubernetes, docker, kafka etc.

Must follow best practices and principals, we need to treat this poject as it's in business environment.

The point of this project is to learn the ways of deployment and other part of a development lifecycle.

## Servers

In the past we got the offer to move our Wordpress web pages to University servers. We would like to explore this opportunity which will enable us to do more uniqie things with our platforms as our current hosting solution creates thight barriers for us.
