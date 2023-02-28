document.getElementById("submit").addEventListener("click",function(event){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    localStorage.setItem("Name",name);
    localStorage.setItem("Email",email);
    // alert("Login success");
 })

//  document.getElementById("submit").onclick = window.location.href="https://www.facebook.com";