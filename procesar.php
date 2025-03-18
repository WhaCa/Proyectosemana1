<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);

    echo "<h1>Hola, $nombre</h1>";
}
?>
