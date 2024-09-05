import "../componentes/logo.css"
import foto1 from "../foto-logo/python1.png"
import foto2 from "../foto-logo/bootstrap2.png"
import foto3 from "../foto-logo/css.png"
import foto4 from "../foto-logo/flask.svg"
import foto5 from "../foto-logo/html.png"
import foto6 from "../foto-logo/javascript.png"
import foto7 from "../foto-logo/npm.svg"
import foto8 from "../foto-logo/react4.png"
import foto9 from "../foto-logo/tais.png"



export function Logo(){
    return(
        <>
        
         <div className="wrapper">
            
            <div className="item item1"><img src={foto1} alt="" /></div>
            <div className="item item2"><img src={foto2} alt=""  /></div>
            <div className="item item3"><img src={foto3} alt="" /></div>
            <div className="item item4"><img src={foto4} alt="" /></div>
            <div className="item item5"><img src={foto5} alt="" /></div>
            <div className="item item6"><img src={foto6} alt="" /></div>
            <div className="item item7"><img src={foto7} alt="" /></div>
            <div className="item item8"><img src={foto8} alt="" /></div>
            <div className="item item9"><img src={foto9} alt="" /></div>
            
            
            </div>
            <br />
            <br />

        
           
    
            
        </>
        
        
        
    )

}
export default Logo