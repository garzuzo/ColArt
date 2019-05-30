import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class CategoryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: "", name: "", miniDescription: "", description: "", historyImage: "", historyDescription: "", funFactsImage: "", funFactsDescription: "",
            motivationImage: "", motivationDescription: ""
        }
    }

    handleAction(e) {
        e.preventDefault();
       
        let category = {
            
            image: this.state.image, 
            name: this.state.name, 
            miniDescription: this.state.miniDescription, 
            description: this.state.description, 
            historyImage: this.state.historyImage, 
            historyDescription: this.state.historyDescription, 
            funFactsImage: this.state.funFactsImage, 
            funFactsDescription: this.state.funFactsDescription,
            motivationImage: this.state.motivationImage, 
            motivationDescription: this.state.motivationDescription
        }
        //si esta en la bd se va a editar
        //let user= Meteor.user()
        
        let catLooking= Meteor.call('categories.findByName',category.name);

        if (catLooking) {
            console.log("existe")
            this.updateCategory(category)
        }
        //si no esta se va a crear
        else {
            console.log("no existe")
            this.createCategory(category)
            
        }
    }

    createCategory(category){
        let num = Math.floor(Math.random() * (15000 - 1)) + 1;
        Meteor.call('categories.insert',category, (err)=>{
            if(err){
                alert("Ocurrió un error. Intentalo de nuevo.")
            }else{
                alert("Categoría creada exitosamente")
            }
        });
        window.location = '/Administracion';
    }

    updateCategory(category){
        Meteor.call('categories.update',category, category.name, (err)=>{
            if(err){
                alert("Ocurrió un error. Intentalo de nuevo.")
            }else{
                alert("Categoría actualizada exitosamente")
            }
        });       
        window.location = '/Administracion';
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {

        console.log(this.props.category)
        if(this.props.category){
            this.setState({
                image: this.props.category.image, 
                name: this.props.category.name, 
                miniDescription: this.props.category.miniDescription, 
                description: this.props.category.description, 
                historyImage: this.props.category.historyImage, 
                historyDescription: this.props.category.historyDescription, 
                funFactsImage: this.props.category.funFactsImage, 
                funFactsDescription: this.props.category.funFactsDescription,
                motivationImage: this.props.category.motivationImage, 
                motivationDescription: this.props.category.motivationDescription
         });
        }
      }

    render() {
        return (
            <div className="CategoryForm container">
                <form onSubmit={this.handleAction.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="image">Imagen</label>
                        <input type="text" className="form-control" id="image" name="image" value={this.state.image} onChange={this.handleOnChange.bind(this)} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleOnChange.bind(this)} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="miniDescription">Mini Descripción</label>
                        <input type="text" className="form-control" id="miniDescription" name="miniDescription" value={this.state.miniDescription} onChange={this.handleOnChange.bind(this)} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Descripción</label>
                        <input type="text" className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleOnChange.bind(this)} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="historyImage">Imagen de la historia</label>
                        <input type="text" className="form-control" id="historyImage" name="historyImage" value={this.state.historyImage} onChange={this.handleOnChange.bind(this)} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="historyDescription">Historia</label>
                        <input type="text" className="form-control" id="historyDescription" name="historyDescription" value={this.state.historyDescription} onChange={this.handleOnChange.bind(this)} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="funFactsImage">Imagen de datos curiosos</label>
                        <input type="text" className="form-control" id="funFactsImage" name="funFactsImage" value={this.state.funFactsImage} onChange={this.handleOnChange.bind(this)} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="funFactsDescription">Datos curiosos</label>
                        <input type="text" className="form-control" id="funFactsDescription" name="funFactsDescription" value={this.state.funFactsDescription} onChange={this.handleOnChange.bind(this)} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="motivationImage">Imagen de la motivación</label>
                        <input type="text" className="form-control" id="motivationImage" name="motivationImage" value={this.state.motivationImage} onChange={this.handleOnChange.bind(this)} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="motivationDescription">Motivación</label>
                        <input type="text" className="form-control" id="motivationDescription" name="motivationDescription" value={this.state.motivationDescription} onChange={this.handleOnChange.bind(this)} required />
                    </div>

                    <button type="submit" className="btn btn-primary mb-2">Enviar</button>
                </form>
            </div>
        );
    }
}

export default CategoryForm;
