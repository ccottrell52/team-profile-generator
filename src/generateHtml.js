const createdTeam = (theTeam) => {
    const genTeam = [];

    const renderIntern = intern => {
        let internSection = `<section class="w-25 mx-2 shadow-lg mb-5 bg-body rounded1">
        <header class="m-0 bg-primary text-white">
            <h1 class="py-2 mx-4">${intern.name}</h1>
            <h3 class="my-0 mx-4 pb-3">Intern</h2>
        </header>
        <main class="bg-light bg-gradient">
            <ul class="p-3">
                <li class="list-unstyled my-4">ID: ${intern.id}</li>
                <li class="list-unstyled my-4">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-unstyled my-4">School: ${intern.school}</li>
            </ul>
        </main>
    </section>`;
        genTeam.push(internSection);
    }

    const renderEngineer = engineer => {
        let engineerSection = `<section class="w-25 mx-2 shadow-lg mb-5 bg-body rounded1">
        <header class="m-0 bg-primary text-white">
            <h1 class="py-2 mx-4">${engineer.name}</h1>
            <h3 class="my-0 mx-4 pb-3">Engineer</h2>
        </header>
        <main class="bg-light bg-gradient">
            <ul class="p-3">
                <li class="list-unstyled my-4">ID: ${engineer.id}</li>
                <li class="list-unstyled my-4">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-unstyled my-4">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </main>
    </section>`;
        genTeam.push(engineerSection);
    }

    const renderManager = manager => {
        let managerSection = `<section class="w-25 mx-2 shadow-lg mb-5 bg-body rounded1">
        <header class="m-0 bg-primary text-white">
            <h1 class="py-2 mx-4">${manager.name}</h1>
            <h3 class="my-0 mx-4 pb-3">Manager</h2>
        </header>
        <main class="bg-light bg-gradient">
            <ul class="p-3">
                <li class="list-unstyled my-4">ID: ${manager.id}</li>
                <li class="list-unstyled my-4">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-unstyled my-4">Office Number: <a href="tel:${manager.officeNumber}">${manager.officeNumber}</a></li>
            </ul>
        </main>
    </section>`;
        genTeam.push(managerSection);
    }

    for (employee of theTeam) {
        if (employee.getRole() === 'Intern') {
            renderIntern(employee)
        }
        if (employee.getRole() === 'Engineer') {
            renderEngineer(employee)
        }
        if (employee.getRole() === 'Manager') {
            renderManager(employee)
        }
    }

    return genTeam.join('')
}

function generateHTML(yourTeam) {
return `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Your Team</title>
</head>
<body>
    <nav class="text-center bg-danger mb-5">
        <h1 class="p-5 text-white">My Team</h1>
    </nav>
    <main class="d-flex justify-content-center flex-wrap">
        ${createdTeam(yourTeam)}
    </main>
</body>
</html>`
}


module.exports = generateHTML