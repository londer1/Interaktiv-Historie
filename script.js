const storyBox = document.getElementById('story-box');
const optionsBox = document.getElementById('options');

const story = [
    // StoryIndex 0
    { text: "You are controlling a person named Lars.", image: "", options: ["Continue"] },
    // StoryIndex 1
    { text: "Lars woke up nervous, feeling a mix of excitement and fear for the first day of school. Should he try to make new friends or stick with his old ones? The decision weighed heavily on him as he stood in front of the mirror, uncertain of which path to choose.", image: ["images/lars-bed.png", "images/lars-mirror.png"], options: ["Make new friends", "Stick with old friends"] },
    // StoryIndex 2
    { text: "Lars decides to make new friends, feeling excited about the opportunity to meet new people and explore new interests. He strikes up conversations with classmates during breaks and ends up joining a group interested in urban exploration and adventure.", image: ["images/lars-newfriends.png"], options: ["Continue"] },
    // StoryIndex 3
    { text: "Lars chooses to stick with his old friends, feeling more comfortable with familiar faces. They spend the day catching up and reminiscing about past adventures, but Lars can't shake the feeling that something is missing.", image: "images/lars-friends.png", options: ["Continue"] },
    // StoryIndex 4
    { text: "Regardless of Lars's choice, he encounters Sara, a good friend from high school. They catch up and share their excitement about the new school year. He gets to talk to new people because they came up to him.", image: "images/lars-sara.png", options: ["Continue"] },
    // StoryIndex 5
    { text: "Peer Pressure\nLars's new friends suggest trying out some joints after school, eager to include him in their activities. Lars feels torn between the desire to fit in and the instinct to stay true to himself. As he hesitates, he notices the expectant looks on his friends' faces, feeling the weight of their expectations pressing down on him.", image: "images/lars-sara-newfriends.png", options: ["Say yes to trying joints after school", "Try to say no in a polite way"] },
    // StoryIndex 6
    { text: "The school day is almost done, and Lars's new friends come up again and ask, 'So you come after school?'", image: "images/lars-do-you-come.png", options: ["Continue experimenting with drugs", "Avoid drugs and focus on other activities"] },
    // StoryIndex 7
    { text: "Feeling a mix of curiosity and peer pressure, Lars decides to join the group and try the joints. He rationalizes it as a one-time thing, eager to fit in with his new friends.", image: "image7.jpg", options: ["Continue"] },
    // StoryIndex 8
    { text: "Lars declines the offer to try the joints, feeling uncomfortable with the idea of experimenting with drugs. He suggests doing something else instead, like grabbing a snack or exploring the city. The faces of the new faces drop and look disappointed.", image: "image8.jpg", options: ["Continue"] },
    // StoryIndex 9
    { text: "After trying the joints, Lars finds himself enjoying the sensation and decides to continue experimenting with drugs. He becomes more involved with his new friends and their drug-related activities.", image: "images/lars-smoke.png", options: ["Continue"] },
    // StoryIndex 10
    { text: "By avoiding drugs, Lars focuses on other activities like sports, music, or academic pursuits. He maintains a distance from the group experimenting with drugs, feeling uneasy about their lifestyle choices.", image: "image10.jpg", options: ["Continue"] },
    // StoryIndex 11
    { text: "As Lars's drug use escalates, Sara expresses concern for his well-being. She encourages him to seek help and offers her support.", image: "images/sara-help.png", options: ["Accept Sara's help", "Reject Sara's help"] },
    // StoryIndex 12
    { text: "Recognizing the impact of his choices, Lars accepts Sara's help and decides to overcome his addiction. He opens up to her about his struggles and together, they embark on a journey towards recovery. Their bond deepens, and they confess their feelings for each other, realizing their love was mutual all along. Lars embraces a brighter future with Sara by his side.", image: "image12.jpg", options: ["Continue"] },
    // StoryIndex 13
    { text: "Feeling defensive and ashamed, Lars rejects Sara's help, believing he can handle his addiction on his own. He distances himself from Sara and sinks deeper into addiction, isolating himself from friends and family. Their friendship deteriorates, and Lars's life descends into darkness. Tragedy strikes when Lars's drug use leads to irreversible consequences, leaving Sara devastated.", image: "image13.jpg", options: ["Continue"] },
    // StoryIndex 14
    { text: "The End", image: "", options: ["Restart"] },
    // SceneIndex 15
    { text: "Lars firmly declines the offer to try the joints once again, feeling uneasy about experimenting with drugs. He suggests doing something else instead, hoping to steer the conversation in a different direction. The disappointment on his new friends' faces is palpable.", image: "images/lars-decline.png", options: ["Continue"] },
    // SceneIndex 16
    { text: "Lars comes home, and sees a 52-year-old, 6-foot-2 tall man. He approaches Lars and grabs him.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 17
    { text: "In the dimly lit foyer of his home, Lars froze as a towering figure emerged from the shadows. Before he could react, the stranger seized him with frightening strength. Despite his desperate struggles, Lars was overpowered, his cries drowned out by the rush of adrenaline. In that moment, his sanctuary became a nightmare, the darkness swallowing him whole. The man takes him in a van and drives away. The man takes him in a dark basement tied down on a chair.", image: "images/lars-abducted.png", options: ["Continue"] },
    // SceneIndex 18
    { text: "The man goes to the toilet, Lars is stuck, Lars sees a Glock pistol aside from him. Should he take the chance and try to get loose to get the gun, or not?", image: "images/lars-tied.png", options: ["Gun", "Rope", "Wait"] },
    // SceneIndex 19
    { text: "The man comes out and its a grad reveal that it is his dad.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 20
    { text: "Lars and his dad lives happily ever after and Sara and Lars become a couple.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 21
    { text: "Lars gets the ropes lose, and ties them down so he can easily get lose later.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 22
    { text: "Lars knows a little bit about guns, so he quickly checks if it is loaded. Lars finds out that the gun is empty and have no bullets.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 23
    { text: "Should he look for bullets, take the risk to leave, or go back and wait?", image: "images/lars-home.png", options: ["Look for bullets", "Try to escape using the door", "Go back and wait"] },
    // SceneIndex 24
    { text: "Lars takes the risk and runs out the door. The man comes out of the toilet and screams “Stop!” Lars runs anywas, he does not take that risk.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 25
    { text: "Lars moves away and never gets to see his father again and will most likely never know that was his father trying to do a grand reveal that it is his father.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 26
    { text: "Lars finds a mag in a drawer. Lars has become a little mentally ill, so he gets the thought, should he wait for the man and shoot or just shoot himself?", image: "images/lars-home.png", options: ["Obviously shoot the man", "Shoot yourself (kys)"] },
    // SceneIndex 27
    { text: "Lars chooses to shot himself (he fucking dies so yeah, story over)", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 28
    { text: "Lars gets ready, and when the man comes out, Lars points the gun against him. The man tries to de-escalate the situation but Lars dont believe it and shoots him 2 times in the head.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 29
    { text: "Lars later finds out that the man was his dad, and that he was doing a grand reveal, so Lars shoots himself.", image: "images/lars-home.png", options: ["Continue"] },

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
    if (storyIndex === 0 && option === 'Continue') {
        storyIndex = 1;
    } else if (storyIndex === 1 && option === 'Make new friends') {
        storyIndex = 2;
    } else if (storyIndex === 2 && option === 'Continue') {
        storyIndex = 4;
    } else if (storyIndex === 3 && option === 'Continue') {
        storyIndex = 4;
    } else if (storyIndex === 4 && option === 'Continue') {
        storyIndex = 5;
    } else if (storyIndex === 1 && option === 'Stick with old friends') {
        storyIndex = 3;
    } else if (storyIndex === 5 && option === "Say yes to trying joints after school") {
        storyIndex = 7;
    } else if (storyIndex === 7 && option === 'Continue') {
        storyIndex = 6;
    } else if (storyIndex === 5 && option === "Try to say no in a polite way") {
        storyIndex = 8;
    } else if (storyIndex === 8 && option === 'Continue') {
        storyIndex = 6;
    } else if (storyIndex === 6 && option === 'Continue experimenting with drugs') {
        storyIndex = 9;
    } else if (storyIndex === 6 && option === 'Avoid drugs and focus on other activities') {
        storyIndex = 10;
    } else if (storyIndex === 9 && option === 'Continue') {
        storyIndex = 11;
    } else if (storyIndex === 10 && option === 'Continue') {
        storyIndex = 15;
    } else if (storyIndex === 15 && option === 'Continue') {
        storyIndex = 16;
    } else if (storyIndex === 16 && option === 'Continue') {
        storyIndex = 17;
    } else if (storyIndex === 17 && option === 'Continue') {
        storyIndex = 18;
    } else if (storyIndex === 18 && option === 'Wait') {
        storyIndex = 19;
    } else if (storyIndex === 18 && option === 'Rope') {
        storyIndex = 21;
    } else if (storyIndex === 18 && option === 'Gun') {
        storyIndex = 22;
    } else if (storyIndex === 19 && option === 'Continue') {
        storyIndex = 20;
    } else if (storyIndex === 21 && option === 'Continue') {
        storyIndex = 19;
    } else if (storyIndex === 22 && option === 'Continue') {
        storyIndex = 23;
    } else if (storyIndex === 23 && option === 'Look for bullets') {
        storyIndex = 26;
    } else if (storyIndex === 23 && option === 'Try to escape using the door') {
        storyIndex = 24;
    } else if (storyIndex === 23 && option === 'Go back and wait') {
        storyIndex = 19; // Slutt
    } else if (storyIndex === 24 && option === 'Continue') {
        storyIndex = 25; // Slutt
    } else if (storyIndex === 26 && option === 'Obviously shoot the man') {
        storyIndex = 28;
    } else if (storyIndex === 26 && option === 'Shoot yourself (kys)') {
        storyIndex = 27;
    } else if (storyIndex === 28 && option === 'Continue') {
        storyIndex = 29;
    } else if (storyIndex === 27 && option === 'Continue') {
        storyIndex = 14;
    } else if (storyIndex === 29 && option === 'Continue') {
        storyIndex = 14;
    } else if (storyIndex === 20 && option === 'Continue') {
        storyIndex = 14;
    } else if (storyIndex === 25 && option === 'Continue') {
        storyIndex = 14;


    } else if (storyIndex === 14 && option === 'Restart') {
        storyIndex = 0;
    





    } else if (storyIndex === 11 && option === "Accept Sara's help") {
        storyIndex = 12;
    } else if (storyIndex === 11 && option === "Reject Sara's help") {
        storyIndex = 13;
    } else if (storyIndex === 12 && option === 'Continue') {
        storyIndex = 14; // End of the story
    } else if (storyIndex === 13 && option === 'Continue') {
        storyIndex = 14; // End of the story
    }

    displayStory();
}


// Call displayStory() after setting the initial storyIndex
displayStory();
