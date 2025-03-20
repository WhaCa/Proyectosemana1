<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["ejercito"]);
    echo "<h1>Hola, $nombre</h1>";
}
?>

