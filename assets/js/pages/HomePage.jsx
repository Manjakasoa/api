import React,{ useEffect,useState } from 'react';
import axios from 'axios';

const HomePage = (props) => {
	const [posts,setPosts] = useState([]);
	const [currentPage,setCurrentPage] = useState(1); 
	useEffect(() => {
		axios.get(`http://localhost:8000/api/posts?page=${currentPage}`)
		 .then(response => response.data['hydra:member'])
		 .then(data => setPosts(data));
	},[currentPage])
	const handleClick = () => {
		setCurrentPage(currentPage+1)
	}
	return (
		<div>
			{posts.map(post =>(
				<div key={post.id} className="list-group mt-5">
				  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
				    <div className="d-flex w-100 justify-content-between">
				      <h5 className="mb-1">{post.fullNameUser}</h5>
				      <small>3 days ago</small>
				    </div>
				  </a>
				  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
				   
				    {post.content}
				  </a>
				</div>
			))}
			<button className="btn btn-primary" onClick={handleClick} >Plus d'actualité</button>
		</div>
	);
}

export default HomePage;