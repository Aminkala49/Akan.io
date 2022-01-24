function fetchValue(){
  // alert("hello");
  var dateOfBirth = document.getElementById('date').value;
  var monthOfBirth = document.getElementById('month').value;
 var yearOfBirth = document.getElementById('year').value;
 var gender = document.getElementById('gender').value;
 console.log(dateOfBirth + monthOfBirth + yearOfBirth + gender)
 var dateInt = parseInt(dateOfBirth);
  var monthInt = parseInt(monthOfBirth);

  var century = yearOfBirth.slice(0,2);
  var bornYear = yearOfBirth.slice(2,5);
  var CC = parseInt(century);
  var YY = parseInt(bornYear);
 console.log(century + " " + bornYear);
  validateValues(dateInt,monthInt,gender,CC,YY);

}
function validateValues(dateInt,monthInt,gender,CC,YY){
  if (dateInt <= 0 ||  dateInt > 31){
    alert("please give a valid date ...the date format is incorect");
  }else if (monthInt <= 0 || monthInt > 12){
    alert("kindly give a valid month... incorect format");
  }else {
    dayOfWeek(dateInt,monthInt,gender,CC,YY);
  }

}
function dayOfWeek(dateInt,monthInt,gender,yearInt){

    let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
    yearInt -= (monthInt < 3) ? 1 : 0;    
    var dw =  ( yearInt + yearInt/4 - yearInt/100 + yearInt/400 + t[monthInt-1] + dateInt) % 7;

    var newDw = Math.trunc(dw);
    console.log(newDw);
    finalOutput(newDw,gender)

}
function finalOutput(dw,gender){
  var weak = ["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
  var maleakanNames = ["Kwasi", "Kwandwo", "Kwambena","Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleakanNames=["Akosua", "Adwoa","Abenna", "akua","Yaa","Afua","Ama"];
  if (dw == 1 && gender === "male"){
    alert("You were born on " + weak[0] + " and your akan name is "  + maleakanNames[0])
  }else if (dw == 1 && gender === "female"){
    alert("You were born on " + weak[0] + " and your akan name is "  + femaleakanNames[0])
}else if (dw == 2 && gender === "female"){
  alert("You were born on " + weak[1] + " and your akan name is "  + femaleakanNames[1])
}else if (dw == 2 && gender === "male"){
  alert("You were born on " + weak[1] + " and your akan name is "  + maleakanNames[1])
}else if (dw == 3 && gender === "female"){
  alert("You were born on " + weak[2] + " and your akan name is "  + femaleakanNames[2])
}else if (dw == 3 && gender === "male"){
  alert("You were born on " + weak[2] + " and your akan name is "  + maleakanNames[2])
}else if (dw == 4 && gender === "female"){
  alert("You were born on " + weak[3] + " and your akan name is "  + femaleakanNames[3])
}else if (dw == 4 && gender === "male"){
  alert("You were born on " + weak[3] + " and your akan name is "  + maleakanNames[3])
}else if (dw == 5 && gender === "female"){
  alert("You were born on " + weak[4] + " and your akan name is "  + femaleakanNames[4])
}else if (dw == 5 && gender === "male"){
  alert("You were born on " + weak[4] + " and your akan name is "  + maleakanNames[4])
}else if (dw == 6 && gender === "female"){
  alert("You were born on " + weak[5] + " and your akan name is "  + femaleakanNames[5])
}else if (dw == 6 && gender === "male"){
  alert("You were born on " + weak[5] + " and your akan name is "  + maleakanNames[5])
}else if (dw == 7 && gender === "female"){
  alert("You were born on " + weak[6] + "  and your akan name is "  + femaleakanNames[6])
}else if (dw == 7 && gender === "male"){
  alert("You were born on " + weak[6] + " and your akan name is "  + maleakanNames[6])
}

}