import ProjectManager from "./projectManager";

const createModal = () => {
    // Create DOM
    //
    //

    // Test for now
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const date = document.querySelector('#dueDate');
    const project = document.querySelector('#project'); // MIGHT NOT WORK 
    const priority = document.querySelector('#prio');
    const form = document.getElementById("form");


    form.addEventListener("submit", (e) => {
        let messages = [];

        if (title.value === "" || title.value === null) {
            messages.push("Please enter a name");
        }

        if (messages.length > 0) {
            e.preventDefault();
            // SEND ERROR
        } else {
            e.preventDefault();
            ProjectManager.addTodo(priority.value, dueDate.value, title.value, description.value)
        }
    })

}

export default createModal;