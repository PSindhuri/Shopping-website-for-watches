/*
 Punyamurthula, Sindhuri    Account:  jadrn043
                     CS645, Spring 2017                 
					 Project #2
*/
var catArr=[];
var venValues = "";
var catValues = "";
$(document).ready(function() {
		
	$.get("/jadrn043/servlet/fetchVen",fix_vendor);
    $.get("/jadrn043/servlet/fetchCat",fix_category);
	$.get("/jadrn043/servlet/AjaxGetProducts2", handle2);

	$('.venCheck').click(function(){
    	var cat_str=$(this).id();

	$("#header").html(cat_str);
	var url = '/jadrn043/servlet/catVenProducts?cat=';
	 url += cat_str;
	 $.get(url,handle_catven);
    	});
	
   for(i=0; i <= catArr.length; i++) {
    	$("#"+i).click(function(){
    	var cat_str=$(this).id();
	alert(cat_str);
	$("#header").html(cat_str);
	var url = '/jadrn043/servlet/catVenProducts?cat=';
	 url += cat_str;
	 $.get(url,handle_catven);
    	});
   }
	//////////////////////////////////////////////////////////////////
	
$('.box').each(function ()

  {

     var sku = $(this);

     sku.wrap("<a href='/jadrn043/servlet/DetailedProduct?SKU=" + sku.attr("id") + "' </a>");

  });



  
	
	////////////////////////////////////////////////////////////////////
	
	
	
	}//end 
);
 function fill()
 {
	  $('#header').html("");
 }


//function for fetching checked products
/*function fetchChecked()
{
	
   var cat = [];
            //$.each($("input[name='catCheck']:checked"), function(){ 
			$.each($("input:checked"), function(){        
                cat.push($(this).val());
				
            });
	if (cat!=[])
	{
    var cat_str = cat.join(",");
	$('#header').html(cat_str);
	var url = '/jadrn043/servlet/catVenProducts?cat=';
	 url += cat_str;
	 $.get(url,handle_catven); 
	}
	
	
	
	
	
	
			
  
}*/


function handle2(response) {
	$('#content').html(response);
	}	

//code to show cat and ven checkbox selected products

function handle_catven(response) {
	$('#content').html(response);
	}	
	
	
//code to fetch vendors list
/*	function fix_vendor(response) {
		
	

   var toWrite = "";
    var tmpStr = response.split("||");
    for(i=0; i<tmpStr.length-1; i++) {
        tmp = tmpStr[i].split("=");
        toWrite += "<input type=\"button\" value=" + tmp[1] + " id="+tmp[1]+ " >"+tmp[1]+"<br>";
        }
	$('#vendor').html(toWrite);
	

    }        
	
	//code to fetch categories list
    function fix_category(response) {
		
   var toWrite = "<form name=\"category_form\" action=\"\">";
   var tmpStr = response.split("||");
    for(i=0; i<tmpStr.length-1; i++) {
        tmp = tmpStr[i].split("=");
        toWrite += "<input type=\"button\" value=" + tmp[1] + " id="+tmp[1]+ " >"+tmp[1]+"<br>";
		
		catArr+=tmp[1];
        }
	$('#category').html(toWrite+"</form>");
	
	
	
	
    } */
  	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//   checkbox code IMP 
//code to fetch vendors list
	function fix_vendor(response) {
		
	$('#vendor').html(response);

   /*var toWrite = "";
    var tmpStr = response.split("||");
    for(i=0; i<tmpStr.length-1; i++) {
        tmp = tmpStr[i].split("=");
        toWrite += "<input type=\"checkbox\" class=\"venCheck\" id=\"venCheck\" name=\"venCheck\" value=" + tmp[1] + " id="+tmp[1]+ " >"+tmp[1]+"<br>";
        }
	$('#vendor').html(toWrite);
	*/

    }        
	
	
	//code to fetch categories list
    function fix_category(response) {
		
		$('#category').html(response);
   /*var toWrite = "<form name=\"category_form\" action=\"\">";
   var tmpStr = response.split("||");
    for(i=0; i<tmpStr.length-1; i++) {
        tmp = tmpStr[i].split("=");
        toWrite += "<input type=\"checkbox\" id=\"catCheck\" class=\"catCheck\" name=\"catCheck\" value=" + tmp[1] + " id="+tmp[1]+ " >"+tmp[1]+"<br>";
		catArr+=tmp[1];
        }
	$('#category').html(toWrite+"</form>");
	
	*/
	
	
    } 
  //end of checkbox code list 

function fetchChecked(cid){
	

	var a = document.getElementById(id).checked;

  	if(a){
		$('#header').html("checked");
  	}else{
  		$('#header').html("unchecked");
  	}

   
  }
  	
//handling checkboxes

function loadVenCatProducts(cp) {
	//for vendors
    var ven = document.forms["Ven"];
    
    for (i = 0; i < ven.length; i++) {
        if (ven[i].checked) {
            venValues +="'"+ ven[i].value + "',";
        }
    }
	//for categories
	var cat = document.forms["Cat"];
    
    for (i = 0; i < cat.length; i++) {
        if (cat[i].checked) {
            catValues +="'"+ cat[i].value + "',";
        }
    }
	
	var strCat = catValues.slice(0, catValues.length-1);
    var strVen = venValues.slice(0, venValues.length-1);
	
	//for fetching
    	var urlCV = "/jadrn043/servlet/catVenProducts?cat="+strCat+"&ven="+strVen;
	 $.get(urlCV, handleCV);
	 
};	
 function handleCV(response) {
	$('#content').html(response);
	}	