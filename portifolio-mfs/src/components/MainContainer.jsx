import './MainContainer.css';

const MainContainer = () => {

  return (
    <>
        <main className="mainApp">
              <div className="mainCenter">
                  <section className="section sectionUm">
                    <div className="mainSectionsBox secUm">
                      <h2>MEU SITE AQUI</h2>
                      <p>Paragrafo</p>
                      <button>Whatssap</button>
                    </div>
                    <div className="mainSectionsBox">
                        <img className='imgSecUm' src="/vite.svg" alt="" />
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