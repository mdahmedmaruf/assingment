//feetToMile
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var conversion = feetToMile(50)
if (conversion < 0) {
  console.log("Conversion Number Can Not Be a Negetive Value");
} 
else {
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
    const oneFeet           = 1000;
    const firstTenFloors    = 15;
    const secondTenFloors   = 12;
    const overTwenty        = 10;
    if(calculate <= 10){
        var multiply = calculate * firstTenFloors;
        var result = multiply  * oneFeet;
        return result;
    }
    else if(calculate <=20){
        var subtract = calculate - 10;
        var multiply = subtract * secondTenFloors;
        var firstTen = 10 * 15;
        var total    = multiply + firstTen;
        var result = total * oneFeet;
        return result;
    }
    else if(calculate > 20){
        var subtract = calculate - 20;
        var multiply = subtract * overTwenty;
        var firstTen = 10*15;
        var secondTen = 10*12;
        var total = multiply + firstTen + secondTen;
        var result = total  *oneFeet;
        return result;
    }
}
console.log(brickCalculator(40));
  
  
//tinyFriend
  function tinyFriend(name){
    var friendName = name[0];
    for(var i = 0; i < name.length; i++){
        var friendList = name[i];
        if(friendList.length < friendName.length){
            friendName = friendList;
        }
	}
	return friendName;
}
var tinyName = tinyFriend(['Ahmed','Badrul','Dina','Mahammudul']);
if(tinyName === '') {
  console.log("Name can not be empty");
}
else {
  console.log(tinyName);
}
