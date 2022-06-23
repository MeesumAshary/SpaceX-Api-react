import React from 'react';
import './Home.css'

function Home(props) {

    
    return (
			<div>
				<h1>Home</h1>
				<div>
					<img
						src='https://www.lawrenceprospera.org/images/quintana/Page_Under_Construction.jpg'
						alt=''
					/>
				</div>
				<form>
					<label htmlFor='input'>
						{' '}
						Our website is under Construction. Please email us for any concerns!
					</label>
					<input type='email' placeholder='Please enter a valid email' />
					<button type='Submit'> Notify Me</button>
				</form>
			</div>
		);
}

export default Home;