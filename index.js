const fs = require('fs')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the project title",
            name: "title",
        },
        {
            type: "input",
            message: "Provide description of project",
            name: "description",
        },
        {
            type: "input",
            message: "Provides installation instructions",
            name: "installation",
        },
        {
            type: "input",
            message: "Provide usage information",
            name: "usage",
        },
        {
            type: "input",
            message: "Add Contribution of project",
            name: "contributing",
        },
        {
            type: "input",
            message: "Provide test instructions",
            name: "test",
        },
        {
            type: "list",
            message: "Select license for your project",
            choices: ['Apache 2.0 License', 'IBM Public License Version 1.0', 'Mozilla Public License 2.0', 'The MIT License',],
            name: "license",
        },
        {
            type: "input",
            message: "Provide Github",
            name: "github",
        },
        {
            type: "input",
            message: "Provide email",
            name: "email",
        },
    ])
    .then((response) => {
        readme = 
        `# ${response.title}\n ${generateLicense(response.license)}\n\n## Description\n${response.description}\n## Table of Contents\n\n * [Description](#description)\n\n * [Installation](#installation)\n\n * [Usage](#usage)\n\n * [Questions](#questions)\n\n * [License](#license)\n\n## Installation\n${response.installation}\n\n## Usage\n${response.usage}\n\n## License\nThe application is covered by ${response.license}\n\n## Contributing\n${response.contributing}\n\n## Test\n${response.test}\n\n## Questions\n[Github](https://github.com/${response.github})\n<br>[Email](mailto:${response.email})
        `
        fs.writeFile(__dirname+'/output/sampleREADME.md', readme, (err) => {
            err ? console.error(err) : console.log('README created!:)');
        });
        
    });

function generateLicense(license) {
    if (license === "The MIT License"){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }else if (license === "Apache 2.0 License"){
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }else if (license === "IBM Public License Version 1.0"){
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }else if (license === "Mozilla Public License 2.0"){
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`}
    }