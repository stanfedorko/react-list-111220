import React from 'react';

function LoansList(props) {
  const list = props.loans.map(l => getloansItem(l));
  return (
    <div className="panel-container">
      {list}
    </div>
  );
}

function getloansItem(loan) {
  return (
    <React.Fragment>
      <a className="panel-card" href={loan.url} target="blank">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">
              {loan.bank} 
              <span className="badge">best prop</span>
            </h3>
          </div>
          <div className="panel-body">
            <div className="panel-body-item">
              <img className="panel-logo" src={loan.image} alt="" />
            </div>
            <div className="panel-body-item">
              {loan.taeg}
            </div>
            <div className="panel-body-item">
              {loan.month}
            </div>
            <div className="panel-body-item">
              {loan.interest}
            </div>
            <div className="panel-body-item">
              <button className="btn btn-info btn-sm panel-btn">Demande gratuite <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" d="M9.17188,18.65674a1,1,0,0,1-.707-1.707L13.41406,12,8.46484,7.05029A.99989.99989,0,0,1,9.87891,5.63623L15.53516,11.293a.99964.99964,0,0,1,0,1.41406L9.87891,18.36377A.9968.9968,0,0,1,9.17188,18.65674Z"/></svg></button>
            </div>
          </div>
        </div>
      </a>
    </React.Fragment>
  )
}

export default LoansList;
