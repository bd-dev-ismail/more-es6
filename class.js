//syntatic suger
class Instructor{
    name;
    desgination = 'Web Instructor';
    team = 'web';
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    };
    createQuiz(module){
        console.log(`Create quiz for ${module}`)
    }
};

const milton = new Instructor('milton', 'Dhaka');
console.log(milton);
milton.startSupportSession('9;00');
milton.createQuiz(22);
const rokib = new Instructor('rokib', 'Dhaka');
console.log(rokib);