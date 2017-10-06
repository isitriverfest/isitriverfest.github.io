var startDate = 1;
var endDate = 9;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

if (mm == 6 && dd >= startDate && dd <= endDate) {
  document.write("YES!")
} else {
  document.write("no.")
}
