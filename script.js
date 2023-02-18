let table = document.querySelector('#table');
  document.getElementById('addBook').onclick= function(){
    let name= document.getElementById('name').value;
    let title= document.getElementById('title').value;
    let number= document.getElementById('number').value;
    let status = `
    <a href="#">
    <i class="fa-solid fa-trash"></i>
</a>`;
   let template =`
   <tr>  
    <td>${name}</td>
    <td>${title}</td>
    <td>${number}</td>
    <td>${status}</td>
   </tr>
   `;
   table.innerHTML+=template;
}
