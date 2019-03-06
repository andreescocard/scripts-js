//in windows, install moment over command line
//npm install moment --save
var moment = require('moment');
function getAge(birthDate) {
    //using portuguese date
    var dob = moment(birthDate, 'DD/MM/YYYY');	

    var years = moment().diff(dob, 'years');
    var months = moment().diff(dob, 'months');
    
    if(months >= 12){
        var totalMonths = years * 12;
        months = months - totalMonths;
    }

    
    console.log(years);
    console.log(months);
}

getAge('05/02/2019');