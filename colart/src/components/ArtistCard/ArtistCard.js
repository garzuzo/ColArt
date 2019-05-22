import React, { Component } from 'react';
import {
  Card, Avatar
  } from 'antd';


const { Meta } = Card;
class ArtistCard extends Component {
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
    <div className="ArtistCard">
        
        <Card title="    Artistas destacados  " className="artsDestacados">
          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}              
              cover={<Avatar style={gridImgStyle} shape="circle" src="https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>}
            >
             <br></br>
              <Meta
                title="Carolina Sierra - Cantante"
                description="Apasionada por la música. Rock<3"
              />
            </Card>
          </Card.Grid>

          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}
              cover={<Avatar shape="circle" style={gridImgStyle} src="https://images.pexels.com/photos/379962/pexels-photo-379962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
            >
             <br></br>
              <Meta
                title="Juan Agudelo - Guitarrista"
                description="Me gusta hacer los mejores solos de guitarra. Jazz!!"
              />
            </Card>
          </Card.Grid>

          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}
              cover={<Avatar shape="circle" style={gridImgStyle} src="https://images.pexels.com/photos/1886694/pexels-photo-1886694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
            >
             <br></br>
              <Meta
                title="Juanita Rendón - Bailarina"
                description="Me encanta la danza de mi tierra."
              />
            </Card>
          </Card.Grid>
          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}
              cover={<Avatar shape="circle" style={gridImgStyle} src="https://images.unsplash.com/photo-1549123792-275210fbcef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"/>}
            >
             <br></br>
              <Meta
                title="Mariana Valencia - Pintora"
                description="Me gusta el arte grecorromano."
              />
            </Card>
          </Card.Grid>


        </Card>
    </div>
   );
 }
}
const gridImgStyle = {

    height: 300,
    textAlign: 'center',
  };
  
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

export default ArtistCard;