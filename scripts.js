const projects = [
    {
        title: "TermoPy",
        description: "A Python library for simulating thermodynamic processes inside heat engines.",
        link: "https://github.com/Tycho887/TermoPy/blob/master/introduction.ipynb"
    },
    {
        title: "VideoDownloader",
        description: "A web-based tool to download media from various websites.",
        link: "videodownloader.html"
    },
    {
        title: "AI Diary",
        description: "An interactive diary that analyzes your mood and recommends activities using the OpenAI API.",
        link: "https://github.com/Tycho887/CheckerBot/tree/main"
    },
    {
        title: "Oil spill simulation",
        description: "Fluid simulation of oil interaction with water over time with vectorised Python.",
        link: "https://gitlab.com/inf203-group-5/inf203-alpha"
    },
    {
        title: "Measuring efficency of argon heat pumps",
        description: "Experimental measurement of efficiency difference caused by choice of working gas in a stirling type heat pump",
        link: "argonheatpump.html"
    },
    {
        title: "CleanerZilla",
        description: "Script for organizing downloads folder",
        link: ""
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
