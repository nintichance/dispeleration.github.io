const takeBreathText = [
"Meditation labyrinth ",
"Dialectical Behavior Therapy (DBT) techniques ",
"TIPP (temperature, intense exercise, paced breathing, progressive muscle relaxation)",
"Emotional Freedom Technique (EFT) aka. tapping",
"Techniques from transformative justice",
"Box breathing (or four-square breathing)",
"Tools of safety/armor that you take with you to keep yourself safe",
"54321 grounding method (name 5 things you can see, 4 things you can feel, 3 things you can hear, 2 things you can smell, 1 thing you can taste)",
"Color naming ground method (find objects around you that are a particular color of your choosing)",
"Other grounding methods here: https://www.counselorkeri.com/2019/04/02/help-kids-manage-worry/",
"Take turns reciting the lines of the poem A Prayer for Justice by Sister Helen Prejean",
"If there is a pet in the room, spend some time with them. Notice as a team what is special and different about them.",
"As a team, close your eyes and listen to Imagine Abolition",
"Writing letters",
"Go outside and spend a moment with nature. "
]

const questsText = [
"A well known community activist is accusing another well known community activist of abusive gate-keeping behavior at the organization that they head.",
"Someone in your neighborhood was mugged at gunpoint. ",
"Two friends in your circle recently broke off their years-long romantic relationship. They’re both saying that they other was abusive and they’re asking the people in your circle of friends to pick sides.",
"You are walking down the street and see someone who you think has overdosed. You don’t have any narcan on you. ",
"Someone who is actively using drugs has repeatedly broken into your apartment building’s basement in order to sleep there. Whenever they do, they often urinate on the floor and steal the belongings of the people who live in the building.",
"Someone drove their car into a ditch. The car is stuck and a mother and child are standing by the car.",
"3 White Security Guards from a nearby large concert are harassing a T-Shirt seller who is a POC.",
"A man known as a rapist in the LBBTQ+ community is a prominent community activist.",
"Several children daily harass a child whose parent was formerly incarcerated",
"A large corporation has been selling a product across the United States that has been determined to cause long term health problems, including an increased risk of cancer. "
]

const inspirationsText = [
"EMTs instead of police -- https://www.nyaprs.org/e-news-bulletins/2020/6/15/nyc-coalition-pushes-for-emtpeer-rather-than-police-crisis-intervention-model",
"Pods of people to respond to crisis -- https://batjc.wordpress.com/resources/pods-and-pod-mapping-worksheet/",
"Historical events of different prison breaks",
"Colton Harris-Moore fled a three-year sentence by walking out of a halfway house in April 2008.",
"Eight inmates charged with violent crimes escaped from the Curry County Adult Detention Center in Clovis, New Mexico on August 24, 2008. The men escaped by climbing prison pipes in a narrow space inside a wall, then using homemade instruments to cut a hole in the roof. ",
"Lance Battreal, Charles Smith, and Mark Booher escaped from a Michigan City, Indiana prison on July 12, 2009 through tunnels under the prison yard.",
"Facilitate a Harm Circle",
"People switch roles over the course of an argument",
"Transformative justice ",
"Reach out to the other prison abolition hackathon groups!",
"Replace police presence at Food Pantries with trained residents -- same as crossing guards. Many cities train / pay school crossing guards, the same could be done for police details like at Food Pantries where their presence scares the people who need food.",
"It seems people become invisible when they are sent to prison. Let’s give space as a community to remember and uplift them. Reflect back to them that they matter, they’re human and they’re here.",
"Start a harm circle to work with neighbors to determine how to address harm done by a member of your community and how to work through it"
]

const takensText = [
"Space away from the place where harm was done",
"The idea of prison itself as a deterrent to crime. ",
"Time away where it’s possible to focus on healing (this would be the ideal, not the reality)",
"Mental and physical healthcare (again, more of an ideal than the reality)",
"“Life” rehabilitation (ideal not reality atm)",
"“Paying debt back to society” after realizing harm caused to community",
"Access to education/training",
"Access to jobs",
"What is a warden’s house?",
"As of 2016, 2.3 million people were incarcerated in the United States, at a rate of 698 people per 100,000",
"Prison Policy (how to build a prison)",
"Prisons being built",
"Land",
"Farm Labor",
"Firefighting Labor",
"Jail and other local corrections costs had risen sixfold since 1977, with jail costs reaching $25 billion.",
"the American criminal justice system holds almost 2.3 million people in 1,833 state prisons, 110 federal prisons, 1,772 juvenile correctional facilities, 3,134 local jails, 218 immigration detention facilities, and 80 Indian Country jails",
"Prison industries for production of goods for external sale",
"The skills of the people who are imprisoned (welding, art, agriculture, cooking, medicine, etc.)",
"Architecture of a building that can house many people at once",
"Efficient ways of feeding many people at once",
"Research: Policing - what resources go into policing that can be moved to community based visions?",
"Huuuuuuuge chunks of local and federal budgets",
"De-escalation (ideal, not reality)",
"Resource referrals (ideal, not reality)",
"Knowledge of how to intervene in a mental health crisis (ideal, not reality)",
"Neighborhood-level context of what’s happening and how to stay safe (is the latest batch of dope a bad batch? Which dealers aren’t to be trusted bc they are laced w fentanyl? Has someone been shooting out of their car lately--what does the car look like?)",
"Protection for sexworkers (ideal, not reality)",
"Protection for people walking home alone at night, esp feminine/femme/afab/trans people (ideal, not reality)",
"First responder first aid (administration of narcan, etc.)",
"Transportation to get people where they need to go (hospital, shelter, home)",
"Police Training - what does the alternative look like? ",
"Jobs for people who don’t have a college degree // How do we help people whose livelihoods depend on the police state transition?",
"Replace police details with citizens paid to do the work by the town/city",
"Marshalling at protests/parades; not policing - recent news: https://www.cnn.com/2021/05/16/us/pride-parade-nypd-ban-trnd/index.html",
"Voting locations - no police, they intimidate voters; community citizens like Frontline workers handing out water, checking in etc -- https://www.mobilize.us/thefrontline/event/321224/",
"Big problem of police presence in communities they don’t even live in",
]

// const takeBreath = shuffleSort(takeBreathText)
// const takens = shuffleSort(takensText)
// const quests = shuffleSort(questsText)
// const inspirations = shuffleSort(inspirationsText)
//query DOM
// const message = document.getElementById('message')
// const handle = document.getElementById('handle')
const img1 = document.getElementsByTagName('img')[0]
const img2 = document.getElementsByTagName('img')[1]
const img3 = document.getElementsByTagName('img')[2]
const img4 = document.getElementsByTagName('img')[3]

// const output = document.getElementById('output')
// const feedback = document.getElementById('feedback')

//emit events
img1.addEventListener('click', () => {
    const arr = shuffleSort(takeBreathText)
    const randomNum = generateRandomIndex(arr.length)
    var node = document.createElement("h1");  
    var textnode = document.createTextNode(arr[randomNum]);    
    node.appendChild(textnode);        
    document.getElementById("cardFronts").appendChild(node);
    
})
img2.addEventListener('click', () => {
const arr = shuffleSort(questsText)
    const randomNum = generateRandomIndex(arr.length)
    var node = document.createElement("h1");  
    var textnode = document.createTextNode(arr[randomNum]);    
    node.appendChild(textnode);        
    document.getElementById("cardFronts").appendChild(node);
})
img3.addEventListener('click', () => {
const arr = shuffleSort(takensText)
    const randomNum = generateRandomIndex(arr.length)
    var node = document.createElement("h1");  
    var textnode = document.createTextNode(arr[randomNum]);    
    node.appendChild(textnode);        
    document.getElementById("cardFronts").appendChild(node);
})
img4.addEventListener('click', () => {
   const arr = shuffleSort(inspirationsText)
    const randomNum = generateRandomIndex(arr.length)
    var node = document.createElement("h1");  
    var textnode = document.createTextNode(arr[randomNum]);    
    node.appendChild(textnode);        
    document.getElementById("cardFronts").appendChild(node);
})


//Fisher-Yates Algorithm
const shuffleSort = (arr) => {
  let newPos,
      temp
  for (let i = arr.length - 1; i > 0; i--){
    //each time, the random nunber to exchange with will decrement
    newPos = Math.floor(Math.random()*(i+1))
    temp = arr[i]
    arr[i] = arr[newPos] 
    arr[newPos] = temp
  }
  return arr
}

const generateRandomIndex = (length) => {
    const random = Math.floor(Math.random()*(length+1))
    return random
}

