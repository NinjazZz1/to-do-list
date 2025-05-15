export default function loadProject(project) {
    clearContent();
    const directory = document.querySelector('#directory');
    directory.innerHTML = "Projects/" + project.title;

    const section = document.querySelector('.container');
    const elements = document.createElement("div");
    elements.classList.add("elements")
    
    // HEADERS
    const headers = document.createElement("div");
    headers.classList.add("content-headers");

    const title = document.createElement("h2");
    title.classList.add("project-title");
    title.innerHTML = project.title;
    const description = document.createElement("h3");
    description.classList.add("project-description");
    description.innerHTML = project.description;
    
    headers.append(title, description);
    section.appendChild(headers);

    // CARD
    const card = document.createElement("div");
    card.classList.add("card");

    const tasksSection = document.createElement("div");

    const subHeader = document.createElement("h2");
    subHeader.innerHTML = "Tasks";

    // TO BE ARRAY LOOP
    const taskList = document.createElement("h3");

    project.toDo.forEach(task => {
        console.log(task);
        const checkBox = document.createElement("button")
        checkBox.classList.add("prio")
        const spanContainer = document.createElement("span");
        const textElement = document.createElement("h3");
        const lineBreak = document.createElement("hr");

        textElement.innerHTML = `${task.priority.toString()} | ${task.task}`;
        spanContainer.append(checkBox, textElement);
        tasksSection.append(spanContainer, lineBreak);
    });

    // taskList.innerHTML = "---";

    subHeader.appendChild(taskList);
    card.appendChild(subHeader);
    elements.append(headers, card, tasksSection);
    section.appendChild(elements);

    // ADD MODAL BACK
    const modal = document.createElement("span");
    modal.classList.add("add-task-modal")
    const button = document.createElement("button");
    button.classList.add("add-task");
    button.innerHTML = "+";
    const modalText = document.createElement("h3");
    modalText.innerHTML = "Add Task";

    modal.append(button, modalText);
    tasksSection.append(modal);
} 

function clearContent() {
    const section = document.querySelector('.container');
    const elements = document.querySelector('.elements');

    section.removeChild(elements);
}
