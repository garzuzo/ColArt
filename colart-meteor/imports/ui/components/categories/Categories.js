import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
class Categories extends Component {


  constructor(props) {

    super(props);

    this.state = {
      categories: null,
      catList: []
    }
    this.loadData = this.loadData.bind(this);

  }

  componentDidMount() {

    this.loadData();
  }

  loadData() {
    let categoryMusic = {

      image: "https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Musica",
      miniDescription: "¡Descubre a los mejores talentos músicales!",
      description: "La música es el arte de organizar sensible y lógicamente una combinación coherente de sonidos y silencios respetando los principios fundamentales de la melodía, la armonía y el ritmo, mediante la intervención de complejos procesos psicoanímicos. El concepto de música ha ido evolucionando desde su origen en la Antigua Grecia, en que se reunía sin distinción a la poesía, la música y la danza como arte unitario.",
      historyImage: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      historyDescription: "Ya que en toda cultura conocida hubo alguna forma de manifestación musical, la historia de la música abarca todas las sociedades y épocas. No se limita,como es habitual en algunos ámbitos académicos a occidente. A menudo se utiliza la expresión «historia de la música» para referirse exclusivamente a la historia de la música europea y su evolución en el mundo occidental.",
      funFactsImage: "https://www.elcorreodemadrid.com/images/carpeta_relacionados/2019/03/16/20474_laboratorio_de_intonarumori.jpg",
      funFactsDescription: "El futurismo fue uno de los movimientos iniciales de vanguardia en la Europa del Siglo XX. Esta corriente artística fue fundada en Italia por el poeta italiano Filippo Tommaso Marinetti, quien redacta el Manifiesto Futurista, y lo publica el 20 de febrero de 1909 en el diario Le Figaro de París.",
      motivationImage: "https://images.pexels.com/photos/953213/pexels-photo-953213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      motivationDescription: "Debemos hacer que el ciudadano sienta y vea las bondades de la clase de música, de lo contrario él seguirá pensando (sintiendo) que, si bien eso lo ayuda o podría ayudarlo, nadie debe tomar decisiones afectivas por él. Este es el estricto punto de la cuestión: el afecto, lo emocional, los sentimientos. La idea es partir del afecto y no de la técnica."

    }
    Meteor.call('categories.insert', categoryMusic);
    /*  let categoryDance = {
 
       image: "https://images.pexels.com/photos/576801/pexels-photo-576801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       name: "Danza",
       miniDescription: "¡Baila, Baila y no pares de bailar con los mejores bailarines!",
       description:"",
       historyImage: "",
       historyDescription: "",
       funFactsImage: "",
       funFactsDescription: "",
       motivationImage: "",
       motivationDescription: ""
 
     }
     Meteor.call('categories.insert',categoryDance);
 
     let categoryPainting = {
 
       image: "https://images.pexels.com/photos/1882309/pexels-photo-1882309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       name: "Pintura",
       miniDescription: "¡Conoce las obras artísticas más auténticas!",
       description:"",
       historyImage: "",
       historyDescription: "",
       funFactsImage: "",
       funFactsDescription: "",
       motivationImage: "",
       motivationDescription: ""
 
     }
     Meteor.call('categories.insert',categoryPainting);
     let categoryTeather = {
 
       image: "https://images.pexels.com/photos/1028957/pexels-photo-1028957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
       name: "Teatro",
       miniDescription: "¡Experimenta los expertos en artes escénicas!",
       description:"",
       historyImage: "",
       historyDescription: "",
       funFactsImage: "",
       funFactsDescription: "",
       motivationImage: "",
       motivationDescription: ""
 
     }
     Meteor.call('categories.insert',categoryTeather); */

    Meteor.call("categories.findAll", (err, res) => {

      if (res) {

        this.setState({ categories: res });

        var categories = this.state.categories;

        var categoryList = [];
        if (categories) {


          let styles = {
            width: '350px',
            height: '350px',
            // borderRadius: '150px',
            //  marginLeft: '25px',
      
          };
          for (var i = 0; i < categories.length; i++) {
    
            categoryList.push(<div className="col-sm" key={categories[i].name}>
    
              <Link className="nav-link" to={"/Category/" + categories[i].name}>
    
                <img style={styles} src={categories[i].image} />
                <h3>{categories[i].name}</h3>
                <h6>{categories[i].miniDescription}</h6>
              </Link>
    
    
            </div>)
    
          }
          this.setState({ catList: categoryList });
         
        }
      


      }

    })
  }

  render() {
    var styles = {
      width: '350px',
      height: '350px',
      // borderRadius: '150px',
      //  marginLeft: '25px',

    };

    var withoutPadding = {
      padding: '0'
    };
    var hide = {
      display: 'none'
    }


   



    return (
      <div className="Categories text-center">
        <h1>Conoce los diferentes tipos de entretenimiento artístico y cultural</h1>

        <div className="container">

          <div className="row">

            {this.state.catList}




          </div>
        </div>

      </div>
    );
  }
}

export default Categories;
