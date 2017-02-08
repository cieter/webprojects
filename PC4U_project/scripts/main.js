// Setup the slider to show the first slide.
var slideIndex = 0;
show();

// Show the next slide.
function next()
{
	slideIndex++;
	show();
}

// Show the previous slide.
function prev()
{
	slideIndex--;
	show();
}


function show()
{
	// Load all the slides.
	var slides = document.getElementsByClassName("mySlides");

	// Check to see if slideIndex is higher than the last slide.
	if ( slideIndex > slides.length - 1 ) 
	{
		// if so, reset to the first.
		slideIndex = 0;
	}

	// Check to see if slideIndex is less than the first slide
	if ( slideIndex < 0 ) 
	{
		// if so, show last slide
		slideIndex = slides.length - 1;
	}	

	// Used for debugging.
	// console.log( slideIndex );
	// console.log( slides );

	//de for loop zorgt ervoor dat alle slides langs kunnen komen
	for ( i = 0; i < slides.length; i++ )
	{
		// zorgt ervoor dat slide i op niet zichtbaar staat
		slides[i].style.display = 'none';
	}
	//zorgt ervoor dat de geseleteerde i wel zichtbaar wordt
	slides[ slideIndex ].style.display = 'block';
}