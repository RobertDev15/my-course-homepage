// 1. The questions array contains objects with questions, options, correct answers, and feedback messages.
let questions = [
    {
        question: "Do you feel happy?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "I am sorry"
    },
    // Add other questions and answers here
    {
        question: "Are you happy with my response?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Happy to be helpful",
        incorrectResponse: "I'm very sorry I couldn't be of any use"
    },
    {
        question: "Want to contact the host?",
        options: {
            a: "No",
            b: "Yes"
        },
        correctAnswer: "b",
        correctResponse: "Great! You can contact them through the contact page",
        incorrectResponse: "Sorry, they are not available at the moment."
    },
    {
        question: "Want me to let them know you are looking for them?",
        options: {
            a: "No",
            b: "Yes"
        },
        correctAnswer: "b",
        correctResponse: "Great! I'll let them know and get back to you",
        incorrectResponse: "Ok! Thanks for chating with me"
    }
];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");
displayQuestion();

// 2. The displayQuestion function creates and appends an element for the current question in the chat container.
function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}. ${currentQuestion.options[key]}`).join(' ');

    let botResponse = document.createElement("div");
    botResponse.classList.add("message","bot");
    botResponse.innerHTML = `<strong>Chatbot:</strong> ${currentQuestion.question} ${optionsHTML}`;
    chatContainer.appendChild(botResponse);
}

function scrollChatContainerToBottom() {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 3. The event listener for the form prevents default submit, processes user response, checks if correct, and displays appropriate feedback.
chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let userResponse = userInput.value.toLowerCase();

    let userMessage = document.createElement("div");
    userMessage.classList.add("message","user");
    userMessage.innerHTML = `<strong>Chatbot :</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message","bot");
    botResponse.innerHTML = `<strong>Chatbot :</strong> `;
    if (userResponse === currentQuestion.correctAnswer) {
        botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
        botResponse.innerHTML += currentQuestion.incorrectResponse;
    }
    chatContainer.appendChild(botResponse);

    currentQuestionIndex = (currentQuestionIndex + 1 ) % questions.length;
    userInput.value = '';
    displayQuestion();

    scrollChatContainerToBottom();
});