package entity;

import java.util.ArrayList;

/**
 * Class for storing users collection
 */

public class UserContainer {

    private static ArrayList<User> users = new ArrayList<>();

    static {
        User user1 = new User("John", "123456", "john@gmail.com");
        User user2 = new User("Bill", "654321", "bill@yahoo.com");
        User user3 = new User("Sam", "qwerty", "sam@mail.ru");
        User user4 = new User("Mark", "password", "mark@tut.by");
        User user5 = new User("Elly", "eLlY", "elly@gmail.com");
        users.add(user1);
        users.add(user2);
        users.add(user3);
        users.add(user4);
        users.add(user5);
    }

    private static UserContainer instance;

    private UserContainer() {
    }

    /**
     * Method checks if the given user already in users collection
     *
     * @param checkingUser user which need to check in users collection
     * @return boolean result of checking
     */
    public boolean isUserAlreadyExist(User checkingUser) {
        boolean isExist = false;
        for (User user : users) {
            if (user.getLogin().equals(checkingUser.getLogin())) {
                isExist = true;
                break;
            }
        }
        return isExist;
    }

    /**
     * Method adds given user to the users collection
     *
     * @param user user
     */
    public void addUser(User user) {
        users.add(user);
    }

    /**
     * Method creating an instance of UserContainer object if it not exist,
     * otherwise returns existing instance
     *
     * @return UserContainer instance
     */
    public static UserContainer getInstance() {
        if (instance == null) {
            return instance = new UserContainer();
        }
        return instance;
    }

    public static void setInstance(UserContainer instance) {
        UserContainer.instance = instance;
    }

    public ArrayList<User> getUsers() {
        return users;
    }

    public void setUsers(ArrayList<User> users) {
        this.users = users;
    }
}
