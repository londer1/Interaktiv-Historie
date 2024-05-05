const storyBox = document.getElementById('story-box');
const optionsBox = document.getElementById('options');


const story = [
    // StoryIndex 0
    { text: "You're controlling a guy named Lars through his life and how his life will go.", image: "", options: ["Continue"] },
    // StoryIndex 1
    { text: "Lars woke up, feeling both nervous and excited for his first day of school. He stood in front of the mirror, thinking about whether to make new friends or keep the old ones.", image: ["images/lars-bed.png", "images/lars-mirror.png"], options: ["Make new friends", "Stick with old friends"] },
    // StoryIndex 2
    { text: "Lars decided to try making new friends. He talked to people during breaks and found a group that liked exploring cities and having adventures.", image: ["images/lars-newfriends.png"], options: ["Continue"] },
    // StoryIndex 3
    { text: "Lars chose to stay with his old friends and had fun doing that.", image: "images/lars-friends.png", options: ["Continue"] },
    // StoryIndex 4
    { text: "Lars met Sara, an old friend from high school, and they talked about the new school year. They both felt excited and wanted to make new connections.", image: "images/lars-sara.png", options: ["Continue"] },
    // StoryIndex 5
    { text: "Lars's new friends asked him to join them after school to try some drugs. Lars felt torn between wanting to fit in and being scared of the drugs.", image: "images/lars-sara-newfriends.png", options: ["Consider trying joints", "Politely decline"] },
    // StoryIndex 6
    { text: "As the school day ends, Lars's friends bring up the topic again. 'Are you joining us after school?' they ask eagerly.", image: "images/lars-do-you-come.png", options: ["Continue experimenting", "Suggest an alternative activity"] },
    // StoryIndex 7
    { text: "Lars was scared but decided to go with his friends to try the drugs. He thought it would be a one-time thing, but he felt unsure.", options: ["Continue"] },
    // StoryIndex 8
    { text: "Lars decided not to try the drugs, saying he didn't want to. He suggested doing something else instead, but his new friends were disappointed.", image: "images/lars-reject-joints.png", options: ["Continue"] },
    // StoryIndex 9
    { text: "Lars tries drugs anyway, even though he is scared in a dirty alley with his new friends. He felt drawn to the new experiences, even though he knew it was risky.", image: "images/lars-alley.png", options: ["Continue"] },
    // StoryIndex 10
    { text: "Lars decided to stay away from drugs and focus on other things. He was careful about who he hung out with and made his own choices.", image: "images/lars-reject-joints2.png", options: ["Continue"] },
    // StoryIndex 11
    { text: "Sara was worried about Lars and offered support. She was there for him and kindly asked if he would take her help to stop using drugs.", image: "images/sara-worried.png", options: ["Accept Sara's help", "Decline Sara's help"] },
    // StoryIndex 12
    { text: "Lars appreciated Sara's support and decided to work on his drug problems. They talked about the issue and she supported him the whole way.", options: ["Continue"] },
    // StoryIndex 13
    { text: "Lars rejected Sara's help, thinking he could handle his problems alone. He became more isolated and struggled more and more with addiction, till he eventually died of a fentanyl overdose.", image: "lars-fent.jpg", options: ["Continue"] },
    // StoryIndex 14
    { text: "The End", image: "images/the_end.png", options: ["Restart"] },
    // SceneIndex 15
    { text: "Lars refused to try drugs again, saying he didn't want to. His friends were upset, but Lars wanted to do something else.", image: "images/lars-decline.png", options: ["Continue"] },
    // SceneIndex 16
    { text: "Lars went home and saw a strange man. He approaches Lars and grabs him.", image: "images/old-man.png", options: ["Continue"] },
    // SceneIndex 17
    { text: "The man grabbed him and took him away in a van. The man tied Lars up in a dark basement.", image: "images/lars-abducted.png", options: ["Continue"] },
    // SceneIndex 18
    { text: "The man goes to the toilet, Lars is stuck, but sees a Glock pistol aside from him. Should he take the chance and try to get loose to get the gun, or not?", image: "images/lars-gun-table.png", options: ["Gun", "Rope", "Wait"] },
    // SceneIndex 19
    { text: "The man comes out, revealing himself as Lars's dad.", image: "images/dad-reveal.png", options: ["Continue"] },
    // SceneIndex 20
    { text: "The man came back and revealed he was Lars's dad. They lived happily ever after, and Lars and Sara became a couple.", image: "images/lars-sara-dad.png", options: ["Continue"] },
    // SceneIndex 21
    { text: "Lars gets the ropes loose and ties them down so he can easily get loose later.", image: "images/lars-tied.png", options: ["Continue"] },
    // SceneIndex 22
    { text: "Lars knows a little about guns, so he quickly checks if it is loaded. Lars finds out that the gun is empty and has no bullets.", image: "images/lars-check.png", options: ["Continue"] },
    // SceneIndex 23
    { text: "Should he look for bullets, take the risk to leave, or go back and wait?", options: ["Look for bullets", "Try to escape using the door", "Go back and wait"] },
    // SceneIndex 24
    { text: "Lars takes the risk and runs out the door. The man comes out of the toilet and screams 'Stop!' Lars runs anyway, not taking that risk.", image: "images/lars-run.png", options: ["Continue"] },
    // SceneIndex 25
    { text: "Lars moves away and never gets to see his father again and will most likely never know that was his father trying to do a grand reveal.", image: "images/lars-old.png", options: ["Continue"] },
    // SceneIndex 26
    { text: "Lars finds a magazine in a drawer. Lars has become a little mentally ill, so he gets the thought, should he wait for the man and shoot or just shoot himself?", image: "images/lars-think.png", options: ["Obviously shoot the man", "Shoot yourself (kys)"] },
    // SceneIndex 27
    { text: "Lars chooses to shoot himself (he dies)", image: "images/lars-dead.png", options: ["Continue"] },
    // SceneIndex 28
    { text: "Lars gets ready, and when the man comes out, Lars points the gun against him. The man tries to de-escalate the situation but Lars doesn't believe it and shoots him twice in the head.", image: "images/lars-kill.png", options: ["Continue"] },
    // SceneIndex 29
    { text: "Lars later finds out that the man was his dad, and that he was trying to do a grand reveal, so Lars shoots himself.", image: "images/lars-suicide.png", options: ["Continue"] },
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
    } else if (storyIndex === 5 && option === "Consider trying joints") {
        storyIndex = 7;
    } else if (storyIndex === 7 && option === 'Continue') {
        storyIndex = 6;
    } else if (storyIndex === 5 && option === "Politely decline") {
        storyIndex = 8;
    } else if (storyIndex === 8 && option === 'Continue') {
        storyIndex = 6;
    } else if (storyIndex === 6 && option === 'Continue experimenting') {
        storyIndex = 9;
    } else if (storyIndex === 6 && option === 'Suggest an alternative activity') {
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
    } else if (storyIndex === 11 && option === "Decline Sara's help") {
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

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        // Adjust the background position based on the mouse's position
        document.body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
    });
});
