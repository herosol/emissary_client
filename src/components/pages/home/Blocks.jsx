import React from "react";
import { Link } from "react-router-dom";

function Blocks({ data }) {
	return (
		<>
			<section id="blocks" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="title">
								<h1 className="heading">{data.heading}</h1>
								<div className="btn_blk">
									<Link to={data.btn_link} className="site_btn simple lg round">
										{data.btn}
									</Link>
								</div>
							</div>
						</div>
						<div className="col col2">
							<div className="in_col">
								<div className="txt size_5">
									<p>{data.para}</p>
								</div>
								<div className="br"></div>
								<div className="flex_row sub_row">
									{data.block.map((val) => {
										return (
											<div className="col" key={val.id}>
												<div className="inner">
													<h3>{val.title}</h3>
													<p>{val.para}</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Blocks;
