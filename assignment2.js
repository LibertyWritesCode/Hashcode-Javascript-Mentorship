// Write a JS function that receives your names as parameter and then returns your surname and initials
// E.g Fakolade Liberty Semiliore -> Fakolade L.S

function getfullNames(lastName, firstName, middleName) {
    const fullNames = lastName + ' ' + firstName.charAt(0) + '.' + middleName.charAt(0);
    return fullNames;
}


Names = getfullNames('Fakolade', 'Liberty', 'Semilore');
console.log(Names);

//console.log(getfullNames('Fakolade', 'Liberty', 'Semilore'));