# NIKHÖK Korsó- és Gyűrűavató<br />Registration Site Plan

## Database

Try to experience with PostgreSQL

### Current Structure of Database

Currently there is two different database for each type of registration (korso or gyuru) with the following tables:

#### Registered Students

| Field name | Type         | Comment                            |
| ---------- | ------------ | ---------------------------------- |
| id         | INT(10)      | Primary Key, Auto Increment        |
| name       | TEXT         |                                    |
| email      | TEXT         | Unique                             |
| neptun     | VARCHAR(6)   | Unique                             |
| tipus      | VARCHAR(50)  | Currently not necessary            |
| megjegyzes | TEXT         |                                    |
| reg_time   | TIMESTAMP    |                                    |
| verif      | VARCHAR(200) | Unique hash needed for confimation |
| active     | INT(10)      | Register is confirmed or not       |

#### Voucher (eligible Neptun codes)

| Field name | Type        | Comment                                                     |
| ---------- | ----------- | ----------------------------------------------------------- |
| neptun_k   | VARCHAR(6)  | Primary Key                                                 |
| tipus      | VARCHAR(50) | Currently not necessary                                     |
| db         | INT(10)     | Remaining number of possible registrations (usually 1 or 0) |

#### Registration Options

| Field name | Type      | Comment                                                                  |
| ---------- | --------- | ------------------------------------------------------------------------ |
| id         | INT(10)   | Primary Key, Auto Increment                                              |
| letszam    | INT(10)   | Maximum number of participants                                           |
| kezdes     | TIMESTAMP | When the registration opens                                              |
| vege       | TIMESTAMP | When the registration closes (if there is less participant then maximum) |

## Backend

### Language

Will be developed in C#

### Uncertainties

- Authenticate API calls
    - maybe use BFF to hide Backend API from the public?
- user management for admin pages?
    - try experimenting with syncing university email accounts

## Backend For Frontend (BFF)

Do we need this? If yes, what language do we want to write in it?

## Frontend

### Language

Will be developed in React with TypeScript

### CSS Framework

Not decided yet. Depend on UX Design

Worth to notice: *React Bootstrap library*

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

### Admin Pages

Necessary operations:
- Registration options:
    - Change maximum number of participants
    - Change when the registration opens
    - Change when the registration closes
- Participants options:
    - List registrations (either korso and gyuru, or all of them)
    - Select columns user want to display
    - Download the list of registrations
    - Search in the list
    - Mark registration as cancelled (or just delete them) **with confirmatory modal**
- Email options:
    - Edit email for one participant
    - Resend verification email
        - for one participant
        - for all the unverified participant
        - these options should be able to access from the list of participants page
- Neptun code options:
    - Add one Neptun code to the Voucher table (with the chosen type)
    - Reset vouchers from file (bulk update)
 
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

Deployment is a blackbox for me. Definitely need to do deep research in this topic. Consider the using of the kubernetes, docker, kafka, terraform etc.

Must follow best practices and principals. We need to treat this poject as it's in business environment.

The point of this project is to learn the ways of deployment and other part of a development lifecycle.

## Servers

In the past we got the offer to move our Wordpress web pages to University servers. We would like to explore this opportunity which will enable us to do more unique things with our platforms as our current hosting solution creates thight barriers for us.
