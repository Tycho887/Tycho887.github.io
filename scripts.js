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
        link: "oilspillsimulation.html"
    },
    {
        title: "Measuring efficency of argon heat pumps",
        description: "Experimental measurement of efficiency difference caused by choice of working gas in a stirling type heat pump",
        link: "argonheatpump.html"
    },
    {
        title: "CleanerZilla",
        description: "Script for organizing downloads folder",
        link: "https://github.com/Tycho887/CleanerZilla"
    },
    {
        title: "Measuring the radioactivity of strontium-90",
        description: "Description of a lab experiment measuring the radioactivity of strontium-90",
        link: "radioactivity_strontium.html"
    },
];

const classes = [
    {
        title: "INF201 - Advanced programming",
        description: "Advanced programming in Python, learning about object oriented programming, data structures and algorithms.",
        link: "https://www.nmbu.no/emne/inf201"
    },
    {
        title: "INF230 - Data handling and analysis",
        description: "Basics of SQL, database management and data analysis using Python.",
        link: "https://www.nmbu.no/emne/inf230"
    },
    {
        title: "INF203 - Simulation and modeling project",
        description: "Project course where we built a fluid simulation of oil spills using Python.",
        link: "https://www.nmbu.no/emne/inf203"
    },
    {
        title: "INF221 - Algorithms and data structures",
        description: "This course covers the mathematical foundations for algorithm analysis, key algorithms, data structures, performance evaluation, and problem-solving strategies, with applications in computer science such as reinforcement learning, decision trees, and object-oriented programming.",
        link: "https://www.nmbu.no/emne/inf221"
    },
    {
        title: "INF205 - Embedded programming",
        description: "This course introduces programming in a compiled language with explicit memory management, focusing on efficient resource use. Topics include modern C++, memory handling, standard libraries, templates, and sustainable programming, with applications in embedded systems and ROS.",
        link: "https://www.nmbu.no/emne/inf205"
    },
    {
        title: "DAT110 - Introduction to data analysis and visualization",
        description: "Statistics and data analysis using Python.",
        link: "https://www.nmbu.no/emne/dat110"
    },
    {
        title: "DAT200 - Machine learning",
        description: "Introduction to machine learning using Python.",
        link: "https://www.nmbu.no/emne/dat200"
    },
    {
        title: "DAT300 - Applied deep learning",
        description: "This course expands on applied machine learning, covering neural networks, CNNs, RNNs, autoencoders, and GANs, focusing on practical modeling with real datasets and supporting various UN sustainability goals.",
        link: "https://www.nmbu.no/emne/dat300"
    },
    {
        title: "FYS272 - Energy technologies",
        description: "This course covers the fundamental principles of renewable energy production, focusing on technologies like hydropower, wind energy, solar panels, and biofuels, and explores their physical principles and technological implications.",
        link: "https://www.nmbu.no/emne/fys272"
    },
    {
        title: "FYS253 - Thermal physics",
        description: "This course covers fundamental thermodynamic laws, principles of statistical physics, gas mixtures, chemical equilibrium, and the relationship between microscopic and macroscopic properties of matter through lectures and practical exercises.",
        link: "https://www.nmbu.no/emne/fys253"
    },
    {
        title: "FYS241 - Climate physics",
        description: "This course covers nuclear physics and climate physics, including topics like radioactivity, radiation protection, energy production through fission and fusion, climate systems, weather patterns, and environmental impacts.",
        link: "https://www.nmbu.no/emne/fys241"
    },
    {
        title: "FYS230 - Electrical engineering",
        description: "This course provides a foundational understanding of electrical engineering principles, focusing on electromagnetism, AC/DC circuit analysis, electrical machines, transformers, and practical applications in the power sector through theoretical and hands-on lab work.",
        link: "https://www.nmbu.no/emne/fys230"
    },


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

function loadClasses() {
    const classList = document.getElementById('classes-list');
    classes.forEach(class_ => {
        const classCard = document.createElement('div');
        classCard.classList.add('class-card');

        classCard.innerHTML = `
            <h3>${class_.title}</h3
            <p>${class_.description}</p>
            <a href="${class_.link}">Learn More</a>
        `;

        classList.appendChild(classCard);

    });
}

document.addEventListener('DOMContentLoaded', loadProjects);
document.addEventListener('DOMContentLoaded', loadClasses);