//feetToMile
  function feetToMile(feet){
      var mile = feet/5280;
      return mile;
  }
  var conversion = feetToMile(50)
  if (conversion < 0) {
    console.log("Conversion Number Can Not Be a Negetive Value");
  } else {
    console.log(conversion);
  }
  
  //woodCalculator
  function woodCalculator(chair,table,bed){
      var totalChairNumber = chair * 1;
      var totleTableNumber = table * 3;
      var totalBedNumber   = bed * 5;
      return totalChairNumber + totleTableNumber + totalBedNumber;
  }
  var totalNumber = woodCalculator(20,8,5);
  console.log(totalNumber);
  
  //brickCalculator
  function brickCalculator(calculate){
      const oneFeet           = 100;
      const firstTenFloors    = 15;
      const secondTenFloors   = 12;
      const overTwenty        = 10;
      if(calculate <= 10){
          var multiply = calculate * firstTenFloors;
          var result = multiply  * oneFeet;
          return result;
      }else if(calculate <=20){
          var subtract = calculate - 10;
          var multiply = subtract * secondTenFloors;
          var firstTen = 10 * 15;
          var total    = multiply + firstTen;
          var result = total * oneFeet;
          return result;
      }else if(calculate > 20){
          var subtract = calculate - 20;
          var multiply = subtract * overTwenty;
          var firstTen = 10*15;
          var secondTen = 10*12;
          var total = multiply + firstTen + secondTen;
          var result = total  *oneFeet;
          return result;
      }
  }
  console.log(brickCalculator(35));
  
  
//tinyFriend
function tinyFriend(numbers){
    var tiny = numbers[0];  
    for(var i = 0; i < numbers.length; i++){
        var fList = numbers[i];
        if( fList.length < tiny.length){
            tiny = fList;
        }
    }  
    return tiny;
}

var friendsList = ['Rony', 'Hasan', 'Mahbub', 'abdullah' ]
console.log(tinyFriend(friendsList));
