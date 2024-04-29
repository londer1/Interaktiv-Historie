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
    { text: "The school day is almost done, and Lars's new friends come up again and ask, 'So you come after school?'", image: "", options: ["Continue experimenting with drugs", "Avoid drugs and focus on other activities"] },
    // StoryIndex 7
    { text: "Feeling a mix of curiosity and peer pressure, Lars decides to join the group and try the joints. He rationalizes it as a one-time thing, eager to fit in with his new friends.", image: "image7.jpg", options: ["Continue"] },
    // StoryIndex 8
    { text: "Lars declines the offer to try the joints, feeling uncomfortable with the idea of experimenting with drugs. He suggests doing something else instead, like grabbing a snack or exploring the city. The faces of the new faces drop and look disappointed.", image: "image8.jpg", options: ["Continue"] },
    // StoryIndex 9
    { text: "After trying the joints, Lars finds himself enjoying the sensation and decides to continue experimenting with drugs. He becomes more involved with his new friends and their drug-related activities.", image: "image9.jpg", options: ["Continue"] },
    // StoryIndex 10
    { text: "By avoiding drugs, Lars focuses on other activities like sports, music, or academic pursuits. He maintains a distance from the group experimenting with drugs, feeling uneasy about their lifestyle choices.", image: "image10.jpg", options: ["Continue"] },
     // StoryIndex 11
    { text: "As Lars's drug use escalates, Sara expresses concern for his well-being. She encourages him to seek help and offers her support.", image: "image11.jpg", options: ["Accept Sara's help and try to overcome addiction", "Reject Sara's help and spiral deeper into addiction"] },
     // StoryIndex 12
    { text: "Recognizing the impact of his choices, Lars accepts Sara's help and decides to overcome his addiction. He opens up to her about his struggles and together, they embark on a journey towards recovery. If Lars accepts Sara's help, they work together to overcome his addiction. Their bond deepens, and they confess their feelings for each other, realizing their love was mutual all along. Lars embraces a brighter future with Sara by his side.", image: "image12.jpg", options: ["Continue"] },
     // StoryIndex 13
    { text: "Feeling defensive and ashamed, Lars rejects Sara's help, believing he can handle his addiction on his own. He distances himself from Sara and sinks deeper into addiction, isolating himself from friends and family. If Lars rejects Sara's help, his addiction spirals out of control. Their friendship deteriorates, and Lars's life descends into darkness. Tragedy strikes when Lars's drug use leads to irreversible consequences, leaving Sara devastated.", image: "image13.jpg", options: ["Continue"] }
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
        storyIndex = 2;
    } else if (storyIndex === 2 && option === 'Continue') {
        storyIndex = 4;
    } else if (storyIndex === 4 && option === 'Continue') {
        storyIndex = 5;
    } else if (storyIndex === 1 && option === 'Stick with old friends') {
        storyIndex = 3;
    } else if (storyIndex === 5 && option === "Say yes to trying joints after school") {
        storyIndex = 6;
    } else if (storyIndex === 6 && option === 'Continue experimenting with drugs') {
        storyIndex = 7;
    } else if (storyIndex === 6 && option === 'Avoid drugs and focus on other activities') {
        storyIndex = 8;
    } else if (storyIndex === 7 && option === 'Continue') {
        storyIndex = 9;
    } else if (storyIndex === 8 && option === 'Continue') {
        storyIndex = 10;
    } else if (storyIndex === 9 && option === "Accept Sara's help and try to overcome addiction") {
        storyIndex = 12;
    } else if (storyIndex === 9 && option === "Reject Sara's help and spiral deeper into addiction") {
        storyIndex = 13;
    } else {
        storyIndex++;
    }

    displayStory();
}

displayStory();
