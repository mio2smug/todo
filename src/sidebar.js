const addToSidebar = () =>{
    //HTML elements
    const addButtonSidebar = document.querySelector('#add-button-sidebar');
    const sidebarModal = document.querySelector('#mySidebarModal')
    const sideBarSubmit = document.querySelector('#sidebar--submit--button')
    const sideBarInput = document.querySelector('#sidebar--input') 
    const sideBarSpan = document.querySelector('#my--sidebar--span')
    
    //JS constants
    let myInput;
    let myDays = []

    function day(date){
        this.date = date;
    }
    
    addButtonSidebar.onclick = function () {
        sidebarModal.style.display = 'block'
    };

    sideBarSpan.onclick = function () {
        sidebarModal.style.display = 'none'
    }

    sideBarSubmit.onclick = function(){
        addDayToLibrary();
        clearModal();
        sidebarModal.style.display = 'none'
    };

    const addDayToLibrary = () => {myDays.push(new day(sideBarInput.value))}
    
    const clearModal = () => sideBarInput.value = ''

};

export default addToSidebar