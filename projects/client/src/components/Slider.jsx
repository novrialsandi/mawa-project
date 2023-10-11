import React, { useState, useEffect } from "react";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/2.jpg";
import photo3 from "../assets/3.jpg";
import "../css/slider.css";

const photos = [photo1, photo2, photo3].map((photo) => {
	const image = new Image();
	image.src = photo;
	return image;
});

const FullScreenSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % photos.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="slider relative full-screen">
			{photos.map((photo, index) => (
				<div
					key={index}
					className={`slide ${currentSlide === index ? "visible" : ""}`}
					style={{
						backgroundImage: `url(${photo.src})`,
						zIndex: currentSlide === index ? 1 : 0,
					}}
				/>
			))}
		</div>
	);
};

export default FullScreenSlider;
