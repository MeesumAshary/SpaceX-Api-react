import React from 'react';
import axios from 'axios';

function Rockets(props) {

    const url = 'https://api.spacexdata.com/v4/rockets'

    axios.get(url).then((data) => {
			console.log(data);
		});


    return (
        <div>
            <h1>Rockets</h1>
        </div>
    );
}

export default Rockets;