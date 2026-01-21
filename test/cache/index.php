<html>
<head>
	<title>Cache Test</title>
	<link rel="stylesheet" href="style1.css">
	<style>body {color: white; background: darkslategray;} a {color: deepskyblue;}</style>
</head>
<body>

<img width=400 height=225 src="vivaldi.jpg">

<form method="get" action="touch.php">
	<p>
		<input type="submit" value="Touch Image" alt="Touch Image">
	</p> 
</form> 

<?php
// outputs e.g.  somefile.txt was last modified: December 29 2002 22:16:23.

echo "Image last modified: " . date ("F d Y H:i:s.", filemtime('vivaldi.jpg'));
?>

</body>
</html>
