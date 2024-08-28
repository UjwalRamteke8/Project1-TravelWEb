<?php
// Database connection details
$servername = "localhost";
$username = "root"; // Default username for XAMPP/WAMP
$password = ""; // Default password for XAMPP/WAMP (leave empty)
$dbname = "contactus"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connection successful: ";
}

// Set parameters and execute
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$start_journey = $_POST['start_journey'];
$end_journey = $_POST['end_journey'];
$feedback = $_POST['feedback'];
$phone = $_POST['phone'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO contactdata (name, email, address, start_journey, end_journey, feedback, phone) VALUES (?, ?, ?, ?, ?, ?, ?)");

// Bind the parameters to the SQL query
$stmt->bind_param("sssssss", $name, $email, $address, $start_journey, $end_journey, $feedback, $phone);

// Execute the query
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>
