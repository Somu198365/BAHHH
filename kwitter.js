function add_user(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    pass=document.getElementById("pass").value;
    if(pass==""){
        document.getElementById("pass").placeholder="please enter password!"
    }
    else{
        window.location="kwitter_room.html";  
    }
}