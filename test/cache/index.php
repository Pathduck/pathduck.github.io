<html>
<head>
	<title>Cache Test</title>
	<link rel="stylesheet" href="style1.css">
	<style>body {color: white; background: darkslategray;} a {color: deepskyblue;}</style>
</head>
<body>

	<img width=400 height=225 src="vivaldi.jpg">

<div class="styles">Stylesheet used: <span class="style1">style1.css</span><span class="style2">style2.css</span>

<form method="get" action="touch.php">
	<p>
		<input type="submit" value="Touch Image" alt="Touch Image">
	</p> 

</form> 
<?php
echo "Image last modified: " . date (DATE_RFC850, filemtime('vivaldi.jpg'));
?>

</body>
</html>
