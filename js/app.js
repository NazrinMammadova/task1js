

  var hours = new Date().getHours();
  if (hours >= 6 && hours <= 12){
  alert('it is morning');
  document.body.style.backgroundColor = "yellow"}
  else if(hours >= 12 && hours <= 18)
{

alert('it is afternoon')
document.body.style.backgroundColor = "red"
}

else{
alert('it is night')
document.body.style.backgroundColor = "blue"
}

