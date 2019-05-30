import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class CategoryList extends Component {

    constructor(props){
        super(props);
        this.state={
            categories:[]
        }
    }

    componentDidMount(){
        
    }
    render() {
    console.log(this.props.categories);

   // let  categories = this.props.categories.map( (catTemp)=>
     //   (<CategoryItem key={catTemp.name} category={catTemp} />)
    //);
       
       let categories = [];

        for (var i = 0; i < this.props.categories.length; i++) {

            let catTemp = this.props.categories[i];            
            categories.push(
                <CategoryItem key={catTemp.name} category={catTemp}/> 
            )    
        }

        console.log(categories);
        return (
            <div className="CategoryList">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Imagen</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Mini Descripción</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {categories}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CategoryList;
