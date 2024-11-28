function signUp(userName) {
    let usernames = ["pandaondamoon", "rugratchet", "belladonafromvenus", "chelippr"];
    for (let username of usernames) {
        if (username == userName) {
            return "User Already Registered";
        } else {
            usernames.push(userName);
            return "Sign-up successful! Please Login"
            // 
        }
    }
    // return "Please Login";
}

// login function
function login(userName, password) {
    let usernames = ["pandaondamoon", "rugratchet", "belladonafromvenus", "chelippr"];
    let userPassword = "Emp@123";
    for (let username of usernames) {
        if (username == userName) {
            if (password === userPassword) {
                return "Login Successful!";
            } else {
                return "Wrong Password, please try again";
            }
        }
    }
    return "User Not Found";
}
