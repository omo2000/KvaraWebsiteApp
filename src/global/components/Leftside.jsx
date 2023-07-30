import React from "react"
import { Link } from "react-router-dom"
import logo from '../../images/logo.svg'
import kvicha1 from '../../images/khvicha-1.png'
import icon_08 from '../../images/icon_08.png'

export function Leftside() {
    return(
        <div className="bg_left leftside_cont">
    <div className="logo-1">
        <Link to="/"><img src={logo} title="" alt="" /></Link>
    </div>
    <div className="left-2"><img src={kvicha1} title="" alt="" /></div>
   
    <div className="left-3">
        <div className="left-4"><img src={icon_08} title="" alt="" /></div>
        <div className="left-5">
            <div className="left-6"><Link to="#/">FOLLOW US</Link></div>
            <Link to="#/">
                <div className="left-soc-1"><i className="instagram"></i></div>
            </Link>
            <Link to="#/">
                <div className="left-soc-01 left-soc-1"><i className="facebook"></i></div>
            </Link>
        </div>
    </div>
    <div className="left-7">
        <div className="left-8"></div>
    </div>
</div>
    )
}