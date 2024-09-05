import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web';
import styles from './styles.module.css';
//import image from '../src/assets/imagenn.png'


import "./App.css";


export function App() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 10,
      innerHeight: 0,
      transform: "perspective(100px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 85, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["javascript", "reatc", "python"]), 200)
    );
    ref.current.push(setTimeout(() => set(["insaurrlade", "santiago"]), 5000));
    ref.current.push(setTimeout(() => set(["desarrollo", "web"]), 8000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);



  return (
    <>

      <header >
        <div className={styles.container}>
          <div className={styles.main}>
            {transitions(({ innerHeight, ...rest }, item) => (
              <animated.div
                className={styles.transitionsItem}
                style={rest}
                onClick={reset}
              >
                <animated.div
                  style={{ overflow: "hidden", height: innerHeight }}
                >
                  {item}
                </animated.div>
              </animated.div>
            ))}
          </div>

        </div>
        <div className='ui'>

          <div className="fut">
            <div className="medio">
              <h1>SOBRE MI </h1>
              <br />
              <p>
                Tengo muchas ganas de arrancar en el mundo laborar, ya hacer un año que vengo estudiando y practicando distintos proyectos y distintos profesores, tengo mucha habilidad con JavaScript React y bueno Html , Css y Python lo mismo no se me hace problema el arrancar un nuevo lenguaje o Framework  ya que tengo buena base de programación me adapto a lo que se requiere , pero a sus ves tengo más habilidades  como el ser buen compañero y ayudar a la otra persona siempre y cuando pueda,
                Además me encuentro en varios servidores de discord en distintas comunidad de linkedin y youtube me gusta mucho saber qué piensas los demás y aprender de ellos y de su experiencia ademas mantenerme informado o emprender algo nuevo que es lo que más busco


              </p>
            </div>
          </div>
        </div>
     
        <div className="reve">
          <div className="center padded">
            <div className="content padded">
              <div className="padded">
                <h1 className='color'>Esto son los proyecto que construí:</h1>
              </div>
              <div className="reves">
            
                  <div className="third" >
                    <div className="container">
                      <span>
                        <h3>App clima </h3>
                        <p>
                          Una aplicacion que te dice el clima usando una API de
                          weather
                        </p>
                        <br />
                        <a
                          className="orange"
                          target="_blank"
                          href="https://app-clima-santi.netlify.app/"
                        >
                          link aqui
                        </a>
                      </span>
                      </div>
                 

                 
                    


                         <div className='container'>
                            <h3>Valor de Cripto</h3>
                            <p>una app para ver el precio de las criptomonedas en tiempo real</p>
                            <br />
                            <a className="orange"
                              target="_blank"
                              href="https://appcripto.netlify.app/"
                            >
                              link aqui
                            </a>
                            </div>

                  
                        
                 
                  <div className='container'>
                  
                   

                          <span>
                            <h3>Acortador de url</h3>
                            <p>
                              una app para acortar tus url usando una api de
                              bit.ly
                            </p>
                            <br />
                            <a
                              className="orange"
                              target="_blank"
                              href="https://cortar-url.netlify.app/"
                            >
                              link aqui
                            </a>
                          </span>
                       </div> 
                     

                       </div>
               
              </div>
            </div>
          </div>

        </div>



      </header>


    </>
  );
}

export default App;
