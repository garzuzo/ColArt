import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CategoryDetail extends Component {
  render() {
    return (
      <div className="CategoryDetail">

        <h1 className="text-center">Música</h1>



        <div className="container">

          <h2>Historia</h2>

          <div className="row">
            <div className="col-sm">
              <img src="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />

            </div>
            <div className="col-sm">
              <p>Ya que en toda cultura conocida hubo alguna forma de manifestación musical, la historia de la música abarca todas las sociedades y épocas. No se limita,como es habitual en algunos ámbitos académicos a occidente. A menudo se utiliza la expresión «historia de la música» para referirse exclusivamente a la historia de la música europea y su evolución en el mundo occidental.</p>
            </div>


          </div>
          <h2>Datos curiosos </h2>


          <div className="row">
            <div className="col-sm">

              <img src="https://www.elcorreodemadrid.com/images/carpeta_relacionados/2019/03/16/20474_laboratorio_de_intonarumori.jpg" className="card-img-top" alt="..." />

            </div>
            <div className="col-sm">
              <p>El futurismo fue uno de los movimientos iniciales de vanguardia en la Europa del Siglo XX. Esta corriente artística fue fundada en Italia por el poeta italiano Filippo Tommaso Marinetti, quien redacta el Manifiesto Futurista, y lo publica el 20 de febrero de 1909 en el diario Le Figaro de París.</p>

            </div>


          </div>
          <h2>Motivación</h2>


          <div className="row">
            <div className="col-sm">
              <img src=" https://images.pexels.com/photos/953213/pexels-photo-953213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />

            </div>
            <div className="col-sm">
              <p>  Debemos hacer que el ciudadano sienta y vea las bondades de la clase de música, de lo contrario él seguirá pensando (sintiendo) que, si bien eso lo ayuda o podría ayudarlo, nadie debe tomar decisiones afectivas por él. Este es el estricto punto de la cuestión: el afecto, lo emocional, los sentimientos. La idea es partir del afecto y no de la técnica.</p>
            </div>


          </div>




        </div>



        <Link className="nav-link" to="/Category">
          <button className="btn btn-primary">Volver</button>
        </Link>
      </div>
    );
  }
}

export default CategoryDetail;
