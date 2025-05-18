import "./styles.css";
import ProjectManager from "./projectManager";
import createModal from "./createTodo";

let toDo = [
    ["high", "2025-05-05", "Setup HTML", "Setup boilerplate"],
    // ["medium", "None", "Setup CSS"],
    // ["low", "None", "Setup JS"],
];

ProjectManager.createProject("Project 01", "Placeholder description", "None", "None", toDo);
// ProjectManager.createProject("Project 02", "Placeholder description 2", "None", "high", toDo);

ProjectManager.displayProject(0);

// ProjectManager.addTodo("high", "none", "Setup WebPack");

createModal();