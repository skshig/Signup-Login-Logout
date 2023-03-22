    // 1) creating login function
    function login(){
        let my_email = document.getElementById('input-email').value;
        let my_pass  = document.getElementById('input-password').value;

        let userObj = {
            user_email: my_email,
            user_password: my_pass,
        };

        let userArr = [userObj];

        localStorage.setItem("users", JSON.stringify(userArr));
        localStorage.setItem("currentUser",my_email);
    }
    document.getElementById('btn').addEventListener('click',login)

    console.log(JSON.parse(localStorage.getItem("userArr")));

    function logout(){
        localStorage.setItem("currentUser","");// or
        localStorage.removeItem("currentUser");
    }