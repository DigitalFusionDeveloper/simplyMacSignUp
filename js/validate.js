$(document).ready(function () {
    var $first, $last, $zip, $email;

    function isZip(zip) {
        var zipTest = /^\d{5}$/.test(zip);
        return zipTest;
    }

    function isName(name) {
        var nameTest = /^[a-zA-Z]{2,}$/.test(name);
        return nameTest;
    }

    function isEmail(email) {
        var emailTest = /^.+@.+\.edu$/.test(email);
        return emailTest;
    }

    function firstNameError() {
        $first = $('#firstName').val();
        if (isName($first)) {
            $('#firstName').next().text('');
            $('#firstName').css("border", "1px solid #40ae49");
        } else {
            $('#firstName').next().text("Should be 2 or more letters");
            $('#firstName').css("border", "1px solid rgba(255, 0, 0, .3)");
        }
    }

    function lastNameError() {
        $last = $('#lastName').val();
        if (isName($last)) {
            $('#lastName').next().text('');
            $('#lastName').css("border", "1px solid #40ae49");
        } else {
            $('#lastName').next().text("Should be 2 or more letters");
            $('#lastName').css("border", "1px solid rgba(255, 0, 0, .3)");
        }
    }

    function zipCodeError() {
        $zip = $('#zipCode').val();
        if (isZip($zip)) {
            $('#zipCode').next().text("");
            $('#zipCode').css("border", "1px solid #40ae49");
        } else {
            $('#zipCode').next().text("Should be 5 digits");
            $('#zipCode').css("border", "1px solid rgba(255, 0, 0, .3)");
        }
    }

    function emailAddressError() {
        $email = $('#emailAddress').val()
        if (isEmail($email)) {
            $('#emailAddress').next().text('');
            $('#emailAddress').css("border", "1px solid #40ae49");
        } else {
            $('#emailAddress').next().text("Should end with .edu");
            $('#emailAddress').css("border", "1px solid rgba(255, 0, 0, .3)");
        }
    }

    function displayErrors() {
        firstNameError();
        lastNameError();
        zipCodeError();
        emailAddressError();
    }

    $('#firstName').blur(firstNameError);
    $('#lastName').blur(lastNameError);
    $('#zipCode').blur(zipCodeError);
    $('#emailAddress').blur(emailAddressError);

    $('button').click(function () {
        event.preventDefault();
        if (isZip($zip) && isName($first) && isName($last) && isEmail($email)) {
            console.log($first, $last, $zip, $email); // VALIDATED DATA
            //POST METHOD HERE
        } else {
            displayErrors();
        }
    });
});
