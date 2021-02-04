/*

formValidation();

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

function calculateAlcoholPercentage(){
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

   /!* calculation_btn.addEventListener('click', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)*!/
}

*/
