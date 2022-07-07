import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RocketDetails.css';

function RocketDetails(props) {
	const [rocketDetails, setRocketDetails] = useState(null);
	const { id } = useParams();
	const url = `https://api.spacexdata.com/v4/rockets/${id}`;

	useEffect(() => {
		axios.get(url).then((rocketRes) => {
			// console.log(rocketRes.data);
			setRocketDetails(rocketRes.data);
		});
	}, []);

	if (rocketDetails) {
		return (
			<div className='Page-container'>
				<h2 className='Page-Title'>Rocket Details</h2>
				<div className='details-container'>
					<div className='overview card'>
						<h2 className='card-title'>Overview</h2>
						<div>
							<span className='label'>Name:</span> {rocketDetails.name}
						</div>
						<div>
							<span className='label'>Cost:</span> $
							{rocketDetails.cost_per_launch}
						</div>
						<div>
							<div className='label'>Status:</div>{' '}
							{rocketDetails.active ? (
								<span>active</span>
							) : (
								<span>Not Active</span>
							)}
						</div>
						<div>
							<span className='label'>Height:</span>{' '}
							{rocketDetails.height.meters} meters
						</div>
						<div>
							<span className='label'>Diameter:</span>{' '}
							{rocketDetails.diameter.meters}
						</div>
						<div>
							<span className='label'>Mass:</span> {rocketDetails.mass.kg} kg
						</div>
						<div>
							<span className='label'>Stages:</span> {rocketDetails.stages}
						</div>
					</div>
					<div className='Engine card'>
						<h2 className='card-title'>Engine</h2>
						<div>
							<span className='label'>Type:</span> {rocketDetails.engines.type}
						</div>
						<div>
							<span className='label'>Number:</span>{' '}
							{rocketDetails.engines.number}
						</div>
						<div>
							<span className='label'>Version:</span>{' '}
							{rocketDetails.engines.version}
						</div>
						<div>
							<span className='label'>Layout:</span>{' '}
							{rocketDetails.engines.layout}
						</div>
						<div>
							<span className='label'>First Propellant</span>{' '}
							{rocketDetails.engines.propellant_1}
						</div>
						<div>
							<span className='label'>Second Propellant:</span>{' '}
							{rocketDetails.engines.propellant_2}
						</div>
						<div>
							<span className='label'>Specific Impulse:</span>{' '}
							{rocketDetails.engines.isp.sea_level}
						</div>
						<div>
							<span className='label'>Thrust Sea Level:</span>{' '}
							{rocketDetails.engines.thrust_sea_level.kN} kN
						</div>
						<div>
							<span className='label'>Trust Vacuum:</span>{' '}
							{rocketDetails.engines.thrust_vacuum.kN} kN
						</div>
						<div>
							<span className='label'>Thrust to Weight Ratio:</span>{' '}
							{rocketDetails.engines.thrust_to_weight}
						</div>
					</div>
					<div className='first-stage card'>
						<h2 className='card-title'>First Stage</h2>
						<div>
							<span className='label'>Burn Time:</span>{' '}
							{rocketDetails.first_stage.burn_time_sec} seconds
						</div>
						<div>
							<span className='label'>Engines:</span>{' '}
							{rocketDetails.first_stage.engines}
						</div>
						<div>
							<span className='label'>Fuel Amount:</span>{' '}
							{rocketDetails.first_stage.fuel_amount_tons} tons
						</div>
						<div>
							<span className='label'>Thrust Sea Level:</span>{' '}
							{rocketDetails.first_stage.thrust_sea_level.kN} kN
						</div>
						<div>
							<span className='label'>Trust Vacuum:</span>{' '}
							{rocketDetails.first_stage.thrust_vacuum.kN} kN
						</div>
						<div>
							<span className='label'>Reusable:</span>{' '}
							{rocketDetails.first_stage.reusable ? (
								<span>Yes</span>
							) : (
								<span>Non Reusable</span>
							)}
						</div>
					</div>
					<div className='second-stage card'>
						<h2 className='card-title'>Second Stage</h2>
						<div>
							<span className='label'>Burn Time:</span>{' '}
							{rocketDetails.second_stage.burn_time_sec} seconds
						</div>
						<div>
							<span className='label'>Engines:</span>{' '}
							{rocketDetails.second_stage.engines}
						</div>
						<div>
							<span className='label'>Fuel Amount:</span>{' '}
							{rocketDetails.second_stage.fuel_amount_tons} tons
						</div>
						<div>
							<span className='label'>Thrust Sea Level:</span>{' '}
							{rocketDetails.second_stage.thrust.kN} kN
						</div>
						<div>
							<span className='label'>Reusable:</span>{' '}
							{rocketDetails.second_stage.reusable ? (
								<span>Yes</span>
							) : (
								<span>Non Reusable</span>
							)}
						</div>
					</div>
					<div className='payloads card'>
						<h2 className='card-title'>Payloads</h2>
						{rocketDetails.payload_weights.map((element) => {
							return (
								<div>
									<div>
										<span className='label'>Id:</span> {element.id}
									</div>
									<div>
										<span className='label'>Name:</span> {element.name}
									</div>
									<div>
										{' '}
										<span className='label'>Mass:</span> {element.kg} Kg
									</div>
								</div>
							);
						})}
					</div>
					<div className='rocket-img-container'>
						<img
							className='rocket-img'
							src={rocketDetails.flickr_images}
							alt={rocketDetails.name}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default RocketDetails;
