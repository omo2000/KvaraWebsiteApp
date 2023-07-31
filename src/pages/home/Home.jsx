import { Header } from "../header/Header";
import { Footer, Leftside, SubscribeForm  } from "../../global";

import home from '../../global/langs/home.json'

export function Home() {
    return (
        <div className="container">
            <Leftside />

            <div className="rightside">
                <div className="blue_lines"></div>
                <Header />

                <div className="content_container">
                    <div className="content_inner">
                        <div className="kvara_title">
                            <div className="kvara_title_name">{home.kvicha_firstname}</div>
                            <div className="kvara_title_lastname">{home.kvicha_lastname}</div>
                        </div>

                        <div className="first_info_items">
                            <span className="first_info_item_first_text">{home.age_title}: {home.age}</span>
                            <span className="age_icon"></span>

                            <span className="first_info_item_first_text">{home.club_title}: {home.club}</span>
                            <span className="club_icon"></span>

                            <span className="first_info_item_first_text">{home.country_title}: {home.country}</span>
                            <span className="country_icon"></span>
                        </div>
                        <div className="second_info_items">
                            <span className="first_info_item_first_text">{home.match_title}: {home.match}</span>
                            <span className="match_icon"></span>

                            <span className="first_info_item_first_text">{home.goal_title}: {home.goal}</span>
                            <span className="goal_icon"></span>

                            <span className="first_info_item_first_text">{home.assist_title}: {home.assist}</span>
                            <span className="assist_icon"></span>

                            <span className="first_info_item_first_text">{home.cards_title}:  &nbsp; &nbsp; &nbsp;
                            <span className="cards_icon"></span>  
                            {home.yellow_card} <span className="yellow_Card"></span>
                            &nbsp; &nbsp;
                            {home.red_card} <span className="red_Card"></span>
                            </span>
                            
                        </div>

                        <div className="video">
                            <div className="video-2">
                            <iframe 
                            width="610" 
                            height="315" 
                            src="https://www.youtube.com/embed/3N0c2H2ZFH4" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                            ></iframe>
                            </div>
                        </div>

                        <SubscribeForm/>
                    </div>
                </div>

               
            </div>

            <Footer />
            
        </div>
    );
}
