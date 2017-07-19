#Proposed Flow

1. *Get Random Artwork* Client makes an API call for an artwork ID. Unique ID is returned, client can check if the artwork has been shown already. If not, make another query for artwork by ID and proceed to show to user.

2. *Subscribe to Events* Client registers a webhook. Curator creates an exhibition event. Event gets blasted to ALL of the subscriber webhooks with the ID and geoscope {country, state, city, neighborhood} if specific geoscope is accepted by the client, it queries for the event by ID.   


#Dependencies
+ MongoDB

#API

##Dev API Key
3b7344a8-29aa-4690-8ea7-415612d8834d


###Get Artwork info by ID
###Get Event info by ID

###Get Random Artwork ID
###Register webhook
###Create a new event
