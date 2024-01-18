import './MainContainer.css';

const MainContainer = () => {

  return (
    <>
        <main className="mainApp">
              <div className="mainCenter">
                  <section className="section sectionUm">
                    <div className="mainSectionsBox secUm">
                      <h2>DESIGNER</h2>
                      <p>Criamos o seu Design com a cara do seu negócio,  marcando o mundo digital.</p>
                      <button>Whatssap</button>
                    </div>
                    <div className="mainSectionsBox">
                        <img className='imgSecUm' src="/perfil.png" alt="" />
                    </div>
                    <div className="mainSectionsBox secUmDois">
                      <h2>&lt;CODER&gt;</h2>
                      <p>Desenvolvemos seu site a partir do Design que é a cara do seu empredimento.</p>
                      <div className="sectionUmSocial">
                        <img src="/Insta.png" alt="Instagram" />
                        <img src="/GitHub.png" alt="GitHub" />
                        <img src="/TikTok.png" alt="TikTok" />
                      </div>
                    </div>
                  </section>
                  <section className="section sectionDois">
                    <div className="mainSectionsBox secDois">
                      <h2>SEÇÃO</h2>
                      <p>Paragrafo</p>
                    </div>
                    <div className="mainSectionsBox">
                      
                    </div>
                  </section>
                  <section className="section sectionTres">
                    <div className="mainSectionsBox secTres">
                      <h2>SEÇÃO</h2>
                      <p>Paragrafo</p>
                    </div>
                    <div className="mainSectionsBox">
                      
                    </div>
                </section>
              </div>
        </main>
    </>
  )
}

export default MainContainer;