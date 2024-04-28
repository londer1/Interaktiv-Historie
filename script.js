const storyBox = document.getElementById('story-box');
const optionsBox = document.getElementById('options');

const story = [
    { text: "You are controlling a person named Lars.", image: "", options: ["Continue"] },
    { text: "Lars woke up nervous, feeling a mix of excitement and fear for the first day of school. Should he try to make new friends or stick with his old ones? The decision weighed heavily on him as he stood in front of the mirror, uncertain of which path to choose.", image: ["images/lars-bed.png", "images/lars-mirror.png"], options: ["Make new friends", "Stick with old friends"] },
    { text: "Lars decides to make new friends, feeling excited about the opportunity to meet new people and explore new interests. He strikes up conversations with classmates during breaks and ends up joining a group interested in urban exploration and adventure.", image: ["images/lars-newfriends.png"], options: ["Continue"] },
    { text: "Lars chooses to stick with his old friends, feeling more comfortable with familiar faces. They spend the day catching up and reminiscing about past adventures, but Lars can't shake the feeling that something is missing.", image: "images/lars-friends.png", options: ["Continue"] },
    { text: "Regardless of Lars's choice, he encounters Sara, a good friend from high school. They catch up and share their excitement about the new school year. He gets to talk to new people because they came up to him.", image: "images/lars-sara.png", options: ["Continue"] },
    { text: "Peer Pressure\nLars's new friends suggest trying out some joints after school, eager to include him in their activities. Lars feels torn between the desire to fit in and the instinct to stay true to himself. As he hesitates, he notices the expectant looks on his friends' faces, feeling the weight of their expectations pressing down on him.", image: "images/lars-sara-newfriends.png", options: ["Say yes to trying joints after school", "Try to say no in a polite way"] },
    { text: "Feeling a mix of curiosity and peer pressure, Lars decides to join the group and try the joints. He rationalizes it as a one-time thing, eager to fit in with his new friends.", image: "image7.jpg", options: ["Continue"] },
    { text: "Lars declines the offer to try the joints, feeling uncomfortable with the idea of experimenting with drugs. He suggests doing something else instead, like grabbing a snack or exploring the city. The faces of the new faces drop and look disappointed.", image: "image8.jpg", options: ["Continue"] },
    { text: "The school day is almost done, and Lars's new friends come up again and ask, 'So you come after school?'", image: "", options: ["Continue experimenting with drugs", "Avoid drugs and focus on other activities"] },
    { text: "After trying the joints, Lars finds himself enjoying the sensation and decides to continue experimenting with drugs. He becomes more involved with his new friends and their drug-related activities.", image: "image9.jpg", options: ["Continue"] },
    { text: "By avoiding drugs, Lars focuses on other activities like sports, music, or academic pursuits. He maintains a distance from the group experimenting with drugs, feeling uneasy about their lifestyle choices.", image: "image10.jpg", options: ["Continue"] }
];

let storyIndex = 0;

function displayStory() {
    const currentScene = story[storyIndex];

    let storyContent = '';
    if (currentScene.image) {
        if (Array.isArray(currentScene.image)) {
            currentScene.image.forEach(img => {
                storyContent += `<img src="${img}" alt="Scene Image" class="scene-image">`;
            });
        } else {
            storyContent += `<img src="${currentScene.image}" alt="Scene Image" class="scene-image">`;
        }
    }

    storyContent += `<p class="scene-text">${currentScene.text}</p>`;
    storyBox.innerHTML = storyContent;

    optionsBox.innerHTML = '';

    currentScene.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            handleOption(option);
        });
        optionsBox.appendChild(button);
    });
}

function handleOption(option) {
    if (storyIndex === 1 && option === 'Make new friends') {
        storyIndex = 2; // Go to the scene where Lars decides to make new friends
    } else if (storyIndex === 2 && option === 'Continue') {
        storyIndex = 4; // After making new friends, go directly to the scene where Lars encounters Sara
    } else if (storyIndex === 4 && option === 'Continue') {
        storyIndex = 5; // After meeting Sara, proceed to the scene of peer pressure
    } else if (storyIndex === 1 && option === 'Stick with old friends') {
        storyIndex = 3; // Go to the scene where Lars decides to stick with old friends
    } else if (option === 'Say yes to trying joints after school') {
        storyIndex = 6; // Go to the scene where Lars decides to join the group and try the joints
    } else if (option === 'Try to say no in a polite way') {
        storyIndex = 7; // Go to the scene where Lars declines the offer to try the joints politely
    } else if (storyIndex === 8 && option === 'Continue experimenting with drugs') {
        storyIndex = 9; // Go to the scene where Lars decides to continue experimenting with drugs
    } else if (storyIndex === 8 && option === 'Avoid drugs and focus on other activities') {
        storyIndex = 10; // Go to the scene where Lars avoids drugs and focuses on other activities
    } else {
        storyIndex++;
    }

    displayStory();
}

displayStory();
