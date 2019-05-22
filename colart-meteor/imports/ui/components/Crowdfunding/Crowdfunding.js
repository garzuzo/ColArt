import React, { Component } from 'react';

class Crowdfunding extends Component {
  render() {
    var styles={ width:'300px',
    height:'300px',
    borderRadius:'150px',
marginLeft:'10px',
};
    return (
      <div className="Crowdfunding container">
<h1>¡Apoyame!</h1>

<div className="custom-control custom-radio custom-control-inline">
  <input type="radio" id="apoyame1" name="apoyame1" className="custom-control-input"/>
  <label className="custom-control-label" htmlFor="apoyame1">
  <div>
  <h3>Proyecto American Aliance</h3>
<h5>Ayudame a participar en un proyecto de una empresa de música americana</h5>
<h5>Valor: $25.000</h5>
<h5>Bono: Obten descuentos del 10% en mis proximos 5 eventos</h5>
</div>
  </label>
  
</div>

<br></br>
<br></br>

<div className="custom-control custom-radio custom-control-inline">
  <input type="radio" id="apoyame2" name="apoyame1" className="custom-control-input"/>
  <label className="custom-control-label" htmlFor="apoyame2">
  <div>
  <h3>Nuevo instrumento</h3>
<h5>Deseo ampliar mi reportorio de instrumentos</h5>
<h5>Valor: $5.000</h5>
<h5>Bono: ¿Foto? ¿Autografo? ¿ambos?</h5>
</div>
  </label>
  
</div>
      </div>
    );
  }
}

export default Crowdfunding;