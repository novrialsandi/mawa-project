import React from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
	const location = useLocation();
	const pathname = location.pathname.toLocaleUpperCase().replace(/^\/+/, "");

	return (
		<div className="flex justify-center text-6xl p-4 font-bold">{pathname}</div>
	);
};

export default PageTitle;
