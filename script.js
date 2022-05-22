
let reminders = [];


let content = document.getElementById("noteContent");
let WrDate = document.getElementById("wantedRdate");
let WrTime = document.getElementById("wantedRtime");
//this is for the reset button it only work and do a simple code so i only add event listner 
document.getElementById("resetInfo").addEventListener("click",()=>{
    content.value = WrDate.value = WrTime.value = "";
    location.reload();//reload the page 
});


var reminderNo = 0;//number of current tasks/reminders 

//this function will work whenever the page is loaded .
//because all data is saved in local storage from there i will save it back in the array of objects and show it on screen .
function firstLoadOfThePage() {
    let i = 0;

    while (localStorage.getItem("task" + i)) {
        reminders[i] = JSON.parse(localStorage.getItem("task" + i));
        content.value = reminders[i].Remindercontent;
        WrDate.value = reminders[i].ReminderDate;
        WrTime.value = reminders[i].ReminderTime;
        AddReminder();
        i++;
    }
    reminderNo = i;

}



function AddReminder() {
    //geting the input elements

    let remindersDiv = document.getElementById("remindersDiv");
    let mainDiv = document.getElementById("MainDiv");

    if (content.value == null || content.value == "")
        alert("please insert content  !!");

    else if (WrDate.value == "" || WrDate.value == null || WrTime.value == "" || WrTime.value == null)
        alert("please insert date and time !!");
    else if (checkDate(WrDate.value, WrTime.value) == true) {

        //save in local storge
        temp = {
            Remindercontent: content.value,
            ReminderDate: WrDate.value,
            ReminderTime: WrTime.value
        }
        reminders.push(temp);
        localStorage.setItem("task" + reminderNo, JSON.stringify(temp));
        reminderNo++;

        //creating output elements 
        let rDiv = document.createElement("div");
        let wantedDateR = document.createElement("div");
        let DateR = document.createElement("input");
        let TimeR = document.createElement("input");
        let btnDiv = document.createElement("div");
        let delBtn = document.createElement("button");
        //after creating each element i already create a class with the style i want so i only assing the classname to wanted element 
        rDiv.className = "reminderImg";
        wantedDateR.className = "wantedDate";
        DateR.type = "date";
        TimeR.type = "time";
        DateR.className = "Rdate";
        TimeR.className = "Rtime";
        rDiv.style = "display: flex;justify-content: center;flex-direction: column;background-image: url('images/stickynote.png');"
        delBtn.type = "button";
        delBtn.style = "color:#e0bbe4; font-size: 20px;border-color: unset;background-color: transparent;";
        //here i declare an anonymous function beacuse we only going to use it when the trash button is pressed 
        delBtn.onclick = () => {
            delNode = {
                Remindercontent: rContent.value,
                ReminderDate: DateR.value,
                ReminderTime: TimeR.value
            }
            var index = searchNode(delNode);
            if (index == -1)
                alert("its not saved in the storage");
            else {
                rDiv.remove();
                reminders.splice(index, 1);
                console.log(reminders);
                localStorage.removeItem("task" + index);
                reminderNo--;
                //this loop i used for reseting the right names for each task in the local storage
                for( i=index; i<reminderNo;i++)
                {
                    k=i+1;
                localStorage.setItem("task"+i,localStorage.getItem("task"+k));
                }
                localStorage.removeItem("task" + reminderNo);

            }

        }
        delBtn.className = "bi bi-trash";
        btnDiv.className = "deleteButton";
        let rContent = document.createElement("textarea");
        rContent.className = "RemiContent";
        rContent.readOnly = true;
        rContent.value = content.value;
        DateR.value = WrDate.value;
        TimeR.value = WrTime.value;
        DateR.readOnly = true;
        TimeR.readOnly = true;
        wantedDateR.appendChild(DateR);
        wantedDateR.appendChild(TimeR);
        rDiv.appendChild(wantedDateR);
        btnDiv.appendChild(delBtn);
        rDiv.appendChild(btnDiv);
        rDiv.appendChild(rContent);
        remindersDiv.appendChild(rDiv);
        mainDiv.appendChild(remindersDiv);

        //clearing the all fields 
        content.value = WrDate.value = WrTime.value = "";
        console.log(reminders);
    }
}
//the first equal object that finds it sends it's index back 
function searchNode(obj) {
    for (var i = 0; i < reminderNo; i++) {
        if (obj.ReminderDate == reminders[i].ReminderDate && obj.ReminderTime == reminders[i].ReminderTime && obj.Remindercontent == reminders[i].Remindercontent)
            return i;
    }
    return -1;
}

firstLoadOfThePage();
console.log(reminders);

//check the date and time if valid if not return false and alert an error message 
function checkDate(rDate, rTime) {
    let dd, mm, yyyy, ddCurr, mmCurr, yyyyCurr, flag = 0, hour, min;
    //if flag is zero then it not for today 
    //getting the current date because the date for the reminder cant befor the curent today we can assing a date to the past 
    var today = new Date();
    ddCurr = today.getDate();
    mmCurr = today.getMonth() + 1;
    yyyyCurr = today.getFullYear();

    if (rDate[4] == "-" && rDate[7] == "-" && rDate.length == 10) {
        //saving the date from the html
        yyyy = rDate[0] + rDate[1] + rDate[2] + rDate[3];
        mm = rDate[5] + rDate[6];
        dd = rDate[8] + rDate[9];
        //i will explain in details the readme what i checked but it was easier to what should not be then the otherway
        if (yyyy < yyyyCurr || (yyyyCurr <= yyyy && mmCurr > mm) || (yyyyCurr <= yyyy && mmCurr == mm && ddCurr > dd) || parseInt(dd) < 0 || parseInt(dd) > 31 || parseInt(mm) > 12 || parseInt(mm) <= 00)
            {
                alert("date is invalid");
                return false;
            }
        else {
            //flag equal to one if the reminder is for today
            if (parseInt(yyyy) == yyyyCurr && mmCurr == parseInt(mm) && ddCurr == parseInt(dd))
                flag = 1;
                console.log(flag);
            if (rTime[2] == ":" && rTime.length == 5) {
                hour = rTime[0] + rTime[1];
                min = rTime[3] + rTime[4];
                if ((flag == 1 && today.getMinutes() < parseInt(min) && parseInt(min) < 60 && today.getHours() <= parseInt(hour) && parseInt(hour) < 24) ||(flag == 1 && today.getMinutes() >= parseInt(min) && parseInt(min) >0 && today.getHours() < parseInt(hour) && parseInt(hour) < 24) || (flag == 0 && 00 <= parseInt(min) && parseInt(min) < 60 && 00<= parseInt(hour) && parseInt(hour) < 24))
                    return true;
                else {
                    alert("invalid time ");
                    return false;
                }

            } else {
                alert("Incorrect time!!");
                return false;
            }

        }
    }

    else {
        alert("date is not correct!!");
        return false;
    }
}
    



