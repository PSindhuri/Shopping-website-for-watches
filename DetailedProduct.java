import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;

public class DetailedProduct extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException  {
	PrintWriter out = response.getWriter();
	String SKU =(String) request.getParameter("SKU");
	
	//checking if valid sku
	if (SKU==" ") 
	{
		 String details = "select v.name,c.name,p.sku,p.vendorModel,p.description,p.features,p.cost,p.retail,p.image from vendor v,category c,product p where p.venID=v.id and p.catID=c.id;";
		 
	Vector<String[]> v = DBHelper.runQuery(details);
	DetailedProductBean [] beans = new DetailedProductBean[v.size()];
	for(int i=0; i < v.size(); i++)  {
		String [] tmp = v.elementAt(i);
		beans[i] = new DetailedProductBean(tmp[0],tmp[1],tmp[2],tmp[3],tmp[4],
			tmp[5],Float.parseFloat(tmp[6]),Float.parseFloat(tmp[7]),tmp[8],Integer.parseInt(tmp[9]));
		}
	request.setAttribute("p_detbeans_jadrn043",beans);
	String toDo = "/WEB-INF/jsp/AjaxDetailedProducts.jsp";
        RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
        dispatcher.forward(request, response);
		
		
	//String details = "select v.name,c.name,p.sku,p.vendorModel,p.description,p.features,p.cost,p.retail,p.image,onh.on_hand_quantity from vendor v,category c,product p,on_hand onh where p.venID=v.id and p.catID=c.id and onh.sku=p.sku and p.sku='"+SKU +"'";
	}
	//CHECKS QUANTITY FIRST
	else //for sku not empty
	{
	String quantityQuery = "select on_hand_quantity from on_hand where sku='"+SKU+"'";
    String resQuan = DBHelper.doQuery(quantityQuery);
    if(resQuan.isEmpty())
	{
		String details1 = "select v.name,c.name,p.sku,p.vendorModel,p.description,p.features,p.cost,p.retail,p.image,"+"'-1'"+"from vendor v,category c,product p where p.venID=v.id and p.catID=c.id and p.sku='"+SKU +"';";
		
		Vector<String[]> v = DBHelper.runQuery(details1);
	DetailedProductBean [] beans = new DetailedProductBean[v.size()];
	for(int i=0; i < v.size(); i++)  {
		String [] tmp = v.elementAt(i);
		beans[i] = new DetailedProductBean(tmp[0],tmp[1],tmp[2],tmp[3],tmp[4],
			tmp[5],Float.parseFloat(tmp[6]),Float.parseFloat(tmp[7]),tmp[8],Integer.parseInt(tmp[9]));
		}
	request.setAttribute("p_detbeans_jadrn043",beans);
	String toDo = "/WEB-INF/jsp/AjaxDetailedProducts.jsp";
        RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
        dispatcher.forward(request, response);
		
	}
	else
	{
		String details2 = "select v.name,c.name,p.sku,p.vendorModel,p.description,p.features,p.cost,p.retail,p.image,onh.on_hand_quantity from vendor v,category c,product p,on_hand onh where p.venID=v.id and p.catID=c.id and onh.sku=p.sku and p.sku='"+SKU +"'";
	
	
	
	Vector<String[]> v = DBHelper.runQuery(details2);
	DetailedProductBean [] beans = new DetailedProductBean[v.size()];
	for(int i=0; i < v.size(); i++)  {
		String [] tmp = v.elementAt(i);
		beans[i] = new DetailedProductBean(tmp[0],tmp[1],tmp[2],tmp[3],tmp[4],
			tmp[5],Float.parseFloat(tmp[6]),Float.parseFloat(tmp[7]),tmp[8],Integer.parseInt(tmp[9]));
		}
	request.setAttribute("p_detbeans_jadrn043",beans);
	String toDo = "/WEB-INF/jsp/AjaxDetailedProducts.jsp";
        RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
        dispatcher.forward(request, response);
	}
		
	}//else end for sku not empty	  						    

    }
}



