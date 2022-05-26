import React, { useEffect, useState } from "react";
import JobFilter from "./JobFilter";
import JobListings from "./JobListings";

const JobList = ({ jobs, cities, types, cats, searchJobs, isSearching }) => {
  const [active, setActive] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [jobCats, setJobCats] = useState({});
  const [citiesFilter, setCitiesFilter] = useState({});
  const [tpyesFilter, settypesFilter] = useState({});
  const toggleFilter = () => {
    setActive(!active);
  };

  const handleJobCatsChange = (event) => {
    setJobCats({
      ...jobCats,
      [event.target.id]: event.target.checked
    });
  };

  const handleCityChange = (event) => {
    setCitiesFilter({
      ...citiesFilter,
      [event.target.id]: event.target.checked
    });
  };

  const handleTypesChange = (event) => {
    settypesFilter({
      ...tpyesFilter,
      [event.target.id]: event.target.checked
    });
  };

  useEffect(() => {
    let jobCatsArr = [];
    for (let key in jobCats) {
      if (jobCats[key]) jobCatsArr.push(parseInt(key));
    }

    let citiesFilterArr = [];
    for (let key in citiesFilter) {
      if (citiesFilter[key]) citiesFilterArr.push(key.toString());
    }

    let tpyesFilterArr = [];
    for (let key in tpyesFilter) {
      if (tpyesFilter[key]) tpyesFilterArr.push(key.toString());
    }

    let filters = {
      sortBy: sortBy,
      jobCats: jobCatsArr,
      cities: citiesFilterArr,
      types: tpyesFilterArr
    };
    searchJobs(filters);
  }, [sortBy, jobCats, citiesFilter, tpyesFilter]);

  return (
    <>
      <section id="jobs">
        <div className="contain">
          <div className="flex_row main_row row">
            <div className="col-xl-3 filter_wrapper_col">
              <div id="filter" className={active ? "blk active" : "blk"}>
                <button
                  type="button"
                  className="x_btn"
                  onClick={toggleFilter}
                ></button>
                <div className="top_head">
                  <h5>Filter results</h5>
                </div>
                <div className="in_blk">
                  <h6>Price</h6>
                </div>
                <div className="in_blk">
                  <h6>Job Categories</h6>
                  <ul className="ctg_lst">
                    {cats.map((cat, key) => (
                      <li key={key}>
                        <label>
                          <input
                            type="checkbox"
                            value={cat.id}
                            id={cat.id}
                            name="job_cat"
                            onChange={handleJobCatsChange}
                            checked={jobCats[cat.id]}
                          />
                          {cat.title} <span>({cat.count})</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="in_blk">
                  <h6>City</h6>
                  <ul className="ctg_lst">
                    {cities.map((city, key) => (
                      <li key={key}>
                        <label>
                          <input
                            type="checkbox"
                            value={city.city}
                            id={city.city}
                            name="city"
                            onChange={handleCityChange}
                            checked={citiesFilter[city.city]}
                          />
                          {city.city} <span>({city.count})</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="in_blk">
                  <h6>Job Type</h6>
                  <ul className="ctg_lst">
                    {types.map((type, key) => (
                      <li key={key}>
                        <label>
                          <input
                            type="checkbox"
                            value={type.type}
                            id={type.type}
                            name="job_type"
                            onChange={handleTypesChange}
                            checked={tpyesFilter[type.type]}
                          />
                          {type.type} <span>({type.count})</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="top_head">
                <div className="txt">
                  <h3>Search Jobs</h3>
                  <p>
                    {jobs.length == 0
                      ? "0 record."
                      : jobs.length + " record(s) found."}
                  </p>
                </div>
                <div className="btn_blk">
                  <select
                    name="sort_by"
                    value={sortBy}
                    className="input"
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="">Sort by</option>
                    <option value="desc">Newest Listings</option>
                    <option value="asc">Oldest Listings</option>
                  </select>
                </div>
              </div>
              <JobListings jobs={jobs} isSearching={isSearching} />
            </div>
          </div>
          <div id="filter_btn_blk" className="btn_blk">
            <button
              type="button"
              id="filter_btn"
              className="site_btn auto"
              onClick={toggleFilter}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/icon-slider.svg"}
                alt=""
              />
              View Filters
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobList;
