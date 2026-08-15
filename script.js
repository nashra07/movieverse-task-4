document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    alert("Thank you for contacting Fashion Hub! We will get back to you soon.");

    document.getElementById("contactForm").reset();

});
function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = task +
        ' <button class="deleteBtn" onclick="removeTask(this)">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}