Jquery-File-Drop-Box
====================

Add drag and drop files functionality to your forms.

It adds a drag and drop feature to your php websites. I have made this for myself(using few online tutorials) as there were no online open source kits available for this, so I thought I should share my code.

Its currently not very friendly I just made it usable, I know I could provide many more options with this, but I will plan them in the near future unless someone could help out.


Installation
-

* Download the files and place them in your website folder.
<<<<<<< HEAD
* Add the following code into your form page(where you have your phpform) inside the head ofcourse.

```
<link rel='stylesheet' href='filedropbox/css/filedropbox.css' />
<script type='text/javascript' src='filedropbox/js/jquery-1.9.0.min.js' ></script>
<script type='text/javascript' src='filedropbox/js/filedropbox.js' ></script>
```

* Then in your form submit page(the page where form submits to, it can be same page aswell) add this code at the top of the page.

```
<?php
  require("filedropbox/filedropbox.php");
=======
* Add the following code into your form page(where you have the form) inside the head ofcourse.

```
<link rel='stylesheet' href='filedropbox.css' />
<script type='text/javascript' src='jquery-1.9.0.min.js' ></script>
<script type='text/javascript' src='filedropbox.js' ></script>
```

* Then in your form submit page(where the action attribute in your form links to) add this code at the top of the page.

```
<?php
  require("filedropbox.php");
>>>>>>> c30de60d1e7ed02da4683806a20a6c9b2f3ecc45
?>
```

Configuring
-
<<<<<<< HEAD
* Once you have installed, you can use `` $dropbox_files `` array variable in php which has a list of user uploaded files. 
* The files are uploaded to the 'uploads' folder by default, you can change their path inside 'filedropbox/filedropbox.php' where you will find `` $UPLOAD_FILE_SERVER_PATH `` variable at the top.
* By default the maximum size of all uploads a user can do(i.e sum of each file upload at a time in 1 session) is 500mb, which can be configured inside 'filedropbox/js/filedropbox.js' where you will find the 'total_file_size_limit' variable.
    
Credits
-
* To Jeremy Bellefeuille for the design.
* File icons by https://github.com/teambox/Free-file-icons
=======
* Then in the form submit below, you can use '$dropbox_files' array in php which has a list of user uploaded files. 
* The files are uploaded to the 'uploads' folder by default, you can change their path inside 'filedropbox.php' where you will find '$UPLOAD_FILE_SERVER_PATH' variable at the top.
* By default the maximum size of total uploads a user can do(i.e sub of each file upload at a time in 1 session) is 500mb, which can be configured inside 'filedropbox.js' where you will find the 'total_file_size_limit' variable.
    
    
>>>>>>> c30de60d1e7ed02da4683806a20a6c9b2f3ecc45
