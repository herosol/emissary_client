import React from "react";

const JobFilter = ({ cities, types, cats, active, close }) => {
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
          <h6>Job Categories</h6>
          <ul className="ctg_lst">
            {cats.map((cat, key) => (
              <li key={key}>
                <label>
                  <input type="checkbox" value={cat.id} name="job_cat" />
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
                  <input type="checkbox" value={city.city} name="city" />
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
                  <input type="checkbox" value={type.type} name="job_type" />
                  {type.type} <span>({type.count})</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobFilter;
