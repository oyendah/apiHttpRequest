var request = require('request');
var fs = require('fs');
var agent = require('superagent');
var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


console.log('------ Please Enter your username -------'); //username is oyendah

rl.question('username: ', (answer) => {
	agent
	.post('http://api.geonames.org/findNearbyJSON')
	.query({username: `${answer}`})
	.query({lat: 47.3})
	.query({lng: 9})
	.query({formatted: true})
	.query({style: 'full'})
	.end(function(err, res){
		if (err || !res.ok) {
			console.log('Oh no! error');
		} else {
			
			console.log('yay got ' + JSON.stringify(res.body, null, 4));
		}
	});

	rl.close();
});

/*console.log('Enter User for github account verification');
r1.question('username: ', (answer) => {
	agent
	.get('https://api.github.com/users/' + `${answer}`+'')
	.end(function(err, res){
		if (err || !res.ok) {
			console.log('Oh no! error');
		} else {
			console.log('yay got ' + JSON.stringify(res.body));
		}
	});

	r1.close();
});*/