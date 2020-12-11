import React, { Component } from 'react';
import {getAmountMessage} from './loans/util.js';
import 'iframe-resizer/js/iframeResizer.contentWindow.min.js'; 

class CreditCapacity extends Component {
  constructor(props) {
    super(props);

    this.state = {
        salary : null,
        otherRevenue : null,
        rent : null,
        creditCar : null,
        otherExpenses : null,
        showResult : false,
        msgResult : null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.compute();
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({[name] : parseFloat(value)});
  }

  compute = () => {
    const maxMonthlyPayment = ((this.state.salary ? this.state.salary:0)+ (this.state.otherRevenue ? this.state.otherRevenue:0) -
    (this.state.rent ? this.state.rent:0) - (this.state.creditCar ? this.state.creditCar:0) -
    (this.state.otherExpenses ? this.state.otherExpenses:0))* 0.3;
    const msg = getAmountMessage(maxMonthlyPayment);
    this.setState({showResult : true, msgResult : msg});
  }
  render = () => {

        return (
          <React.Fragment>
            <div className="row">
              <form id="creditCapacityForm" onSubmit={this.handleSubmit} accept-charset="utf-8" name="template-contactform" className="nobottommargin">
                <div className="form-process"></div>

                <div className="col_full">
                  <label htmlFor="salary">Salaire net (vous et votre conjoint)</label>
                  <input id="salary" value={this.state.salary} name="salary" onChange={this.handleInputChange}
                  placeholder="Précisez votre salaire mensuel" className="sm-form-control required" type="number" />
                </div>


                <div className="col_full">
                  <label htmlFor="otherRevenue">Autres revenus</label>
                  <input id="otherRevenue" value={this.state.otherRevenue} name="otherRevenue" onChange={this.handleInputChange} placeholder="Avez-vous d'autres revenus (allocations, rentes, ...) ?" className="sm-form-control required" type="number" />
                </div>
                <div className="divider divider-long divider-center"><i className="icon-circle"></i></div>

                <div className="col_full">
                  <label htmlFor="rent">Loyer</label>
                  <input id="rent" value={this.state.rent} name="rent" onChange={this.handleInputChange} placeholder="Quel est votre loyer mensuel ?" className="sm-form-control required" type="number" />
                </div>
                <div className="col_full">
                  <label htmlFor="creditCar">Crédit voiture</label>
                  <input id="creditCar" value={this.state.creditCar} name="creditCar" onChange={this.handleInputChange} placeholder="Avez-vous un crédit pour votre voiture ? " className="sm-form-control required" type="number" />
                </div>
                <div className="col_full">
                  <label htmlFor="otherExpenses">Autres dépenses ou crédits</label>
                  <input id="otherExpenses" value={this.state.otherExpenses} name="otherExpenses" onChange={this.handleInputChange} placeholder="Evaluez vos dépenses mensuelles récurentes " className="sm-form-control required" type="number" />
                </div>
                <div className="col_full">
                  <input className="btn btn-primary" type="submit" value="Calculer »" />

                </div>

              </form>
            </div>

            {this.state.showResult &&
              <div className="row">
                <br />
                <div className="alert alert-success"><strong><span className="glyphicon glyphicon-ok">{this.state.msgResult}</span></strong></div>
              </div>
            }
          </React.Fragment>
        );

  }
}

export default CreditCapacity;
