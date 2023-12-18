function getUser(){
    fetch("http://localhost:3000"). then((res)=>{
        return res.json();
    }). then((users)=>{
        let outPut="";
        users.data.map((user,index)=>{
            outPut+=`<tr>
            <td>${++index}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td><button>Edit</button> 
            <button onclick="deleteData('${user._id}')">Delete</button>
            </td>
            </tr>`;
        });
        document.getElementById("usersList").innerHTML=outPut;
    }).catch((e)=>{
        console.log(e)
    })
}

getUser();

function deleteData(id){
    let question = confirm("are you sure");
    if(question){
        fetch(`http://localhost:3000/${id}`,{
            method: "DELETE",
        }) .then((res) =>{
            return res.json();
        }) .then((data)=>{
            getUser();
        }) .catch((e)=>{
            console.log(e)
    })

}else{
    alert("data not deleted")
}
}

document.querySelector("#addRecord").addEventListener("click",function(e){
  e.preventDefault();
  let name=document.getElementById("name").value ;
  let email=document.getElementById("email").value ;
  let phone=document.getElementById("phone").value ;
  let sendData={name,email,phone} ;
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
    document.getElementById("phone").value="";
}).catch((e)=>{
    console.log(e)
})
}) 