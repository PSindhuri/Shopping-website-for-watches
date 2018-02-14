// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;

// Extend HttpServlet class
public class Confirm extends HttpServlet {
 
   // Method to handle GET method request.
   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      // Set response content type
      response.setContentType("text/html");

      PrintWriter out = response.getWriter();
    String sname = request.getParameter("sname");
	String saddress1 = request.getParameter("saddress1");
	String saddress2 = request.getParameter("saddress2");
	String scity = request.getParameter("scity");
	String sstate = request.getParameter("sstate");
	String szip = request.getParameter("szip");
	String sphone = request.getParameter("sphone");
	String sname = request.getParameter("sname");
	String sname = request.getParameter("sname");
    	
      
   }//throws
	
   // Method to handle POST method request.
   public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      doGet(request, response);
   }
}