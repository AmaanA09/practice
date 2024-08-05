let taskList = [
  {
    Sr: 1,
    name: "Html Resume",
    description: "first",
    date: "15 june 2024",
    assignedBy: "Sohail sir",
  },
  {
    Sr: 2,
    name: "Html & CSS Resume",
    description: "Second",
    date: "25 june 2024",
    assignedBy: "Sohail sir",
  },
  {
    Sr: 3,
    name: "Netflix FAQ",
    description: "third",
    date: "30 june 2024",
    assignedBy: "Munaf Sir",
    priority: 3,
  },
  {
    Sr: 4,
    name: "personal-portfolio",
    description: "fourth",
    date: "7 july 2024",
    assignedBy: "Sohail sir",
    priority: 2,
  },
];

let table = document.getElementById("to-do-list");
// table.innerHtml = " ";

for (i = 0; i < taskList.length; i++) {
  let tRow = document.createElement("tr");
  table.append(tRow);
  let td2 = document.createElement("td");
  td2.innerText = taskList[i].Sr;
  let td3 = document.createElement("td");
  td3.innerText = taskList[i].name;
  let td4 = document.createElement("td");
  td4.innerText = taskList[i].description;
  let td5 = document.createElement("td");
  td5.innerText = taskList[i].date;
  let td6 = document.createElement("td");
  td6.innerText = taskList[i].assignedBy;
  let td7 = document.createElement("td");
  td7.innerText = taskList[i].priority;
  tRow.append(td2, td3, td4, td5, td6);
  if (taskList[i].priority == 1) {
    tRow.style = "background-color:#ff1919";
  } else if (taskList[i].priority == 2) {
    tRow.style = "background-color: #FFF44F";
  } else if (taskList[i].priority == 3) {
    tRow.style = "background-color:#4FE34F";
  }
}

// kunal code start

// let serialNumber = document.form.SrNo.value;
// console.log(serialNumber);
// let projectName = document.form.project-name.value;
// console.log(projectName);
// let description = document.form.description.value;
// console.log(description);
// let startDate = document.form.date.value;
// console.log(startDate);
// let assignedBy = document.form.assigned.value;
// console.log(assignedBy);
// let priority = document.form.priority.value;
// console.log(priority);

// kunal code end

// first logic

// function taskDetails(){

//     let serialNumber = document.querySelector("#SrNo").value;
//     console.log(serialNumber);
//     let projectName = document.getElementById("project-name").value;
//     console.log(projectName);
//     let description = document.getElementById("description").value;
//     console.log(description);
//     let startDate = document.getElementById("date").value;
//     console.log(startDate);
//     let assignedBy = document.getElementById("assigned").value;
//     console.log(assignedBy);
//     let priority = document.getElementById("priority").value;
//     console.log(priority);

// let table1 = document.getElementById("to-do-list");
// console.log(table);

// let tRow = document.createElement("tr");
// console.log(tRow)
// table1.append(tRow);

// let td1 = document.createElement("td");
// td1.innerText = serialNumber;
// console.log(td1);
// // tRow.append(td1);

// let td2 = document.createElement("td");
// td2.innerText = projectName;
// console.log(td2);
// // tRow.append(td2);

// let td3 = document.createElement("td");
// td3.innerText = description;
// console.log(td3);
// // tRow.append(td3);

// let td4 = document.createElement("td");
// td4.innerText = startDate;
// console.log(td4);
// // tRow.append(td4);

// let td5 = document.createElement("td");
// td5.innerText = assignedBy;
// console.log(td5);
// // tRow.append(td5);

// let td6 = document.createElement("td");
// td6.innerText = priority;
// console.log(td6);
// // tRow.append(td6);

// tRow.append(td1,td2,td3,td4,td5,td6);

// }
// taskDetails();

// second logic

function taskDetails() {
//   event.preventDefault()

  let serialNumber = document.getElementById("SrNo").value;
  let projectName = document.getElementById("project-name").value;
  let description = document.getElementById("description").value;
  let startDate = document.getElementById("date").value;
  let assignedBy = document.getElementById("assigned").value;
  let priority = document.getElementById("priority").value;

  // let taskItem = {
  //   Sr: serialNumber,
  //   name: projectName,
  //   description: description,
  //   date: startDate,
  //   assignedBy: assignedBy,
  //   priority: priority,
  // };
  // console.log(taskItem)
  // let taskList = []
  // taskList.push(taskItem);

    let table = document.getElementById("to-do-list");
    console.log(table);

    let tRow = document.createElement("tr");
    console.log(tRow);
    table.append(tRow);

    let td1 = document.createElement("td");
    td1.innerText = serialNumber;
    console.log(td1);

    let td2 = document.createElement("td");
    td2.innerText = projectName;
    console.log(td2);

    let td3 = document.createElement("td");
    td3.innerText = description;
    console.log(td3);

    let td4 = document.createElement("td");
    td4.innerText = startDate;
    console.log(td4);

    let td5 = document.createElement("td");
    td5.innerText = assignedBy;
    console.log(td5);

    let td6 = document.createElement("td");
    td6.innerText = priority;
    console.log(td6);

    tRow.append(td1, td2, td3, td4, td5);
    if (priority == 1) {
      tRow.style = "background-color:#ff1919";
    } else if (priority == 2) {
      tRow.style = "background-color: #FFF44F";
    } else if (priority == 3) {
      tRow.style = "background-color:#4FE34F";
    }
};


// 3r logic

// function taskDetails() {
//   //   event.preventDefault()
  
//     let serialNumber = document.getElementById("SrNo").value;
//     let projectName = document.getElementById("project-name").value;
//     let description = document.getElementById("description").value;
//     let startDate = document.getElementById("date").value;
//     let assignedBy = document.getElementById("assigned").value;
//     let priority = document.getElementById("priority").value;
  
//     let taskItem = {
//       Sr: serialNumber,
//       name: projectName,
//       description: description,
//       date: startDate,
//       assignedBy: assignedBy,
//       priority: priority,
//     };
//     // console.log(taskItem)
//     // let taskList = []
//     taskList.push(taskItem);

//     // for (i = 0; i < taskList.length; i++){
//     //   let table = document.getElementById("to-do-list");
//     //   console.log(table);
  
//     //   let tRow = document.createElement("tr");
//     //   console.log(tRow);
//     //   table.append(tRow);
  
//     //   let td1 = document.createElement("td");
//     //   td1.innerText = taskList[i].Sr;
//     //   console.log(td1);
  
//     //   let td2 = document.createElement("td");
//     //   td2.innerText = taskList[i].projectName;
//     //   console.log(td2);
  
//     //   let td3 = document.createElement("td");
//     //   td3.innerText = taskList[i].description;
//     //   console.log(td3);
  
//     //   let td4 = document.createElement("td");
//     //   td4.innerText = taskList[i].date;
//     //   console.log(td4);
  
//     //   let td5 = document.createElement("td");
//     //   td5.innerText = taskList[i].assignedBy;
//     //   console.log(td5);
  
//     //   let td6 = document.createElement("td");
//     //   td6.innerText = taskList[i].priority;
//     //   console.log(td6);
  
//     //   tRow.append(td1, td2, td3, td4, td5, td6);
//     // };
//   };
  
