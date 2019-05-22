import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import VisualSupport from '../visualSupport/VisualSupport.js'
class ServiceCard extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }
  
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

    
  render() {
    var styles={ width:'250px',
        height:'250px',
        borderRadius:'150px',
    marginLeft:'10px',
    };
    return (
    <div className="ServiceCard text-center mt-5">
<h1 className="mt-5">Servicios</h1>
<button type="button" className="btn btn-info" style={styles} >

<h3>Convenios con lugares</h3>
<h6>¡Conectate con establecimientos que apoyan el arte!</h6>
</button>

<button type="button" className="btn btn-info" style={styles} onClick={this.handleShow}>
<h3>Apoyo audiovisual</h3>
<h6>¡Realiza los videos más profesionales para demostrar lo bueno que eres!</h6>

</button>
<button type="button" className="btn btn-info" style={styles} >
<h3>Crowdfunding</h3>
<h6>¡No hay nada mejor que tener apoyo de tus fans #1!</h6>



    <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Apoyo Audiovisual</Modal.Title>
      </Modal.Header>
      <Modal.Body> <VisualSupport /> </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
          Cerrar
</Button>
        <Button variant="primary" onClick={this.handleClose}>
          Aceptar
</Button>
      </Modal.Footer>
    </Modal>
  












</button>
<button type="button" className="btn btn-info" style={styles}>
<h3>Recomendaciones</h3>
<h6>¡Recomienda a tus colegas preferidos!</h6>
</button>

    
     

     
      </div>
    );
  }
}

export default ServiceCard;
