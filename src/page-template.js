// create the team
const createTeam = (team) => {
    // create the manager html
    const createManager = (manager) => {
      return `
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card-header text-light bg-primary">
              <h2>${manager.getName()}</h2>
              <h3><i class="fas fa-coffee mr-2"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.getofficeNumber()}</li>
              </ul>
          </div>
        </div>
          `;
    };
  
    // create the html for engineers
    const createEngineer = (engineer) => {
      return `
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card-header text-light bg-primary">
              <h2>${engineer.getName()}</h2>
              <h3><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${engineer.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
              </ul>
          </div>
        </div>
          `;
    };
  
    // create the html for interns
    const createIntern = (intern) => {
      return `
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card-header text-light bg-primary">
               <h2>${intern.getName()}</h2>
               <h3><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${intern.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item">School: ${intern.getSchool()}</li>
              </ul>
         </div>
        </div>
          `;
    };
    
    const html = [];
    
    team.map((employee) => {
        let job = employee.getRole() 
        if (job === 'Manager') {
            html.push(createManager(employee))
        } else if (job === 'Engineer') {
            html.push(createEngineer(employee))
        } else {
            html.push(createIntern(employee))
        }
    })

    return html.join("");
  };
  
  // render HTML page
  module.exports = (team) => {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css" />
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>

      <body>
        <div class="container-fluid">
            <div class="row bg-danger text-center">
                <h1 class="text-light">My Team</h1>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex p-5 justify-content-between">
                    ${createTeam(team)}
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
      </body>
    </html>
      `;
  };