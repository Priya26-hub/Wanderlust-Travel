const form = document.getElementById("enquiryForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const destination = document.getElementById("destination").value;

    if (name === "") {
        message.textContent = "Please enter a valid name.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Thank you, " + name + "! We received your enquiry for " + destination + ". We will contact you soon.";
    message.style.color = "green";

    form.reset();
});