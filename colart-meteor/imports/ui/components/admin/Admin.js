import React, { Component } from 'react';
import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm'
import { Modal } from 'react-bootstrap';
class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false, categories:[]
        }
    }

    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

      componentDidMount(){

        if(Meteor.userId()){
          console.log(Meteor.userId())
          Meteor.call('categories.findAll', (err, res) => {
            if (res){
                this.setState({
                    categories:res
                  })
            }
          });
        }
    }
    render() {

        return (
            <div className="Admin container">
                <h1 className="text-center" > Administrador</h1>
                <br></br>

                <h2>Categorías</h2>
                <CategoryList categories={this.state.categories}/>
                <button type="button" className="btn btn-info mt-3" onClick={this.handleShow.bind(this)}>Agregar categoría</button>
                <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crear Categoría</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <CategoryForm /> </Modal.Body>
                </Modal>

            </div>
        );
    }
}

export default Admin;