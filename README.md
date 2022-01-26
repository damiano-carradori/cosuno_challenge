# Cosuno Fullstack Developer challange

## How to start the project

I created a monorepo to handle both the frontend and the backend in the same repository.

To start it you need to run the following commands:
- `npm install`
- `npm run bootstrap`
- `npm start`

Since the `start` command runs both the projects you can't see the logs, but you should
wait 1 or 2 minutes before everything is up and runnig, mainly because of the react app.

Once the project is running you can reach the frontend at [`http://localhost:3000`](http://localhost:3000).
The backend is running on port `8080` instead.

## Possible improvements

As required, I wrote here a list of possible improvments for this app.

### Frontend
On the frontend side we could:
- add redux to handle the state and remove the filters logic from the page since it should be only
a render component without logic
- add the authentication, so only the allowed people will be able to access the app content, and
we could customize the experience
- add a company details page, with all the useful information and maybe a contact section to allow
customer to interact with it
- add a favorite section, so the customers could save companies they are interested in
- improve the filters, I didn't spend too much time on the abstraction of the Filter component,
it should handle different selects but the text search is hardcoded; it would be nice to go ahead and
make it render all filters based on a configuration
- save the filters on the local storage, so the customer could reload the page or navigate away but
the filters are still applied once he's back
- on the table, add the pagination, so it could be more readable, enable the sorting for specific
columns, and more important, pass a configuration that exmplain how many and what columns should be
rendered

### Backend
On the backend side we could:
- create a better structure for the project, I tried to follow the Clean Architecture pattern so it
would be nice to go ahead and give a better separation of resposability
- introduce an authentication system, to protect our system to malicious attacks
- add the pagination, now the project has a list of 10 companies, but if we need to read them from
a database with 1 million entry it should be better not to return them all, otherwise the
performace will decrese really fast, more on the frontend side
- add the needed endpoints for the feature described on the frontend side, like the favourite,
the filters configuration, etc.

There are of course more aspect that could be improved but I think that those are enough at the moment.
But depends on the time that you have at your disposal.