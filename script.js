document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); 

            emailjs.sendForm("service_zft6fo7", "template_mk3fvyt", this)
                .then(function(response) {
                    alert("Message sent successfully!");
                }, function(error) {
                    alert("Failed to send message. Please try again.");
                });
        });
    } else {
        console.error("Contact form not found! Check your HTML for the correct ID.");
    }
});
