let Schedule = [
    {
        ID: 1,
        Course: "HTML",
        Complete: false,
    },
    {
        ID: 2,
        Course: "CSS",
        Complete: false,
    },
    {
        ID: 3,
        Course: "Basics of JavaScript",
        Complete: false,
    },
    {
        ID: 4,
        Course: "Node Package Manager  (npm)",
        Complete: false,
    },
    {
        ID: 5,
        Course: "Git",
        Complete: false,
    },
];
function In(){
    for(let i = 0; i < Schedule.length; i++){
        if(Schedule[i].Complete == true){
            console.log(`${i+1}. [X] ${Schedule[i].Course}`);
        }
        else{
            console.log(`${i+1}. [ ] ${Schedule[i].Course}`);
        }
    }
}
let chon = prompt("Vui lòng chọn (New, Delete, Update, Complete)");
if (chon === "new" || chon === "New") {
    let newCourse = prompt("Vui lòng nhập khóa học mới: ")
    let id = Schedule.length + 1;
    let newObj = {
        ID: id,
        Course: newCourse,
        Complete: false,
    }
    Schedule.push(newObj);
    In();
}
else if(chon === "update" || chon === "Update"){
    let newID  = prompt("Vui lòng nhập id muốn thay đổi: ")
    if(newID > Schedule.length)
    console.log("Không có id cần thay đổi");
    else 
    {
        let newCourse = prompt("Vui lòng nhập lại tên khóa học")
        Schedule[newID-1].Course = newCourse;
        In();
    }
}
else if(chon === "Complete" || chon === "complete"){
    let newID  = prompt("Vui lòng nhập id muốn thay đổi: ")
    if(newID > Schedule.length)
    console.log("Không có id cần thay đổi");
    else 
    {
        Schedule[newID-1].Complete = true;
        In();
    }
}
else if(chon === "Delete" || chon === "delete"){
    let newID  = prompt("Vui lòng nhập id muốn thay đổi: ")
    if(newID > Schedule.length)
    console.log("Không có id cần xóa");
    else 
    {
        Schedule.splice(newID-1, 1)
        In();
    }
}
