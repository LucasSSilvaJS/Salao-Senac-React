import Header from "../../components/Header";
import imgHome from '../../assets/img.home.png';
import MenuItem from "../../components/MenuItem";
import { FaPeopleGroup } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { FaInfoCircle, FaPlusCircle } from "react-icons/fa";
import Footer from "../../components/Footer";
import { useState } from "react";

function Home() {
  const [location, setLocation] = useState('')

  const handleSelect = (e) => {
    const value = e.target.value;
    setLocation(value);
  };

  return (
    <>
      <Header setValue={handleSelect} value={location}/>
      <main className="w-100 d-flex flex-column align-items-center">
        <div className="container row w-100" style={{ marginTop: '100px', marginBottom: '100px' }}>
          <div className="col-12 col-lg-6">
            <img src={imgHome} alt="Pessoa sendo atendida" className="img-fluid"/>
          </div>
          <div className="col-12 col-lg-6">
            <div class="row">

              <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                <MenuItem ableText={true} mainText='Clientes' textOrange='41'>
                  <FaPeopleGroup size={25} color="var(--color-orange)" />
                </MenuItem>
              </div>

              <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                <MenuItem mainText='Realizar agendamento'>
                  <FaPlusCircle size={25} color="var(--color-orange)" />
                </MenuItem>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                <MenuItem mainText='Login' to='/menu'>
                  <FiLogIn size={25} color="var(--color-orange)" />
                </MenuItem>
              </div>
              <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                <MenuItem mainText='Realizar cadastro'>
                  <FaPlusCircle size={25} color="var(--color-orange)" />
                </MenuItem>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                <MenuItem mainText='Consultar Agendamento'>
                  <FaInfoCircle size={25} color="var(--color-orange)" />
                </MenuItem>
              </div>
              <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                <MenuItem mainText='Feedback'>
                  <FaPlusCircle size={25} color="var(--color-orange)" />
                </MenuItem>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer location={location === 'Unidade de Pernambuco' ? 'Pernambuco - Av. Visconde de Suassuna, 500 - Santo Amaro - Recife' : 'Nenhuma localização selecionada'}/>
    </>
  );
}

export default Home;