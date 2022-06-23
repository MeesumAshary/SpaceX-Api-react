import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RocketDetails({ rocketData }) {
	const [rocketDetails, setRocketDetails] = useState(null);

	const { id } = useParams();

	const url = `https://api.spacexdata.com/v4/rockets/${id}`;

	useEffect(() => {
		axios.get(url).then((rocketRes) => {
			console.log(rocketRes.data);
			setRocketDetails(rocketRes.data);
		});
	}, []);

    if(rocketDetails){
	return (
		<div>
			Rocket Details
			<div className='overview'>
				<h2>Overview</h2>
				<div>Name: {rocketDetails.name}</div>
				<div>
					Status:{' '}
					{rocketDetails.active ? <span>active</span> : <span>Not Active</span>}
				</div>
				<div>Height: {rocketDetails.height.meters} meters</div>
				<div>Mass: {rocketDetails.mass.kg} kg</div>
				<div>Stages: {rocketDetails.stages}</div>
			</div>
			<div className='first-stage'>
				<h2>First Stage</h2>
				<div>Burn Time: {rocketDetails.first_stage.burn_time_sec} seconds</div>
				<div>Engines: {rocketDetails.first_stage.engines}</div>
                <div>
                    Fuel Amount: {rocketDetails.first_stage.fuel_amount_tons} tons
                </div>
                <div>Reusable: {rocketDetails.first_stage.reusable? <span>True</span> : <span>Non Reusable</span>}</div>
			</div>
		</div>
	);}
}

export default RocketDetails;
