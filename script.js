let studentForm = document.getElementById("studentForm");

let studentName = document.getElementById("studentName");
let studentId = document.getElementById("studentId");
let course = document.getElementById("course");
let college = document.getElementById("college");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let photo = document.getElementById("photo");
let cardColor = document.getElementById("cardColor");

let cardName = document.getElementById("cardName");
let cardId = document.getElementById("cardId");
let cardCourse = document.getElementById("cardCourse");
let cardCollege = document.getElementById("cardCollege");
let cardPhone = document.getElementById("cardPhone");
let cardEmail = document.getElementById("cardEmail");
let cardPhoto = document.getElementById("cardPhoto");
let cardHeader = document.getElementById("cardHeader");

let printButton = document.getElementById("printButton");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (
        studentName.value.trim() === "" ||
        studentId.value.trim() === "" ||
        course.value.trim() === "" ||
        college.value.trim() === "" ||
        phone.value.trim() === "" ||
        email.value.trim() === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }

    cardName.textContent = studentName.value;
    cardId.textContent = studentId.value;
    cardCourse.textContent = course.value;
    cardCollege.textContent = college.value;
    cardPhone.textContent = phone.value;
    cardEmail.textContent = email.value;

    cardHeader.style.backgroundColor = cardColor.value;

    alert("Student ID card generated successfully!");
});

photo.addEventListener("change", function() {

    let selectedPhoto = photo.files[0];

    if (selectedPhoto) {

        let reader = new FileReader();

        reader.onload = function(event) {
            cardPhoto.src = event.target.result;
        };

        reader.readAsDataURL(selectedPhoto);
    }
});

cardColor.addEventListener("input", function() {
    cardHeader.style.backgroundColor = cardColor.value;
});

printButton.addEventListener("click", function() {
    window.print();
});