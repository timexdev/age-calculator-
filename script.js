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


// const calculateAge = () => {
//     const yob = document.getElementById("year").value;
//     const mob = document.getElementById("month").value;
//     const dob = document.getElementById("day").value;

//     const now = new Date();
//     const birthDate = new Date(yob, mob - 1, dob);
//     let ageYears = now.getFullYear() - birthDate.getFullYear();
//     let ageMonths = now.getMonth() - birthDate.getMonth();
//     let ageDays = now.getDate() - birthDate.getDate();

//     const birthdayThisYear = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
//     if (now < birthdayThisYear) {
//       ageMonths--;
//       ageDays = now.getDate() + (new Date(now.getFullYear(), now.getMonth() - 1, 0).getDate()) - birthDate.getDate();
//       if (ageDays >= 30) {
//         ageMonths++;
//         ageDays -= 30;
//       }
//     }
//     document.getElementById('display-year').innerHTML = ageYears
//     document.getElementById('display-month').innerHTML = ageMonths
//     document.getElementById('display-day').innerHTML = ageDays



    // const ageElement = document.getElementById("age");
//     // ageElement.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
//   }