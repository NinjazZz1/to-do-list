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
        let toDos = [];
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

    const removeTodo = (element) => {
        console.log(element)
        projects[0].toDo.splice(element, 1);
        console.log(projects[0].toDo[element]);
        loadProject(projects[0]);
    }

    const addTodo = (priority, dueDate, task) => {
        const i = new ToDo(priority, dueDate, task);
        projects[0].toDo.push(i);
        loadProject(projects[0]);
    }

    return {
        getProjects,
        createProject,
        displayProject,
        removeTodo,
        addTodo
    }
})();

export default ProjectManager;