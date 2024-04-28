const storyBox = document.getElementById('story-box');
const optionsBox = document.getElementById('options');

const story = [
    { text: "You are controlling a person named Lars.", image: "", options: ["Continue"] },
    { text: "Lars woke up nervous, feeling a mix of excitement and fear for the first day of school. Should he try to make new friends or stick with his old ones? The decision weighed heavily on him as he stood in front of the mirror, uncertain of which path to choose.", image: ["images/lars-bed.png", "images/lars-mirror.png"], options: ["Make new friends", "Stick with old friends"] },
    { text: "Lars decides to make new friends, feeling excited about the opportunity to meet new people and explore new interests. He strikes up conversations with classmates during breaks and ends up joining a group interested in urban exploration and adventure.", image: ["images/lars-newfriends.png"], options: ["Join the group and try the joints", "Decline the offer and find another activity"] },
    { text: "Lars chooses to stick with his old friends, feeling more comfortable with familiar faces. They spend the day catching up and reminiscing about past adventures, but Lars can't shake the feeling that something is missing.", image: "images/lars-friends.png", options: ["Try another activity", "Join the group and try the joints"] },
    { text: "Regardless of Lars's choice, he encounters Sara, a good friend from high school. They catch up and share their excitement about the new school year. He gets to talk to new people because they came up to him.", image: "images/sara.jpg", options: ["Continue"] },
    { text: "Lars's new friends suggest trying out some joints after school, eager to include him in their activities. Lars feels torn between the desire to fit in and the instinct to stay true to himself. As he hesitates, he notices the expectant looks on his friends' faces, feeling the weight of their expectations pressing down on him.", image: "image6.jpg", options: ["Join the group and try the joints", "Decline the offer and find another activity"] },
    { text: "Lars decides to join the group and try the joints. He feels a rush of excitement mixed with apprehension as he takes the first puff. The experience is new and unfamiliar, but Lars finds himself enjoying the moment and feeling closer to his new friends.", image: "image7.jpg", options: ["Continue"] },
    { text: "Lars declines the offer and suggests finding another activity. His friends seem disappointed but quickly agree and suggest going to grab some food instead. Lars feels relieved that he stayed true to himself and enjoys spending time with his friends without compromising his values.", image: "image8.jpg", options: ["Continue"] }
];

let storyIndex = 0;

function displayStory() {
    let storyContent = "";

    for (let i = 0; i <= storyIndex; i++) {
        storyContent += '<div class="scene">';
        if (Array.isArray(story[i].image)) {
            story[i].image.forEach(img => {
                storyContent += `<img src="${img}" alt="Scene Image" class="scene-image">`;
            });
        } else if (typeof story[i].image === 'string' && story[i].image !== "") {
            storyContent += `<img src="${story[i].image}" alt="Scene Image" class="scene-image">`;
        }
        storyContent += `<p class="scene-text">${story[i].text}</p></div>`;
    }

    storyBox.innerHTML = storyContent;

    optionsBox.innerHTML = "";

    const currentScene = story[storyIndex];
    currentScene.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            if (option === "Stick with old friends") {
                // Navigate to the scene where Lars sticks with his old friends
                storyIndex = 3;
            } else {
                storyIndex++;
            }
            displayStory();
        });
        optionsBox.appendChild(button);
    });
}

displayStory();
