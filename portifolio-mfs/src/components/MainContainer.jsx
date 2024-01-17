import { useState } from "react";
import './MainContainer.css';

const MainContainer = () => {

  const [users] = useState([
    {id: 1, name: "MEU SITE AQUI", paragrafo: "Esse é nosso site de protótico" },
    {id: 2, name: "SERVIÇOS", paragrafo: "Esse é nosso site de protótico" },
    {id: 3, name: "SOBRE A EMPRESA", paragrafo: "Esse é nosso site de protótico" },

  ])
  return (
    <>
        <main className="mainApp">
              <div className="mainCenter">
                {users.map((user, i) => (
                  <section className={`mainSections ${i === 0 ? 'sectionUm' : i === 1 ? 'sectionDois' : 'sectionTres'}`} key={user.id}>
                    <div className="mainSectionsBox">
                      <h2 className="itemTitle">{user.name}</h2>
                      <p className="itemParagrafo">{user.paragrafo}</p>
                    </div>
                  </section>
                ))}
              </div>
        </main>
    </>
  )
}

export default MainContainer;