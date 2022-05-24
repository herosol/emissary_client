import React from "react";
import ChooseBlk from "./ChooseBlk";

function Choose({ data }) {
	return (
		<>
			<section id="choose" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain text-center">
					<div className="content">
						<h1>{data.heading}</h1>
						<p className="size_5">{data.para}</p>
					</div>
					<div className="flex_row main_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<ChooseBlk {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Choose;
