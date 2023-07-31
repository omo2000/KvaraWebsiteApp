
import { Header } from "../header";
import { Leftside } from "../../global";
import { Footer } from "../../global";
import biokvaraphoto from '../../images/bio_kvara_photo.png';
import { useState } from 'react';

import biography from '../../global/langs/biography.json'

export const Biography = () => {
  const [showFullText, setShowFullText] = useState(false);

  
  const bioText = biography.biography_text; 

              

  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="container">
      <Leftside />
      <div className="rightside">
        <div className="blue_lines"></div>
        <Header />
        <div className="content_container">
          <div className="content_inner">
            <div className="bio_info_cont">
              <div className="bio_in">
                <div className="bio_left">
                <ul className="bio_list">
                    <li className="bio_list_item">
                      {biography.borndate_title}
                      <span className="bio_item_span">{biography.born_date}</span>
                    </li>
                    <li className="bio_list_item">
                      {biography.bornplace_title}
                      <span className="bio_item_span">{biography.born_place}</span>
                    </li>
                    <li className="bio_list_item">
                      {biography.height_title}
                      <span className="bio_item_span">{biography.height}</span>
                    </li>
                    <li className="bio_list_item">
                      {biography.weight_title}
                      <span className="bio_item_span">{biography.weight}</span>
                    </li>
                    <li className="bio_list_item">
                      {biography.position_title}
                      <span className="bio_item_span">{biography.position}</span>
                    </li>
                  </ul>
                </div>
                <div className="bio_right">
                  <div className="bio_photo_cont">
                    <img src={biokvaraphoto} alt="" className="bio_photo" />
                  </div>
                </div>
              </div>
              <div className="break_line"></div>
              <div className="info-1">
                <div className="info-2">{biography.biography_title}</div>
                {showFullText ? (
                  <div>{bioText}</div>
                ) : (
                  <div>{bioText.slice(0, 150)}{bioText.length > 150 ? '...' : ''}</div>
                )}
                {bioText.length > 150 && (
                  <button className="readmore"onClick={handleReadMoreClick}>
                    {showFullText ? 'ნაკლების ნახვა' : 'მეტის ნახვა'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
