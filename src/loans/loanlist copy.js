// import React from 'react';

function LoansList(props) {

  const list = props.loans.map(l => getloansItem(l));
  return (
    // <div className="row row-simulator borders">
    //   {list}
    // </div>
    // -----
    // <div className="table-responsive">
    //   <table className="table table-hover table-banks">
    //     <tbody>
    //       {list}
    //     </tbody>
    //   </table>
    // </div>
    <div className="panel-container">
      {list}
    </div>
  );
}

function getloansItem(loan) {
  return (
    <React.Fragment>
      <a className="panel-card" href={loan.url} target="blank">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {loan.bank}
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
              <a href={loan.url} target="blank" className="btn btn-primary btn-sm" role="button">Demande gratuite »</a>
            </div>
          </div>
        </div>
      </a>
    </React.Fragment>
  )
}

// export default LoansList;
