<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $first_name = htmlspecialchars($_POST['first_name']);
        $last_name = htmlspecialchars($_POST['last_name']);
        $email = htmlspecialchars($_POST['email']);
        $phone = htmlspecialchars($_POST['phone']);
        $service_type = htmlspecialchars($_POST['service_type']);
        $number_of_bins = htmlspecialchars($_POST['number_of_bins']);
        $additional_info = htmlspecialchars($_POST['additional_info']);

        // Map service type values to names
        $service_names = [
            "10" => "One-Time Cleaning",
            "20" => "Bi-Weekly Cleaning",
            "30" => "Monthly Cleaning",
            "custom" => "Not Sure - Need Help"
        ];
        $service_name = isset($service_names[$service_type]) ? $service_names[$service_type] : $service_type;

        // Send email
        $to = "freshbinsolutionnb@gmail.com";
        $subject = "New Contact Form Submission from $first_name $last_name";
        $message = "
Name: $first_name $last_name
Email: $email
Phone: $phone
Service Type: $service_name
Number of Bins: $number_of_bins
Additional Information: $additional_info
        ";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo "<div style='text-align: center; padding: 50px;'><h1>Thank you for your message!</h1><p>We have received your request and will get back to you soon.</p><a href='index.html'>Back to Home</a></div>";
        } else {
            echo "<div style='text-align: center; padding: 50px;'><h1>Sorry, there was an error sending your message.</h1><p>Please try again later or contact us directly.</p><a href='contact.html'>Back to Contact</a></div>";
        }
    } else {
        echo "<div style='text-align: center; padding: 50px;'><h1>Invalid request.</h1><a href='index.html'>Back to Home</a></div>";
    }
    ?>