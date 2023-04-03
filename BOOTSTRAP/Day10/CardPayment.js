const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '27bb800d7bmsh6eabc6d52947e70p164dbdjsn15b5def6ae97',
		'X-RapidAPI-Host': 'trains.p.rapidapi.com'
	},
	body: '{"search":"Rajdhani"}'
};

fetch('https://trains.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));