var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addBtn").click();
    }
});






function additem(){

    let input = document.querySelector('input');
    inputtext = input.value;
    if (inputtext == ""){
        return;
    }
    input.value = "";
    let li = document.createElement('li');
    let removebtn = document.createElement('button');
    let editbtn = document.createElement('button');
    removebtn.classList.add("remove_btn");
    editbtn.classList.add("edit_btn");
    li.innerHTML = inputtext;
    let ol = document.querySelector('ol');
    ol.appendChild(li);
    let btncontainer =  document.createElement('div');
    btncontainer.classList.add("btncontainer");
    li.appendChild(btncontainer);
    btncontainer.appendChild(editbtn);
    btncontainer.appendChild(removebtn);
    removebtn.innerHTML = '<i class="fas fa-times"></i>';
    editbtn.innerHTML = '<i class="fas fa-edit"></i>';

    removebtn.onclick  = function(){
        let parent = this.parentElement.parentElement;
        parent.remove();
    }

    editbtn.onclick = function(){
        let parent = this.parentElement.parentElement;
        let text = parent.innerText;
        parent.innerHTML = '<input type="text" id="edit_input" class="edit_input">';
        parent.children[0].value = text;
        let okbtn = document.createElement('button');
        okbtn.classList.add("ok_btn");
        parent.appendChild(okbtn);
        okbtn.innerHTML = "OK";
        okbtn.onclick  = function(){
            let input = this.previousElementSibling;
            edittedtext = input.value;
            if (edittedtext == ""){
                edittedtext = text;
            }
            parent.innerHTML = edittedtext;
            parent.appendChild(btncontainer);
            btncontainer.appendChild(editbtn);
            btncontainer.appendChild(removebtn);
            
        }
    
        
    }




}



