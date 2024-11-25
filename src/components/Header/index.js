import React from 'react';
import logo from '../../assets/logo.senac.svg';
import { Link } from 'react-router-dom';

function Header({setValue, value}) {
  const unidades = [
    'Unidade de Acre',
    'Unidade de Amapá',
    'Unidade de Amazonas',
    'Unidade de Pará',
    'Unidade de Rondônia',
    'Unidade de Roraima',
    'Unidade de Tocantins',
    'Unidade de Alagoas',
    'Unidade de Bahia',
    'Unidade de Ceará',
    'Unidade de Maranhão',
    'Unidade de Paraíba',
    'Unidade de Pernambuco',
    'Unidade de Piauí',
    'Unidade de Rio Grande do Norte',
    'Unidade de Sergipe',
    'Unidade de Paraná',
    'Unidade de Rio Grande do Sul',
    'Unidade de Santa Catarina',
    'Unidade de Espirito Santo',
    'Unidade de Minas Gerais',
    'Unidade de Rio de Janeiro',
    'Unidade de São Paulo',
    'Unidade de Distrito Federal',
    'Unidade de Goiás',
    'Unidade de Mato Grosso',
    'Unidade de Mato Grosso do Sul',
  ].sort();

  return (
    <nav className="navbar navbar-expand-lg bg-very-light-blue">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="100" />
        </Link>
        <div className="form-group m-auto">
          <select
            id="select-unidades"
            className="form-select w-100 bg-light-blue text-white fw-bold"
            style={{ maxWidth: '250px'}}
            onChange={setValue}
            value={value || ''}
          >
            <option value="" disabled>
              Selecione uma unidade
            </option>
            {unidades.map((unidade, index) => (
              <option key={index} value={unidade} disabled={unidade === 'Unidade de Pernambuco' ? false : true}>
                {unidade}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Header;
