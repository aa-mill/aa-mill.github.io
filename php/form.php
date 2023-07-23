<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // get the form data
    $first = $_POST["first"];
    $last = $_POST["last"];
    $email = $_POST["email"]
    $message = $_POST["message"];

    // set the email subject
    $subject = "Contact Submission from ".$first." ".$last;

    // email recipient (your email address)
    $to = "aaronmillerhockey21@gmail.com";

    // compose the email body
    $body = "Name: $first." ".$last\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // set additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
}
?>
