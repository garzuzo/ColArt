import React, { Component } from 'react';
import '../../../src/App.css';
import {
    Form, Input, Button, Icon
  } from 'antd';


class Login extends Component {

    handleOnChange(e){
        [e.target.name] = e.target.value
      }
    
 render() {
   var  owner="Leonardo";
   return (
    <div className="Login">
         
         <Form  style={{float:'right'}} >
     
     <Form.Item label="Nombre">

     <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre" onChange={this.handleOnChange.bind(this)} />
</Form.Item>
<Form.Item label="Correo electrónico">
<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Correo" />

</Form.Item>
<Form.Item label="Contraseña">
<Input.Password placeholder="Ingresa contraseña" />
</Form.Item>
<Form.Item>
<Button type="primary" >Sé parte de ColArt!</Button>
</Form.Item>
</Form>
    </div>
   );
 }
}

export default Login;