import React from "react";

function Agency({ data }) {
	return (
		<>
			<section id="agency" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain text-center">
					<div className="fig">
						<img src={data.src} alt="" />
					</div>
					<div className="content">
						<h4 className="color">{data.subheading}</h4>
						<h1 className="heading">{data.heading}</h1>
						<p>{data.para_01}</p>
						<p>{data.para_02}</p>
						<p>{data.para_03}</p>
						<p>{data.para_04}</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Agency;
