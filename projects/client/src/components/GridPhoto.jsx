import React from "react";
import "../css/gridPhoto.css";
import mansa from "../assets/PORTFOLIO/mansa.webp";

const GridPhoto = () => {
	return (
		<section className="section">
			<div className="card">
				<div className="card__img">
					<img src={mansa} alt="Big Ben" />
				</div>
			</div>
			<div className="card">
				<div className="card__img">
					<img
						src="https://images.unsplash.com/photo-1581010864468-c972b8705439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
						alt="Eiffel Tower"
					/>
				</div>
			</div>
			<div className="card">
				<div className="card__img">
					<img
						src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80"
						alt="Colosseum"
					/>
				</div>
			</div>
			<div className="card">
				<div className="card__img">
					<img
						src="https://images.unsplash.com/photo-1581473483413-313a5afffb08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80"
						alt="Pisa Tower"
					/>
				</div>
			</div>
			<div className="card">
				<div className="card__img">
					<img
						src="https://images.unsplash.com/photo-1585155967849-91c736589c84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
						alt=""
					/>
				</div>
			</div>
			<div className="card">
				<div className="card__img">
					<img
						src="https://images.unsplash.com/photo-1527915676329-fd5ec8a12d4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
						alt="Sydney Opera House"
					/>
				</div>
			</div>
		</section>
	);
};

export default GridPhoto;
