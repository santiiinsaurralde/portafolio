import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import tele from '../foto-logo/tele.png'
import lin from '../foto-logo/linkedin.png'
import git from '../foto-logo/github.png'
import "./index.css"

export function Email() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fsg5is4",
        "template_2p73r6k",
        form.current, {
          publicKey:
            "byoE89pVag4oxUzge"
      })
      .then(
        (result) => {
          console.log(result.text);
          alert("email enviado");
        },
        (error) => {
          console.log(error.text);
          alert("el email no pudo ser entregado");
        }
      );
  };

  return (
    <>
      <header>



        <form ref={form} onSubmit={sendEmail} className="contact-form">


          <div className="gran">
            <div className="center padded">
              <div className="row vert-pad">
                <div className="left padded">
                  <h1>Trabajamos juntos!!</h1>
                  <p>
                    Dare mi mejor esfuerzo para aprender y mejorar, aportar valor y
                    respeto para que tengamos una exelente relacion
                  </p>
                  
                     <div className="abajo">

                      <a  target="_blank" href="https://t.me/Santiinsa"><img className="lo" src={tele} /> </a>
                    
                      <a target="_blank" className="fab fa-twitter icon" href="https://github.com/santiiinsaurralde"> <img className="lo" src={git} /></a>
                   
                      <a target="_blank" className="fab fa-linkedin-in icon" href="https://www.linkedin.com/in/santiago-insaurralde-9baa60226/"> <img className="lo" src={lin} /></a>
                   </div>  


                  
                </div>




                <div id="contacto" className="email">


                  <div className="contact-form">
                    <div className="input-field" >

                      <input
                        spellcheck="false"
                        type="text"
                        name="user_name"
                        required />
                      <label>nombre</label>
                    </div>

                    <div className="input-field">
                      <input
                        spellcheck="false"
                        type="email"
                        name="user_email"
                        required />
                      <label>email</label>

                    </div>
                    <div className="input-field">
                      <textarea name="message" required ></textarea>
                      <label>mensaje</label>
                    </div>


                    <div className="">
                      <div className="btnna">
                        <button
                          type="submit"
                          value="enviar email"
                        >enviar</button>
                      </div>


                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>

      </header>

    </>
  )
}
export default Email