import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.Enumeration;
import java.util.ResourceBundle;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import util.HTMLFilter;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class DeleteCart extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private static final ResourceBundle RB = ResourceBundle.getBundle("LocalStrings");

    @Override
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
        
    
        PrintWriter out = response.getWriter();
        
       HttpSession session = request.getSession(true);
        String title = RB.getString("sessions.title");
        
        String sku = request.getParameter("cartSku");
        //String quantity = request.getParameter("cartQuantity");
        if(session != null && sku != null ) {
            session.removeAttribute(sku);
          	 
            			 
        }
		

        
    }

    @Override
    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {
        doGet(request, response);
    }

}
