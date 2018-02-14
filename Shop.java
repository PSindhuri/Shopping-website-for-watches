/*
 Punyamurthula, Sindhuri    Account:  jadrn043
                     CS645, Spring 2017                 
					 Project #3
*/

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


public class Shop extends HttpServlet { 
          
    public void doPost(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException  {
        processRequest(request, response);         
        }

    public void doGet(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException  { 
        //throw new ServletException("GET protocol is not supported, POST only");
		doPost(request, response);
		
        } 
        
    private void processRequest(HttpServletRequest request,
              HttpServletResponse response) 
                        throws IOException, ServletException {
       
		String toDo=" ";
            HttpSession session = request.getSession(true);
            if(session != null) {
				 toDo = "/WEB-INF/jsp/cart.jsp";
	   
		//response.sendRedirect("/jadrn043/jsp/menu.jsp");                     
            RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
            dispatcher.forward(request, response);  
        }
		else{
			 toDo = "/WEB-INF/jsp/cart.jsp";
	   
		//response.sendRedirect("/jadrn043/jsp/menu.jsp");                     
            RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
            dispatcher.forward(request, response); 
		}
		
		
		
    }      
}



