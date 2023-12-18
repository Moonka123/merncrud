function getUser(){
    fetch("http://localhost:3000"). then((res)=>{
        return res.json();
    }). then((users)=>{
        let outPut="";
        users.data.map((user,index)=>{
            outPut+=`<tr>
            <td>${index++}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address}</td>
            <td>${user.gender}</td>
            <td>${user.country}</td>
            <td><button>Edit</button> <button>Delete</button>
            </td>
            </tr>`;
        });
        document.getElementById("usersList").innerHTML=outPut;
    }).catch((e)=>{
        console.log(e)
    })
}

getUser();

document.querySelector("#addRecord").addEventListener("click",function(e){
  e.preventDefault();
  let name=document.getElementById("name").value ;
  let email=document.getElementById("email").value ;
  let address=document.getElementById("address").value ;
  let gender=document.getElementById("gender").value ;
  let country=document.getElementById("country").value ;

  let sendData={name,email,address,gender,country} ;
  fetch("http://localhost:3000",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"  
  },
  body:JSON.stringify(sendData)
}).then((res) =>{
return res.json();
}).then((data)=>{
    getUser();
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    document.getElementById("gender").value="";
    document.getElementById("country").value="";

}).catch((e)=>{
    console.log(e)
})
}) 