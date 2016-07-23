// var onglet = document.getElementById('li');
// var onglet = document.getElementById('test2');
// var onglet = document.getElementById('test3');
	  // var bloc = document.getElementsByClassName('tab-content clearfix');
	  // console.log('rtf')
  var grouptab = document.getElementsByTagName('li');
   // console.log('tab selected');

   function checkTab(event){
      console.log('Tab is selected');

       for(i=0; i<grouptab.length;i++) {
  	      grouptab[0].classList.add("my-active");
  	        // grouptab.style.background="blue"  	        
		}

	}
	   // var bloc = document.getElementsByClassName('tab-content clearfix');

   //    var bloc = document.getElementsByClassName('tab-content clearfix');
   //    // bloc.style.background="white";

   //    var text1 = document.createElement("span");
   //    text1.setAttribute("id", "valor");

   //    var text_content = document.createTextNode("Another content");
   //    text1.appendChild(text_content);

   //    var newcontent = document.getElementById('tab-pane');
   //    var x = newcontent.parentNode;
   //   	// x.style.background="#0EFF91";
   //     	x.replaceChild(text1, newcontent);
   // }

   // function tab2(event){
   //    console.log('Second tab is selected');
   // }

   //  function tab3(event){
   //    console.log('Last tab is selected');
   // }

   document.addEventListener("click", checkTab);

   // var activeitem = document.querySelectorAll('li.a');
   var boxcontent = document.getElementsByClassName('panel panel-default');
   	var classesEl = activeitem.classList;
   	console.log(classesEl);


   function changeState(event){
	console.log('Content is here');
	// boxcontent.style.display = "none";
	// var classesEl = activeitem.classList;

	// var classesEl = activeitem.classList;
   }
    document.addEventListener("click", changeState);


	window.addEventListener("load", function(){
    console.log('Page chargée');
  })

//Conception

//Composants

/*
*	Listes de liens
*/

/*
*	Divs
*/

/*Events
on clique dessus ça colore le bloc
on affiche la div qui correspond via l'ID
*/