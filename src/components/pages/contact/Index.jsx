import React from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import ContactUs from "./ContactUs";

const Contact = () => {
	const { cover, contact } = Data.contact;
	return (
		<>
			<Cover data={cover} />
			<ContactUs data={contact} />
		</>
	);
};

export default Contact;
