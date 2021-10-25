import React,{useState} from 'react';
import axios from 'axios';

const LoginPage = (props) => {
	const [credentials,setCredentials] = useState({
		username : '',
		password : ''
	});
	const handleChange = event=> {
		const value = event.currentTarget.value;
		const name = event.currentTarget.name;
		setCredentials({ ...credentials,[name]:value})
	}
	const handleSubmit = async event => {
		event.preventDefault();
		try {
			const token = await axios.post('http://localhost:8000/api/login_check',credentials)
			.then(response => response.data.token)
			window.localStorage.setItem('authToken',token);
			axios.defaults.headers["Authorization"] = "Bearer "+token;
			axios.get('http://localhost:8000/api/posts')
				 .then(response => console.log(response));
		} catch(error) {
			
		}

	}
	return (
		<>
		<h1>Connexion</h1>
		<form onSubmit={handleSubmit}>
		  <div className="form-group">
		    <label htmlFor="username">Adresse email</label>
		    <input type="email" value={credentials.username} className="form-control" onChange={handleChange} id="username" name="username" aria-describedby="emailHelp" placeholder="Entrer l'adresse email"/>
		  </div>
		  <div className="form-group">
		    <label htmlFor="password">Mot de passe</label>
		    <input type="password" value={credentials.password} className="form-control" onChange={handleChange} id="password" name="password" placeholder="Mot de passe"/>
		  </div>
		  <button type="submit" className="btn btn-primary mt-4">Submit</button>
		</form>
		</>
	);
}

export default LoginPage;