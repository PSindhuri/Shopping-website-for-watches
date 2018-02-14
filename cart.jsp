<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title><h3>SAMAY WATCHES</h3></title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="expires" content="0" />        
	<meta http-equiv="Content-Style-Type" content="text/css" />
	
	 <link rel="stylesheet" href="/jadrn043/ui/ui/css/trontastic/jquery-ui-1.10.4.custom.css">
    <style>
        h1 { text-align: center; }
    </style>
    <script src="/jadrn043/ui/ui/js/jquery-1.10.2.js"></script>
    <script src="/jadrn043/ui/ui/js/jquery-ui-1.10.4.custom.js"></script>
	
     <link rel="stylesheet" type="text/css" href="/jadrn043/proj3.css" /> 
	<script src="/jquery/jquery.js"></script>
	<script src="/jquery/jQueryUI.js" type="text/javascript"></script>
	<script src="/~jadrn043/proj1/ajax/ajax_get_lib.js" type="text/javascript"></script>
     <script type="text/javascript" src="/jadrn043/shopping_cart.js"></script>
	<script type="text/javascript" src="/jadrn043/cart.js"></script>
	<script type="text/javascript" src="/jadrn043/price.js"></script>
    
</head>

<body>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ page import="java.util.Vector" %>
	<%@ page import="java.util.*" %>
<div id="container">
	<div id="header">
		<h3 align="center"> SAMAY WATCHES </h3>
	<div id="counter">
	<form method="post" action="/jadrn043/servlet/Shop">
	<button id="cart" class="cart-btn"><img id="imgCart" width="50px" src="/~jadrn043/proj1/_uploadDIR_/shopping-cart.jpg"/></button>Your cart: <span id="count">0</span></div>
	
	</form>
	
    </div>  	     
		 <div id="OrderHeading"></div>
	<div id="cartContent">
	
     
	
	<p>
	<div type="hidden" id="cartDet"><% Enumeration<String> names = session.getAttributeNames();
        while (names.hasMoreElements()) {
            String name = names.nextElement();
            String value = session.getAttribute(name).toString();
            out.println(name + " = "
                        + value + "||");
        }
 %></div>
	
	<div id="fetched">
	</div>
	</p>
	
		<div id="CartCookie">
		<h3> THERE ARE NO ITEMS IN YOUR CART </h3>
	</div>
	<table>
	<tr>
	<td>
	<div id="ref"><a align="right" href="http://jadran.sdsu.edu/jadrn043/proj3.html">CONTINUE SHOPPING</a></div>
    </td>
	</tr>
	</table>
	
	</div>
	
	<!-- The order form is not visible until the Order Now button is clicked -->
	<div class="ui-widget">
        <input type="button" id="open" name="open_dialog" value="Check Out Now" />
        <div id="ui-dialog" title="Billing Information">
            <div class="ui-dialog-content">
           *ALL FIELDS ARE REQUIRED 
	
	
<form id="billingForm" method="post" action="/jadrn043/servlet/Confirm"> 
<table id="info">
<tr>
    <th>Shipping Information</th>
	<th>Billing Information</th>
</tr>	
<tr>
<td>
    <table id ="sinfo">
        <tr>
            <td>Name:</td>
            <td><input type="text" name="sname" id="sname" size="20" /></td>
        </tr>
        <tr>
            <td>Address line 1:</td>
            <td><Input type="text" name="saddress1" id="saddress1" size="20" /></td>
        </tr>
		 <tr>
            <td>Address line 2:</td>
            <td><Input type="text" name="saddress2" id="saddress2" size="20" /></td>
        </tr>
        <tr>
            <td>City:</td>
            <td><Input type="text" name="scity" id="scity" size="20" /></td>
        </tr>
        <tr>
            <td>State:</td>
            <td><Input type="text" name="sstate" id="sstate" size="2" /></td>
        </tr>
        <tr>
            <td>Zip:</td>
            <td><Input type="text" name="szip" id="szip" size="9" /></td>            
        </tr> 
		<tr>
            <td>Contact Phone:</td>
            <td><Input type="text" name="sphone" id="sphone" size="9" /></td>            
        </tr>
		<tr>
         <input type="checkbox" name="billCheckbox" id="billCheckbox" value="Same" checked="checked" > Billing Address same as Shipping Address <br>	
         </tr>		 
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>         
              
    </table> 
	</td>
	

	
	
	
	
	
	
	
	
	
	<td>
	
	    <table id="binfo">
		
		<tr>
            <td>Credit Card Type:<br>
   <input type="radio" name="card" value="Visa"> VISA<br>
  <input type="radio" name="card" value="Amex"> AMEX<br>
  <input type="radio" name="card" value="Master"> Master Card <br>
  <input type="radio" name="card" value="Discover"> Discover <br>
         </td>
        </tr>
		<tr>
            <td>Credit Card Number:</td>
            <td><Input type="text" name="bcnum" id="bcnum" size="9" /></td>            
        </tr> 
		<tr>
            <td>Expiration Date:</td>
            <td><Input type="text" name="bcdate" id="bcdate" size="9" /></td>            
        </tr>
				<tr>
            <td>Security Code:</td>
            <td><Input type="text" name="bcSecurity" id="bcSecurity" size="9" /></td>            
        </tr>
		
    </table> 
	
	
	
	</td>
	
	</tr>
	
	
	
	
	
	
	
	
	
	
	
	
</table>	
	
	
  <div id="bdivinfo" type="hidden">
  <table>
	

        <tr>
            <td>Name:</td>
            <td><input type="text" name="bname" id="bname" size="20" /></td>
        </tr>
        <tr>
            <td>Address line 1:</td>
            <td><Input type="text" name="baddress1" id="baddress1" size="20" /></td>
        </tr>
		 <tr>
            <td>Address line 2:</td>
            <td><Input type="text" name="baddress2" id="baddress2" size="20" /></td>
        </tr>
        <tr>
            <td>City:</td>
            <td><Input type="text" name="bcity" id="bcity" size="20" /></td>
        </tr>
        <tr>
            <td>State:</td>
            <td><Input type="text" name="bstate" id="bstate" size="2" /></td>
        </tr>
        <tr>
            <td>Zip:</td>
            <td><Input type="text" name="bzip" id="bzip" size="9" /></td>            
        </tr> 
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
		<tr>
            <td>Contact Phone:</td>
            <td><Input type="text" name="bphone" id="bphone" size="9" /></td>            
        </tr> 
		</table>
</div>		
        
	
	
	
</form> 
</div> <!-- end ui-dialog-content -->
        </div> <!-- end ui-dialog -->     
    </div>  <!-- end ui-widget -->
	

	<div id="Confirm">
	
	
	</div>
<p>   </p>
<p>  </p>	
	<div id="Order" type="hidden" text-align="center">
	<table>
	<tr>
	<td>
	<button id ="Proceed" class="checkout"> Place Order</button>
	<td>
	<td>
	<button id ="CancelProceed" class="checkout"> Cancel Order</button>
	</td>
	</tr>
	</table>
	</div>

	<div id="fetch_Sdata"></div>
	
	<div id="footer">
		<p></p>
	</div>

</div>

</body>
</html>









	
