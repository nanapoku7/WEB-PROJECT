document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    emailjs.sendForm("service_zft6fo7","template_mk3fvyt", this)
        .then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
});
