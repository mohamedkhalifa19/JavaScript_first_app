let table = document.querySelector('#table');
let tr = document.createElement('tr');
let td = document.createElement('td');
const message =document.querySelector('#message');
  document.getElementById('addBook').onclick= function(){
    message.innerText = "";
    let name= document.getElementById('name').value;
    let title= document.getElementById('title').value;
    let number= document.getElementById('number').value;
    let status = `
    <a href="#"id ="status" onclick="del(this)">
    <i class="fa-solid fa-trash"></i>
</a>`;
let template = `
<tr>
<td>${name}</td>
<td>${title}</td>
<td>${number}</td>
<td>${status}</td>
</tr>
`;
if(name!=""&&title!="" && number!=""){
  table.innerHTML+=template;
  message.innerText = "Book is added";
  message.style.color ="green";
}

}

function del(e){
  e.parentNode.parentNode.remove();
  message.innerText = "Book is deleted";
  message.style.color ="red";
}