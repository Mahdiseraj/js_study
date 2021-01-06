document.getElementById("wait").style.display = "none";

function toDo() {
    let inText = document.getElementById("text1").value;

    if (inText == "") {
        alert("کار خودت رو بنویس");
    } else {
        document.getElementById("wait").style.display = "block";
        let tbody = document.getElementById("tbody");
        let tr = document.createElement("tr");


        let td1 = document.createElement("td"); //delete
        let a_td1 = document.createElement('a');
        a_td1.setAttribute("href", "#");
        a_td1.innerHTML = "<i class='bi-x-circle-fill text-danger'></i>";
        td1.appendChild(a_td1);
        tr.appendChild(td1);


        let td2 = document.createElement("td"); //do
        let a_td2 = document.createElement('a');
        a_td2.setAttribute("href", "#");
        a_td2.innerHTML = "<i class='bi-check-circle-fill text-success'></i>";
        td2.appendChild(a_td2);
        tr.appendChild(td2);


        let td3 = document.createElement("td"); //works
        let showInText = document.createTextNode(inText);
        td3.appendChild(showInText);
        tr.appendChild(td3);


        let td4 = document.createElement("td"); //numbers
        for (i = 1; i <= document.getElementsByTagName("tr").length; i++) {
            td4.innerText = i; //کاملا درست کار میکنه
            // var showNumbers = document.createTextNode(i); //has some problem
            // td4.appendChild(showNumbers);
        }
        tr.appendChild(td4);


        td1.classList = "w-10";
        td2.classList = "w-10";
        td3.classList = "w-75 text-right pr-2";
        td4.classList = "w-10"
        tbody.appendChild(tr);
        
        
        // delete part codes
        a_td1.addEventListener("click", del);

        function del() {
            let delete1 = document.getElementById("setDelete");


            let p_deleted = document.createElement('p');
            p_deleted.style.borderBottom ="gray 2px solid";
            let text_p_delete = document.createTextNode(td3.textContent);

            p_deleted.appendChild(text_p_delete);
            delete1.appendChild(p_deleted);
            document.getElementById("delete").style.display = "block";
            tbody.removeChild(tr);
        }

        // Do part codes
        a_td2.addEventListener("click",doed);
        function doed(){
            let doo = document.getElementById("doo");
            let p_doo = document.createElement("p");
            p_doo.style.borderBottom ="green 2px solid";
            p_doo.style.padding ="10px auto";
            let do_p_doo = document.createTextNode(td3.textContent);

            p_doo.appendChild(do_p_doo);
            doo.appendChild(p_doo);
            document.getElementById("doood").style.display = "block";

            tbody.removeChild(tr);

        }
    }
}
