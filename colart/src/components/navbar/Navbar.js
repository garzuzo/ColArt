import React, { Component } from 'react';
import '../../../src/App.css';
import {
   Icon, Menu
  } from 'antd';
import {Link} from  'react-router-dom';

  const SubMenu = Menu.SubMenu;
class Navbar extends Component {
  state = {
    current: 'home',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

 render() {
   var  owner="Leonardo";
   return (
    <div className="Navbar">
   
        <h1 ><Icon type="rocket" />ColArt</h1>
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="home" />Home
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="search" />Ver Artistas</span>}>
            <Menu.Item key="search:1">Música</Menu.Item>
            <Menu.Item key="search:2">Pintura</Menu.Item>
            <Menu.Item key="search:3">Danza</Menu.Item>
            <Menu.Item key="search:4">Teatro</Menu.Item>
        </SubMenu>
        <Menu.Item key="user">  
          <Link className="nav-link" to="/soyArtista"> <Icon type="user" />Soy Artista</Link>        
         </Menu.Item>
      </Menu>
      <br></br>
        <h2>Te presentamos las diversas formas de entretenimiento artístico y cultural.</h2>

    </div>
   );
 }
}

export default Navbar;