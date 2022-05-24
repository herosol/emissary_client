import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";

function Footer() {
	const data = {
		list_01: [
			{
				id: 1,
				text: "Home",
				link: "/",
			},
			{
				id: 2,
				text: "About us",
				link: "/about",
			},
			{
				id: 3,
				text: "FAQ’s",
				link: "/faq",
			},
			{
				id: 4,
				text: "Blog Posts",
				link: "/blog",
			},
			{
				id: 5,
				text: "Contact us",
				link: "/contact",
			},
		],
		list_02: [
			{
				id: 1,
				text: "Privacy Policy",
				link: "/privacy-policy",
			},
			{
				id: 2,
				text: "Terms & conditions",
				link: "/terms-conditions",
			},
			{
				id: 3,
				text: "Disclaimer",
				link: "/disclaimer",
			},
		],
		copyright: {
			start: "Copyright © 2022 ",
			mid: "Emissary Recruiting Solutions, Inc.",
			last: "All rights reserved.",
		},
	};
	return (
		<>
			<footer>
				<div className="contain">
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="in_col">
								<Logo />
							</div>
						</div>
						<div className="col col2">
							<div className="in_col">
								<ul className="list">
									{data.list_01.map((val) => {
										return (
											<li key={val.id}>
												<Link to={val.link}>{val.text}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col col3">
							<div className="in_col">
								<Newsletter />
							</div>
						</div>
					</div>
					<hr />
					<ul className="sm_list">
						{data.list_02.map((val) => {
							return (
								<li key={val.id}>
									<Link to={val.link}>{val.text}</Link>
								</li>
							);
						})}
					</ul>
					<div className="copyright">
						<p className="text-center">
							{data.copyright.start} <Link to="/">{data.copyright.mid}</Link> {data.copyright.last}
						</p>
						<SocialLinks />
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
