<?php
require "config.php";
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["txt"];
    $email = $_POST["email"];
    $password = password_hash($_POST["pswd"], PASSWORD_DEFAULT); // Hash password untuk keamanan

    try {
        $stmt = $pdo->prepare("INSERT INTO user (username, email, password) VALUES (?, ?, ?)");
        $stmt->execute([$username, $email, $password]);

        $_SESSION["user"] = $username;

        header("Location: userland.php");
        exit();
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
