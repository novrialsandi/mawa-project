import mansa from "../assets/PORTFOLIO/mansa.webp";
import bpjs from "../assets/PORTFOLIO/BPJS.jpg";
import dibatasPagar from "../assets/PORTFOLIO/dibatasPagar.jpg";
import piepFc from "../assets/PORTFOLIO/piepFc.jpg";
import sampoerna from "../assets/PORTFOLIO/sampoerna.jpg";
import sriRejeki from "../assets/PORTFOLIO/sriRejeki.jpg";
import style from "../css/portfolio.module.css";
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
		<div className={style.grid}>
			{portfolio.map((val, index) => (
				<div key={index} className="p-2 relative rounded-xl overflow-hidden">
					<img
						src={val.image}
						alt="product"
						className="w-full h-full object-cover rounded-md"
					/>
					<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
						<span className="text-white font-bold">{val.desc}</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductCard;
