import { format } from 'date-fns';

export default function Card({ user, handleRemoveUser = () => {} }) {
	return (
		<div
			style={{
				border: '1px solid black',
				width: '14rem',
				margin: 5,
				borderRadius: 10,
				backgroundColor: user.age > 20 ? 'blue' : 'green',
			}}
		>
			<h1>{user.name}</h1> <br />
			<h1>{user.skill}</h1> <br />
			<h1>{user.birthdate ? format(user.birthdate, 'dd/MM/yyyy') : 'Data inválida'}</h1> <br />
			<h1>{user.age}</h1> <br />
			<button onClick={() => handleRemoveUser()}>APAGAR</button>
		</div>
	);
}
