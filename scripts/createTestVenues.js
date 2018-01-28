#!/usr/bin/env node

const getConnection = require('../db/connection');
const async = require('async');
const VenueController = require('../controllers/venues');

getConnection((err, mongoose) => {
	const venues = [
		{
			"id": "d0858cc0-0478-11e8-808e-07b6d0fe568b",
			"slug": "institute_193",
			"name": "Institute 193",
			"address": "193 N Limestone, Lexington, KY 40507",
			"g_map_link": "https://goo.gl/maps/PXBsHGV    auTB2"},
		{ "id": "d9107b10-0479-11e8-808e-07b6d0fe568b", "slug":"the_burl","name":"The Burl", "address": "375 Thompson Rd, Lexington, KY 40508", "g_map_link":"https://goo.gl/maps/MerUrvdgk9u"},
		{ "id": "e0f0ee00-0479-11e8-808e-07b6d0fe568b", "slug":"bolivar_art","name":"Bolivar Art Gallery - UK School of Art", "address": "236 Bolivar St, Lexington, KY 40508", "g_map_link":"https    ://goo.gl/maps/cFTbFbb7TmS2"},
		{ "id": "f1c12100-0479-11e8-808e-07b6d0fe568b", "slug":"cosmic","name":"Cosmic Charlie's", "address": "723 National Ave, Lexington, KY 40502", "g_map_link":"https://goo.gl/maps/DRBPSQwjpY    u"},
		{ "id": "fca780f0-0479-11e8-808e-07b6d0fe568b", "slug":"best_friend","name":"Best Friend Bar", "address": "500 Euclid Ave, Lexington, KY 40502", "g_map_link":"https://goo.gl/maps/1A6vVwVX    E432"},
		{ "id": "0d63ddd0-047a-11e8-808e-07b6d0fe568b", "slug":"whiskey_bear","name":"Whiskey Bear", "address":"119 Marion, Suite 170, Lexington, Kentucky", "g_map_link":"https://goo.gl/maps/7qSy    qTGRyZU2"},
		{ "id": "181af060-047a-11e8-808e-07b6d0fe568b", "slug":"21c_lex","name":"21C Lexington", "address":"167 W Main St, Lexington, KY 40507","g_map_link":"https://goo.gl/maps/y53p9xLcNcU2"},
		{ "id": "22716c60-047a-11e8-808e-07b6d0fe568b", "slug":"lal", "name":"Lexington Art League", "address":"209 Castlewood Dr, Lexington, Kentucky 40505","g_map_link":"https://goo.gl/maps/Pmt    R8kAQPRM2"},
		{ "id": "29d471f0-047a-11e8-808e-07b6d0fe568b", "slug":"singletary", "name":"Singletary Center for the Arts", "address":"405 Rose St, Lexington, Kentucky 40508", "g_map_link":"https://goo    .gl/maps/uLQTd23sBsu"},
		{ "id": "30c331e0-047a-11e8-808e-07b6d0fe568b", "slug":"green_lantern", "name":"The Green Lantern Bar", "address":"497 W 3rd St, Lexington, Kentucky 40508", "g_map_link":"https://goo.gl/m    aps/7qVeS821NtR2"},
		{ "id": "446e9860-047a-11e8-808e-07b6d0fe568b", "slug":"farrish", "name":"Farish Theater", "address":"140 E Main St, Lexington, Kentucky 40507", "g_map_link":"https://goo.gl/maps/ewNPYZsX    95L2"},
		{ "id": "4a06a1f0-047a-11e8-808e-07b6d0fe568b", "slug":"brier_books", "name":"Brier Books", "address":"319 S Ashland Ave, Lexington, KY 40502", "g_map_link":"https://goo.gl/maps/ebYWdVHj2    7H2"},
		{ "id": "4f5c7260-047a-11e8-808e-07b6d0fe568b", "slug":"lyric_theater", "name":"Lyric Theatre & Cultural Arts Center", "address":"300 E Third St, Lexington, KY 40508", "g_map_link":"https    ://goo.gl/maps/onMCXLbESuq"},
		{ "id": "54348750-047a-11e8-808e-07b6d0fe568b", "slug":"morland", "name":"Morlan Gallery", "address":"300 N Broadway, Lexington, KY 40508", "g_map_link":"https://goo.gl/maps/sCZ4P8bUkNw"}
	];

	async.each(venues, (venue, _next) => {
		VenueController.create(venue, err => {
			if (err)
				return _next(err);

			console.log('created new venue "%s"', venue.id);
			_next();
		});
	}, err => {
		if (err)
			console.error(err);

		console.log('complete');
		mongoose.disconnect();
	});
});
