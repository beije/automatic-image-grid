/**
 * This file is only used for bootstrapping the ImageGrid.
 * This is not needed to actually run the ImageGrid.
 *
 * @file			bootstap.js
 * @package			BH
 * @dependencies	BH.ImageGrid
 */

;(function(App, window, document, undefined) {
	'use strict';

	/**
	 * Makes an ajax request.
	 * 
	 * @param {string} url      The url to fetch.
	 * @param {fn}     callback The callback function to fire on success.
	 *
	 * @return {void}
	 */
	function makeRequest(url, callback){
		var request = new XMLHttpRequest();
		request.onreadystatechange = function(){
			if (request.readyState == 4 && request.status == 200){
				callback(request.responseText);
			}
		}
		request.open("GET", url, true);
		request.send();
	};

	// Fetch the images and render the grid.
	makeRequest(
		'data.json',
		function(data) {
			var container = document.querySelectorAll('.wrapper');

			if(container.length != 0) {
				new App.ImageGrid(JSON.parse(data), container[0], 300, 5);
			}
		}
	);

}(window.BH = window.BH || {}, window, document));