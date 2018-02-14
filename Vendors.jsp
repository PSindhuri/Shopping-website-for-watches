<%@ page import = "java.util.*;" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
 
 <form id="Ven">
	<c:forEach items="${p_Venbeans_jadrn043}" var="vitem">	
	<input type="checkbox" name="venCheckbox" value="${vitem.vid}" onchange="loadVenCatProducts('${vitem.vid}')"> ${vitem.vname} <br>

	</c:forEach>
	</form>
	