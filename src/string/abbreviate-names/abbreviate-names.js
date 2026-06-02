/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

function abbreviate (name) {
    const firstAndLast = name.split(/\s+/g);
    let initials = "";
    firstAndLast.forEach(element => {
        initials += element.substring(0, 1).toUpperCase() + ".";
    });
    return initials;
}

module.exports = abbreviate;
