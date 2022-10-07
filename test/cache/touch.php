<?php
$wd = getcwd();
$image = "$wd/vivaldi.jpg";

ignore_user_abort(true);
system("touch $image");
header("Location: index.html");

?>
