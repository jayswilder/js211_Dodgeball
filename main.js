// ======================== CODE PLAN ========================

// Make a class for a player that can use the information from the arrayOfPeople.
// Make a class that extends the player class for red team & blue team, and assign them a mascot / team color.

// Create an area to show all registered players, with a button that allows them to pick the team they want to be on.
// When the button for "pick a team" is clicked assign them to either the red team or blue team and assign them the appropriate mascot and team color.

// Create a form to allow new people to be added to the list of players.

// Add a GUI to the DOM to show all information and teams.


// ************************** NOTE ************************** 
// When I tried to install 'npm i' I kept getting an error code and I couldn't figure it out.
// Unfortunately I couldn't do unit testing because of this.
// If you know how to correct this so that I can practice unit testing I would greatly appreciate it.
// I understand I will still lose points, but I struggle with unit testing and could use some practice / help.
// Thank You.
// I did, however, console.log the new players and stuff as a work around to show they have all the appropriate parameters.
// ========================== ERROR ========================== 
// ===========================================================

//PS C:\Users\Jay\Desktop\ACA\jsDevFolder\js211_Dodgeball> npm i
// npm WARN saveError ENOENT: no such file or directory, open 'C:\Users\Jay\Desktop\ACA\jsDevFolder\js211_Dodgeball\package.json'
// npm WARN enoent ENOENT: no such file or directory, open 'C:\Users\Jay\Desktop\ACA\jsDevFolder\js211_Dodgeball\package.json'
// npm WARN js211_Dodgeball No description
// npm WARN js211_Dodgeball No repository field.
// npm WARN js211_Dodgeball No README data
// npm WARN js211_Dodgeball No license field.

// up to date in 0.472s
// found 0 vulnerabilities

// ========================== ERROR ==========================
// ===========================================================

// **********************************************************

// ======================== CODE PLAN ========================



const arrOfPeople = [
    {
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska",
        canThrowBall: true,
        canDodgeBall: false,
        hasPaid: true,
        isHealthy: true,
        yearsExperience: 3
    },
    {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky",
        canThrowBall: true,
        canDodgeBall: false,
        hasPaid: true,
        isHealthy: true,
        yearsExperience: 3
    },
    {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas",
        canThrowBall: true,
        canDodgeBall: false,
        hasPaid: true,
        isHealthy: true,
        yearsExperience: 3
    },
    {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York",
        canThrowBall: true,
        canDodgeBall: false,
        hasPaid: true,
        isHealthy: true,
        yearsExperience: 3
    },
    {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia",
        canThrowBall: true,
        canDodgeBall: false,
        hasPaid: true,
        isHealthy: true,
        yearsExperience: 3
    },
    {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California",
        canThrowBall: true,
        canDodgeBall: false,
        hasPaid: true,
        isHealthy: true,
        yearsExperience: 3
    },
    {
        id: 8,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana",
        canThrowBall: true,
        canDodgeBall: false,
        hasPaid: true,
        isHealthy: true,
        yearsExperience: 3
    },
]

let blue = document.getElementById('blue');
let red = document.getElementById('red');

const listOfPlayers = []
const blueTeam = []
const redTeam = []

// template for creating new players

class Player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canDodgeBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
}

// template for putting a person onto the blue team and giving them a mascot and team color

class blueTeammate extends Player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor) {
        super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
        this.mascot = mascot;
        this.teamColor = teamColor;
    }
}

// template for putting a person onto the red team and giving them a mascot and team color

class redTeammate extends Player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor) {
        super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
        this.mascot = mascot;
        this.teamColor = teamColor;
    }
}

// function to move person from list of players to the blue team

const createBlueTeammate = (id) => {
    const listElement = document.getElementById('blue')
    const li = document.createElement("li")
    console.log(id)

    listOfPlayers.find(person => {
        // check to see if the id (list element) that is clicked is the same as the person's id
        if (id == person.id) {
            // create a new blue teammate and assign their attributes
            const newBlueTeammate = new blueTeammate(person.id, person.name, person.age, person.skillSet, person.placeBorn, person.canThrowBall, person.canDodgeBall, person.hasPaid, person.isHealthy, person.yearsExperience, "Leviathan", 'blue')
            // push the new blue teammate to the blueTeam array
            blueTeam.push(newBlueTeammate)
            console.log(blueTeam)
            // create a new li element to the dom for the blue team
            const li = document.createElement("li")

            li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
            listElement.append(li)
        }
    })

    console.log("Person added to blue team")
}

// function to move person from list of players to the red team 
const createRedTeammate = (id) => {

    const listElement = document.getElementById('red')
    const li = document.createElement("li")
    console.log(id)

    listOfPlayers.find(person => {
        // check to see if the 'id'(list element) that is clicked is the same as the person's id
        if (id == person.id) {
            // push the new red teammate to the redTeam array
            const newRedTeammate = new redTeammate(person.id, person.name, person.age, person.skillSet, person.placeBorn, person.canThrowBall, person.canDodgeBall, person.hasPaid, person.isHealthy, person.yearsExperience, "Red Devil", 'red')
            // push the new red teammate to the redTeam array            
            redTeam.push(newRedTeammate)
            console.log(redTeam)
            // create a new li element to the dom for the red team            
            const li = document.createElement("li")

            li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
            listElement.append(li)
        }
    })

    console.log("Person added to red team")
}


// function to populate people on the dom from the arrOfPeople
const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    listElement.innerHTML = ''
    arrOfPeople.map(person => {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener('click', function () {
            makePlayer(person.id)
            listElement.removeChild(li)
        })
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
    })
}

const makePlayer = (id) => {

    const listElement = document.getElementById('players')
    console.log(arrOfPeople)
    arrOfPeople.find(person => {

        if (id == person.id) {
            listOfPlayers.push(person)
            console.log(listOfPlayers)
            const li = document.createElement("li")

            li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
            listElement.append(li)

            const buttonBlue = document.createElement("button")
            buttonBlue.addEventListener('click', function () {
                createBlueTeammate(person.id)
                listElement.removeChild(li)
            })

            buttonBlue.innerHTML = "Blue Team"
            li.appendChild(buttonBlue)

            const buttonRed = document.createElement("button")

            buttonRed.addEventListener('click', function () {
                createRedTeammate(person.id)
                listElement.removeChild(li)
            })

            buttonRed.innerHTML = "Red Team"
            li.appendChild(buttonRed)

        }
    })
    console.log(`li ${id} was clicked!`)
}
// id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience
const createNewPerson = () => {
    const personId = arrOfPeople.length + 2
    const personName = document.getElementById('personName').value
    const personAge = document.getElementById('personAge').value
    const personSkillSet = document.getElementById('skillSet').value
    const personPlaceBorn = document.getElementById('placeBorn').value
    const personThrow = document.getElementById('throw').value
    const personDodge = document.getElementById('dodge').value
    const personPayment = document.getElementById('payment').value
    const personHealthy = document.getElementById('healthy').value
    const personExperience = document.getElementById('experience').value

    if (personId == '' || personName == '' || personAge == '' || personSkillSet == '' || personPlaceBorn == '' || personExperience == '') {
        alert('Please enter your information for registry.')
    } else {
        const newPerson = new Player(personId, personName, personAge, personSkillSet, personPlaceBorn, personThrow, personDodge, personPayment, personHealthy, personExperience)
        arrOfPeople.push(newPerson)
        console.log(arrOfPeople)
        document.getElementById('personName').value = ''
        document.getElementById('personAge').value = ''
        document.getElementById('skillSet').value = ''
        document.getElementById('placeBorn').value = ''
        document.getElementById('experience').value = ''
    }
}