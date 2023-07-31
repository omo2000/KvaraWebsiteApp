import React from "react"
import { Link } from "react-router-dom"
import logo from '../../images/logo.svg'
import kvicha1 from '../../images/khvicha-1.png'
import icon_08 from '../../images/icon_08.png'
import home from '../../global/langs/home.json'




export function Leftside() {
    return(
        <div className="bg_left leftside_cont">
    <div className="logo-1">
        <Link to="/"><img src={logo} title="" alt="" /></Link>
    </div>
    <div className="main_kvara_pic"><img src={kvicha1} title="" alt="" /></div>
   
    <div className="leftbar_container">
        <div className="leftbar_kvara_pic"><img src={icon_08} title="" alt="" /></div>
        <div className="leftbar_contact_items">
            <div className="leftbar_follow_us"><Link to="#/">{home.follow_us}</Link></div>
            <Link to="#/">
                <div className="left-soc-1"><i className="instagram"></i></div>
            </Link>
            <Link to="#/">
                <div className="left-soc-01 left-soc-1"><i className="facebook"></i></div>
            </Link>
        </div>
    </div>
    <div className="leftside_bg_cover">
        
    </div>
</div>
    )
}