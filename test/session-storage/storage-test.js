function store_it(id, storageArea) {
	var textBox = document.getElementById(id);
	if (!textBox.value)
		delete storageArea.theirValue;	// don't store empty string, delete it instead
	else
		storageArea.theirValue = textBox.value;
}

function retrieve_storage(id, storageArea) {
	var val = storageArea.theirValue;
	if (val != null)
		document.getElementById(id).value = val;
}

if (window.localStorage)
	retrieve_storage("local", localStorage);
else
	document.getElementById("local-warning").innerHTML = "Note: this browser does not support localStorage";

if (window.sessionStorage)
	retrieve_storage("session", sessionStorage);
else
	document.getElementById("session-warning").innerHTML = "Note: this browser does not support sessionStorage";
