<?php
session_start();

// Database connection
$servername = "localhost"; // Replace with your DB server
$username = "root"; // Replace with your DB username
$password = ""; // Replace with your DB password
$dbname = "sign-in-user"; // Replace with your DB name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the user exists in the database
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // Verify password
        if (password_verify($password, $user['password'])) {
            // Password is correct, start a session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['email'] = $user['email'];
            header("Location: dashboard.php"); // Redirect to user dashboard
            exit();
        } else {
            echo "Incorrect password.";
        }
    } else {
        echo "No user found with this email address.";
    }

    $stmt->close();
}

$conn->close();
?>
