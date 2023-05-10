function calculateAge(){
    var dob = document.getAnimations("day").value;
    var mob = document.getElementById("month").value;
    var yob = document.getElementById("year").value;
    var date = new Date();
    var currentDay = date.getDate();
    var currentMonth = 1 + date.getMonth();
    var currentYear = date.getFullYear();
    var month = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(dob > currentDay) {
        currentDay = currentDay + month[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }
    if(mob > currentMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }
    // var days = currentDay - dob;
    var months = currentMonth - mob;
    var years = currentYear - yob;
    // document.getElementById("display-day").innerHTML = days;
    document.getElementById("display-month").innerHTML = months ;
    document.getElementById("display-year").innerHTML = years ;
}


