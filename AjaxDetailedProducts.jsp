<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ page import="java.util.Vector" %>
	<%@ page import="java.util.*" %>
  <%@ page session="true" %>
  
 
	
<form id="cartStuff">
	<table>
	<tr>
    <th>Image</th>
	<th>Description</th>
    <th> By </th> 
    <th>Model</th>
	<th>Price</th>
    <th>Quantity</th> 
    <th>Action</th>
	
  </tr>	
	
	<c:forEach items="${p_detbeans_jadrn043}" var="item">
	
	
	<tr>
   <td> <p> <img src="/~jadrn043/proj1/_uploadDIR_/${item.image}"height="60" width="60"/> </p></td>
	 
	 
     
		  <td>${item.description} </td> 
	  	  <td> By: ${item.vendor} </td> 
		  <td>Model Number: ${item.model} </td>
		  <td>$ <input type="text" id="ret${item.sku}" value="${item.retail}" disabled>  </td>
		     
		 <td> <div id="cq${item.sku}" >
		  
	   
        <label><b> Quantity</b></label> <input type="text" id ="cqt${item.sku}" value="${item.qmessage} " onblur="updateQuan('${item.sku}',${item.quantity})" ><br>
		<div id="Quan${item.sku}"></div> 		  <label><b>SubTotal $ : </b></label> 
      <div id="sub${item.sku}"></div> 
		  </div></td>
		  

		  
		  
		  <td><button id ="db${item.sku}" class="cartB" onclick="deleteShop('${item.sku}')">Delete</button></td>
		 <%-- <tr><td>${item.sku}</td></tr> --%>
	  <%--	<tr><td>${item.category}</td></tr> --%> 	
		 <%-- 	<tr><td>${item.features}</td></tr> --%>
			
		  <%--	<tr><td>${item.cost}</td></tr> --%>
			
		  <%--  <tr><td>${item.quantity}</td></tr> --%>
		  </tr>
	
  
	</c:forEach>
	</table>
	<table>
	<tr>
	<td> Total Without Tax Charges: $  </td>
	<td> <div id="totalBeforeTaxD"></div> </td>
	
	</tr>
	<tr>
	<td> Total(+$5 Shipping Charges): $  </td>
	<td> <div id="totalWithShipD"></div> </td>
	
	</tr>
	
	<tr>
	<td> Tax Amount: $  </td>
	<td> <div id="taxD"></div> </td>
	
	</tr>
	<tr>
	<td> Total Amount: $  </td>
	<td> <div id="finalD"></div> </td>
	
	</tr>
	
	
	</table>

</form>
       
<p>        </p>
