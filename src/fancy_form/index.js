/**
 * Scripts for fancy form
 */

	/* Side navigation display */
	/* Set the width of the side navigation to 400px */
	function openNav() {
	    document.getElementById("mySidenav").style.width = "400px";
	}

	/* Set the width of the side navigation to 0 */
	function closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	}
	
	function openNav2() {
	    document.getElementById("mySidenav2").style.width = "400px";
	}

	function closeNav2() {
	    document.getElementById("mySidenav2").style.width = "0";
	    
	}

	function openNav3() {
	    document.getElementById("mySidenav3").style.width = "400px";
	}

	function closeNav3() {
	    document.getElementById("mySidenav3").style.width = "0";
	    
	}

	function openNav4() {
	    document.getElementById("mySidenav4").style.width = "400px";
	}

	function closeNav4() {
	    document.getElementById("mySidenav4").style.width = "0";
	    
	}
	
	/* Check for password confirmation */
	function checkpwd() {
		  if (document.getElementById('password').value ==
		    document.getElementById('confirmpassword').value) {
		    document.getElementById('message').style.color = 'green';
		    document.getElementById('message').innerHTML = 'Matching';
		    document.getElementById('pwdSubmit').disabled = false;  
		    document.getElementById('pwdSubmit').style.color = '#e6f2ff'; 
		    
		  } else {
		    document.getElementById('message').style.color = 'red';
		    document.getElementById('message').innerHTML = 'Not matching';
		    document.getElementById('pwdSubmit').disabled = true;  
		    document.getElementById('pwdSubmit').style.color = '#808080';
		  }
	}

