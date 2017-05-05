document.addEventListener('keydown', vist); //add an event listener that is waiting for a key down event.

function vist(e){
	var x=e.keyCode;
	
	
	if(window.getSelection){
		var content=window.getSelection().toString();
			
		if(x == 13 && content.length>=1){
			var search=window.open("http://www.google.com/#q="+content+"&*");//前面应写明路径，绝对路径(http://)和相对路径(../)
	
		}
		
	}

	
	}