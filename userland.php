<?php
session_start();
if (!isset($_SESSION["user"])) {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h1>Selamat datang, <?php echo htmlspecialchars($_SESSION["user"]); ?>!</h1>
    <a href="logout.php">Logout</a>
</body>
</html>
