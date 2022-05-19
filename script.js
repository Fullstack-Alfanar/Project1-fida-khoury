


function AddReminder(){
    let content=document.getElementById("noteContent");
    let WrDate=document.getElementById("wantedRdate");
    let WrTime=document.getElementById("wantedRtime");
    let remindersDiv=document.getElementById("remindersDiv");
    let mainDiv=document.getElementById("MainDiv");

    let rDiv=document.createElement("div");
    rDiv.className="reminderImg";
    let rContent=document.createElement("textarea");
    rContent.className="RemiContent";
    rContent.value=content.value;
    rDiv.appendChild(rContent);
    remindersDiv.appendChild(rDiv);
    mainDiv.appendChild(remindersDiv);

    console.log(content.value);    
}


