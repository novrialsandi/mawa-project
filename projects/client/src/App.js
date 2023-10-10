import { Routes } from "react-router-dom";
import routes from "./routes/Routes";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Routes>{routes.map((val) => val)}</Routes>
			<Footer />
		</>
	);
}

export default App;
