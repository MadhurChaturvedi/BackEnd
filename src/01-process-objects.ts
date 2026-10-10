
// env varables
// command line arguments
// exit code 
// process life cycle events


// read backend port from env file
// read screates  - db urls, apis keys, password , google auth secret 
// process.env

import process from "node:process";
// dotenv 
const nodeEnv = process.env.NODE_ENV ?? "developemnt"

const PORT = Number(process.env.PORT ?? 3000)
const command = process.argv[2] ?? "start";
const shoudFail = process.argv.includes("--fail")
const shoudCrash = process.argv.includes("--crash")

process.on("exit",(code)=>{
    console.log(`Process Finished with exit code ${code}`)
})

function runApp():void {
    console.log({
        command
    });

    if(shoudFail){
        console.error("Maual failure treggered with --fail flag")
    }

    if(shoudCrash){
        console.error("Maual crash treggered with --crash flag")
    }

}

runApp();