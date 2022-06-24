import { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home(props) {
	const [history, setHistory] = useState([]);

	const urlHome = 'https://api.spacexdata.com/v4/history';
	useEffect(() => {
		axios.get(urlHome).then((historyRes) => {
			// console.log(historyRes.data);
			setHistory([
				historyRes.data[14],
				historyRes.data[13],
				historyRes.data[12],
				historyRes.data[11],
			]);
			console.log(history);
		});
	}, []);

	if (history) {
		return (
			<div className='history-page-container'>
				<h1 className='page-title'>Recent Historical Events of SpaceX</h1>

				<div className='history-card'>
					{history.map((element, index) => {
						return (
							<div key= {element.id} className='history-info'>
								<div className='history-date'>{element.event_date_utc}</div>
								<div className='history-title-det'>
									<div className='history-title'> {element.title} </div>
									<div className='history-details'>{element.details}</div>
								</div>
								<a href={element.links.article}>
									<div className='history-link'> Read More...</div>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Home;
