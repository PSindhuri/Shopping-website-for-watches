import java.io.IOException;
import java.io.PrintWriter;
import java.util.*;

import javax.servlet.*;
import javax.servlet.http.*;


public class fetchCategoryProj3 extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException  {
	PrintWriter out = response.getWriter();
	Vector<String[]> v = DBHelper.runQuery("select id,name from category;");
	ProductBean [] beans = new ProductBean[v.size()];
	for(int i=0; i < v.size(); i++)  {
		String [] tmp = v.elementAt(i);
		beans[i] = new ProductBean(tmp[0],tmp[1]);
		}
	request.setAttribute("p_beans",beans);
	String toDo = "/WEB-INF/jsp/fetchCategoryProj3.jsp";
        RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
        dispatcher.forward(request, response);  						    

    }
}



