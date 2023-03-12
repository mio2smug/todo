const addToSidebar = () =>{
    //HTML elements
    const addButtonSidebar = document.querySelector('#add-button-sidebar');
    const sidebarModal = document.querySelector('#mySidebarModal')
    const sideBarSubmit = document.querySelector('#sidebar--submit--button')
    const sideBarInput = document.querySelector('#sidebar--input') 
    const sideBarSpan = document.querySelector('#my--sidebar--span')
    let sidebarContent = document.querySelector('.sidebar--content--wrapper')
    
    //JS constants
    // let myInput;
    let myDays = []
    let myDivs = []

    function day(date){
        this.date = date;
    }
    
    addButtonSidebar.onclick = function () {
        clearModal();
        sidebarModal.style.display = 'block'
    };

    sideBarSpan.onclick = function () {
        sidebarModal.style.display = 'none'
    }

    sideBarSubmit.onclick = function(){
        addDayToLibrary();
        clearModal();
        display();
        sidebarModal.style.display = 'none'
    };


    function display (){
        sidebarContent.innerHTML = ' ';
        for (let i = 0; i < myDays.length; i++){
            const myDiv = document.createElement('div')
            myDiv.classList.add('sidebar--template')
            const myButton = document.createElement('button')
            myButton.classList.add('button--template--fit')
            const myP = document.createElement('p')
            myP.textContent = myDays[i].date  
            myButton.appendChild(myP)
            myDiv.appendChild(myButton)
            myDivs.push(myDiv);
            sidebarContent.appendChild(myButton);
            // console.log(myDivs)
            // myDiv.onclick(alert("hi"));
        }
    }
    
    const addDayToLibrary = () => {myDays.push(new day(sideBarInput.value))}
    
    const clearModal = () => sideBarInput.value = ''

};

export default addToSidebar