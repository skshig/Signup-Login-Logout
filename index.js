    // 1) creating login function
function login(){
    let my_email = document.getElementById('input-email').value;
    let my_pass  = document.getElementById('input-password').value;//accessing input data by user
    let userObj = {
        user_email: my_email,
        user_password: my_pass
    }
        //stringify makes everything string without this we will lose our data ie under Value we will get Object
    localStorage.setItem("User", JSON.stringify(userObj)); //this one line instead of line-13 and line-14
        //2) logic to store above accessed data
    //by setting data as key-value pair in localstorage
    // localStorage.setItem("Email", my_email); 
    // localStorage.setItem("Password", my_pass);
    // console.log(typeof localStorage.getItem("Email")) 
}
document.getElementById('btn').addEventListener('click',login)

    // here we are displaying values entered by user on screen. Innertext in setting the value 
    // entered by user as the content/text of h2 element with id="display-email/password"
document.getElementById('display-email').innerText = localStorage.getItem("Email");
document.getElementById("display-password").innerText = localStorage.getItem("Password");

    //consoling whatever local storage stores(for our understanding)
console.log("LOCAL STORAGE EMAIL: ",localStorage.getItem("User"));
console.log("LOCAL STORAGE EMAIL: ",localStorage.getItem("Email"));
console.log("LOCAL STORAGE PASSWORD: ",localStorage.getItem("Password"));

    //if user has already logged in and not logged out then next time user tries to login
    //it should redirect user to profile page and not ask for login info again
// if(localStorage.getItem("Email") && localStorage.getItem("Password")){
//     window.location.href = "/profile.html"
// }
let myUser = JSON.parse(localStorage.getItem("User"));
console.log(myUser);
console.log(myUser.user_email);//without JSON.parse this will give undefined