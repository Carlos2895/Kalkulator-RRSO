var n1 = 0;
var n2 = 0;
var n5 = 0;
function addValue1() {
    return n1 += 10;
}

function addValue2() {
    return n2 += 1;
}

var n3 = new Big('0');

function addValue3() {
    return n3 = n3.plus('0.1');
}

var n4 = new Big('0');

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
