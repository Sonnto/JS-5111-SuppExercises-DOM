/** MOUSEOVER IMAGE GALLERY*/
//CREATE AN ONLOAD LISTENER
window.onload = pageReady;

//CREATE AN ONLOAD FUNCTION TO HOLD OUR CODE THAT NEEDS THE document OBJECT.
function pageReady(){

//CREATE A HANDLE FOR THE MAIN IMAGE
	var bigImage = document.getElementById("mainImg");
	console.log(bigImage);//SEE WHAT OUR VARIABLE HOLDS

//LET'S PLAY WITH THE ELEMENT ATTRIBUTES AS OBJECT PROPERTIES...
	//bigImage.style.width = 200 + "px";
	//bigImage.title = "My new title from JavaScript";
	//bigImage.src = "daisy.jpg";
	console.log(bigImage);


//GET THE THUMBNAIL GALLERY IMAGES
	var image1 = document.getElementById("pic1");
	var image2 = document.getElementById("pic2");
	var image3 = document.getElementById("pic3");


//CREATE FUNCTIONS TO CHANGE PICTURES
	function switchPic1(){
		//SET MAIN IMAGE src TO THE src OF THE THUMBNAIL IMAGE
		bigImage.src = image1.src;
	}

	function switchPic2(){
		bigImage.src = image2.src;
	}

	function switchPic3(){
		bigImage.src = image3.src;
	}


//CREATE FUNCTION TO RESET IMAGE
	function resetPic(){
		//SET src OF MAIN IMAGE TO ORIGINAL VALUE
		bigImage.src = "images/title.png";
	}


//==== SETUP LISTENERS FOR THE GALLERY IMAGES ====
//CHANGE IMAGE FUNCTION
	image1.onmouseover = switchPic1;
	image2.onmouseover = switchPic2;
	image3.onmouseover = switchPic3;

//RESET IMAGE FUNCTION
	image1.onmouseout = resetPic;
	image2.onmouseout = resetPic;
	image3.onmouseout = resetPic;

}//END onload FUNCTION