import React  from 'react';
import InputRange from 'react-input-range';

const LoanSlider = (props) => {
  return (
    <form className="form-horizontal">
    <div className="row common-height clearfix">

          <div className="col-md-6 col-sm-6 bottommargin-sm">
              <div className="white-section">
                <label htmlFor="amount">Montant désiré</label>
                <div>
                  <InputRange
                    step={1000}
                    maxValue={75000}
                    minValue={1000}
                    value={props.amount}
                    onChange={value => props.updateAmount(value)}/>

                </div>
              </div>
          </div>
          <div className="col-md-6 col-sm-6 bottommargin-sm ">
              <div className="white-section">
                <label htmlFor="months">Nombre de mensualités</label>
                <div>
                  <InputRange
                    step={6}
                    maxValue={120}
                    minValue={12}
                    value={props.nbrMonths}
                    onChange={value => props.updateNbrMounths(value)}/>
                </div>

              </div>

          </div>


    </div>
    <div className="row common-height clearfix">
      <div className="col-md-offset-10 col-md-4 col-sm-4 bottommargin-sm">
        <button className="btn btn-info btn-sm panel-btn" onClick={props.refreshLoans}>Comparer <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" d="M9.17188,18.65674a1,1,0,0,1-.707-1.707L13.41406,12,8.46484,7.05029A.99989.99989,0,0,1,9.87891,5.63623L15.53516,11.293a.99964.99964,0,0,1,0,1.41406L9.87891,18.36377A.9968.9968,0,0,1,9.17188,18.65674Z"/></svg></button>
      </div>

    </div>
    </form>
  );

}

export default LoanSlider;
