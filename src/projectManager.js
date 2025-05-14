import loadProject from "./loader";

class Project {
    constructor(title, description, dueDate, priority, toDo) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.toDo = toDo;
    } 
}

const ProjectManager = (() => {
    let projects = [];

    let currentProject = 0;

    const getProjects = () => projects;

    const createProject = (title, description, dueDate, priority, toDo) => {
        const newProject = new Project(title, description, dueDate, priority, toDo);   
        console.log(newProject);
        addProject(newProject);
        loadProject(newProject);
    }

    const addProject = (project) => {
        projects.push(project);
    }

    return {
        getProjects,
        createProject
    }
})();

export default ProjectManager;