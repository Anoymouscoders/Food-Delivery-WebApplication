package com.example.food;

import java.io.*;
import java.sql.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import com.google.gson.*;

public class RestaurantServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        res.setContentType("application/json");
        try (Connection con = DBConnection.getConnection();
             Statement st = con.createStatement();
             ResultSet rs = st.executeQuery("SELECT * FROM restaurants")) {

            JsonArray arr = new JsonArray();
            while (rs.next()) {
                JsonObject obj = new JsonObject();
                obj.addProperty("id", rs.getInt("id"));
                obj.addProperty("name", rs.getString("name"));
                obj.addProperty("location", rs.getString("location"));
                obj.addProperty("image_url", rs.getString("image_url"));
                arr.add(obj);
            }
            res.getWriter().print(arr.toString());
        } catch (Exception e) {
            e.printStackTrace(res.getWriter());
        }
    }
}
