// this file contains the data we need for the gallery
// The main object, "gallery" contains an array of album
// each album contains an array of photos 
// (plus a name and a thumbnail image)
// The photos contain an image src and some metadata

var gallery = {
	albums : [
		{
			name : "Horses", 
			thumbnail : "images/horse1.jpg",
			photos : [
				{	
					src : "images/horse1.jpg",
					title : "a herb", 
					description : "who has the longest hair?"
				}, 
				{	
					src : "images/horse2.jpeg",
					title : "racer", 
					description : "who wants to join me?"
				}, 
				{	
					src : "images/horse3.jpg",
					title : " 1..2..3..Cheerrr", 
					description : "nice laugh"
				}
			
			]
		},
		{
			name : "Chickens", 
			thumbnail : "images/chicken3.jpg",
			photos : [
				{	
					src : "images/chicken1.jpg",
					title : "real black", 
					description : "is that real or a statue?"
				}, 
				{	
					src : "images/chicken2.jpg",
					title : "a female one", 
					description : "look pretty"
				}, 
				{	
					src : "images/chicken3.jpg",
					title : " a male one", 
					description : "I m ready for the hunt"
				}  
			]
		},
		{
			name : "Pigs", 
			thumbnail : "images/pig1.jpg",
			photos : [
				{	
					src : "images/pig1.jpg",
					title : "a cute babay pig", 
					description : "looks like he is hungry"
				}, 
				{	
					src : "images/pig2.jpg",
					title : "red boots", 
					description : "it is ranining, stay dry!!"
				}, 
				{	
					src : "images/pig3.jpg",
					title : "couples", 
					description : "someone is taking our picture"
				} 
			]
		}

	]
};