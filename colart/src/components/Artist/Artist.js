import React, { Component } from 'react';
import {
    Form, Select, Input, Button, Carousel, Card, Icon, Menu, Avatar
  } from 'antd';

  const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Artist extends Component {
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
    <div className="Artist">
    <header>
    <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <Icon type="home" />Home
            </Menu.Item>
            <SubMenu title={<span className="submenu-title-wrapper"><Icon type="search" />Servicios</span>}>
                <Menu.Item key="search:1">Apoyo audiovisual</Menu.Item>
                <Menu.Item key="search:2">Consultoría de experiencia</Menu.Item>
                <Menu.Item key="search:3">Convenios para presentaciones</Menu.Item>
                <Menu.Item key="search:4">Donaciones</Menu.Item>
            </SubMenu>
          </Menu>
          <br></br>
            <h2>Somos tu manager para impulsar tu carrera artística en la ciudad</h2>
    </header>


            <div className="">
            </div>
    </div>
   );
 }
}

export default Artist;