#Automatic image grid#

This is a small javascript class that generates an image grid similar to the one flickr has. The images will be automatically scaled in order to fit inside a container while preserving the aspect ratio and not being cropped.

[Here's a live demo.][1]

There are no third party dependency, everything is written in pure vanilla js.

## Usage ##

    /* An array with all the images */
    var myImages = [
		{
			image: 'my-first-image.jpg',
			width: '320',
			height: '160'
		}, {
			image: 'my-second-image.jpg',
			width: '640',
			height: '320'
		}, {
			image: 'my-third-image.jpg',
			width: '678',
			height: '678'
		}
	];
	
    /* The container where to render the grid */
	var myContainer = document.querySelectorAll('.wrapper')[0];

	/**
	 * @param {array} An array containing all the images
	 * @param {element} The container element .
	 * @param {int} The start height of each row.
	 * @param {int} Border offset. (the right or left side for one item)
	 *
	 * @return {object}
	 */
	var myGrid = new BH.ImageGrid(
		myImages, // The images
		myContainer, // The container (we take the width from this element)
		500, // The height we want each row to start from
		10 // How much margin on the images.
	);


  [1]: https://rawgit.com/beije/automatic-image-grid/master/index.html