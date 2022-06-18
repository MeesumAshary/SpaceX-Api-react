import React from 'react';
import axios from 'axios'

function Launches(props) {

    let url = 'https://api.spacexdata.com/v4/launches/latest'
     axios.get(url)
     .then((data) => {
         console.log(data)
     });

    return (
        <div>
            <h1>Launches</h1>
        </div>
    );
}

export default Launches;