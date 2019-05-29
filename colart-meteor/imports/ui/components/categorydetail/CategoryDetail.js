import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CategoryDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: {}

    }

    this.findCategory = this.findCategory.bind(this);
  }

  findCategory() {
    Meteor.call('categories.findByName', this.props.match.params.catDetAct, (err, res) => {

      if (res) {
        this.setState({ category: res })
      }

    })
  }
  componentDidMount(){
    this.findCategory();
  }
  render() {
    return (
      <div className="CategoryDetail">

        <h1 className="text-center">{this.state.category.name}</h1>



        <div className="container">

          <h2>Historia</h2>

          <div className="row">
            <div className="col-sm">
              <img src={this.state.category.historyImage} className="card-img-top" alt="..." />

            </div>
            <div className="col-sm">
              <p>{this.state.category.historyDescription}</p>
            </div>


          </div>
          <h2>Datos curiosos </h2>


          <div className="row">
            <div className="col-sm">

              <img src={this.state.category.funFactsImage} className="card-img-top" alt="..." />

            </div>
            <div className="col-sm">
              <p>{this.state.category.funFactsDescription}</p>

            </div>


          </div>
          <h2>Motivación</h2>


          <div className="row">
            <div className="col-sm">
              <img src={this.state.category.motivationImage} className="card-img-top" alt="..." />

            </div>
            <div className="col-sm">
              <p>{this.state.category.motivationDescription}</p>
            </div>


          </div>




        </div>



        <Link className="nav-link" to={"/Category/"+this.props.match.params.catDetAct}>
          <button className="btn btn-primary">Volver</button>
        </Link>
      </div>
    );
  }
}

export default CategoryDetail;
