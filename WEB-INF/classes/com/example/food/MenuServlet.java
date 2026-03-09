package com.example.food;

import java.io.*;
import java.sql.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import com.google.gson.*;

public class MenuServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        res.setContentType("application/json");
        String id = req.getParameter("id");

        try (Connection con = DBConnection.getConnection();
             PreparedStatement ps = con.prepareStatement(
                 "SELECT * FROM menu_items WHERE restaurant_id = ?")) {

            ps.setInt(1, Integer.parseInt(id));
            ResultSet rs = ps.executeQuery();

            JsonArray arr = new JsonArray();
            while (rs.next()) {
                JsonObject obj = new JsonObject();
                obj.addProperty("item_name", rs.getString("item_name"));
                obj.addProperty("description", rs.getString("description"));
                obj.addProperty("price", rs.getDouble("price"));
                obj.addProperty("image_url", rs.getString("image_url"));
                arr.add(obj);
            }
            res.getWriter().print(arr.toString());
        } catch (Exception e) {
            e.printStackTrace(res.getWriter());
        }
    }
}
