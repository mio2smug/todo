// import createSidebarElement from "../sidaberElement";
// import createSidebarElement from "./sidebarElement";

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

    function Day (input){
        this.name = input
        this.data = []
    };

    function Task (date, title, desc, due, urgency ){
        this.date = date;
        this.title = title;
        this.desc = desc;
        this.due = due;
        this.urgency = urgency
    };


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
        console.log(mySchedule);
    }

    const createDayObj = (x) => {
        let myLocalObj = x;
        myLocalObj = new Day(myLocalObj);
        pushObjToArr(myLocalObj);
    };

    const pushObjToArr = (y) => {
        mySchedule.push(y);
        return;
    };

    const clearModal = () => sideBarInput.value = '';


    
    //JS constants
    // let myInput;
    // let myDays = []
    // let myDivs = []

    // function day(date){
    //     this.date = date;
    // }
    
    // addButtonSidebar.onclick = function () {
    //     // alert("Hi?")
    //     clearModal();
    //     sidebarModal.style.display = 'block'
    // };

    // sideBarSpan.onclick = function () {
    //     sidebarModal.style.display = 'none'
    // }

    // sideBarSubmit.onclick = function(){
    //     addDayToLibrary();
    //     clearModal();
    //     display();
    //     sidebarModal.style.display = 'none'
    // };

    // //  Should probably make this into it's own function
    // function display (){
    //     sidebarContent.innerHTML = ' ';
    //     for (let i = 0; i < myDays.length; i++){
    //         const myDiv = document.createElement('div')
    //         myDiv.classList.add('sidebar--template')
    //         const myButton = document.createElement('button')
    //         myButton.classList.add('button--template--fit')
    //         // myButton.prototype.onclick = alert("working?")
    //         const myP = document.createElement('p')
    //         myP.textContent = myDays[i].date  
    //         myButton.appendChild(myP)
    //         myDiv.appendChild(myButton)
    //         myDivs.push(myDiv);
    //         onclickToArray();
    //         sidebarContent.appendChild(myDiv);
    //         // console.log(myDivs)
    //         // myDiv.onclick(alert("hi"));
    //     }
    // };

    // //  HOly canoli it actually works
    // function onclickToArray (){
    //     for(let i = 0; i < myDivs.length; i++){
    //         myDivs[i].onclick = function () {
    //             // console.log(myDivs  )
    //         }
    //     }
    // };
    
    // const addDayToLibrary = () => {myDays.push(new day(sideBarInput.value))}
    
    // const clearModal = () => sideBarInput.value = ''

};

export default addToSidebar