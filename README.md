# Project1-fida-khoury README

This project is a demo for reminders or tasks to do (todo list), but on my way and with my own touches.
In the page the user can add and delte an reminder while whener a change is made (adding/ deleteing) it is updated in the local storage.
also the page saves the last changes (the last reminders that where on the screen and shows them whenever opening the screen ).
it is a very easy page for making the reminders board and oragnazing life in general.

>Table of content 
 >main flow of project 
  >styling the page
   >the code section
    >


# MAIN FLOW OF PROJECT
- ## Its a very simple page that can add a reminder to my reminders board 
- ## A new reminder is on the lined paper, where a user can add content of the reminder in the textarea , the date and time for the - reminder to do as an input .
- ## There is also two pastel purble button one for adding a new reminder and second for reseting the information the screen.
- ## Under that the note is added with the contant and date .
- ## each node has a delete (trash) button for deleting the remnider/ task .

# STYLING THE PAGE
- ## because the styling is very uniqe i didnt want to ruin it by making it carmped in one place for smaller screen so i just made it disapper when ever the screen is smaller than 600px .
- ## As for the lined paper i had two chooses ethier take it as a picture or do it manully with css.
    - ### I obviously choose to do it manullay with css and got some help from the internet 
- ## I used a spcial font from google-fonts , which i find very suitable for the theme and vibe .
- ## I also added to my project the image it self of the sticky note,( i downloaded it from google images), the background of the reminder .
- ## on the remindder there is the date from top after that i have a trash button (i took from boostrap) i styled it my way and its only shown when the mouse is hovering on reminder itself 
- ## The text in the reminder wont be out of the sticking note only in the border.
- ## Each reminder fade in slowly at the screen 
- ## I made the styly for each class so whenever i created them i only assiened it to the class name .
### i kept it simple and i used css 

# THE CODE SECTION 
- ## An important process that whenever the page open first it checks if there is data saved in the local storage and if the is it shows it on screen,also saves the data as objects in array (using json).
- ## There some validation that had to be made  :
>### The content of the reminder cant be empty it must has some text.
>### Also the date and time cant be empty
>### The date must be valid which means it cant be an old date so i made it check everytime with the current time 
>### The date must be number with certian order yyyy-mm-dd , the day must be between 1-31, the mounth betwen 1-12
>### As for time i first check if the reminder is for today if it is then i check it with the current time that is assing to future and not past
>### Also that it is number and in certian order HH:MM while the hours betwen 0-23 and mintes is betwen 0-59
>### if any of the validation is wrong an error message will be alerted on the screen 
- ## all elemet was taken from the dom .
- ## if all validation is true then the reminder will be added to local storage, on screen and as objec in array 
- ## in the local storage i added each object in the value and the key was the "taski" while i is the number of the task
- ## i also coded an event listner for the rest button because its short code for the button 
- ## all reminders are created dynimaclly using dom => create Elemnt, whenever an element created the right className is assienged to it .
- ## also the delete button i made an annoynace funtion that whenever is click it delets from array(with splice), on screen(with some)and local storage while making sure the key of reminder in local storage is still in order. i need to search the node firdt in the array .
- ## whenever data is added it reset the inputs.
- ## data cand be edited an must stay in the borders 
- ## I used js for coding and mainlayout html.


