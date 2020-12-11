import React, { Component } from 'react';
import LoanSlider from './loans/slider.js';
import LoansList from './loans/loanlist.js';
import {retrieveBanks} from './loans/util.js';
import 'iframe-resizer/js/iframeResizer.contentWindow.min.js';
import './range.css';


class Comparator extends Component {
  constructor(props) {
    // console.log(props);
    super(props);

    this.state = {
        amount : 7000,
        nbrMonths : 36,
        banks : [],
        loans : []
    }
  }

  componentDidMount = async() => {
    // const banks = await import('./banks/' + this.props.match.params.type + '.js');
    // this.setState({banks : banks.default});
    // this.setState({ banks: await (await fetch("./banks/" + this.props.match.params.type + '.json')).json() });
    this.setState({ banks: await (await fetch(`./banks/credit-voiture.json`)).json() });
    this.setState({ banks: await (await fetch(`./banks/pret-personnel.json`)).json() });
    this.setState({ banks: await (await fetch(`./banks/pret-travaux.json`)).json() });
    this.setState({ banks: await (await fetch(`./banks/rachat-credit.json`)).json() });
    this.refreshLoans();
  }


  updateAmount = (amount) => {
      this.setState({ amount });
  }

  updateNbrMounths = (nbrMonths) => {
      this.setState({nbrMonths});
  }

  refreshLoans = () => {
    this.setState({loans : retrieveBanks(this.state.banks, this.state.amount, this.state.nbrMonths)});
  }

  render = () => {
    return (
      <div>
        <h3>Offres sponsorisées</h3>
        <LoanSlider 
          amount={this.state.amount}
          nbrMonths={this.state.nbrMonths}
          updateAmount={this.updateAmount}
          updateNbrMounths={this.updateNbrMounths}
          refreshLoans={this.refreshLoans} 
        />
        <LoansList loans={this.state.loans}/>
        <p>
        Les taux sont proposés à titre indicatif. Il est possible qu'un de nos sponsors ne nous a pas encore informé d'un changement de taux. Veuillez vérifier les taux lors de votre choix final.
        </p>
      </div>
    );
  }
}


export default Comparator;
