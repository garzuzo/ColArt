import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class Payment extends Component {


  constructor(props) {

    super(props);

    this.state = {

      encryptedFirm: "",
      amount: "70000",
      tax: "11900",
      taxReturnBase: "58100",
      ApiKey: "4Vj8eK4rloUd272L48hsrarnUA", merchantId: "508029", referenceCode: "ColartPremium", currency: "COP"


    }


    this.obtainSignature = this.obtainSignature.bind(this);

  }

  componentDidMount(){

    this.obtainSignature();
  }


  obtainSignature() {
    Meteor.call('encrypt', this.state.ApiKey, this.state.merchantId, this.state.referenceCode, this.state.amount, this.state.currency, (err, res) => {
      if (res) {
        this.setState({ encryptedFirm: res });
      }


    })




  }




  render() {
    var styles = {
      width: '300px',
      height: '300px',
      border: '150px',
      marginLeft: '5px',
      marginTop: '5px'
    };
    return (
      <div className="Payment">






        <div className="text-center">
          <h1>Se parte de ColArt con planes diseñados para ti</h1>


          <button type="button" className="btn btn-secondary  btn-lg" style={styles}>
            <h3>Free</h3>
            <div className="container ml-4">
              <div className="row">
                <h6><i className="fa fa-check"></i>Perfil en la plataforma</h6>
              </div>
            </div>
          </button>



          <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
            <input name="merchantId" type="hidden" value={this.state.merchantId} />
            <input name="accountId" type="hidden" value="512321" />
            <input name="description" type="hidden" value="Suscripcion mensual Premium Colart" />
            <input name="referenceCode" type="hidden" value={this.state.referenceCode} />

            <input name="amount" type="hidden" value={this.state.amount} />
            <input name="tax" type="hidden" value={this.state.tax} />
            <input name="taxReturnBase" type="hidden" value={this.state.taxReturnBase} />
            <input name="currency" type="hidden" value={this.state.currency} />
            <input name="signature" type="hidden" value={this.state.encryptedFirm} />
            <input name="test" type="hidden" value="1" />
            <input name="buyerEmail" type="hidden" value="test@test.com" />
            <input name="responseUrl" type="hidden" value="http://www.test.com/response" />
            <input name="confirmationUrl" type="hidden" value="http://www.test.com/confirmation" />



            <button type="submit" className="btn btn-success btn-lg" style={styles}>
              <h3>Premium</h3>
              <h4>$70.000</h4>



              <div className="container ml-4">
                <div className="row">
                  <h6><i className="fa fa-check"></i>Perfil en la plataforma</h6>
                </div>
                <div className="row">
                  <h6><i className="fa fa-check"></i>Apoyo audiovisual</h6>
                </div>

                <div className="row">
                  <h6><i className="fa fa-check"></i>Recomendación de artistas</h6>
                </div>
                <div className="row">
                  <h6><i className="fa fa-check"></i>Convenios con lugares</h6>
                </div>
                <div className="row">
                  <h6><i className="fa fa-check"></i>Crowdfunding</h6>
                </div>
              </div>
            </button>
          </form>
        </div>

      </div>
    );
  }
}

export default Payment;
