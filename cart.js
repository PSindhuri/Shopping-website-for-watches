

/*    ***********        COOKIE START           *****************************        */
/*  A shopping cart in javascript that uses cookies
   
    Method Prototypes:
    // creates a new shopping cart using cookies.
    // The parameter is your jadran account number.
    var cart = new shopping_cart("jadrn043");
    
    // Adds a new entry or increments the quantity if the entry exists.
    cart.add(sku, quantity);
    
    // changes the quantity associated with the sku to the new value
    // parameter provided
    cart.setQuantity(sku, quantity);
    
    // deletes the sku from the cart (cookie).
    cart.delete(sku);
    
    // returns the total number of elements in the cart.
    cart.size();
    
    // returns a two-dimensional array of the sku=quantity pairs
    // [0] is the sku, [1] is the quantity. array[sku][quantity]
    cart.getCartArray();
*/
    
    
function shopping_cart(owner) {
    this.owner = $.trim(owner);
    this.skuArray = new Array();
    this.qtyArray = new Array();

//////////////////////////////////////////////////////////////////////////
// Do not use the following two methods;  they are private to this class
    this.getCookieValues = function() {  // PRIVATE METHOD
        var raw_string = document.cookie;        
        var arr = new Array();
        if(raw_string == undefined)
            return;
        var tmp = raw_string.split(";");
        var myValue = null;        
        for(i=0; i < tmp.length; i++)
            if(tmp[i].indexOf(owner) != -1)
                myValue = tmp[i].split("=");
        if(!myValue)
            return;
        arr = myValue[1].split("||");
        for(i=0; i < arr.length; i++) {
            var pair = arr[i].split("|"); 
            if(pair[0] == undefined || pair[1] == undefined) continue;
            this.skuArray[i] = pair[0];
            this.qtyArray[i] = pair[1];
            }         
        }
        
    this.writeCookie = function() {  // PRIVATE METHOD
        var toWrite = this.owner+"=";
        for(i=0; i < this.skuArray.length; i++) 
            toWrite += this.skuArray[i] + "|" + this.qtyArray[i] + "||";
        toWrite = toWrite.substring(0,toWrite.length - 2);
        toWrite += "; path=/";
        document.cookie = toWrite;
        }
//////////////////////////////////////////////////////////////////////////            
        
    this.add = function(sku, quantity) {
        sku = $.trim(sku);
        quantity = $.trim(quantity);
        this.getCookieValues(); 
        var found = false;
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku) {        
            this.qtyArray[i] = parseInt(quantity,10) + parseInt(this.qtyArray[i],10);
            found = true;            
            }
        if(!found) {       
            this.skuArray.push(sku);
            this.qtyArray.push(quantity);
            }
        this.writeCookie();         
    }
    
    this.setQuantity = function(sku, quantity) {  
        sku = $.trim(sku);
        var found = false;
        if(sku == "") return;        
        quantity = $.trim(quantity);            
        this.getCookieValues();
        
        for(i=0; i < this.skuArray.length; i++)
            if(this.skuArray[i] == sku) {        
                this.qtyArray[i] = parseInt(quantity,10);            
                found = true;
                }
        if(found)
            this.writeCookie();
        }    
    
    this.delete = function(sku) {
        sku = $.trim(sku);
        var index = -1;
        this.getCookieValues();       
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku)  
            index = i;               
        if(index != -1) {      
            this.skuArray.splice(index,1);
            this.qtyArray.splice(index,1);
            }         
        if(this.skuArray.length == 0) {
            document.cookie = this.owner + "= ;expires=-1;path=/";
            }
        else
            this.writeCookie();
        }
        
    this.size = function() {
        this.getCookieValues();
        var count = 0;
        for(i=0; i < this.qtyArray.length; i++)
            count += parseInt(this.qtyArray[i],10);
        return count;
        }        
        
    this.getCartArray = function() {
        this.getCookieValues();
        var returnArray = new Array();
        for(i=0; i < this.skuArray.length; i++) {
            returnArray[i] = new Array();
            returnArray[i].push(this.skuArray[i]);
            returnArray[i].push(this.qtyArray[i]);
            }
        return returnArray;
        }                    
}    
        











/*       ***************         COOKIE END            ***************************       */




var dict = new Object(); 
var a="cq";
var cart = new shopping_cart("jadrn043");
 $(document).ready(function() {
	//COOKIE CODE START

    //COOKIE CODE END	
	$("#cartDet").hide();
	$("#bdivinfo").hide();
	$("#Order").hide();
	//var det=$("#cartDet").text();
	/*var str="fetched these: "+det;
	$("#fetched").html(str);
	*/
	
	//To fetch all cart details
      //fetchCart(det);
	  
	  
	  updateDisplay();
	  //************************************************************/
	  
	  
	// 
	  
	  
	  
	  
	  
	  
	  
	  
	  //********************************************************************/
	  $("#ui-dialog").dialog({
            height: 350,
            width: 500,
            modal: true,
            autoOpen: false,
            buttons: [{text: "Submit", click: function() 
               {
			  //  var urlConfirm="/jadrn043/servlet/Confirm";
		
     //  $.post(urlConfirm,function(response){
	//	  $('#Confirm').html(response);
         
	  // });
	  
	  
	  
	  ////var ship1= document.getElementById("sname").value;
	  //// document.getElementById("Confirm").innerHTML = ship1;
	  var s= $("#sname").val();
	  
	 var ship="<table><tr><th>Shipping Adress</th><th>Billing Address</th></tr><tr><td>"+s+"<br>"+$("#saddress1").val()+"<br>"+$("#saddress2").val()+"<br>"+$("#scity").val()+"<br>"+$("#sstate").val()+"<br>"+$("#szip").val()+"<br>"+$("#sphone").val()+"</td><br><td>";
	 
	 
	 var bill=ship+$("#baddress1").val()+"<br>"+$("#baddress2").val()+"<br>"+$("#bcity").val()+"<br>"+$("#bstate").val()+"<br>"+$("#bzip").val()+"<br>"+$("#bphone").val()+"</td><tr></table>";
	 
	 
	 
	  //var ship3=ship2+$("#baddress1").val()+"<br></td></tr></table>";
	 $("#Order").show();
			 $("#open").hide();	
			 $('#Confirm').html(bill);
		    $('#OrderHeading').html("<h3> ORDER SUMMARY</h3>");
		 
			   $(this).dialog('close');
			   $("#cartStuff :input").prop("disabled", true);
			   $("#ref").hide();
			   }
                      }]
                    });



    
    $('#open').bind('click', function($e) {       
            $("#ui-dialog").dialog('open');
            });
			
	//checkbox code

        
var $checkInput = $('input[name="billCheckbox"]');


$checkInput.on('click', function(){
    if ( $(this).is(':checked') )
        $("#bdivinfo").hide();
    else
       $("#bdivinfo").show();
});	
			
$('#CancelProceed').on('click', function(){
 // location.replace("http://jadran.sdsu.edu/jadrn043/proj3.html");
 window.setTimeout(function(){location.replace("http://jadran.sdsu.edu/jadrn043/proj3.html")}, 100);
 
 
});	
				
		
			
			
			
	
	});//END OF DOCUMENT READY
	

	
	
	var x;
	var tagExtra="q";
	var tagExtraD="db";
	var quan=0;
	var shopCount=0;
	//from proj3 page to update cart your count and add to session  //add to cookie also
	function updateShop(x,sq)
	{
		var checkExistingQuan=0;
		//document.getElementById("count").innerHTML = x;
		var quantext="q"+sq;
		var shopCount=parseInt(document.getElementById("count").innerHTML);
		var textID=tagExtra+x;
		var quan=parseInt(document.getElementById(textID).value);
		var newVal=shopCount+quan;
		var itemsC=cart.getCartArray();
	for(var i=0;i<itemsC.length;i++)
	{
		
		var cookieItem_sku=itemsC[i][0];
		var cookieItem_quan=parseInt(itemsC[i][1]);
		
		if (cookieItem_sku == x)
		{
			checkExistingQuan=cookieItem_quan;
			
		}
	}
	var totQ=checkExistingQuan+quan;
	if(totQ>sq)
	{
		var qid="#"+quantext;
			$(qid).show();
			document.getElementById(quantext).value="Exceeding available quantity";
	}
	
		else if(quan > 0 && quan<sq )
		{
			
			//html+newval
		document.getElementById("count").innerHTML = newVal;
		//COOKIE ADD CODE START
		
		cart.add(x,quan);
        updateDisplay();
		//COOKIE ADD CODE END
		var url="/jadrn043/servlet/AddToCart?cartSku="+x+"&cartQuantity="+quan;
		
       $.get(url,function(response){});
	   document.getElementById(x).style.display='none';
		}
		else if(sq==-1)
		{
			var qid="#"+quantext;
			$(qid).show();
			document.getElementById(quantext).value="Sorry item not available";
		}
		else if(quan<0){
			var qid="#"+quantext;
			$(qid).show();
			document.getElementById(quantext).value="Please enter quantity >0";
		}
		else if(quan>sq){
			var qid="#"+quantext;
			$(qid).show();
			document.getElementById(quantext).value="Exceeding available quantity";
		}
		else{
			var qid="#"+quantext;
			$(qid).show();
			document.getElementById(quantext).value="Invalid quantity";
		}
	//document.getElementById(x).style.display='none';
		 updateDisplay();
	};
	
	//to delete from session and cookie
	function deleteShop(y)
	
	{
        var res=$("#cartDet").text();
		var url2="/jadrn043/servlet/DeleteCart?cartSku='"+y+"'";
		//COOKIE DELETE CODE START
		cart.delete(y);
        updateDisplay();
		
		//COOKIE DELETE CODE END
		
		//$('#fetched').html("");
      /* $.get(url2,function(response){});
	   fetchChangedCart(res,y);*/
		};
		
		
	
	function loadAgain()
	{
		url3="/jadrn043/servlet/Shop";
		 $.post(url3,function(response){});
		
	};
	
	
	
	
	
	
	
	
	
	
	function fetchCart(res)
	{
		
		var tmp;
		var listSku = "";
   var tmpStr = res.split("||");
    for(i=0; i<tmpStr.length-1; i++) {
        tmp = tmpStr[i].split("=");
        listSku+="'"+tmp[0]+"',"; 
		dict[tmp[0]]=tmp[1];
        }
		  var strCartSKU = listSku.slice(0, listSku.length-1);
	//$('#fetched').html(listSku);
		var url="/jadrn043/servlet/CartProduct?SKU="+strCartSKU;
		
       $.get(url,function(response){
		  $('#fetched').html(response);
         
	   });
		
		//quantity field
	
		
	};
	
	//after delete changed cartDet
	
	function fetchChangedCart(res,yval)
	{
		
		urlD="/jadrn043/servlet/Shop";
		
       $.post(urlD,function(response){});
		 
		
		/*var tmp;
		var listSku = "";
   var tmpStr = res.split("||");
   
    for(i=0; i<tmpStr.length-1; i++) {
        tmp = tmpStr[i].split("=");
		
        dict[tmp[0]]=tmp[1];
		
			listSku+="'"+tmp[0]+"',"; 
		
        }
		 var strL = listSku;
		 var phTmp = "";
		 var matcher="'"+yval+"',";
    var spSKU = strL.split(",");
	for(j=0;j<spSKU.length-1;j++){
		if(matcher != spSKU[j]){
			phTmp=spSKU[j];
		}
	}
		  var strCartSKU = phTmp.slice(0, phTmp.length-1);
	//$('#fetched').html(listSku);
		var url="/jadrn043/servlet/CartProduct?SKU="+strCartSKU;
		
       $.get(url,function(response){
		  $('#fetched').html(response);
         
	   });
		
		//quantity field
	*/
		
	};
	
	
	//code for updating Quantity start
	
	function updateQuan(q,uq)
	
	{
		var checkExistingQuan=0;
		var tag="cqt";
		var divT="Quan";
		var divQID=divT+q;
		var textQID=tag+q;
		var quan=parseInt(document.getElementById(textQID).value);
        /**************/
		
		
		
		
		/*********/
		
		
		
		
		
		
		
		
		
		
		
		 if(quan>0 && quan<uq)
		{
		//COOKIE UPDATE QUANTITY CODE START
		 cart.setQuantity(q,quan);
        updateDisplay();
		
		//COOKIE UPDATE QUANTITY CODE END
		var url="/jadrn043/servlet/AddToCart?cartSku="+q+"&cartQuantity="+quan;
		
       $.get(url,function(response){});
		
		$( "#open" ).button({disabled:false});
		
		}
		else if(quan<0)
		{
		document.getElementById(divQID).innerHTML="Quantity must be a positive whole number";
		$( "#open" ).button({disabled:true});
			
		}
		else if(quan>uq)
		{
			document.getElementById(divQID).innerHTML="Exceeding available quantity";
			$( "#open" ).button({disabled:true});
			
		}
		else{
			document.getElementById(divQID).innerHTML="Quantity must be a positive whole number";
			$( "#open" ).button({disabled:true});
			
		}
		
		
		};
	
	// code for Updating Quantity end
	
	
	
	//COOKIE UPDATE DISPLAY START
	 
	 
	     function updateDisplay() {
        var cartArray = cart.getCartArray();
		if (cartArray==[])
		{
			$('#CartCookie').html("<h3> THERE ARE NO ITEMS IN YOUR CART </h3>");
		}
		else{
       var listSku="";
        for(i=0; i < cartArray.length; i++) {
           
			listSku+="'"+cartArray[i][0]+"',"; 
		
			
            }//end of for
         var strCartSKU = listSku.slice(0, listSku.length-1);
	
		var url="/jadrn043/servlet/CartProduct?SKU="+strCartSKU;
		
       $.get(url,function(response){
		    $('#OrderHeading').html("<h3> SHOPPING CART ITEMS</h3>");
		  $('#CartCookie').html(response);
		  $('#count').text(cart.size());
	    showPrices();		  
         
	   });
		 
		}
          
        }; 
	 
	 //COOKIE UPDATE DISPLAY END
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	/* //show or hide div based on checkbox value
	 function ShowHide()
	 {
		 var bill = document.forms["billingForm"];
		  for (i = 0; i < bill.length; i++)
		  {
		if (bill[i].checked) {
            $("#bdivinfo").hide();
        }
		else{
			$("#bdivinfo").show();
		}
		  }		
	 };
	*/ 
	
	
	function showPrices(){
	// var cart = new shopping_cart("jadrn043");
	var subTot=0;
	var tax=0;
	var total=0;
	var r="ret";
	var s="sub";
	var items=cart.getCartArray();
	for(var i=0;i<items.length;i++)
	{
		
		var cookieItem_sku=items[i][0];
		var cookieItem_quan=parseInt(items[i][1]);
		var sku="#"+r+cookieItem_sku;
		//var cost=document.getElementById(sku).value;
		var cost=parseInt($(sku).val());
		subTot = cookieItem_quan*cost;
		var subD="#"+s+cookieItem_sku;
		//document.getElementById(subD).innerHTML = subTot;
		$(subD).html(subTot);
		total+=subTot;
		//setting quantity text field
		var qtfield="#"+"cqt"+cookieItem_sku;
		$(qtfield).val(cookieItem_quan);
		
	}
	/*var totalWithShip=total+5;
	tax=(totalWithShip*8)/100;
	var final=totalWithShip+tax;
	document.getElementById("totalBeforeTaxD").innerHTML = total;
	document.getElementById("totalWithShipD").innerHTML = totalWithShip;
	document.getElementById("taxD").innerHTML = tax;
	document.getElementById("finalD").innerHTML = final;*/
	$("#totalBeforeTaxD").html(""+total);
	var totalWithShip=total+5;
	$("#totalWithShipD").html(""+totalWithShip);
	tax=(totalWithShip*8)/100;
	$("#taxD").html(""+tax);
	var final=totalWithShip+tax;
	$("#finalD").html(""+final);
	
	
	};  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  