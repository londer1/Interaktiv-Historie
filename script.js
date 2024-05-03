const storyBox = document.getElementById('story-box');
const optionsBox = document.getElementById('options');

const story = [
    // StoryIndex 0
    { text: "You're guiding Lars through a pivotal day in his life.", image: "", options: ["Continue"] },
    // StoryIndex 1
    { text: "Lars woke up, feeling nervous and excited for the first day of school. He stood before the mirror, wondering whether to make new friends or stick with the old ones.", image: ["images/lars-bed.png", "images/lars-mirror.png"], options: ["Make new friends", "Stick with old friends"] },
    // StoryIndex 2
    { text: "Opting for a change, Lars sets out to make new connections. Engaging in conversations during breaks, he finds himself drawn to a group intrigued by urban exploration and adventure.", image: ["images/lars-newfriends.png"], options: ["Continue"] },
    // StoryIndex 3
    { text: "Preferring the comfort of familiarity, Lars chooses to stay with his existing friends. They spend the day reminiscing about past experiences, yet Lars senses something left unexplored.", image: "images/lars-friends.png", options: ["Continue"] },
    // StoryIndex 4
    { text: "Regardless of Lars's choice, he reunites with Sara, a friend from high school. Their encounter is filled with excitement for the new school year, fostering connections old and new.", image: "images/lars-sara.png", options: ["Continue"] },
    // StoryIndex 5
    { text: "Lars's newfound friends suggest trying joints after school, eager to include him. Lars feels torn between the desire to belong and a growing unease, wrestling with conflicting impulses.", image: "images/lars-sara-newfriends.png", options: ["Consider trying joints", "Politely decline"] },
    // StoryIndex 6
    { text: "As the school day ends, Lars's friends bring up the topic again. 'Are you joining us after school?' they ask eagerly.", image: "images/lars-do-you-come.png", options: ["Continue experimenting", "Suggest an alternative activity"] },
    // StoryIndex 7
    { text: "Torn between curiosity and apprehension, Lars yields to peer pressure, joining his friends in trying the joints. Rationalizing it as a fleeting experience, he ventures into unfamiliar territory, feeling uncertain.", image: "image7.jpg", options: ["Continue"] },
    // StoryIndex 8
    { text: "Opting for caution, Lars declines the offer, uncomfortable with the idea of drug experimentation. Proposing an alternative activity, he seeks to steer away from risky ventures, though met with disappointment.", image: "images/lars-reject-joints.png", options: ["Continue"] },
    // StoryIndex 9
    { text: "Exploring drugs, Lars finds himself enticed by the allure of altered sensations, his initial trepidation giving way to immersion in his friends' lifestyle.", image: "images/lars-smoke.png", options: ["Continue"] },
    // StoryIndex 10
    { text: "Lars chooses to stay away from drugs and instead focuses on other things. He's careful about who he hangs out with and makes his own choices, being aware of the risks he wants to avoid.", image: "images/lars-reject-joints2.png", options: ["Continue"] },
    // StoryIndex 11
    { text: "Amidst concerns, Sara extends a supportive hand to Lars, expressing worry for his well-being. Offering solace and encouragement, she stands by his side, a beacon of hope in challenging times.", image: "images/sara-help.png", options: ["Accept Sara's help", "Decline Sara's help"] },
    // StoryIndex 12
    { text: "Recognizing the gravity of his situation, Lars embraces Sara's support, embarking on a journey towards recovery. Opening up about his struggles, he finds solace in their shared resolve, their bond deepening as they navigate the challenges together. In Sara's steadfast presence, Lars glimpses a brighter future, one infused with hope and renewed purpose.", image: "image12.jpg", options: ["Continue"] },
    // StoryIndex 13
    { text: "Faced with vulnerability and pride, Lars rebuffs Sara's offer, convinced he can tackle his demons alone. Drifting further into isolation, he grapples with addiction's relentless grip, his life veering towards darkness as he shuns the support of friends and loved ones. In his solitary descent, Lars faces irreversible consequences, his choices exacting a toll too heavy to bear.", image: "image13.jpg", options: ["Continue"] },
    // StoryIndex 14
    { text: "The End", image: "the_end.png", options: ["Restart"] },
    // SceneIndex 15
    { text: "Lars firmly declines the offer to try the joints once again, feeling uneasy about experimenting with drugs. He suggests doing something else instead, hoping to steer the conversation in a different direction. The disappointment on his new friends' faces is evident.", image: "images/lars-decline.png", options: ["Continue"] },
    // SceneIndex 16
    { text: "Lars comes home and sees a 52-year-old, tall, unknown, and scary man. He approaches Lars and grabs him.", image: "images/old-man.png", options: ["Continue"] },
    // SceneIndex 17
    { text: "In the dimly lit foyer of his home, Lars freezes as a towering figure emerges from the shadows. Before he can react, the stranger seizes him with frightening strength. Despite his desperate struggles, Lars is overpowered, his cries drowned out by the rush of adrenaline. In that moment, his sanctuary becomes a nightmare, the darkness swallowing him whole. The man takes him in a van and drives away. The man takes him in a dark basement tied down on a chair.", image: "images/lars-abducted.png", options: ["Continue"] },
    // SceneIndex 18
    { text: "The man goes to the toilet, Lars is stuck, Lars sees a Glock pistol aside from him. Should he take the chance and try to get loose to get the gun, or not?", image: "images/lars-gun-table.png", options: ["Gun", "Rope", "Wait"] },
    // SceneIndex 19
    { text: "The man comes out, revealing himself as Lars's dad.", image: "images/dad-reveal.png", options: ["Continue"] },
    // SceneIndex 20
    { text: "Lars and his dad live happily ever after, and Sara and Lars become a couple.", image: "images/lars-sara-dad.png", options: ["Continue"] },
    // SceneIndex 21
    { text: "Lars gets the ropes loose and ties them down so he can easily get loose later.", image: "images/lars-tied.png", options: ["Continue"] },
    // SceneIndex 22
    { text: "Lars knows a little about guns, so he quickly checks if it is loaded. Lars finds out that the gun is empty and has no bullets.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 23
    { text: "Should he look for bullets, take the risk to leave, or go back and wait?", image: "images/lars-home.png", options: ["Look for bullets", "Try to escape using the door", "Go back and wait"] },
    // SceneIndex 24
    { text: "Lars takes the risk and runs out the door. The man comes out of the toilet and screams 'Stop!' Lars runs anyway, not taking that risk.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 25
    { text: "Lars moves away and never gets to see his father again and will most likely never know that was his father trying to do a grand reveal.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 26
    { text: "Lars finds a magazine in a drawer. Lars has become a little mentally ill, so he gets the thought, should he wait for the man and shoot or just shoot himself?", image: "images/lars-home.png", options: ["Obviously shoot the man", "Shoot yourself (kys)"] },
    // SceneIndex 27
    { text: "Lars chooses to shoot himself (he dies)", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 28
    { text: "Lars gets ready, and when the man comes out, Lars points the gun against him. The man tries to de-escalate the situation but Lars doesn't believe it and shoots him twice in the head.", image: "images/lars-home.png", options: ["Continue"] },
    // SceneIndex 29
    { text: "Lars later finds out that the man was his dad, and that he was trying to do a grand reveal, so Lars shoots himself.", image: "images/lars-home.png", options: ["Continue"] },
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
