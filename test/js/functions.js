callWs = function(){
	// The Endpoint URL
	let url = 'https://httpbin.org/get';
	fetch(url)
	.then(function(response) {
		// Render the Response Status
		document.getElementById('result').innerHTML = response.status;
		// Parse the body as JSON
		return response.json();
	})
	.then(function(json) {
		// Render the parsed body
		document.getElementById('result_json').innerHTML = JSON.stringify(json);
	})
}
