import React from "react";
import Image from "../common/Image";
import ImageControl from "../common/ImageControl";

function TeamBlock(t) {
  return (
    <>
      <div className="team_blk">
        <div className="fig">
          <ImageControl folder="team" src={t.image} specificWidth="200p_" />
        </div>
        <div className="txt">
          <h5>{t.name} </h5>
          <p>{t.designation} </p>
          <ul className="social_links">
            <li>
              <a href={t.facebook_link} target="_blank" rel="noreferrer">
                <img src="/images/social-facebook.svg" alt="" />
              </a>
            </li>
            <li>
              <a href={t.instagram_link} target="_blank" rel="noreferrer">
                <img src="/images/social-instagram.svg" alt="" />
              </a>
            </li>
            <li>
              <a href={t.youtube_link} target="_blank" rel="noreferrer">
                <img src="/images/social-youtube.svg" alt="" />
              </a>
            </li>
            <li>
              <a href={t.twitter_link} target="_blank" rel="noreferrer">
                <img src="/images/social-twitter.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TeamBlock;
