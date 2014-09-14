Jogging App


Requirements Spects
--------------------

Write an application that tracks jogging times of users following the acceptance criteria specified below:

When logged out: - [DONE]
  * User must be able to create an account and log in - [DONE]

When logged in, user can:
  * create time entries (Each time entry when entered has a date, distance, and time) - [DONE]
  * see times he entered (When displayed, each time entry has an average speed ???) - [DONE]
  * edit times he entered - [DONE]
  * delete times he entered - [DONE]
  * Filter by dates from-to - [DONE]
  * View a Report on average speed & distance per week - [DONE]

REST API – for all user actions - [DONE]

In any case you should be able to explain how a REST API works - [DONE]

demonstrate that by creating functional tests that use the REST Layer directly.

All actions need to be done client side using AJAX, refreshing the page is not acceptable. - [DONE]

Bonus: unit tests!

You will not be marked on graphic design, however, do try to keep it as tidy as possible. - [DONE]

NOTE: - [DONE]
Please keep in mind that this is the project that will be used to evaluate your skills. - [DONE]
The project will be evaluated as if you are delivering it to a customer. - [DONE]
We expect you to make sure that the app is fully functional and doesn’t have any obvious missing pieces. - [DONE]



How to run the app
-------------------
A few notes before the bullet list that everyone is looking for ;)
The app uses gulp as the build system, mongo for the DB, CommonJs for the JS modules ecosystem (for both server and client side - Thanks to http://browserify.org/) and Backbone for the frontend

So now, lets go to the Installation bullets:

1. Clone the project
2. Install mongodb if you dont already have it (http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
3. Start mongodb (mongod)
4. Go to the app directory
5. Install dependencies (npm install)
6. Install gulp (npm install -g gulp)
7. run the app (gulp)



