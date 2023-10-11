import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import PageTitle from "../components/PageTitle";

const PortfolioPage = () => {
	return (
		<>
			<div className="pt-20">
				<PageTitle />
				<PortfolioCard />
			</div>
		</>
	);
};

export default PortfolioPage;
