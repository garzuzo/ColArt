import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ArtistCardSingle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            url: this.props.url,
            description:this.props.description
        };
    }
    render() {

        var styles = {
            width: '200px',
            height: '300px',
          
            //borderRadius: '150px',
           // marginLeft: '10px',
          };

          
        return (
            <div className="ArtistCardSingle text-center">
                <Link className="nav-link" to="/ArtistProfile">


                    <div className="card-group mx-auto w-20 img-thumbnail text-center">
                        <div className="card">
                            <img src={this.state.url} className="card-img-top mx-auto" style={styles} alt="..." />
                            <div className="card-body">

                                <h5 className="card-title text-dark">{this.state.name}</h5>
                                <p className="card-text text-dark">{this.state.description}</p>
                            </div>
                        </div>

                    </div>
                </Link>

            </div>
        );
    }
}

export default ArtistCardSingle;
