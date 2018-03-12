# Proposed Flow

<!-- 1. *Get Random Artwork* Client makes an API call for an artwork ID. Unique ID is returned, client can check if the artwork has been shown already. If not, make another query for artwork by ID and proceed to show to user.

2. *Event Announcement* Client makes an API call for art event by {country, state, city, neighborhood, date-range} if specific scope yelds results an array of one to n members is returned.   -->

## TODO

<!-- + alerts
 -->

# Dependencies
+ MongoDB

<!-- # Seeding Dev
Note: Most seeds are still incomplete <br />
install https://www.npmjs.com/package/node-mongo-seeds <br />
mv to project dir <br />
run *seed* -->

# API

## Dev API Key
<!-- 3b7344a8-29aa-4690-8ea7-415612d8834d <br /> -->
2019529e-7f8c-44f9-8996-f52a88b2a314

<!-- ### Get Artwork info by ID
curl -H "Content-Type: application/json" -X POST -d '{"artwork_id":"cc432195-2a2c-49e4-9a55-32d9f10dcc97"}' http://localhost:3003/artworks/one-by-id
<p> or </p>
curl -H "Content-Type: application/json" -X POST -d '{"artwork_id":"cc432195-2a2c-49e4-9a55-32d9f10dcc97"}' https://test3.infinite.industries/artworks/one-by-id
 -->

<!-- ### Get Event info by ID

### Get Random Artwork ID
### Register webhook
### Create a new event -->

### Example event create post
`curl -X POST -H "Content-Type: application/json" -d '{ "event": {"title":"foo", "slug":"xyz" }, "apikey":"48e80bde-aec4-44bb-89e9-01b4a90092cd"}' http://localhost:3003/events`

### Example Verify Event ###
`curl -X PUT http://localhost:3003/events/verify/522479a0-c1ab-11e7-910d-794911741001?apikey=2019529e-7f8c-44f9-8996-f52a88b2a314`

### Import Latest JSON FILE ###
npm run importEvents

### Create an Event List ###
```
curl -X POST -H "Content-Type: application/json" \
-d '{ "eventList": {"name":"chris list" }, "apikey":"2019529e-7f8c-44f9-8996-f52a88b2a314"}' \
http://localhost:3003/event-lists
```

### Add a List to an Existing Event ###
```
curl -X PUT -H "Content-Type: application/json" \
-d '{ "apikey":"2019529e-7f8c-44f9-8996-f52a88b2a314"}' \
http://localhost:3003/event-lists/addEvent/bc1afcd0-e37a-11e7-aa97-8d2f2418d66e/9bfb1e30-d3d5-11e7-86f9-b75399ffb386
```

* Where `bc1afcd0-e37a-11e7-aa97-8d2f2418d66e` is an existing list
* And `9bfb1e30-d3d5-11e7-86f9-b75399ffb386` is an existing event

### get event lists ###
`curl http://localhost:3003/event-lists/ | python -m json.tool`

### get users ###
`curl http://localhost:3003/users?apikey=2019529e-7f8c-44f9-8996-f52a88b2a314 | python -m json.tool`

### Add list to user ###
```
curl -X PUT -H "Content-Type: application/json" \
-d '{ "apikey":"2019529e-7f8c-44f9-8996-f52a88b2a314"}' \
http://localhost:3003/users/addList/99af7550-f3e6-11e7-8279-f30c6795f584/2b305e60-f3e5-11e7-81a0-7d63d12f2c04
```

### Update Venue ###
```
curl -X PUT -H "Content-Type: application/json" \
-d '{ "apikey":"2019529e-7f8c-44f9-8996-f52a88b2a314", "venue": { "name": "boaty mc boatface" }}' \
http://localhost:3003/venues/d0858cc0-0478-11e8-808e-07b6d0fe568b"
```

### Remove event from list
```
curl -X PUT -H "Content-Type: application/json" \
-d '{ "apikey":"2019529e-7f8c-44f9-8996-f52a88b2a314"}' \
http://localhost:3003/event-lists/removeEvent/feaea5b0-f3dd-11e7-9986-13e9e40ddffe/9bfb1e30-d3d5-11e7-86f9-b75399ffb386
```

### Delete Event ###
```
curl -X DELETE -H "Content-Type: application/json" \
http://localhost:3003/events/9bfb1e30-d3d5-11e7-86f9-b75399ffb387?apikey=2019529e-7f8c-44f9-8996-f52a88b2a314
```

### View All Verified Events ###
```
curl http://localhost:3003/events/current/verified/?apikey=2019529e-7f8c-44f9-8996-f52a88b2a314
```


### Hey, Dev to Get Test Data In MONGO ###
`npm run dropDB && npm run setupDevEnv`


### Run Postgres through Docker ####
` docker run -p5432:5432 --name infinite-postgres -e POSTGRES_PASSWORD=xxx -d postgres`

- https://hub.docker.com/_/postgres/
- Connect from host with `psql -h localhost -U postgres`

