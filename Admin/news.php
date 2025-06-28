<?php
$input = json_decode(file_get_contents("php://input"), true);

if (!$input || !isset($input['text']) || !isset($input['tipe'])) {
    http_response_code(400);
    echo json_encode(["error" => "Data tidak lengkap"]);
    exit;
}

$newData = [
    "text" => $input['text'],
    "tipe" => $input['tipe']
];

$file = 'news.json';
$existing = [];

if (file_exists($file)) {
    $existing = json_decode(file_get_contents($file), true);
    if (!is_array($existing)) $existing = [];
}

$existing[] = $newData;

file_put_contents($file, json_encode($existing, JSON_PRETTY_PRINT));
echo json_encode(["success" => true]);
?>
