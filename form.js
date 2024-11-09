// Open the form popup
function openForm() {
    document.getElementById("applicationForm").style.display = "flex";
}

// Close the form popup
function closeForm() {
    document.getElementById("applicationForm").style.display = "none";
}

// Handle form submission (you'd need to connect this to your backend later)
function submitForm(event) {
    event.preventDefault();
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const statement = document.getElementById("statement").value;

    // Placeholder alert for submitted data
    alert(`Thank you, ${name}! Your application has been submitted.`);
    // Clear the form and close the popup
    document.getElementById("applyForm").reset();
    closeForm();
}
