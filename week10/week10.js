function validate() {
    var phone = document.valid_form.phone.value;
    var expiration = document.valid_form.expiration.value;
    var cardNum = document.valid_form.ccn.value;

    if (expirationValidate() == 0) {
        document.getElementById("expiration").focus();
    } else if (phoneValidate() == 0) {
        document.getElementById("phone").focus();
    } else if (cardValidate() == 0) {
        document.getElementById("cardNum").focus();
    }
}


function expirationValidate() {
    var expiration = document.valid_form.expiration.value;

    if (!expiration.match(/^\d{2}\/\d{2}$/g)) {
        var str = "&#9747;";
        var result = str.fontcolor("red");
        document.getElementById("expirationError").innerHTML = result;
        return 0;

    } else {
        var str = "&check;";
        var result = str.fontcolor("green");
        document.getElementById("expirationError").innerHTML = result;
        return 1;
    }
}

function phoneValidate() {
    var phone = document.valid_form.phone.value;

    if (!phone.match(/\d{3}-\d{3}-\d{4}/)) {
        var str = "&#9747;";
        var result = str.fontcolor("red");
        document.getElementById("phoneError").innerHTML = result;
        return 0;
    } else {
        var str = "&check;";
        var result = str.fontcolor("green");
        document.getElementById("phoneError").innerHTML = result;
        return 1;
    }
    //document.getElementById("phone").focus();
}

function cardValidate() {
    var cardNum = document.valid_form.ccn.value;

    if (!cardNum.match(/\d{16}/)) {
        var str = "&#9747;";
        var result = str.fontcolor("red");
        document.getElementById("cardError").innerHTML = result;
        return 0;
    } else {
        var str = "&check;";
        var result = str.fontcolor("green");
        document.getElementById("cardError").innerHTML = result;
        return 1;
    }
}