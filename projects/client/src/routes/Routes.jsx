import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";

const routes = [
	<Route path="/" element={<HomePage />}></Route>,
	<Route path="/portfolio" element={<PortfolioPage />}></Route>,
];

export default routes;
