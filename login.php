<?php
session_start();

header('Content-Type: text/html; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['pswd'])) {
    $input_password = trim($_POST['pswd']);

    $file_path = __DIR__ . '/Admin/login.json';
    if (file_exists($file_path)) {
        $json = file_get_contents($file_path);

        $json = mb_convert_encoding($json, 'UTF-8', 'auto');

        $data = json_decode($json, true);

        if (isset($data['admin']) && password_verify($input_password, $data['admin'])) {
            $_SESSION['admin'] = true;
            $_SESSION['user'] = "admin";
            header("Location: Admin/admin.php");
            exit;
        }
    }
}

header("Location: login.html");
exit;
?>
