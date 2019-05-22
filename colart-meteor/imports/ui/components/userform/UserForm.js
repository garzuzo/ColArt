import React, { Component } from 'react';
class UserForm extends Component {
  render() {
    return (
      <div className="UserForm w-50 float-right">
  <form>
  <div className="form-group">
    <label forHtml="exampleInputEmail1">Correo Electronico</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo con nadie más.</small>
  </div>
  <div className="form-group">
    <label forHtml="exampleInputPassword1">Contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Entrar</button>
</form>
      </div>
    );
  }
}

export default UserForm;
