class Instructor{
    name; 
    designation = "Web course Instructor"
    team = "Web Team"
    location;
    startSupportSession()
    {
        console.log(`Start the support session at ${time}`)
    }
    createQuize(module){
        console.log(`Please create quiz for module ${module}`)
    }
}

const aamir = new Instructor();
console.log(aamir);

aamir.startSupportSession(9.10);