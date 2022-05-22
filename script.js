// Gets random number between 0 and what will be the length of each property
const getRandomNum = (num) => {
    return Math.floor(Math.random() * num)
};

// Object containing message options
const messageOptions = {
    accuracy: ['25%', '50%', '75%', '100%'],
    player: ['LeBron James', 'Nikola Jokic', 'Steph Curry', 'Jordan Poole', 'Jayson Tatum'],
    award: ['MVP', 'Most Improved Player of the year', '6th Man of the year', 'bum of the year']
};

// Final message will be pushed into this variable
let finalMessage = [];

// Iterate over the object
for (let prop in messageOptions) {
    let optionIndex = getRandomNum(messageOptions[prop].length);

    switch(prop) {
        case 'accuracy':
            finalMessage.push(`I am ${messageOptions[prop][optionIndex]} confident `)
            break
        case 'player':
            finalMessage.push(`${messageOptions[prop][optionIndex]} will win `)
            break
        case 'award':
            finalMessage.push(`the ${messageOptions[prop][optionIndex]} award!`)
            break
        default:
            finalMessage.push('Something went wrong.')
    }
}

console.log(finalMessage)