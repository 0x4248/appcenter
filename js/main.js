/* AppCenter
 * A site to show my projects
 * Github: https://www.github.com/0x4248/AppCenter
 * Licence: GNU General Public License v3.0
 * By: 0x4248
 */

function createProjectCard(project, metaData) {
    return `
    <div class="card">
        <div class="card-icon-title-flex">
            <img src="https://raw.githubusercontent.com/0x4248/Icons/main/icons/${project}.png" alt="${project}" class="card-icon">
            <h2>${project}</h2>
        </div>
        <p class="type">${metaData.Type}</p>
        <p>${metaData.Description}</p>
        <button onclick="window.location.href = 'https://www.github.com/0x4248/${project}'"><i class="bi bi-github"></i> Github</button>
        <button onclick="window.location.href = 'https://www.github.com/0x4248/${project}/blob/main/README.md'"><i class="bi bi-file-earmark-text"></i> README.md</button>
        <button onclick="window.location.href = 'https://www.github.com/0x4248/${project}/releases'"><i class="bi bi-box-arrow-up-right"></i> Releases</button>
    </div>
    `;
}


function createProjectSection(language, projects, metaData) {
    return `
    <div class="main">
        <h1 style="text-align: center;">${language}</h1>
        <div class="card-container" id="${language}">
            ${projects.map(project => createProjectCard(project, metaData[project])).join('')}
        </div>
    </div>
    `;
}

function appendProjects(projectsData) {
    const mainElement = document.querySelector('.main');

    for (const [language, projects] of Object.entries(projectsData.Projects)) {
        mainElement.innerHTML += createProjectSection(language, projects, projectsData.Meta);
    }
}

function loadProjectsData(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'projects.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
    loadProjectsData(function(data) {
        appendProjects(data);
    });
});
