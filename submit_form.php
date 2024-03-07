<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Email recipient (change this to your email address)
    $to = "your_email@example.com";
    
    // Email subject
    $subject = "New message from $name";
    
    // Email message
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";
    
    // Email headers
    $headers = "From: $name <$email>";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully
        echo "Thank you for contacting us. We will get back to you soon!";
    } else {
        // Email failed to send
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    // If the request method is not POST, show an error message
    echo "Oops! Something went wrong. Please try again later.";
}
?>