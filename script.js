document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.querySelector("#contact form"); // Selects the form inside #contact
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_zft6fo7", "template_mk3fvyt", this)
                .then(function (response) {
                    alert("Message sent successfully!");
                }, function (error) {
                    alert("Failed to send message. Please try again.");
                });
        });
    } else {
        console.error("Error: Contact form not found in the document.");
    }
});
