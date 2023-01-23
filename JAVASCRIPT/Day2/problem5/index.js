const currentTime = 7;
let message = "";
if (currentTime > 0 && currentTime <= 12) {
  message = "Good Morning";
} else if (currentTime > 12 && currentTime <= 17) {
  message = "Good Afternoon";
} else if (currentTime > 17 && currentTime <= 23) {
  message = "Good Evening";
} else {
  message = "Invalid Time";
}

console.log(message);

const today = new Date().getDay();
let fullDay = "";
switch (today) {
  case 0:
    fullDay = "SUNDAY";
    break;
  case 1:
    fullDay = "MONDAY";
    break;
  case 2:
    fullDay = "TUESDAY";
    break;
  case 3:
    fullDay = "WEDNESDAY";
    break;
  case 4:
    fullDay = "THURSDAY";
    break;
  case 5:
    fullDay = "FRIDAY";
    break;
  case 6:
    fullDay = "SATURDAY";
    break;
  default:
    fullDay: "INVALID";
    break;
}

console.log(`Today Is ${fullDay}`);
