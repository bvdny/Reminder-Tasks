var cardSignature = 1;
var countingRemainingTasks = 0;
function addTask() {
  var task = document.getElementById("task").value;
  var isUrgent = document.querySelector('#urgent:checked') != null;
  var divClass = "card alert alert-light";
  if (isUrgent) {
    divClass = "card alert alert-danger";
  }
  if (task === "") {
    alert("The task description field must not be empty !");
  } else {
    document.getElementById("listOfTask").innerHTML += `
      <div class="` + divClass + `" id="`+ cardSignature + `">
        <p>Task added on: <strong>`+ getDate() +`</strong> at <strong>`+ getTime() +`</strong></p>
        <div class="card-body">
          <div class="card-body">
              <h5>` + task + `</h5>
          </div>
        </div>
        <div class="card-footer text-muted">
          <a href="#" class="btn btn-danger btn-sm" onclick="return deleteTask(` + cardSignature + `);"><img src="https://img.icons8.com/ios-glyphs/25/000000/trash--v1.png"/></a>
        </div>
      </div>`;
      ++countingRemainingTasks;
      ++cardSignature;
  }
  document.getElementById("remainingTasks").innerHTML = countingRemainingTasks;
  return false;
}

function deleteTask(idTask) {
  --countingRemainingTasks;
  document.getElementById(idTask).remove();
  document.getElementById("remainingTasks").innerHTML = countingRemainingTasks;
  return false;
}

function getDate() {
  date = new Date();
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

function getTime() {
  time = new Date().toLocaleTimeString();
  return time;
}

