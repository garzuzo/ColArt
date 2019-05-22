import React, { Component } from 'react';


class Payment extends Component {
  render() {
    var styles = {
      width: '300px',
      height: '300px',
      border: '150px',
      marginLeft: '5px',
      marginTop: '5px'
    };
    return (
      <div className="Payment">
        <div className="text-center">
          <h1>Se parte de ColArt con planes diseñados para ti</h1>


          <button type="button" className="btn btn-secondary  btn-lg" style={styles}>
            <h3>Free</h3>
            <div className="container ml-4">
            <div className="row">
            <h6><i className="fa fa-check"></i>Perfil en la plataforma</h6>
            </div>
            </div>
          </button>

          <button type="button" className="btn btn-success btn-lg" style={styles}>
            <h3>Premium</h3>
            <h4>$70.000</h4>



            <div className="container ml-4">
              <div className="row">
                <h6><i className="fa fa-check"></i>Perfil en la plataforma</h6>
              </div>
              <div className="row">
                <h6><i className="fa fa-check"></i>Apoyo audiovisual</h6>
              </div>

              <div className="row">
                <h6><i className="fa fa-check"></i>Recomendación de artistas</h6>
              </div>
              <div className="row">
                <h6><i className="fa fa-check"></i>Convenios con lugares</h6>
              </div>
              <div className="row">
                <h6><i className="fa fa-check"></i>Crowdfunding</h6>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Payment;
