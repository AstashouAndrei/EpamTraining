package servlet;

import entity.User;
import entity.UserContainer;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

@WebServlet("/UserController")
public class UserController extends HttpServlet {

    public UserController() {
        super();
    }

    private UserContainer container = UserContainer.getInstance();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String message;
        StringBuilder builder = new StringBuilder();
        String line;
        BufferedReader reader = request.getReader();
        while ((line = reader.readLine()) != null) {
            builder.append(line);
        }
        JSONObject jsonObject = new JSONObject(builder.toString());
        String action = jsonObject.getString("action");
        String login = jsonObject.getString("login");

        if ("register".equals(action)) {
            message = userRegister(jsonObject);
        } else {
            message = userLogin(jsonObject);
        }

        JSONObject responseData = new JSONObject();
        responseData.put("message", message);
        responseData.put("login", login);
        response.setContentType("application/json");
        response.getWriter().write(responseData.toString());
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    /**
     * Method checks users collection for existence entered login
     * and password and it's matching
     *
     * @param jsonObject jsonObject
     * @return text message of checking result
     */
    private String userLogin(JSONObject jsonObject) {
        String login = jsonObject.getString("login");
        String password = jsonObject.getString("password");
        String message = "Logging error. Please try again";

        for (User user : container.getUsers()) {
            if (user.getLogin().equals(login) && user.getPassword().equals(password)) {
                message = "logsuccess";
                break;
            } else if (user.getLogin().equals(login)) {
                message = "wrongpassword";
                break;
            } else {
                message = "notexist";
            }
        }
        return message;
    }

    /**
     * Method adds to users collection an user, which creating with entered login,
     * password and email if it's not already exist in above collection
     *
     * @param jsonObject jsonObject
     * @returnt ext message of adding result
     */
    private String userRegister(JSONObject jsonObject) {

        String login = jsonObject.getString("login");
        String password = jsonObject.getString("password");
        String email = jsonObject.getString("email");
        String message;

        User regUser = new User(login, password, email);

        if (container.isUserAlreadyExist(regUser)) {
            message = "exist";
        } else {
            container.addUser(regUser);
            message = "regsuccess";
        }
        return message;
    }

}

