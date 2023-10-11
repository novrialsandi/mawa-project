import React from "react";
import mansa from "../assets/PORTFOLIO/mansa.webp";
import bpjs from "../assets/PORTFOLIO/BPJS.jpg";
import dibatasPagar from "../assets/PORTFOLIO/dibatasPagar.jpg";
import piepFc from "../assets/PORTFOLIO/piepFc.jpg";
import "../css/productCard.css";

const ProductCard = () => {
	const portfolio = [
		{ image: mansa, desc: "Mansa Jersey" },
		{ image: bpjs, desc: "BPJS Jersey" },
		{ image: dibatasPagar, desc: "Dibatas Pagar Jersey" },
		{ image: piepFc, desc: "Piep Fc Jersey" },
	];

	return (
		<>
			<div className="flex justify-center text-6xl p-4 font-bold">PRODUCTS</div>
			<div className="gridContainer">
				{portfolio.map((val, index) => (
					<div
						key={index}
						className="container p-2 relative rounded-xl overflow-hidden"
					>
						<div className="card rounded-3xl hover:rounded-3xl">
							<img
								src={val.image}
								alt="product"
								className="w-full h-full object-cover rounded-3xl "
							/>
							<div className="intro flex justify-between">
								<div>
									<h1 className="font-bold">Jersey</h1>
									<p>{val.desc}</p>
								</div>
								<button className=" py-1 px-2 rounded-md border-2">
									Buy Now
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center items-center w-vw">
				<button className=" py-1 px-2 rounded-md border-2">View More</button>
			</div>
		</>
	);
};

export default ProductCard;
