export default function loadProject(project) {
    clearContent();
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

    const subHeader = document.createElement("h2");
    subHeader.innerHTML = "Tasks";

    // TO BE ARRAY LOOP
    const taskList = document.createElement("h3");
    taskList.innerHTML = "---";

    subHeader.appendChild(taskList);
    card.append(subHeader);
    elements.append(headers, card)
    section.appendChild(elements);

} 

function clearContent() {
    const section = document.querySelector('.container');
    const elements = document.querySelector('.elements');

    section.removeChild(elements);
}
