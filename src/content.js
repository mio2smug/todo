//receives index so we know what tab we are in; should return data
const addToContent = (i, mySchedule) => {
    const myContentButton = document.querySelector('#content--icons--add');
    const contentModal = document.querySelector('.modal--wrapper')
    const contentSpan = document.querySelector('#mySpan');
    const myContentSubmit = document.getElementById('modal--submit--button')
    const date = document.getElementById('date')
    const title = document.getElementById('title')
    const description = document.getElementById('description')
    const duedate = document.getElementById('duedate')
    const urgency = document.getElementById('urgency')
    let myPageContent = document.querySelector('.content--divider2')

     // JS constants 
     let myCurrentTab = i;
    //  let myScheduleCopy = mySchedule.splice(); not used
     let myContent = [];

    function Task (date, title, desc, due, urgency ){
        this.date = date;
        this.title = title;
        this.desc = desc;
        this.due = due;
        this.urgency = urgency
    };

    myContentButton.onclick = function () {
        contentModal.style.display = 'block';
        clearContentModal()
    };

    contentSpan.onclick = () => {
        contentModal.style.display = 'none';
        clearContentModal();
    }

    function clearContentModal () {
        date.value = '';
        title.value = '';
        description.value = '';
        duedate.value = '';
        urgency.value = '';
    }

    myContentSubmit.onclick = () => {
        createContentObj();
        clearContentModal();
        contentModal.style.display = 'none'
        contentDisplay();
    }

    function setTask (){
        const task = new Task()
    }

    const createContentObj = function(){
        // console.log(date.value)
        //outer wrapper
        const myDiv = document.createElement('div');
        myDiv.classList.add('content--template')
        
        //1st child of wrapper
        const myDivDate = document.createElement('div')
        myDivDate.classList.add('date--value')

            //Child of 1st child
            const myDateValue = document.createElement('p')
            myDateValue.textContent = date.value;

        myDivDate.appendChild(myDateValue)

        //2nd child of wrapper/ title and desc wrapper
        const myTitleDescDiv = document.createElement('div')
        myTitleDescDiv.classList.add('title--description--wrapper')

            //child of TitleDescDiv
            const myTitleDiv = document.createElement('div')
            myTitleDiv.classList.add('title--value')

                //child of myTitleDiv
                const myTitleValue = document.createElement('p')
                myTitleValue.textContent = title.value

            myTitleDiv.appendChild(myTitleValue)


            //child of TitleDescDiv
            const myDescDiv = document.createElement('div')
            myDescDiv.classList.add('description--value')

                //child of myDescDiv
                const myDescValue = document.createElement('p')
                myDescValue.textContent = description.value

            myDescDiv.appendChild(myDescValue)

        myTitleDescDiv.appendChild(myTitleDiv);
        myTitleDescDiv.appendChild(myDescDiv);

        //3rd child of wrapper
        const myDueDateDiv = document.createElement('div')
        myDueDateDiv.classList.add('duedate--value')

            const myDueDateValue = document.createElement('p')
            myDueDateValue.textContent = duedate.value

        myDueDateDiv.appendChild(myDueDateValue)

        //4th child of wrapper
        const myUrgencyDiv = document.createElement('div')
        myUrgencyDiv.classList.add('urgency--value')

            const myUrgencyValue = document.createElement('p')
            myUrgencyValue.textContent = urgency.value;
        
        myUrgencyDiv.appendChild(myUrgencyValue)

        myDiv.appendChild(myDivDate)
        myDiv.appendChild(myTitleDescDiv)
        myDiv.appendChild(myDueDateDiv)
        myDiv.appendChild(myUrgencyDiv)
        
        myContent.push(myDiv)
        // setTaskValues(date.value, title.value, description.value, duedate.value, urgency.value)
        
    };

    function contentDisplay (){
        myPageContent.innerHTML = ''
        for(let i = 0; i<myContent.length; i++){
            myPageContent.appendChild(myContent[i])
        }
    };

    function setTaskValues (date, title, description, duedate, urgency) {
        let task = new Task(date, title, description, duedate, urgency)
        mySchedule[myCurrentTab].data.push(task);
        console.log(mySchedule)
        return mySchedule
        
    };

}

export default addToContent