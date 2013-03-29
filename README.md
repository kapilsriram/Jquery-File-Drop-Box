Jquery-File-Drop-Box
====================

Add drag and drop files functionality to your forms.

It adds a drag and drop feature to your php websites. I have made this for myself(using few online tutorials) as I
there were no online open source kits available for this, so I thought I should share my code.

Its currently not very friendly I just made it usable, I know I could provide many more options with this, but I
will plan them in the near future unless someone could help out.


Installation
============

1. Download the files and place them in your website folder.
2. Add the following code into your form page(where you have the form) inside the head ofcourse.

  	<link rel='stylesheet' href='filedropbox.css' />
		<script type='text/javascript' src='jquery-1.9.0.min.js' ></script>
		<script type='text/javascript' src='filedropbox.js' ></script>

3. Then in your form submit page(where the action attribute in your form links to) add this code at the top of the page.

<?php
  require("filedropbox.php");
?>

4. Then in the form submit below, you can use '$dropbox_files' array which has a list of user uploaded files.

Note: The functionality is demonstrated at the demo.php, please go through them, if you have any issues installing.
    
    
