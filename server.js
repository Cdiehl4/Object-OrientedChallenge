const inquirer = require ('inquirer');

inquirer.prompt([
    {
        type:"input",
        name:"text",
        message:"what do you want your logo to say"
    },
    {
        type:"input",
        name:"textColor",
        message:"What color of text do you want"
    },
    {
        type:"list",
        name:"shape",
        message:"choose a shape",
        choices:["triangles","circles","squares"]
    }
])
.then(function(data){
console.log(data)
})