import React from "react";
import { Link } from "react-router-dom";

function PricePlanBlk({ title, price, duration, list, btn, btn_link }) {
	return (
		<div className="plan_blk">
			<div className="txt">
				<h4 className="title">{title}</h4>
				<div className="price">
					{price} <small>{duration}</small>
				</div>
				<ul>
					{list.map((val) => {
						return <li key={val.id}>{val.li}</li>;
					})}
				</ul>
			</div>
			<div className="btn_blk text-center">
				<Link to={btn_link} className="site_btn lg round">
					{btn}
				</Link>
			</div>
		</div>
	);
}

export default PricePlanBlk;
