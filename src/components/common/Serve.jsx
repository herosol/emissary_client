import React from "react";
import { Link } from "react-router-dom";

function Serve({ data }) {
	return (
		<>
			<section id="serve">
				<div className="contain">
					<div className="flex_row main_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<div className="inner">
										<div className="fig">
											<Link to={val.btn_link}>
												<img src={val.src} alt="" />
											</Link>
										</div>
										<div className="txt">
											<h2>{val.title}</h2>
											<h4>{val.subtitle}</h4>
											<p>{val.para}</p>
											<div className="btn_blk">
												<Link to={val.btn_link} className="site_btn lg round">
													{val.btn}
												</Link>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Serve;
