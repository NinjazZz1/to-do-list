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

class ToDo {
    constructor(priority, dueDate, task) {
        this.priority = priority;
        this.dueDate = dueDate;
        this.task = task;
    }
}

const ProjectManager = (() => {
    let projects = [];

    let currentProject = 0;

    const getProjects = () => projects;

    const createProject = (title, description, dueDate, priority, toDo) => {
        const toDos = [];
        toDo.forEach(element => {
            const i = new ToDo(element[0], element[1], element[2]);
            toDos.push(i);
        });
        const newProject = new Project(title, description, dueDate, priority, toDos);   
        addProject(newProject);
    }

    const addProject = (project) => {
        projects.push(project);
    }

    const displayProject = (projectNo) => {
        loadProject(projects[projectNo]);
    }

    return {
        getProjects,
        createProject,
        displayProject,
    }
})();

export default ProjectManager;