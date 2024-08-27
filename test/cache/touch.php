<?php
$wd = getcwd();
$image = "$wd/vivaldi.jpg";

ignore_user_abort(true);
system("touch vivaldi.jpg");
system("mv style1.css style.tmp; mv style2.css style1.css; mv style.tmp style2.css");
system("touch style1.css");

header("Location: index.html");

?>
