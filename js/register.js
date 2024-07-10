function AddRegister(e){
    e.preventDefault();
    let arrField = document.querySelectorAll("#formRegister input, #formRegister select");
    let user = {};
    for (let field of arrField){
        let{id, value} = field;
        user[id] = value;
    }
    console.log(user);
   let promise = axios({
        method: "POST",
        url:"https://shop.cyberlearn.vn/api/Users/signup",
        data: user,
    }); 

    promise.then(function(res){
        console.log(res);

    }).catch(function(err){
          console.log(err);
    })
}
document.getElementById("formRegister").onsubmit = AddRegister;