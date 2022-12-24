let dropdown = document.getElementById("dropdown");
let answer = document.getElementById("answer");
let filterButton = document.getElementById("filterButton");


let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
]

function filterbyprofession() {
    answer.innerHTML = "";
    let dropdownValue = dropdown.value;

    if (dropdownValue == "profession") {
        alert("Select a profession before clicking the button.");
        return;
    }

    arr.forEach((item) => {
        if (item.profession === dropdownValue) {
            let div = document.createElement("div");
            // div.setAttribute("class");
            div.innerText = item.id + ". Name: " + item.name + "  Profession: " + item.profession + "  Age: " + item.age;
            answer.append(div);
        }
    })
    console.log(arr);
}

filterButton.addEventListener("click", filterbyprofession);

let addName = document.getElementById("name");
let addProfession = document.getElementById("profession");
let addAge = document.getElementById("age");

let aadBtn = document.getElementById("adduser");


function addUser() {
    let Uname = addName.value;
    let age = addAge.value;
    let prf = addProfession.value;

    let x = arr.length;
    ++x;

    let brr = { id: x, name: `${Uname}`, age: `${age}`, profession: `${prf}` }
    if(Uname !== "" && age !== "" && prf !== ""){
        arr.push(brr);
    }
    else{
        alert("fill complete detail.")
    }

    console.log(arr);

    addName.value = "";
    addAge.value = "";
    addProfession.value = "";

}

aadBtn.addEventListener("click", addUser);

arr.forEach((item) => {
    if (item.profession === dropdownValue) {
        let divElement = document.createElement("div");

        //add border to values
        divElement.style.borderStyle = "solid";
        divElement.style.margin ="15px 0px"
        divElement.style.borderRadius ="10px"
        
        
        divElement.innerText = item.id + ". Name: " + item.name + "  Profession: " + item.profession + "  Age: " + item.age;
        answer.append(divElement);
    }
})