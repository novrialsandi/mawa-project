import ProductCard from "../components/ProductCard";
import PortfolioCard from "../components/PortfolioCard";
import FullScreenSlider from "../components/Slider";

export default function HomePage() {
	return (
		<>
			<FullScreenSlider />
			<ProductCard />
			<button className="justify-center w-full">View More</button>
		</>
	);
}
