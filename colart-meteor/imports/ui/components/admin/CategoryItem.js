import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import CategoryForm from './CategoryForm'

class CategoryItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    deleteEvent() {
        console.log(this.props.id)
        Meteor.call('events.delete', this.props.artist, this.props.id, (err) => {
            if (err) {
                alert("Ocurrió un error. Intentalo de nuevo.")
            } else {
                alert("Evento eliminado exitosamente")
            }
        })
        window.location = '/MiPerfil';
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    
    render() {
        //var  event=this.props.event;
        var roundedImage= {
            width:'50px',
            height:'50px',
           // border-radius:'150px'
        }
        return (
            <div>
                <tr>
                    <th scope="row"><img src={this.props.category.image} style={roundedImage}/></th>
                    <td>{this.props.category.name}</td>
                    <td>{this.props.category.miniDescription}</td>
                    <td>{this.props.users}</td>
                    <td><button type="button" className="btn-sm btn-warning mr-3 mt-3" onClick={this.handleShow.bind(this)}>Editar categoría</button>
                    <button type="button" className="btn-sm btn-danger mt-3" onClick={this.deleteEvent.bind(this)}>Eliminar categoría</button>
                    </td>
                </tr>
                
                <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Categoría</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <CategoryForm category={this.props.category}/> </Modal.Body>
                </Modal>
                
            </div>
        );
    }

}

export default CategoryItem;
