import React from 'react';

import './App.css';
import Card from './components/Card';
import { users } from './users';

function App() {
	const [userData, setUserData] = React.useState([]);
	const [avgAge, setAvgAge] = React.useState(0);

	React.useEffect(() => {
		setUserData(users.filter(user => user.active));
	}, []);

	React.useEffect(() => {
		calculateAverage();
	}, [userData]);

	function handleRemoveUser(index) {
		setUserData(oldUserData => {
			const newUserData = [...oldUserData];

			newUserData.splice(index, 1);

			return newUserData;
		});
	}

	const calculateAverage = () => {
		let totalAges = 0;

		for (let i in userData) {
			totalAges += userData[i].age || 0;
		}

		setAvgAge((totalAges / userData.length).toFixed(2));
	};

	return (
		<>
			<h1>Média: {avgAge}</h1>

			{userData
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((user, index) => {
					return <Card user={user} key={index} handleRemoveUser={() => handleRemoveUser(index)} />;
				})}
		</>
	);
}

export default App;
