// Przyciski
var n1 = 0;
var n2 = 0;
var n3 = new Big('8');
var n4 = new Big('1');
var n5 = 0;

function addValue1() {
    return n1 += 1000;
}

function addValue2() {
    return n2 += 1;
}

function addValue3() {
    return n3 = n3.plus('0.1');
}

function addValue4() {
    return n4 = n4.plus('0.1');
}

function subtractValue1() {
    if (n1 > 0) {
        return n1 -= 10;
    }   
}

function subtractValue2() {
    if (n2 > 0) {
        return n2 -= 1;
    }
}

function subtractValue3() {
    if (n3 > 0) {
        return n3 = n3.minus('0.1');
    }   
}

function subtractValue4() {
    if (n4 > 0) {
        return n4 = n4.minus('0.1');
    }   
}

function addValue5() {
    return n5 += 1;
}

function subtractValue5() {
    if (n5 > 0) {
        return n5 -= 1;
    }
}

//Kalkulator

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
    let zadl = document.getElementById("kw").value;
    let dni = 30;
    let ilosc_rat = document.getElementById("lr").value;
    let oprocentowanie = (document.getElementById("op").value / 100) / 12;
    let pozostalo = zadl;
    let loan_fee = (document.getElementById("pr").value / 100) * zadl;
    let loan_fee_time = 1;
    let credit_payment_method = 1;

    let raty_malejace = [];
    let raty_annuitetowe = [];
    if (credit_payment_method === 1) {
        raty_malejace = new Array(ilosc_rat).fill(0);
        let rata_kap_malejaca = zadl / ilosc_rat;
        for (let i = 0; i < ilosc_rat; i++) {
            raty_malejace[i] = pozostalo * oprocentowanie + rata_kap_malejaca;
            if (i === loan_fee_time - 1) {
                raty_malejace[i] += loan_fee;
            }
            pozostalo -= rata_kap_malejaca;
        }
    }
    // Raty równe
    else if (credit_payment_method === 2) {
        raty_annuitetowe = new Array(ilosc_rat).fill(0);
        let rata_kap_rowna = (zadl * oprocentowanie * Math.pow((1 + oprocentowanie), ilosc_rat)) / (Math.pow((1 + oprocentowanie), ilosc_rat) - 1);
        for (let i = 0; i < ilosc_rat; i++) {
            raty_annuitetowe[i] = rata_kap_rowna;
            if (i === loan_fee_time - 1) {
                raty_annuitetowe[i] += loan_fee;
            }
            pozostalo -= rata_kap_rowna;
        }
    } else {
        console.log("Wybór jest błędny");
    }

    // Opcja wyboru ilości transz
    let instalment_disbursement = 1;
    if (instalment_disbursement === 1) {
        function calculatePart2(x, dni) {
            return zadl / Math.pow((1 + x), (dni / 365));
        }

        function calculatePart3(x, dni) {
            let sum = 0;
            for (let i = 0; i < ilosc_rat; i++) {
                if (credit_payment_method === 1) {
                    sum += raty_malejace[i] / Math.pow((1 + x), ((dni + i * 30) / 365));
                } else if (credit_payment_method === 2) {
                    sum += raty_annuitetowe[i] / Math.pow((1 + x), ((dni + i * 30) / 365));
                }
            }
            return sum;
        }

        function f(x) {
            return calculatePart2(x, 0) - calculatePart3(x, dni);
        }

        let x = bisect(f, 0, 1e10, 1e-6);
        x *= 100;
        return x.toFixed(2);
        //console.log("Wartość x:", x, "%");
    } else if (instalment_disbursement === 2) {
        let first_disbursement = parseInt(prompt("Podaj wysokość pierwszej transzy: "));
        let second_disbursement = parseInt(prompt("Podaj wysokość drugiej transzy: "));
        let days_diff_disb = parseInt(prompt("Podaj różnicę dni pomiędzy transzami: "));

        function calculatePart2_B(x, dni) {
            return (first_disbursement / Math.pow((1 + x), (0 / 365))) + (second_disbursement / Math.pow((1 + x), (days_diff_disb / 365)));
        }

        function calculatePart3(x, dni) {
            let sum = 0;
            for (let i = 0; i < ilosc_rat; i++) {
                if (credit_payment_method === 1) {
                    sum += raty_malejace[i] / Math.pow((1 + x), ((dni + i * 30) / 365));
                } else if (credit_payment_method === 2) {
                    sum += raty_annuitetowe[i] / Math.pow((1 + x), ((dni + i * 30) / 365));
                }
            }
            return sum;
        }

        function f(x) {
            return calculatePart2_B(x, 0) - calculatePart3(x, dni);
        }

        let x = bisect(f, 0, 1e10, 1e-6);
        x *= 100;
        return x.toFixed(2);
    }

        
    }
