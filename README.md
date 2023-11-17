# Project Name

## [See the App!](https://poketrade.adaptable.app/)

![App Logo](/public/images/Poketrade.png)

## Description

**NOTE -** "Poketrade is an online platform dedicated to buying and selling Pokemon cards. With an intuitive interface, users can buy and sell individual cards related to the Pokémon universe.
 
## User Stories

**NOTE -**  List here all the actions a user can do in the app. Example:

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **create a cards** - As an admin you can create any number of cards as you wish.
- **delete cards** - As an admin you can delete any number of cards as you want.
- **sell cards** - As an user you can sell cards.
- **buy cards** - As an user you can buy cards.



## Backlog Functionalities

- A browser will be implemented to filter the card's content.
- A safe credit card payment.
- Making a full responsive website.

## Technologies used

- HANDLEBARS

- CSS

- JavaScript

- EXPRESS

- MONGOOSE

- NODE JS

- MONGO DB

- MONGO DB (ATLAS)

- ADAPTABLE


## (Optional) Routes

- GET / 
  - renders the homepage
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - email
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form (with flash msg)
- POST /auth/login
  - redirects to / if user logged in
  - body:
    - username
    - password


## Models

**NOTE -** List here all the models & Schemas of your Database Structure. Example: 

User model
 
```
name: String
address: String
dateOfBirth: Date
telNum: String
country: String
email: String
Password: String
Role: String

```

Card model

```
name: String
description: String
rarity: String
noSeries: String
language: String
image: String
user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }]
``` 
Offer model

```
card: Types.ObjectId
seller: Types.ObjectId
quantity: Number
price: Number
client: Types.ObjectId

``` 

## Links

## Collaborators

[Developer 1 name](https://github.com/dmonzon4)

[Developer 2 name](https://github.com/Sonx96)

### Project

[Repository Link](https://github.com/Sonx96/poketrade.git)

[Deploy Link](https://poketrade.adaptable.app/)

### Trello

[Link to your trello board](https://excalidraw.com/#room=4c72290fc754b2e4c806,UWPTAB1_yEEOoACY9G35UA)

### Slides

[Slides Link]()
