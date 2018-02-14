<%@ page import = "java.util.*;" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
 
 <form id="Cat">
	<c:forEach items="${p_Catbeans_jadrn043}" var="citem">	
	<input type="checkbox" name="catCheckbox" value="${citem.cid}" onchange="loadVenCatProducts('${citem.cid}')"> ${citem.cname}<br>

	</c:forEach>
	</form>
	