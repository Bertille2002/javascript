<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the password from the form
    $password = $_POST['password'];

    // Call the function to check if the password has been compromised
    $isPasswordCompromised = checkPasswordPwned($password);

    if ($isPasswordCompromised) {
        echo "Your password has been found in a data breach. Please choose a different password.";
    } else {
        echo "Your password is safe.";
        // Continue with account creation logic here
        // For example, hash the password and save it to the database.
    }
}

// Function to check if the password has been breached using HaveIBeenPwned API
function checkPasswordPwned($password) {
    $hash = strtoupper(sha1($password)); // Password hashed using SHA-1

    // Get the first 5 characters of the hashed password
    $prefix = substr($hash, 0, 5);
    $suffix = substr($hash, 5);

    // Use the HaveIBeenPwned API endpoint with the prefix
    $url = "https://api.pwnedpasswords.com/range/$prefix";
    
    // Perform the API request
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    
    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
        return false; // If there's an error with the API request
    }

    curl_close($ch);

    // Parse the response to check if the suffix is in the result
    $lines = explode("\r\n", $response);
    foreach ($lines as $line) {
        list($hashSuffix, $count) = explode(":", $line);
        if (strtoupper($hashSuffix) == $suffix) {
            return true; // Password has been breached
        }
    }

    return false; // Password has not been breached
}
?>
