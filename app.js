//  login page

function logBtn() {
    const user = document.forms["myForm"]["uname"].value;
    const password = document.forms["myForm"]["pass"].value;
    const admin = document.getElementById("Admin").value;
    const doctor = document.getElementById("Doctor").value;
    const staff = document.getElementById("Staff").value;

     if (admin == "Admin" && password == "123" && user == "Admin") {
        window.location = "admin.html";
    }
    else if (user == "Doctor" && doctor == "Doctor" && password == "123") {
        window.location = "doctor.html";
    }
    else if (user == "Staff" && staff == "Staff" && password == "123") {
        window.location = "staff.html";
    }
};



let entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);
let tableRow = 1;
function displayDetails(e) {
    e.preventDefault()
    let patientName = document.getElementById("Patient-Name").value;
    let patientAge = document.getElementById("Patient-Age").value;
    let patientSymptoms = document.getElementById("Patient-Symptoms").value;
    let patientNumber = document.getElementById("mo-number").value;

    let patients = localStorage.getItem("patients") || JSON.stringify([])
    patients = JSON.parse(patients);
    patients.push({ patientName, patientAge, patientSymptoms, patientNumber });
    localStorage.setItem("patients", JSON.stringify(patients))

    if (!patientName || !patientAge || !patientSymptoms || !patientNumber) {
        alert("Please fill all the boxes");
        return;
    }
    let displayTable = document.getElementById("table-tag");
    let newRow = displayTable.insertRow(tableRow);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = patientName;
    cell2.innerHTML = patientSymptoms;
    cell3.innerHTML = patientAge;
    cell4.innerHTML = patientNumber;

    tableRow++;

}

// admin portal


function menuBtn() {
    let left_menu = document.getElementById("left-menu-bar");
    left_menu.style.display = "block";
    left_menu.style.width = "40%";
    left_menu.style.position = "absolute";
    left_menu.style.left = "0";
    left_menu.style.zIndex = "99";
};
function closeBtn() {
    let left_menu = document.getElementById("left-menu-bar");
    left_menu.style.display = "none";
};
