import { Header } from "../header/Header";
import { Footer, Leftside, SubscribeForm  } from "../../global";

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
                            <div className="kvara_title_name">ხვიჩა</div>
                            <div className="kvara_title_lastname">კვარაცხელია</div>
                        </div>

                        <div className="first_info_items">
                            <span className="first_info_item_first_text">ასაკი: 22</span>
                            <span className="age_icon"></span>

                            <span className="first_info_item_first_text">კლუბი: ნაპოლი</span>
                            <span className="club_icon"></span>

                            <span className="first_info_item_first_text">ქვეყანა: საქართველო</span>
                            <span className="country_icon"></span>
                        </div>
                        <div className="second_info_items">
                            <span className="first_info_item_first_text">მატჩი: 27</span>
                            <span className="match_icon"></span>

                            <span className="first_info_item_first_text">გოლი: 13</span>
                            <span className="goal_icon"></span>

                            <span className="first_info_item_first_text">ასისტი: 12</span>
                            <span className="assist_icon"></span>

                            <span className="first_info_item_first_text">ბარათები:  &nbsp; &nbsp; &nbsp;
                            <span className="cards_icon"></span>  
                            0 <span className="yellow_Card"></span>
                            &nbsp; &nbsp;
                            0 <span className="red_Card"></span>
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
