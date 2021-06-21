// Ex (functions 2):
// Write a function which gets a day and returns:
// If the day is Sunday/Monday return 'Have a good week'
// If the day is Tuesday/Wednesday return 'Ohhh...'
// If the day is Thursday return 'Yalla habayta'
// If the day is Friday/Saturday return 'Yammi Jachnun'
// Print the result

function whatDay(day) {
    var result = "";
    day = day.toLowerCase()
    if (day === 'sunday' || day === 'monday') {
        result = 'Have a good week';
    } else if (day === 'tuesday' || day === 'wednesday') {
        result = 'Ohhh ... ';
    } else if (day === 'thursday') {
        result = 'Yalla habaita';
    } else if (day === 'friday' || day === 'saturday') {
        result = 'Yammi Jachnun'
    } else {
        result = 'not a day';
    }
    return result;
}

console.log(whatDay('Tuesday'));

// Ex (functions 3):
// Convert the previous function by using switch statement
function whatDayToday(day) {
    var result;
    day = day.toLowerCase();
    switch (day) {
      case "sunday":
      case "monday":
        result = "Have a good week"
        break
      case "tuesday":
      case "wednesday":
        result = "Ohhh...."
        break
      case "thrusday":
        result = "Yalla habayta"
        break
      case "friday":
      case "saturday":
        result = "Yammi jachnun"
        break
      default:
        result = "Not a valid day"
        break
    }
    return result
  }

  console.log(whatDayToday("monday"))