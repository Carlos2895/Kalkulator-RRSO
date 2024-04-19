// FUNKCJE OPISUJACE PRZYCISKI I INPUTY

// KWOTA KREDYTU
//zwiekszanie kwoty kredytu za pomoca +
function increaseLoan() {
    document.getElementById("kw").value = parseInt(document.getElementById("kw").value) + 1000;
    document.getElementById("kw1").value = document.getElementById("kw").value;
    document.getElementById("kw2").value = document.getElementById("kw").value - document.getElementById("kw1").value;
}
//zmiejszanie kwoty kredytu za pomoca -
function decreaseLoan() {
    let inputLoanValue = document.getElementById("kw").value = parseInt(document.getElementById("kw").value);
    if (inputLoanValue > 1000) {
        document.getElementById("kw").value = inputLoanValue - 1000;
    }
    document.getElementById("kw1").value = document.getElementById("kw").value;
    document.getElementById("kw2").value = document.getElementById("kw").value - document.getElementById("kw1").value;
}
// zmiana kwoty kredytu 
function updateLoan() {
    var inputLoanValue = parseInt(document.getElementById("kw").value);
    if (inputLoanValue <= 0) {
        document.getElementById("kw").value = 1000;
        document.getElementById("kw1").value = 1000;
        document.getElementById("kw2").value = 0;
    }
    else {
        document.getElementById("kw1").value = inputLoanValue;
        document.getElementById("kw2").value = document.getElementById("kw").value - document.getElementById("kw1").value;
    }
}
// LICZBA RAT
//zwiekszanie liczby raty za pomoca +
function increaseTheNumberOfInstallments() {
    document.getElementById("lr").value = parseInt(document.getElementById("lr").value) + 1;
}

//zmniejszanie liczby rat za pomoca -
function decreaseTheNumberOfInstallments() {
    let temp = document.getElementById("lr").value = parseInt(document.getElementById("lr").value);
    if (temp > 1) {
        document.getElementById("lr").value = temp - 1;
    }
    let inputNumberOfRateValue = document.getElementById("lr").value;
    let inputloanFeeTimeValue = document.getElementById("pr_rat").value;
    if (inputloanFeeTimeValue > inputNumberOfRateValue) {
        document.getElementById("pr_rat").value = inputNumberOfRateValue;
    }

}
// zmiana liczby rat 
function updateNumberOfInstallments() {
    var inputNumberOfRateValue = parseInt(document.getElementById("lr").value);
    if (inputNumberOfRateValue <= 0) {
        document.getElementById("lr").value = 1;
    }
    inputNumberOfRateValue = document.getElementById("lr").value;
    let inputloanFeeTimeValue = document.getElementById("pr_rat").value;
    if (inputloanFeeTimeValue > inputNumberOfRateValue) {
        document.getElementById("pr_rat").value = inputNumberOfRateValue;
    }
}
//OPROCENTOWANIE

//zwiekszanie oprocentowania za pomoca +
function increaseLoanInterestRate() {
    document.getElementById("op").value = new Big(parseFloat(document.getElementById("op").value)).plus('0.1');
}
//zmniejszanie oprocentowania za pomoca -
function decreaseLoanInterestRate() {
    if (document.getElementById("op").value > 0.1) {
        document.getElementById("op").value = new Big(parseFloat(document.getElementById("op").value)).minus('0.1');
    }
}
// zmiana oprocentowania 
function updateLoanInterestRate() {
    var inputLoanInterestRateValue = parseInt(document.getElementById("op").value);
    if (inputLoanInterestRateValue < 0) {
        document.getElementById("op").value = 0;
    }
}

//PROWIZJA

//zwiekszanie prowizji za pomoca +
function increaseLoanFee() {
    document.getElementById("pr").value = new Big(parseFloat(document.getElementById("pr").value)).plus('0.1');
}

//zmniejszanie prowizji za pomoca -
function decreaseLoanFee() {
    if (document.getElementById("pr").value >=0.1) {
        document.getElementById("pr").value = new Big(parseFloat(document.getElementById("pr").value)).minus('0.1');
    }
}
//zmiana prowizji 
function updateLoanFee() {
    var inputLoanFeeValue = parseInt(document.getElementById("pr").value);
    if (inputLoanFeeValue < 0) {
        document.getElementById("pr").value = 0;
    }
}

// PIERWSZA TRANSZA
//zwiekszenie pierwszej transzy za pomoca +
function increaseFirstDisbursement() {

    var inputLoanValue = parseInt(document.getElementById("kw").value);
    var inputFirstDisbursementValue = parseInt(document.getElementById("kw1").value);
    if (inputLoanValue - inputFirstDisbursementValue >= 1000)
        document.getElementById("kw1").value = parseInt(document.getElementById("kw1").value) + 1000;
    else document.getElementById("kw1").value = parseInt(document.getElementById("kw1").value) + inputLoanValue - inputFirstDisbursementValue;
    inputFirstDisbursementValue = parseInt(document.getElementById("kw1").value);
    document.getElementById("kw2").value = inputLoanValue - inputFirstDisbursementValue;
}
//zmniejszenie pierwszej transzy za pomoca -
function decreaseFirstDisbursement() {
    let inputFirstDisbursementValue = document.getElementById("kw1").value = parseInt(document.getElementById("kw1").value);
    if (inputFirstDisbursementValue >= 1000) {
        document.getElementById("kw1").value = inputFirstDisbursementValue - 1000;
    }
    var inputLoanValue = parseInt(document.getElementById("kw").value);
    inputFirstDisbursementValue = parseInt(document.getElementById("kw1").value);
    document.getElementById("kw2").value = inputLoanValue - inputFirstDisbursementValue;
}
//zmiana pierwszej transzy
function updateFirstDisbursement() {
    var inputLoanValue = parseInt(document.getElementById("kw").value);
    var inputFirstDisbursementValue = parseInt(document.getElementById("kw1").value);
    if(inputFirstDisbursementValue<0) document.getElementById("kw1").value=0;
    if (inputFirstDisbursementValue > inputLoanValue) {
        document.getElementById("kw1").value = inputLoanValue;
        document.getElementById("kw2").value = 0;
    }
    else document.getElementById("kw2").value = inputLoanValue - document.getElementById("kw1").value;
}

//DRUGA TRANSZA
//Zwiększenie drugiej transzy za pomoca +
function increaseSecondDisbursement() {
    var inputLoanValue = parseInt(document.getElementById("kw").value);
    var inputSecondDisbursementValue = parseInt(document.getElementById("kw2").value);
    if (inputLoanValue - inputSecondDisbursementValue >= 1000)
        document.getElementById("kw2").value = parseInt(document.getElementById("kw2").value) + 1000;
    else document.getElementById("kw1").value = parseInt(document.getElementById("kw1").value) + inputLoanValue - inputSecondDisbursementValue;
    inputSecondDisbursementValue = parseInt(document.getElementById("kw2").value);
    document.getElementById("kw1").value = inputLoanValue - inputSecondDisbursementValue;
}
//Zmniejszenie drugiej transzy za pomocą -
function decreaseSecondDisbursement() {
    let inputSecondDisbursementValue = parseInt(document.getElementById("kw2").value);
    if (inputSecondDisbursementValue >= 1000) {
        document.getElementById("kw2").value = inputSecondDisbursementValue - 1000;
    }
    var inputLoanValue = parseInt(document.getElementById("kw").value);
    inputSecondDisbursementValue = parseInt(document.getElementById("kw2").value);
    document.getElementById("kw1").value = inputLoanValue - inputSecondDisbursementValue;
}
//Zmiana drugiej transzy
function updateSecondDisbursement() {
    var inputLoanValue = parseInt(document.getElementById("kw").value);
    var inputSecondDisbursementValue = parseInt(document.getElementById("kw2").value);
    if(inputSecondDisbursementValue<0)
    {
        document.getElementById("kw2").value=0;
    } 
    if (inputSecondDisbursementValue > inputLoanValue) {
        document.getElementById("kw2").value = inputLoanValue;
        document.getElementById("kw1").value = 0;
    }
    else document.getElementById("kw1").value = inputLoanValue - document.getElementById("kw2").value;
}

//ILOŚĆ DNI POMIĘDZY TRANSZAMI
// zwiekszanie ilosci dni za pomoca +
function increaseDays() {
    document.getElementById("kw3").value = parseInt(document.getElementById("kw3").value) + 1;
}
//zmniejszanie ilosci dni za pomoca -
function decreaseDays() {
    let inputDaysValue = document.getElementById("kw3").value = parseInt(document.getElementById("kw3").value);
    if (inputDaysValue > 1) {
        document.getElementById("kw3").value = inputDaysValue - 1;
    }
}
// NUMER RATY DO KTOREJ DODAWANA JEST PROWIZJA
//zwiekszanie raty do ktorej dodawana jest prowizja +
function increaseNumberOfRates() {

    var inputloanFeeTimeValue = parseInt(document.getElementById("pr_rat").value);
    var inputNumberOfRateValue = parseInt(document.getElementById("lr").value);

    if (inputloanFeeTimeValue + 1 <= inputNumberOfRateValue) {
        document.getElementById("pr_rat").value = parseInt(document.getElementById("pr_rat").value) + 1;
    }
}

// zmniejszanie raty do ktorej dodawana jest prowizja -
function decreaseNumberOfRates() {
    let inputloanFeeTimeValue = document.getElementById("pr_rat").value = parseInt(document.getElementById("pr_rat").value);
    if (inputloanFeeTimeValue > 1) {
        document.getElementById("pr_rat").value = inputloanFeeTimeValue - 1;
    }
}

//zmiana raty do ktorej dodawana jest prowizja 
function updateNumberOfRates() {
    var inputloanFeeTimeValue = parseInt(document.getElementById("pr_rat").value);
    var inputNumberOfRateValue = parseInt(document.getElementById("lr").value);
    if (inputloanFeeTimeValue < 0) {
        document.getElementById("pr_rat").value = 0;
    }
    else if (inputloanFeeTimeValue > inputNumberOfRateValue) {
        document.getElementById("pr_rat").value = inputNumberOfRateValue;
    }
}


// RATA MALEJACA CZY STALA
let statusOfRate = 1;
document.addEventListener("DOMContentLoaded", function () {
    var toggleEvent = document.getElementById('toggle-event');
    toggleEvent.addEventListener('change', function () {
        if (toggleEvent.checked == true) {
            statusOfRate = 1;
        }
        else {
            statusOfRate = 2;
        }
    });
});

//ILOSC TRANSZ
let statusOfInstalmentDisbursement = 1;

document.addEventListener("DOMContentLoaded", function () {
    var toggleEvent = document.getElementById('toggle-event2');
    toggleEvent.addEventListener('change', function () {
        if (toggleEvent.checked == true) {
            statusOfInstalmentDisbursement = 1;
            document.getElementById('transze').style.display = 'none';
        }
        else {
            statusOfInstalmentDisbursement = 2;
            document.getElementById('transze').style.display = 'inline';

        }
    });
});



//Kalkulator RRSO

function bisect(f, a, b, tol) {
    let iterations = 0;
    while (Math.abs(b - a) > tol && iterations < 100) {
        let m = (a + b) / 2;
        if (f(m) === 0) {
            return m;
        } else if (f(m) * f(a) < 0) {
            b = m;
        } else {
            a = m;
        }
        iterations++;
    }
    return (a + b) / 2;
}
function RRSO() {

    // Warunki kredytu
    //wartosc kredytu
    let loanValue = parseInt(document.getElementById("kw").value);
    //ilość rat miesięcznych
    let numberOfInstallments = parseInt(document.getElementById("lr").value);
    //oprocentowanie kredytu
    let loanInterestRate = (document.getElementById("op").value / 100) / 12;
    //prowizja
    let loanFee = (document.getElementById("pr").value / 100) * loanValue;

    //numer raty do ktorej dodawana jest prowizja
    let loanFeeTime = document.getElementById("pr_rat").value;

    // metoda splacania rat (1 dla rat malejacych, 2 dla rat annuitetowych)
    let creditPaymentMethod = statusOfRate;
    // Opcja wyboru ilości transz
    let instalmentDisbursement = statusOfInstalmentDisbursement;

    // czestotliwosc splacania rat
    let days = 30;

    //zmienne pomocnicze
    let rest = loanValue;

    // Walidacja danych
    if (loanValue < 0 || !Number.isInteger(loanValue) || numberOfInstallments < 1 || loanInterestRate < 0 || loanFee < 0 || loanFeeTime <= 0 || loanFeeTime > numberOfInstallments || (creditPaymentMethod != 1 && creditPaymentMethod != 2) || (instalmentDisbursement != 1 && instalmentDisbursement != 2)) {
        if (loanValue < 0 || !Number.isInteger(loanValue)) {
            var alertHtml = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Nieprawidłowa kwota kredytu</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        }
        else if (numberOfInstallments <= 1) {
            var alertHtml = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Nieprawidłowa liczba rat</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        }
        else if (loanInterestRate < 0 || !Number.isInteger(validateLoanInterestRate)) {
            var alertHtml = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Nieprawidłowe oprocentowanie</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        }
        else if (loanFee < 0) {
            var alertHtml = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Nieprawidłowa prowizja</strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;
        }
        else if (loanFeeTime <= 0 || loanFeeTime > numberOfInstallments) {
            var alertHtml = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Numer raty do której dodawana jest prowizja jest nieprawidłowy</strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;
        }
        else {
            var alertHtml = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Wprowadzono błędne dane</strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;
        }

        document.querySelector('.container').insertAdjacentHTML('beforebegin', alertHtml);
    }
    else {

        //raty malejace 
        let decreasingInstallments = [];
        // raty stale
        let annuityInstallments = [];

        //Raty malejace
        if (creditPaymentMethod === 1) {
            decreasingInstallments = new Array(numberOfInstallments).fill(0);
            let capitalInstallmentDecreasing = loanValue / numberOfInstallments;
            for (let i = 0; i < numberOfInstallments; i++) {
                decreasingInstallments[i] = rest * loanInterestRate + capitalInstallmentDecreasing;
                console.log(loanFeeTime);
                if (i === loanFeeTime - 1) {
                    decreasingInstallments[i] += loanFee;
                }
                rest -= capitalInstallmentDecreasing;
            }
        }
        // Raty równe
        else if (creditPaymentMethod === 2) {
            annuityInstallments = new Array(numberOfInstallments).fill(0);
            let capitalAnnuityInstallment = (loanValue * loanInterestRate * Math.pow((1 + loanInterestRate), numberOfInstallments)) / (Math.pow((1 + loanInterestRate), numberOfInstallments) - 1);
            for (let i = 0; i < numberOfInstallments; i++) {
                annuityInstallments[i] = capitalAnnuityInstallment;
                if (i === loanFeeTime - 1) {
                    annuityInstallments[i] += loanFee;
                }
                rest -= capitalAnnuityInstallment;
            }
        }

        // Jedna transza
        if (instalmentDisbursement === 1) {
            function calculatePart2(x, days) {
                return loanValue / Math.pow((1 + x), (days / 365));
            }

            function calculatePart3(x, days) {
                let sum = 0;
                for (let i = 0; i < numberOfInstallments; i++) {
                    if (creditPaymentMethod === 1) {
                        sum += decreasingInstallments[i] / Math.pow((1 + x), ((days + i * 30) / 365));
                    } else if (creditPaymentMethod === 2) {
                        sum += annuityInstallments[i] / Math.pow((1 + x), ((days + i * 30) / 365));
                    }
                }
                return sum;
            }

            function f(x) {
                return calculatePart2(x, 0) - calculatePart3(x, days);
            }

            let x = bisect(f, 0, 1e10, 1e-6);
            x *= 100;
            return x.toFixed(2);
        }
        //Dwie transze
        else if (instalmentDisbursement === 2) {

            let first_disbursement = document.getElementById("kw1").value;
            let second_disbursement = document.getElementById("kw2").value;
            let days_diff_disb = document.getElementById("kw3").value;

            let sum = parseInt(first_disbursement) + parseInt(second_disbursement);
            // Walidacja danych
            if (first_disbursement <= 0 || second_disbursement <= 0 || days_diff_disb <= 0 || sum != loanValue) {
                if (first_disbursement <= 0) {
                    var alertHtml = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                      <strong>Nieprawidłowa wartość 1 transzy</strong>
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  `;
                }
                else if (first_disbursement <= 0) {
                    var alertHtml = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                      <strong>Nieprawidłowa wartość 2 transzy</strong>
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  `;
                }
                else if (days_diff_disb <= 0) {
                    var alertHtml = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                      <strong>Nieprawidłowa wartość dni pomiędzy transzami</strong>
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  `;
                }
                else {
                    var alertHtml = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                      <strong>Wprowadzono błędne dane</strong>
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  `;
                }
                document.querySelector('.container').insertAdjacentHTML('beforebegin', alertHtml);
            }
            else {


                function calculatePart2_B(x, days) {
                    return (first_disbursement / Math.pow((1 + x), (0 / 365))) + (second_disbursement / Math.pow((1 + x), (days_diff_disb / 365)));
                }

                function calculatePart3(x, days) {
                    let sum = 0;
                    for (let i = 0; i < numberOfInstallments; i++) {
                        if (creditPaymentMethod === 1) {
                            sum += decreasingInstallments[i] / Math.pow((1 + x), ((days + i * 30) / 365));
                        } else if (creditPaymentMethod === 2) {
                            sum += annuityInstallments[i] / Math.pow((1 + x), ((days + i * 30) / 365));
                        }
                    }
                    return sum;
                }

                function f(x) {
                    return calculatePart2_B(x, 0) - calculatePart3(x, days);
                }

                let x = bisect(f, 0, 1e10, 1e-6);
                x *= 100;
                return x.toFixed(2);
            }
        }
    }


}
