<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>SAMAY WATCHES</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="expires" content="0" />        
	<meta http-equiv="Content-Style-Type" content="text/css" />
    
	<script type="text/javascript" src="/jquery/jquery.js"></script>
	  <script src="/jquery/jQueryUI.js" type="text/javascript"></script> 
    <script type="text/javascript" src="firstPageProj3.js"></script>
	<script type="text/javascript" src="cart.js"></script>
    <link rel="stylesheet" type="text/css" href="firstPageProj3.css" /> 
    <link rel="stylesheet" type="text/css" href="modalProducts.css" /> 
</head>

<body>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ page import="java.util.Vector" %>
	<%@ page import="java.util.*" %>
<div id="container">
	<div id="header">
		<p align="center"> SAMAY WATCHES </p>
	<div id="counter">
	<form method="post" action="/jadrn043/servlet/Shop">
	<button id="cart" class="cart-btn"><img id="imgCart" width="50px" src="/~jadrn043/proj1/_uploadDIR_/shopping-cart.jpg"/></button>Your cart: <span id="count">0</span></div>
	
	</form>
    </div>  	     
		 
	<div id="cartContent">
	<p> Session created</p>

	
	<p>
	<% Enumeration<String> names = session.getAttributeNames();
        while (names.hasMoreElements()) {
            String name = names.nextElement();
            String value = session.getAttribute(name).toString();
            out.println(name + " = "
                        + value + "<br>");
        }

	%>
	
	
	</p>
	
	
	
	
	
	
	
	
	
	</div>
	
	
	
	
	
	
	<div id="footer">
		<p>Footer</p>
	</div>

</div>

</body>
</html>









	
