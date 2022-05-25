import React from "react";
import TeamBlock from "../../common/TeamBlock";

function Team({ data }) {
  const { content, team } = data;
  return (
    <>
      <section id="team">
        <div className="contain text-center">
          <div className="content">
            <h1>{content.ot_heading}</h1>
          </div>
          <div className="main_row flex_row">
            {team.map((t) => {
              return (
                <div className="col" key={t.id}>
                  <TeamBlock {...t} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
