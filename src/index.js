import "./styles.css";
import ProjectManager from "./projectManager";

let toDo = [
    ["1", "None", "Setup HTML"],
    ["2", "None", "Setup CSS"],
    ["3", "None", "Setup JS"],
];

ProjectManager.createProject("Project 01", "This is a placeholder project for the design of the page!", "None", "None", toDo);
// ProjectManager.createProject("Project 02", "Placeholder description 2", "None", "None", toDo);

ProjectManager.displayProject(0);

