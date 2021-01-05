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
    }
}