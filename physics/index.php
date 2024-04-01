<?php
ob_start();
//session_start();

include('config/general_config.php');

include "include/header.php";
include "include/main_menu.php";

 	$page = @$_REQUEST['v'];
	$page = explode("?",$page);
	if(!$page[0]) $page[0]="home";
	// echo "<input type='hidden' id='content_page' value=$page[0] >";
	//  echo "<div id='main_content' >";
	include "view/".$page[0].".php";
	// echo "</div>";
	// echo $page[0];

include "include/footer.php";

ob_flush();
?>
