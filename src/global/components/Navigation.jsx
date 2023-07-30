
import { Link, useLocation } from 'react-router-dom'
export function Navigation(props) {
  const {  langs, language } = props;
  let location = useLocation();
  return (
   
 
    <div className="outer-menu-top">
<div className="outer-menu">
<input className="checkbox-toggle" type="checkbox"/>
<div className="hamburger">
<div></div>
</div>
<div class="menu">
<div><div>
<div id="cssmenu">

<ul>
        <li className={(!location.pathname || location.pathname === '/') ? 'active' : ''}>
          <Link to="/" >
            {langs[language].pages.home.title}
          </Link>
        </li>
        <li className={location.pathname === '/biography' ? 'active' : ''}>
          <Link to="/biography" >
            {langs[language].pages.biography.title}
          </Link>

        </li>
        
        <li className={location.pathname === '/video' ? 'active' : ''}>
          <Link to="/video" >
            {langs[language].pages.video.title}
          </Link>
        </li>
        
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact" >
            {langs[language].pages.contact.title}
          </Link>
        </li>
       
      </ul>     
      
</div>
</div>
</div>  
</div>  
</div>  
</div>



   
  )
}