import React from "react";

const MainContainer = () => {
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
                        <tr>
                            <td><input type="number" min="0" step="0.01"
                                       className="form-control alcohol-percentage" placeholder="%" value="0.10"
                                       required /></td>
                            <td><input type="number" className="form-control raw-reading" placeholder="0.01"
                                       autoFocus value="243" tabIndex="1" required /></td>
                        </tr>
                        <tr>
                            <td><input type="number" min="0" step="0.01"
                                       className="form-control  alcohol-percentage" placeholder="%" value="0.10"
                                       required /></td>
                            <td><input type="number" className="form-control raw-reading" placeholder="0.01"
                                       value="251" tabIndex="2" required /></td>
                        </tr>
                        <tr>
                            <td><input type="number" min="0" step="0.01"
                                       className="form-control  alcohol-percentage" placeholder="%" value="0.25"
                                       required /></td>
                            <td><input type="number" className="form-control raw-reading" placeholder="0.01"
                                       value="346" tabIndex="3" required /></td>
                        </tr>
                        <tr>
                            <td><input type="number" min="0" step="0.01"
                                       className="form-control  alcohol-percentage" placeholder="%" value="0.25"
                                       required /></td>
                            <td><input type="number" className="form-control raw-reading" placeholder="0.01"
                                       value="356" tabIndex="4" required /></td>
                        </tr>
                        <tr>
                            <td><input type="number" min="0" step="0.01"
                                       className="form-control  alcohol-percentage" placeholder="%" value="0.50"
                                       required /></td>
                            <td><input type="number" className="form-control raw-reading" placeholder="0.01"
                                       value="423" tabIndex="5" required /></td>
                        </tr>
                        <tr>
                            <td><input type="number" min="0" step="0.01"
                                       className="form-control  alcohol-percentage" placeholder="%" value="0.50"
                                       required /></td>
                            <td><input type="number" className="form-control raw-reading" placeholder="0.01"
                                       value="423" tabIndex="6" required /></td>
                        </tr>
                        <tr>
                            <td><input type="number" min="0" step="0.01"
                                       className="form-control  alcohol-percentage" placeholder="%" value="1.00"
                                       required /></td>
                            <td><input type="number" className="form-control raw-reading" placeholder="0.01"
                                       value="527" tabIndex="7" required /></td>
                        </tr>
                        <tr>
                            <td><input type="number" min="0" step="0.01"
                                       className="form-control  alcohol-percentage" placeholder="%" value="1.00"
                                       required /></td>
                            <td><input type="number" className="form-control raw-reading" placeholder="0.01"
                                       value="536" tabIndex="8" required /></td>
                        </tr>
                        <tr>
                            <td><input type="number" min="0" step="0.01"
                                       className="form-control  alcohol-percentage" placeholder="%" value="2.00"
                                       required /></td>
                            <td><input type="number" className="form-control raw-reading" placeholder="0.01"
                                       value="637" tabIndex="9" required /></td>
                        </tr>
                        <tr>
                            <td><input type="number" min="0" step="0.01"
                                       className="form-control  alcohol-percentage" placeholder="%" value="2.00"
                                       required /></td>
                            <td><input type="number" className="form-control raw-reading" placeholder="0.01"
                                       value="641" tabIndex="10" required /></td>
                        </tr>
                        </tbody>
                    </table>

                </form>

                <form className="card p-2 my-2 needs-validation">
                    <div className="input-group">
                        <input type="number" className="form-control" id="calculation-raw" placeholder="0.01"
                               tabIndex="11" value="350" required />
                        <button type="button" className="btn btn-success" id="calculation-btn"
                                onClick="calculateAlcoholPercentage()">CALCULATE
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