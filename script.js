var empArray = [];
var id1 = 0;

var submitButton = document.getElementById("submit");

function Employee(name,profession,age){
    this.id=++id1;
    this.name=name;
    this.profession=profession;
    this.age=age;
}

if(empArray.length==0){
    document.getElementById("initial-count").innerHTML="You have 0 Employees."
}

var nbsp = String.fromCharCode(160);


function addUser(e) {
    e.preventDefault();

    var nameVal = document.getElementById("name").value;
    var prof = document.getElementById("prof").value;
    var age = document.getElementById("age").value;

    var message=document.getElementById("error-success");  

    if(nameVal==="" || prof==="" || age==""){
        message.innerHTML="Error : Please Make sure All the fields are filled before adding in an employee !";
        message.style.color="red";
    }
    else{
        message.innerHTML="Success : Employee Added!";
        message.style.color="#43FF78";

        var employee=new Employee(nameVal,prof,age);
        console.log(employee);

        empArray.push(employee);
        updateList();
    }

    if(empArray.length!=0){
        document.getElementById("initial-count").innerHTML=""
    }

}

function updateList(){
    var list=document.getElementById("list");
    var listItems=empArray.map((i)=>{
        return ` <div class="list-item" style="margin-top: 1rem;">
        <div class="left">
           ${i.id}.${nbsp}${nbsp}${nbsp}${nbsp}
           Name:${i.name}${nbsp}${nbsp}${nbsp}${nbsp}
           Profession:${i.profession}${nbsp}${nbsp}${nbsp}${nbsp}Age:${i.age}${nbsp}
        </div>
        <button class="delete">Delete User</button>
    </div>`
    })
    list.innerHTML=listItems.join("");
}

function deleteEmployee(e){
    e.preventDefault();
  var listItem = e.target.closest(".list-item");
  var itemId = listItem.querySelector(".left").textContent.split(".")[0];
  empArray = empArray.filter((item) => item.id !== Number(itemId));
  listItem.remove();
  if(empArray.length==0){
    document.getElementById("initial-count").innerHTML="You have 0 Employees."
}
}

submitButton.addEventListener("click", addUser);
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      deleteEmployee(event);
    }
  });