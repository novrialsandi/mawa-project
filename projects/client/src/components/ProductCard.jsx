import React from "react";
import mansa from "../assets/PORTFOLIO/mansa.webp";
import bpjs from "../assets/PORTFOLIO/BPJS.jpg";
import dibatasPagar from "../assets/PORTFOLIO/dibatasPagar.jpg";
import piepFc from "../assets/PORTFOLIO/piepFc.jpg";
import sampoerna from "../assets/PORTFOLIO/sampoerna.jpg";
import sriRejeki from "../assets/PORTFOLIO/sriRejeki.jpg";
import "../css/productCard.css";

const ProductCard = () => {
	const portfolio = [
		{ image: mansa, desc: "Mansa Jersey" },
		{ image: bpjs, desc: "BPJS Jersey" },
		{ image: dibatasPagar, desc: "Dibatas Pagar Jersey" },
		{ image: piepFc, desc: "Piep Fc Jersey" },
		{ image: sampoerna, desc: "Sampoerna Jersey" },
		{ image: sriRejeki, desc: "Sri Rejeki Jersey" },
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
						<div className="card">
							<img
								src={val.image}
								alt="product"
								className="w-full h-full object-cover rounded-md"
							/>
							<div className="intro">
								<h1 className="font-bold">Jersey</h1>
								<p>{val.desc}</p>
								<button>Buy Now</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ProductCard;
