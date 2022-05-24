import React from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import Intro from "./Intro";
import Assets from "./Assets";
import Team from "./Team";

const About = (props) => {
	const { cover, intro, assets, team } = Data.about;
	return (
		<>
			<Cover data={cover} />
			<Intro data={intro} />
			<Assets data={assets} show={props.popup} />
			<Team data={team} />
		</>
	);
};

export default About;
