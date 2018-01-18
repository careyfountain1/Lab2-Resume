var name = "carey";
var newName = name.toUpperCase();
console.log("Name: " + newName);

var career = "Pooper Scooper";
console.log("Career: " + career);

var description = "I'm not crazy!"
console.log("Description: " + description);

function displayPosition(Parameters) {
console.log("* " + Parameters);
}

function displaySkills(skills, isCool) {
    if (isCool === true) {
    console.log("Check It: " + skills);
    } else {
    console.log("* " + skills);
    }
}

    //Interests
    console.log("My Interests: ");
    displayPosition("Nerf Guns");
    displayPosition("Booger Picking");
    displayPosition("Eggs");
    displayPosition("Porty Potties");
    //Previous Experience
    console.log("My Previous Experience: ");
    displayPosition("Fry Cook, Window Washer, Cafeteria Lady, Neuroscientist, and Arabic Translator");
    console.log("- Tutored students in those areas.");
    displayPosition("Undergraduate Teaching Assistant at University of Georgia");
    console.log("- Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.");
    displayPosition("Lead Programmer for iBeacon Experiment at Georgia Museum of Art");
    console.log("- Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.");
    console.log("My Skills: ");

    displaySkills("rubiks cube solver", true);
    displaySkills("french", false);
    displaySkills("camel back fisher", false);
    displaySkills("knuckle cracker", true);

