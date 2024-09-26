const projects = [
    {
        title: "TermoPy",
        description: "A Python library for simulating thermodynamic processes inside heat engines.",
        link: "termopy.html"
    },
    {
        title: "VideoDownloader",
        description: "A web-based tool to download media from various websites.",
        link: "videodownloader.html"
    },
    {
        title: "AI Diary",
        description: "An interactive diary that analyzes your mood and recommends activities.",
        link: "aidiary.html"
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
            <a href="${project.link}">Learn More</a>
        `;
        
        projectList.appendChild(projectCard);
    });
}

document.addEventListener('DOMContentLoaded', loadProjects);
