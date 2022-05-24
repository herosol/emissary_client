import React from "react";

const JobFilter = ({ active, close }) => {
	return (
		<>
			<div id="filter" className={active ? "blk active" : "blk"}>
				<button type="button" className="x_btn" onClick={close}></button>
				<div className="top_head">
					<h5>Filter results</h5>
				</div>
				<div className="in_blk">
					<h6>Price</h6>
				</div>
				<div className="in_blk">
					<h6>Job Title</h6>
					<ul className="ctg_lst">
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Frontend Engineer <span>(34)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								RAN Integration Engineer <span>(65)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Sculptor / Brush Artist <span>(134)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Senior Software Developer ROR <span>(89)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Site Design Engineer <span>(54)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Technical Support Engineer <span>(266)</span>
							</label>
						</li>
					</ul>
				</div>
				<div className="in_blk">
					<h6>City</h6>
					<ul className="ctg_lst">
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Islamabad <span>(34)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Karachi <span>(65)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Lahore <span>(134)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Wahi hassain <span>(89)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Wan Radha Ram <span>(54)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Warah <span>(266)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Warburton <span>(111)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Wazirabad <span>(99)</span>
							</label>
						</li>
					</ul>
				</div>
				<div className="in_blk">
					<h6>Experience</h6>
					<ul className="ctg_lst">
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />1 Year <span>(34)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />2 Years <span>(65)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />3 Years <span>(134)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />4 Years <span>(89)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />5 Years <span>(54)</span>
							</label>
						</li>
					</ul>
				</div>
				<div className="in_blk">
					<h6>Skills</h6>
					<ul className="ctg_lst">
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								JavaScript <span>(266)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								MS Excel <span>(111)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								LTE Integration <span>(99)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								RNC Product Knowledge <span>(34)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Security Framework Compliance <span>(65)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Design Enhancement Platforms <span>(34)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								3-dimensional Model <span>(65)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Proficient In Various Art Forms <span>(134)</span>
							</label>
						</li>
					</ul>
				</div>
				<div className="in_blk">
					<h6>Industry</h6>
					<ul className="ctg_lst">
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Services <span>(34)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Information Technology <span>(65)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Electronics <span>(134)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Engineering <span>(89)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Recruitment / Employment Firms <span>(54)</span>
							</label>
						</li>
					</ul>
				</div>
				<div className="in_blk">
					<h6>Company</h6>
					<ul className="ctg_lst">
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Hillcrest Solutions (Private) Limited <span>(54)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Contour Software <span>(266)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Datamall <span>(111)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Smart Placement Pvt Ltd <span>(99)</span>
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Synaptic Vanguard W.L.L <span>(34)</span>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default JobFilter;
