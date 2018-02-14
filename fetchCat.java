/*
 Punyamurthula, Sindhuri    Account:  jadrn043
                     CS645, Spring 2017                 
					 Project #3
*/

import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

public class fetchCat extends HttpServlet 
{ 
    public void doGet(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException
    	{ 
	String details = "select id,name from category";
	Vector<String[]> v = DBHelper.runQuery(details);
	FetchCategoryBean [] beans = new FetchCategoryBean[v.size()];
	for(int i=0; i < v.size(); i++)  
	{
		String [] tmp = v.elementAt(i);
		beans[i] = new FetchCategoryBean(Integer.parseInt(tmp[0]),tmp[1]);
	}
	
	
	request.setAttribute("p_Catbeans_jadrn043",beans);
	String toDo = "/WEB-INF/jsp/Categories.jsp";
        RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
        dispatcher.forward(request, response);
	
 }      
}


