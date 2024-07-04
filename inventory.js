function setupInventory() {



	// SET UP LOCALSTORAGE OBJECTS
	localStorage.setItem('lettermini', 'false');
}

function checkInventory() {

	if( localStorage.getItem('lettermini') == 'true' ) {
		$('#inventory #inv-letter').show();
	}

}