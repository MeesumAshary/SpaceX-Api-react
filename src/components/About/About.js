import React from 'react';
import './About.css';

function About(props) {
	return (
		<div className='About-page-container'>
			<h1>About</h1>

			<div className='about-text'>
				<p>
					Welcome to MeesX! A react App inspired by SpaceX. This website was
					created using react and it utilizes a SpaceX Api. The purpose of this
					website is to display certain pieces of data for the user. In the
					rockets tab, the user can find information about four rockets that
					spaceX has made. The read more button on the rockets card can direct
					the user to a page that contains more information about the rocket.
					Similar functionality exists for the Launches page. However, the data
					displayed in the launches page is different. The Launches page
					displays the latest and past launches. and Lastly the Starlink page
					display a large list of some of the SpaceX satellites.
				</p>
			</div>
		</div>
	);
}

export default About;
