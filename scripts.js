const projects = [
    {
        title: "Stock Trading Algorithm",
        description: "An AI-driven stock trading algorithm using deep learning techniques.",
        link: "#"
    },
    {
        title: "Personal Finance Tracker",
        description: "A web-based app to track personal expenses and budgets.",
        link: "#"
    }
];

function loadProjects() {
    const projectList = document.getElementById('projects-list');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">View Project</a>
        `;
        
        projectList.appendChild(projectCard);
    });
}

document.addEventListener('DOMContentLoaded', loadProjects);
