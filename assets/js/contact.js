function sendMail(contactForm) {
    emailjs.send("gmail", "martin", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "gym_enquiry": contactForm.message.value
    })
    .then(
        function(response) {
        contactForm.name.value = '';
        contactForm.email.value = '';
        contactForm.message.value = '';
alert('Your message has been submitted successfully!');
        },
        function(error) {
alert('There was an error submitting your message, ' + error.message);
        }
    );
    return false;
}