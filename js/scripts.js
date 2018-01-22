// business logic
function Task (name, category, dueDate, daysUntil, completed) {
  this.name = name;
  this.category = category;
  this.dueDate = dueDate;
  this.completed = false;
}

// Task.prototype.calculateDaysUntil = function() {
//   return Task.dueDate - Date.now()
// }

var calculateDaysUntil = function(dueDate) {
  return Math.ceil((Date.parse(dueDate) - Date.now())/(1000*3600*24));
}

// user interface logic
$(document).ready(function() {
  $("#toDoForm").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#newName").val();
    var inputtedCategory = $("select#newCategory").val();
    var inputtedDueDate = $("input#newDueDate").val();


    var newTask = new Task(inputtedName, inputtedCategory, inputtedDueDate);
    var calculatedDaysUntil = calculateDaysUntil(inputtedDueDate);

    console.log(calculatedDaysUntil)
    console.log(newTask)
    $("input#newName").val("");
    $("select#newCategory").val("");
    $("input#newDueDate").val("");
  });
});
