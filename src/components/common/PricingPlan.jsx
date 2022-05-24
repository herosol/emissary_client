import React from "react";
import PricePlanBlk from "./PricePlanBlk";

const PricingPlan = ({ data, headingShow }) => {
	return (
		<>
			<section id="pricing">
				<div className="contain">
					{headingShow ? (
						<div className="content text-center">
							<h1 className="heading">{data.heading}</h1>
						</div>
					) : (
						""
					)}
					<div className="flex_row main_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<PricePlanBlk {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default PricingPlan;
