import React from 'react';

const MyAccountPage = ({history}) => {
	const logout = () => {
		window.localStorage.removeItem('authToken');
		history.replace('/login')
	}
	return (
		<>
			<h1 className="text-center">Mon compte</h1>
			<button className="btn btn-primary" onClick={logout}>Se deconnecter</button>
		</>
	);
}

export default MyAccountPage;