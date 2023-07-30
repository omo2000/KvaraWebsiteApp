import { Leftside, Footer } from "../../global"
import { Header } from "../header"


import { AppProvider } from './AppContext';
import MyForm from './MyForm';

export function Contact(){
  return(
    <div className="container">
      <Leftside/>
      <div className="rightside">
        <div className="blue_lines"></div>
        <Header/>
        <div class="content_container">
<div class="content_inner">   
<div className="contact_title">შეტყობინების გაგზავნა</div>
<div className="cont_info_cont">
    
<AppProvider>
      <MyForm />
    </AppProvider>

    </div>
 </div>
 </div>

      </div>

      <Footer />
    </div>
  )
}