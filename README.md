# Greek Gods Card Generator
The Greek Gods Card Generator is a **single page app (SPA)** that allows a user to view cards of Greek gods, star favorite gods, and create new Greek Gods cards by filling out a form.

## App Details
* The Greek Gods Card Generator contains six components 
```
App()
   NavBar()
   AllGods()
      Card()
    OneGod()
   NewGod()
```
* There are three client-side routes using React Router ('/', '/gods/new', 'gods/:id)
* This app contains a GET request and a POST request
    - GET fetches the data from db.json and POST adds data to to db.json
* The information on each god includes the following:

```
{
    id": 1,
    "name": "Aphrodite",
    "romanname": "Venus",
    "power": "Love, beauty, procreation",
    "symbol": "Eros (winged godling), conch-shell",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/NAMA_Aphrodite_Syracuse.jpg/440px-NAMA_Aphrodite_Syracuse.jpg",
    "liked": false
}
```

## How To Start
1. `npm install`
2. `npm run server` 
    - if rendered correctly, will be port 3001 
    - http://localhost:3001/gods
    - This will not work if json-server is not installed
3. `npm start` 
    - will open the React app in your browser

### Sources
* Db.json data inspired and referenced largely from Dane Dawson's json-server-collection. Data shortened and modified.
    - https://github.com/Dane-Dawson/json-server-collection/tree/main/greek-mythology  
* Images from Wikipedia