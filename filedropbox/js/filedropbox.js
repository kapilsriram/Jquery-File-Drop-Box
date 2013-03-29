$(document).ready(function(){
	var total_file_size_limit = 524288000; // 500 mb
	
	var total_file_size = 0; 
	var ignorefiledragclick = 0; 
	
	if(window.File && window.FileList && window.FileReader){
		var form = $(".file_drop_box_form").get(0);
		var filedrag = $(form).find(".file_drop_box").get(0); 
		var fileselect = $(form).find(".file_drop_box_input").get(0); 
		var filelist = $(form).find(".file_drop_box_file_list").get(0); 
		if(filedrag){
			
			$(filedrag).click(function(){
				if(!ignorefiledragclick){
					$(fileselect).click();
				}
				else{
					ignorefiledragclick = 0;
				}
			});
			
			function FileDragHover(e) {
				
				e.stopPropagation();
				e.preventDefault();
			}
			
			function FileSelectHandler(e) {
				FileDragHover(e);
				var files = e.target.files || e.dataTransfer.files;
				for (var i = 0, f; f = files[i]; i++) {
					
					if(ParseFile(f)){
						UploadFile(f);
					}
				}
			}
			
			fileselect.addEventListener("change", FileSelectHandler, false);
			
			filedrag.addEventListener("dragover", FileDragHover, false);
			filedrag.addEventListener("dragleave", FileDragHover, false);
			filedrag.addEventListener("drop", FileSelectHandler, false);
			function ParseFile(file) {
				total_file_size += file.size;
				if(total_file_size >= total_file_size_limit){ // 500 mb
					alert("You cannot upload more than 500mb.");
					return false;
				}
				return true;
			}
			
			function UploadFile(file) {
				var xhr = new XMLHttpRequest();
				var box;

				var form_action = form.action;
				
				if(!form_action){
					form_action = window.location;
				}
	
				xhr.open("POST", form_action, true);

				xhr.setRequestHeader("X-File-Name", file.name);
				xhr.onreadystatechange=function()
				{
					if (xhr.readyState==4 && xhr.status==200)
					{
						var uploadlist = $(filelist).val();
						if(uploadlist.length){
							uploadlist += ","+xhr.responseText;
						}
						else{
							uploadlist = xhr.responseText;
						}
						$(filelist).val(uploadlist);
						$(box).attr("data-uploaded-file-name",xhr.responseText);
					}
				}	
				if($(filedrag).find(".holder").is(":visible")){
					$(filedrag).find(".holder").hide();
				}	

				var show_file_name = file.name.substring(0,10);
				if(file.name.length > 10){
					show_file_name += "...";
				}
				box = $("<div class='box' ><div class='type' ><div class='progress-holder' ><div class='progress-bar' ></div></div></div><div class='filename' >"+show_file_name+"</div></div>");
				$(filedrag).append(box);

				xhr.upload.addEventListener("progress", function(e){
					var complete = Math.round(e.loaded / e.total * 100);
					$(box).find(".progress-bar").css("width",complete+"%");
					if(complete >= 100){
						var ext = file.name.split('.').pop();
					
						if(ext == "zip"){
							$(box).html($("<div class='type zip' ></div>"));
						}	
						else if(ext == "bmp"){
							$(box).html($("<div class='type bmp' ></div>"));
						}	
						else if(ext == "jpg"){
							$(box).html($("<div class='type jpg' ></div>"));
						}	
						else if(ext == "gif"){
							$(box).html($("<div class='type gif' ></div>"));
						}	
						else if(ext == "png"){
							$(box).html($("<div class='type png' ></div>"));
						}	
						else if(ext == "rar"){
							$(box).html($("<div class='type rar' ></div>"));
						}	
						else if(ext == "txt"){
							$(box).html($("<div class='type txt' ></div>"));
						}
						else if(ext == "doc"){
							$(box).html($("<div class='type doc' ></div>"));
						}		
						else if(ext == "ai"){
							$(box).html($("<div class='type ai' ></div>"));
						}	
						else{
							$(box).html($("<div class='type blank' ></div>"));
						}
						var newelement = $(box).append($("<div class='cancel' ></div><div class='filename' >"+show_file_name+"</div>"));
		
						
						$(newelement).find(".cancel").click(function(){
							var filename = $(newelement).attr("data-uploaded-file-name"); // get uploaded file name
							
							var form_action = form.action;
							if(!form_action){
								form_action = window.location;
							}
							
							$.ajax({
								type: "POST",
								url: form_action,
								data:{ "deletefile" : filename },
								success:function(data){
							
								}
							});
							
							ignorefiledragclick = 1;
							var uploadlist = $(filelist).val();
							var pos = 0;
							var newlist = "";
							pos = uploadlist.indexOf(","+filename)
							if(pos != -1){
								newlist = uploadlist.substring(0,pos);
								newlist += uploadlist.substring(pos+(filename.length+1));
								
							}
							else{
								pos = uploadlist.indexOf(filename)
								if(pos != -1){
									newlist = uploadlist.substring(0,pos);
									newlist += uploadlist.substring(pos+(filename.length));
								}
							}
							
							uploadlist = newlist;
							$(filelist).val(uploadlist);
							$(newelement).fadeOut(function(){
								if(uploadlist == ""){
									
									$(filedrag).find(".holder").show();
								}
							});
						});
					}
				});

				xhr.send(file);
			} 
		}
		
	}
	else{
		$(filedrag).hide();
	}
});