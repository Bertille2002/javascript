<?php
// Database connection setup (adjust with your credentials)
$servername = "localhost";
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "your_database_name"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the username and password from the form
    $user_username = $_POST['username'];
    $user_password = $_POST['password'];

    // Validate input (you can add more validation here)
    if (empty($user_username) || empty($user_password)) {
        echo "Both username and password are required!";
        exit();
    }

    // Hash the password using bcrypt (which automatically handles salting)
    $hashed_password = password_hash($user_password, PASSWORD_BCRYPT);

    // Prepare SQL query to insert user data into the database
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $user_username, $hashed_password);

    // Execute the query
    if ($stmt->execute()) {
        echo "Account created successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
