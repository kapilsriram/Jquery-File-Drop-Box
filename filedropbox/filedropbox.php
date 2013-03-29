<?php
	$UPLOAD_FILE_SERVER_PATH = "uploads/";
	
	$fn = (isset($_SERVER['HTTP_X_FILE_NAME']) ? $_SERVER['HTTP_X_FILE_NAME'] : false);
	if($fn){
		$fn = rand(100,999).".".$fn;
		file_put_contents(
			$UPLOAD_FILE_SERVER_PATH.$fn,
			file_get_contents('php://input')
		);
		echo $fn;
		exit();
	}
	if(isset($_POST['deletefile'])){
		$filename = $_POST['deletefile'];
		unlink($UPLOAD_FILE_SERVER_PATH.$filename);
		echo "deleted";
		exit();
	}
	
	if(isset($_POST['upload_file_list'])){
		$files_list = $_POST['upload_file_list'];
		$files_array = explode(",",$files_list);
		$dropbox_files = array();

		if(count($files_array) &&($files_list)){
			foreach($files_array as $file){
				$dropbox_files[] = $UPLOAD_FILE_SERVER_PATH.$file;
			}
		}
	}
?>