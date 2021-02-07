import React from "react";
import regression from 'regression';
import TableTr from "./TableTr";


const MainContainer = (prop) => {

    function mapPowRegData() {
        let alcohol_percentages = document.getElementsByClassName('alcohol-percentage');
        let raw_readings = document.getElementsByClassName('raw-reading');
        let dataToMap = [];

        for (let i = 0, len = alcohol_percentages.length; i < len; i++) {
            dataToMap.push([
                parseFloat(raw_readings[i].value || 0),
                parseFloat(alcohol_percentages[i].value)
            ])
        }

        return dataToMap
    }

    let calculateAlcoholPercentage = () => {
        let calculation_raw = document.getElementById('calculation-raw').value;
        let calculation_result = document.getElementById('calculation-result');
        let data = mapPowRegData();

        let powReg = regression.power(data, {precision: 20}).predict(calculation_raw);
        calculation_result.innerHTML = powReg[1].toFixed(2);
        console.log(powReg[1]);
    }

    function formValidation() {
        var forms = document.querySelectorAll('.needs-validation');
        let calculation_btn = document.getElementById('calculation-btn');

        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                calculation_btn.addEventListener('click', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    }

    formValidation();

    let tableCalculatorData = [
        { alcoholPercent: '0.10', rawReading: 243, tabIndex: 1 },
        { alcoholPercent: '0.10', rawReading: 251, tabIndex: 2 },
        { alcoholPercent: '0.25', rawReading: 346, tabIndex: 3 },
        { alcoholPercent: '0.25', rawReading: 356, tabIndex: 4 },
        { alcoholPercent: '0.50', rawReading: 423, tabIndex: 5 },
        { alcoholPercent: '0.50', rawReading: 423, tabIndex: 6 },
        { alcoholPercent: '1.00', rawReading: 527, tabIndex: 7 },
        { alcoholPercent: '1.00', rawReading: 536, tabIndex: 8 },
        { alcoholPercent: '2.00', rawReading: 637, tabIndex: 9 },
        { alcoholPercent: '2.00', rawReading: 641, tabIndex: 10 }
        ]

    let tableTrList = tableCalculatorData.map((number, index) =>
        <TableTr key={index} data={number} />
    );

    return (
        <div className="row g-3">
            <div className="col-md-12 col-lg-12 order-md-last">
                <p className="card text-center my-2"> y = 2.619E-11*(x^3.154)</p>
                <form className="card p-2 needs-validation" noValidate>
                    <table className="table table-bordered table-sm m-0" id="adc-data-table">
                        <thead className="table-dark">
                        <tr>
                            <th width="30%">Alcohol %</th>
                            <th width="70%">Raw Reading</th>
                        </tr>
                        </thead>
                        <tbody>
                            {tableTrList}
                        </tbody>
                    </table>

                </form>

                <form className="card p-2 my-2 needs-validation">
                    <div className="input-group">
                        <input type="number" className="form-control" id="calculation-raw" placeholder="0.01"
                               tabIndex="11" defaultValue="350" required />
                        <button type="button" className="btn btn-success" id="calculation-btn"
                                onClick={calculateAlcoholPercentage}>CALCULATE
                        </button>
                    </div>
                </form>

                <div className="card py-3 text-center">
                    <h3 className="m-0"><span id="calculation-result">0.00</span><span> %</span></h3>
                </div>

            </div>
        </div>
    )
}

export default MainContainer;