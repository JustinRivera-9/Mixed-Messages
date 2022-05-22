// Gets random number between 0 and what will be the length of each property
const getRandomNum = (num) => {
    return Math.floor(Math.random() * num)
};

// Object containing message options
let messagesOptions {
    accuracy: ['25%', '50%', '75%', '100%'],
    player: ['LeBron James', 'Nikola Jokic', 'Steph Curry', 'Jordan Poole', 'Jayson Tatum'],
    award: ['MVP', 'Most Improved Player of the year', '6th Man of the year', 'bum of the year']
};

//Final message will be pushed into this variable
let finalMessage = [];