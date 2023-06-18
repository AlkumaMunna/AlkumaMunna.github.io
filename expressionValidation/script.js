choice = prompt(`
Menu: Please Selecet An Option
a. Email
b. Phone Number
c. Post Code`);

let text;

function validation(inputText, re) {
    var input = prompt(`Please Enter Your ${inputText}`);

    if (re.test(input)) {
        text = `Your ${inputText} is Valid: ${input}`;
    } else {
        text = `Your ${inputText} is Not Valid: ${input}`;
    }
}

switch (choice) {
    case "a":

        var re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/
        validation("Email Address", re);
        break;

    case "b":

        var re = /^(\+)?(88)?01[0-9]{9}$/;
        validation("Phone Number", re);
        break;

    case "c":

        var re = /^[0-9]{4}$/;
        validation("Postal Code", re);
        break;

    default:
        text = "No option is selected!";
        break;
}
alert(text);

