<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "jrouse119@rams.wssu.edu";
    $subject = "Menu Request";
    $headers = "From: webmaster@example.com";

    $country = $_POST['country'];
    $requestDate = $_POST['request-date'];
    $menuItems = $_POST['menu-items'];

    $message = "Country: $country\n";
    $message .= "Request Date: $requestDate\n";
    $message .= "Menu Items:\n$menuItems\n";

    // Send email
    mail($to, $subject, $message, $headers);
    
    // Redirect to a thank you page
    header("Location: thank_you.html");
    exit(); // Add this line to stop script execution after redirection
} else {
    echo "Error: Invalid request";
}
?>