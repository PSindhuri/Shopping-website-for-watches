import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;

public class CartProduct extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException  {
	PrintWriter out = response.getWriter();
	HttpSession session = request.getSession(true);
	String SKU =(String) request.getParameter("SKU");
	if(SKU=="")
	{
		out.print("empty");
	}
	else{
	String details = "select v.name,c.name,p.sku,p.vendorModel,p.description,p.features,p.cost,p.retail,p.image from vendor v,category c,product p where p.venID=v.id and p.catID=c.id and p.sku IN("+SKU+")";
	
	Vector<String[]> v = DBHelper.runQuery(details);
	DetailedProductBean [] beans = new DetailedProductBean[v.size()];
	for(int i=0; i < v.size(); i++)  {
		String [] tmp = v.elementAt(i);
		String quantityQuery = "select on_hand_quantity from on_hand where sku='"+tmp[2]+"'";
		String sname=tmp[2];
		String valueJQ = session.getAttribute(sname).toString();
    String resQuan = DBHelper.doQuery(quantityQuery);
	String quan;
	String quan_message = valueJQ;
    if(resQuan.isEmpty())
	{
		quan ="-1";
		quan_message=valueJQ;
		beans[i] = new DetailedProductBean(tmp[0],tmp[1],tmp[2],tmp[3],tmp[4],
			tmp[5],Float.parseFloat(tmp[6]),Float.parseFloat(tmp[7]),tmp[8],Integer.parseInt(quan),quan_message);
	}
	else
	{
		quan=resQuan.substring(0,resQuan.length()-3);
		if(quan=="0")
		{
			
		   quan_message= valueJQ;
		   beans[i] = new DetailedProductBean(tmp[0],tmp[1],tmp[2],tmp[3],tmp[4],
			tmp[5],Float.parseFloat(tmp[6]),Float.parseFloat(tmp[7]),tmp[8],Integer.parseInt(quan),quan_message);
		}
		else
		{
			quan_message= valueJQ;
		beans[i] = new DetailedProductBean(tmp[0],tmp[1],tmp[2],tmp[3],tmp[4],
			tmp[5],Float.parseFloat(tmp[6]),Float.parseFloat(tmp[7]),tmp[8],Integer.parseInt(quan),quan_message);
		}
	}
		
		
		}//end of for
	request.setAttribute("p_detbeans_jadrn043",beans);
	String toDo = "/WEB-INF/jsp/AjaxDetailedProducts.jsp";
        RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
	dispatcher.forward(request, response);
	}
	

    }
}



