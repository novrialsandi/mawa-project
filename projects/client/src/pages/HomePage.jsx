import GridPhoto from "../components/GridPhoto";
import ProductCard from "../components/ProductCard";
import FullScreenSlider from "../components/Slider";

export default function HomePage() {
	return (
		<>
			<FullScreenSlider />
			<ProductCard />
			<GridPhoto />
		</>
	);
}
