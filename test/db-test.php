<?php
$servername = "";
$username = "";
$password = "";
$database = "";

$var_mysqli = function_exists('mysqli_connect');
var_dump($var_mysqli);

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

?>
