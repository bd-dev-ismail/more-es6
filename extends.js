class teamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log("${this.name} thank you for your feedback");
    }

}


//syntatic suger
class Instructor extends teamMember {
  desgination = "Web Instructor";
  team = "web";
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`Start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`Create quiz for ${module}`);
  }
  
};
class Developer extends teamMember{
  desgination = "Web Instructor";
  team = "web";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  developFeature(features){
    console.log(`Please develop the feature ${features}`);
  }
  release(version){
    console.log(`Please realse the web version ${version}`);
  }
  
};
class jobPlacement extends teamMember {
  
  desgination = "Job Placement Commandos!";
  team = "Job placement";
  region
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  provideReasume(features){
    console.log(`Please develop the feature ${features}`);
  }
  prepareStudent(version){
    console.log(`Please realse the web version ${version}`);
  }
};
const alia = new Developer('Alia', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();
const salman = new jobPlacement('Salman', 'Chittagong','Indian job');
console.log(salman);