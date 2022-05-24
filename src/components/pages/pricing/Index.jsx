import React from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import PricingPlan from "../../common/PricingPlan";

const Pricing = () => {
	const { cover, plan } = Data.pricing;
	return (
		<>
			<Cover data={cover} />
			<PricingPlan data={plan} headingShow={false} />
		</>
	);
};

export default Pricing;
