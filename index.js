function signUp(userName){
    let usernames = ["pandaondamoon", "rugratchet","belladonafromvenus","chelippr"];
    for(username of usernames){
        if(username == userName){
            return "User Already Registered";
        } else{
            usernames.push(userName);
            return "Sign-up successful! Please Login"
            // 
        }
    }
    // return "Please Login";
}
