import { Header } from "../header/Header";
import { Footer, Leftside, SubscribeForm  } from "../../global";

export function Home() {
    return (
        <div className="container">
            <Leftside />

            <div className="right-1">
                <div className="right-001"></div>
                <Header />

                <div className="right-2">
                    <div className="right-3">
                        <div className="right-4">
                            <div className="right-5">ხვიჩა</div>
                            <div className="right-6">კვარაცხელია</div>
                        </div>

                        <div className="right-7">
                            <span className="right-9">ასაკი: 22</span>
                            <span className="right-8"></span>

                            <span className="right-9">კლუბი: ნაპოლი</span>
                            <span className="right-08"></span>

                            <span className="right-09 right-9">ქვეყანა: საქართველო</span>
                            <span className="right-008"></span>
                        </div>
                        <div className="right-0007">
                            <span className="right-9">მატჩი: 27</span>
                            <span className="match_icon"></span>

                            <span className="right-9">გოლი: 13</span>
                            <span className="goal_icon"></span>

                            <span className="right-09 right-9">ასისტი: 12</span>
                            <span className="assist_icon"></span>

                            <span className="right-09 right-9">ბარათები:  &nbsp; &nbsp; &nbsp;
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
