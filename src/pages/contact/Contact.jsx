import { Leftside, Footer } from "../../global"
import { Header } from "../header"


import { AppProvider } from './AppContext';
import MyForm from './MyForm';

export function Contact(){
  return(
    <div className="container">
      <Leftside/>
      <div className="right-1">
        <div className="right-001"></div>
        <Header/>
        <div class="right-2">
<div class="right-3">   
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