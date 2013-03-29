<?php
	require("filedropbox/filedropbox.php");
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>JQuery File Drop Box</title>
		<link rel='stylesheet' href='filedropbox/css/filedropbox.css' />
		<script type='text/javascript' src='filedropbox/js/jquery-1.9.0.min.js' ></script>
		<script type='text/javascript' src='filedropbox/js/filedropbox.js' ></script>
		<style>
			body{
				font-family:Arial;
			}
		</style>
	</head>
	<body>
		<?php
			if($_POST){
				echo "<h1>List of uploaded files</h1>";
				foreach($dropbox_files as $file){
					$link = "http://".$_SERVER['SERVER_NAME'].str_replace(basename($_SERVER['SCRIPT_NAME']),"",$_SERVER['SCRIPT_NAME']).$file;
					echo "<a href='".$link."' >".$file."</a><br />";
				}
			}
		?>
		<h1>Form</h1>
		<form class='file_drop_box_form' action='' method='post' > 
			<div class='file_drop_box' >
				<div class='holder' >
					<div class='icon'  ></div>
					<div class='title' >Drag and drop files</div>
					<div class='subtitle' >If you have additional files, click or drag to upload images or documents.</div>
				</div>
			</div>
			<input style='display:none;' type="file" class="file_drop_box_input" name="fileselect[]" multiple="multiple" />
			<input type='hidden' class='file_drop_box_file_list' name='upload_file_list' value='' />
			<input type='submit' value='Submit' />
		</form>
	</body>
</html>