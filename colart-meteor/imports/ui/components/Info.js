import React, { Component } from 'react';

class Info extends Component {
  render() {
    var styles={ width:'300px',
        height:'300px',
        borderRadius:'150px',
    marginLeft:'25px',
    };

    var founders={
      width:'150px',
        height:'150px',
        borderRadius:'150px',
      marginLeft:'25px'
    };

    var divs={
      display: 'inline-block',
      marginLeft:'55px'
    };
    return (
      <div className="Info container mr-5">
     <img src="https://scontent.fclo2-1.fna.fbcdn.net/v/t1.0-9/59350699_2300165483605651_6684197632136445952_n.png?_nc_cat=101&_nc_ht=scontent.fclo2-1.fna&oh=85c0ba06a5ffaba9cd7f37699ebe4a37&oe=5D6373FD" className="img-responsive" style={styles}></img>
    
      <br></br>
      <h1>SOBRE NOSOTROS</h1>
      <p>ColArt es una iniciativa empresarial de la Universidad ICESI con el fin de permitir
         al artista afiliarse a nuestra plataforma teniendo servicios a disposición como 
         apoyo audiovisual y convenios con lugares. Además tienen la posibilidad de recibir donaciones por parte de usuarios inscritos a la plataforma.
         <br></br>
         Por lo anterior, se reduce la ansiedad de los artistas de buscar un público para ser reconocido, 
         ahorra tiempo y simplifica la forma de promocionarse y de promocionar los eventos,
         además permite obtener mayores ganancias con la visualización de arte por un público más amplio.</p>
         <br></br>
        <h1>FUNDADORES</h1>
        <div style={divs}>
        <img src="https://media.licdn.com/dms/image/C4E03AQFxc2k6X8Y5uw/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=yQvyoJjC4n6Vxs8DB9A1m18gO2fLC82YnlaVdF7VwyM" className="img-responsive" style={founders}></img>
        <br></br>
        <br></br>
        <h3>SANDRA NIÑO</h3>
        <h6>Estudiante de Ingeniería de Sistemas</h6>
        <h6>CTO y Comercial</h6>
        </div>

        <div style={divs}>
        <img src="https://media.licdn.com/dms/image/C4E03AQFu9pnJhdAjbQ/profile-displayphoto-shrink_800_800/0?e=1563408000&v=beta&t=-4nhW4UDj6Ozv0aa6LkdqZ6lxMROQs0g-uX2rLidEBQ" className="img-responsive" style={founders}></img>
        <br></br>
        <br></br>
        <h3>JOHNATAN GARZÓN</h3>
        <h6>Estudiante de Ingeniería de Sistemas</h6>
        <h6>CTO y Financiero</h6>
        </div>
        
        <br></br>
        <br></br>
        <h1>REDES SOCIALES</h1>
        <h4> ¡Siguenos en Facebook! <a className="nav-link" href="https://www.facebook.com/colartco/" target="_blank">https://www.facebook.com/colartco/</a></h4> 
        <br></br>
        <h1>CONTACTÁNOS</h1>
        <form>
        <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
    <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre"/>
  </div>
        <div className="form-group">
        <label htmlFor="correo">Correo electrónico</label>
    <input type="email" className="form-control" id="correo" placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label htmlFor="arte">Arte al que desearía pertenecer</label>
    <select className="form-control" id="arte">
      <option>Música</option>
      <option>Pintura</option>
      <option>Danza</option>
      <option>Teatro</option>
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="mensaje">Cuentános qué desearías saber</label>
    <textarea className="form-control" id="mensaje" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Enviar</button>
</form>
      </div>
    );
  }
}

export default Info;
