// function submitdetails(){
//     let user_name = document.getElementById("regnum").value;
//     let password = document.getElementById("pass").value;
//     console.log(user_name);
//     console.log(password);
   
// }

const submitdetails = ()=>{
    let user_name = document.getElementById("regnum").value;
    let password = document.getElementById("pass").value;
    document.getElementById("result").innerHTML= user_name + " -- " +password;
}

