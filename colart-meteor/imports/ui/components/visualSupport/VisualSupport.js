import React, { Component } from 'react';

class VisualSupport extends Component {
  render() {
    var styles={ width:'150px',
    height:'150px',
    borderRadius:'150px',
marginLeft:'10px',
};
    return (
      <div className="VisualSupport container text-center">
<h2>¡Arma tu equipo para tu proyecto audiovisual!</h2>
               
                
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="radio1" name="defaultRadio" />
  <label className="form-check-label" htmlFor="radio1">
  <div>
    <img src="https://images.pexels.com/photos/2250407/pexels-photo-2250407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-responsive" style={styles}/>
  <h3>Camila Goméz- Maquilladora</h3>
<h5>Valor: $60.000</h5>
</div>
  </label>  
</div>

<br></br>
<br></br>

<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="radio2" name="defaultRadio" />
  <label className="form-check-label" htmlFor="radio2">
  <div>
    <img src="https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-responsive" style={styles}/>
  <h3>Juan Madriñan- Camarografo</h3>
<h5>Valor: $100.000</h5>
</div>
  </label>  
</div>

<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="radio3" name="defaultRadio" />
  <label className="form-check-label" htmlFor="radio3">
  <div>
    <img src="https://images.pexels.com/photos/34199/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-responsive" style={styles}/>
  <h3>Valentina Lopez - Edición</h3>
<h5>Valor: $50.000</h5>
</div>
  </label>  
</div>

<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="radio4" name="defaultRadio" />
  <label className="form-check-label" htmlFor="radio4">
  <div>
    <img src="https://images.pexels.com/photos/53265/pexels-photo-53265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-responsive" style={styles}/>
  <h3>Daniel Lopez - Iluminación</h3>
<h5>Valor: $90.000</h5>
</div>
  </label>  
</div>

<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="radio5" name="defaultRadio" />
  <label className="form-check-label" htmlFor="radio5">
  <div>
    <img src="https://images.pexels.com/photos/1694348/pexels-photo-1694348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-responsive" style={styles}/>
  <h3>Daniel Villamarin - Efectos especiales</h3>
<h5>Valor: $100.000</h5>
</div>
  </label>  
</div>

<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="radio6" name="defaultRadio" />
  <label className="form-check-label" htmlFor="radio6">
  <div>
    <img src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-responsive" style={styles}/>
  <h3>Camila Gonzales - Productora</h3>
<h5>Valor: $200.000</h5>
</div>
  </label>  
</div>
      </div>
    );
  }
}

export default VisualSupport;