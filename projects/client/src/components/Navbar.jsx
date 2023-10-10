import React, { useState } from "react";
import mawa from "../assets/LOGO PNG/LOGO - WHITE.png";
import logo from "../assets/LOGO PNG/LOGO GRAM - WHITE.png";
import styles from "../css/navbar.module.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();
	const pathname = location.pathname;

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const menuItems = [
		{ label: "Home", to: "/" },
		{ label: "Product", to: "/product" },
		{ label: "Portfolio", to: "/portfolio" },
		{ label: "Contact", to: "/contact" },
		{ label: "About", to: "/about" },
	];

	return (
		<>
			<div className="flex items-center p-4 justify-between ">
				<a href={"/"} className="flex">
					<img
						className={`h-12 w-auto ${styles.mawa}`}
						src={mawa}
						alt="mawa logo"
					/>
					<img className={`h-12 w-auto ${styles.logo}`} src={logo} alt="logo" />
				</a>
				<button className={`${styles.hamburger} `} onClick={toggleMenu}>
					{isMenuOpen ? "✕" : "☰"}
				</button>

				{isMenuOpen && (
					<div className={`${styles.menu} ${styles.linksContainer} font-bold`}>
						<ul>
							{menuItems.map((item, index) => (
								<li key={index} className={styles.menuItem}>
									<Link
										href={item.href}
										className={`${styles.link} ${
											pathname === item.href ? styles.yellowLink : ""
										}`}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
				<div
					className={`flex gap-8 font-bold ${styles.linksContainer} ${
						isMenuOpen ? styles.showMenu : ""
					}`}
				>
					<Link
						className={`${styles.link} ${
							pathname === "/" ? styles.yellowLink : ""
						} `}
						to={"/"}
					>
						Home
					</Link>
					<Link
						className={`${styles.link} ${
							pathname === "/product" ? styles.yellowLink : ""
						}`}
						to={"/product"}
					>
						Product
					</Link>
					<Link
						className={`${styles.link} ${
							pathname === "/portfolio" ? styles.yellowLink : ""
						}`}
						to={"/portfolio"}
					>
						Portfolio
					</Link>
					<Link
						className={`${styles.link} ${
							pathname === "/contact" ? styles.yellowLink : ""
						}`}
						to={"/contact"}
					>
						Contact
					</Link>
					<Link
						className={`${styles.link} ${
							pathname === "/about" ? styles.yellowLink : ""
						}`}
						to={"/about"}
					>
						About
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
