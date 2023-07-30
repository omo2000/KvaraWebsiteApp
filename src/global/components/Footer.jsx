import { Link } from "react-router-dom"

export function Footer(){
    return(
            <footer className="footer">
                <div className="border_line"></div>
                <div className="footer_cont">
                    <h3 className="footer_info">© კვარას ფან-კლუბი 2023 </h3>
                    <h3 className="createby">Created by:<Link to="">OMO</Link></h3>
                </div>
            </footer>

        )
}