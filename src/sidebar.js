// import createSidebarElement from "../sidaberElement";
// import createSidebarElement from "./sidebarElement";
import addToContent from './content'

const addToSidebar = () =>{
    //HTML elements
    const addButtonSidebar = document.querySelector('#add-button-sidebar');
    const sidebarModal = document.querySelector('#mySidebarModal')
    const sideBarSubmit = document.querySelector('#sidebar--submit--button')
    const sideBarInput = document.querySelector('#sidebar--input') 
    const sideBarSpan = document.querySelector('#my--sidebar--span')
    let sidebarContent = document.querySelector('.sidebar--content--wrapper')
    
    //JS Constants
    let mySchedule = [] //All page objects go into this array
    let myDivs = []
    let myIndex = 0;


    function Day (input){
        this.name = input
        this.data = []
    };

    //maybe this should go on content?
    // function Task (date, title, desc, due, urgency ){
    //     this.date = date;
    //     this.title = title;
    //     this.desc = desc;
    //     this.due = due;
    //     this.urgency = urgency
    // };


    //sidebar plus button
    addButtonSidebar.onclick = function(){
        // alert('hello?');
        sidebarModal.style.display = 'block'
        clearModal();
    };

    sideBarSpan.onclick = function(){
        sidebarModal.style.display = 'none';
        clearModal()
    };

    sideBarSubmit.onclick = function() {
        let localValue = sideBarInput.value
        createDayObj(localValue);
        clearModal();
        sidebarModal.style.display = 'none'
        display()
        // console.log(mySchedule);
    }

    const createDayObj = (x) => {
        let myLocalObj = x;
        myLocalObj = new Day(myLocalObj);
        pushObjToArr(myLocalObj);
        return;
    };

    const pushObjToArr = (y) => {
        mySchedule.push(y);
        return;
    };

    const clearModal = () => sideBarInput.value = '';

    const display = function () {
        sidebarContent.innerHTML = ''
        //refreshes myDivs, when their onClick is pressed returns correct index
        //useful for delete functions and 
        myDivs = [];
        for (let i =0; i<mySchedule.length; i++){
            const myDiv = document.createElement('div') //create div
            myDiv.classList.add('sidebar--template') //add sidebar temp class to div
            const myButton = document.createElement('button') //create button
            myButton.classList.add('button--template--fit') //add button template to button
            const myP = document.createElement('p') //create P element
            // console.log(mySchedule);
            myP.textContent = mySchedule[i].name  //let text of P equal param
            myButton.appendChild(myP) //add P to button
            myDiv.appendChild(myButton) //add button to div
            myDivs.push(myDiv);
            sidebarContent.appendChild(myDiv); //add div to sidebar
            onClickToArray();
        }
        // onClickToArray();
    };

    function onClickToArray (){
        for(let i = 0; i < myDivs.length; i++){
            myDivs[i].onclick = function () {
                myIndex = i;
                alert('working ' + myIndex);
                addToContent(i, mySchedule);
                console.log(mySchedule)
            }
        }
    };
};

export default addToSidebar

//author's comment: it's very funny that I created the same program again