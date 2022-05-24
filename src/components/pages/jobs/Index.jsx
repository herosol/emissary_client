import React from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import JobList from "./JobList";

const Jobs = () => {
	const { cover, job_list } = Data.find_jobs;
	return (
		<>
			<Cover data={cover} />
			<JobList data={job_list} />
		</>
	);
};

export default Jobs;
