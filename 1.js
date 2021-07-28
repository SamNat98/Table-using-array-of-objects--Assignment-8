var arr = [
    {
        "emp_name": "Rohan",
        "emp_id": 1,
        "emp_desg": "Software Developer",
        "emp_explvl": 4
    },
    {
        "emp_name": "Vicky",
        "emp_id": 2,
        "emp_desg": "Software Engineer",
        "emp_explvl": 2
    },
    {
        "emp_name": "John",
        "emp_id": 3,
        "emp_desg": "Graphic Designer",
        "emp_explvl": 7
    },
    {
        "emp_name": "Mike",
        "emp_id": 4,
        "emp_desg": "Sales Head",
        "emp_explvl": 5
    },
    {
        "emp_name": "Sahil",
        "emp_id": 5,
        "emp_desg": "Project Manager",
        "emp_explvl": 10
    },
    {
        "emp_name": "Ronald",
        "emp_id": 6,
        "emp_desg": "Software Tester",
        "emp_explvl": 3.5
    }
];

function rec() {

    var id1 = document.getElementsByClassName("1");
    var id2 = document.getElementsByClassName("2");
    var id3 = document.getElementsByClassName("3");
    var id4 = document.getElementsByClassName("4");
    var id5 = document.getElementsByClassName("5");
    var id6 = document.getElementsByClassName("6");

    var a1 = Object.values(arr[0]);
    var a2 = Object.values(arr[1]);
    var a3 = Object.values(arr[2]);
    var a4 = Object.values(arr[3]);
    var a5 = Object.values(arr[4]);
    var a6 = Object.values(arr[5]);


    for (i = 0; i < a1.length; i++) {

        id1[i].innerHTML = a1[i];
    }

    for (i = 0; i < a2.length; i++) {

        id2[i].innerHTML = a2[i];
    }

    for (i = 0; i < a3.length; i++) {

        id3[i].innerHTML = a3[i];
    }

    for (i = 0; i < a4.length; i++) {

        id4[i].innerHTML = a4[i];
    }
    for (i = 0; i < a5.length; i++) {

        id5[i].innerHTML = a5[i];
    }

    for (i = 0; i < a6.length; i++) {

        id6[i].innerHTML = a6[i];
    }

}

var i1, i2, i3, i4, bn, i5, i6, i7, i8, i9, cell1, cell2, cell3, cell4, cell5, cell6;

function add() {

    let z = document.getElementById("addform");

    z.style.display = "block";

    i1 = document.getElementById("ip1");
    i2 = document.getElementById("ip2");
    i3 = document.getElementById("ip3");
    i4 = document.getElementById("ip4");
    bn = document.getElementById("b5");

    i5 = document.getElementById("h1");
    i6 = document.getElementById("l1");
    i7 = document.getElementById("l2");
    i8 = document.getElementById("l3");
    i9 = document.getElementById("l4");

    let a = document.getElementById("tb");

    let row = a.insertRow();
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);

    cell1.setAttribute('class',`${row.rowIndex}`);
    cell2.setAttribute('class',`${row.rowIndex}`);
    cell3.setAttribute('class',`${row.rowIndex}`);
    cell4.setAttribute('class',`${row.rowIndex}`);


    cell5.innerHTML = ` <button id="b1" type="button" class="btn btn-success btn-sm" onclick="add()">Add</button>
                        <button id="b2" class="btn btn-warning btn-xs" type="button" onclick="remove(${row.rowIndex})">Remove</button> 
                        <button id="b3" type="button" class="btn btn-danger btn-sm" onclick="edit(${row.rowIndex})">Edit</button>`;
    cell5.style.display = "none";

    i1.value = "";
    i2.value = "";
    i3.value = "";
    i4.value = "";
}

function final() {
    cell1.innerHTML = i1.value;
    cell2.innerHTML = i2.value;
    cell3.innerHTML = i3.value;
    cell4.innerHTML = i4.value;
    cell5.style.display = "block";

    let z = document.getElementById("addform");

    z.style.display = "none";


}


function remove(x) {

    console.log(x);

    if (confirm("Are you sure,you want to delete the Record")) {

        var table = document.getElementById("tb");
        var row = table.rows;
        row[x].remove();

        let z = document.getElementById("addform");



        if (z.style.display === "block") {
            z.style.display = "none";
        }


    }


}

var y3, y5, y7, y9, input;

function edit(x) {

    let z = document.getElementById("editform");

    z.style.display = "block";

  
    y3 = document.getElementById("g1");
    y5 = document.getElementById("c1");
    y7 = document.getElementById("d1");
    y9 = document.getElementById("e1");

    
    input = x;
    var tdb = document.getElementsByClassName(input);


    console.log(tdb[0].innerHTML);
    console.log(tdb[1].innerHTML);
    console.log(tdb[2].innerHTML);
    console.log(tdb[3].innerHTML);

    y3.value = tdb[0].innerHTML;
    y5.value = tdb[1].innerHTML;
    y7.value = tdb[2].innerHTML;
    y9.value = tdb[3].innerHTML;

    console.log(y3.value);

}

function finall() {

    var tdb = document.getElementsByClassName(input);

    console.log(tdb[1].innerHTML);

    tdb[0].innerHTML = y3.value;
    tdb[1].innerHTML = y5.value;
    tdb[2].innerHTML = y7.value;
    tdb[3].innerHTML = y9.value;

    let z = document.getElementById("editform");

    z.style.display = "none";
}

rec();