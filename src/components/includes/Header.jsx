import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
	const [scroll, setScroll] = useState(false);
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, [scroll]);
	const ToggleActive = () => {
		setToggle(!toggle);
	};

	return (
		<>
			<header className={scroll ? "fix" : ""}>
				<div className="contain">
					<Logo />
					<button type="button" className={!toggle ? "toggle" : "toggle active"} onClick={() => ToggleActive(!toggle)}>
						<span></span>
					</button>
					<Navigation active={toggle} toggle={ToggleActive} logged={false} />
					<div className="clearfix"></div>
				</div>
			</header>
		</>
	);
}

export default Header;
