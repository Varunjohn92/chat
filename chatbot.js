// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
  const lowerInput = input.toLowerCase();

  // Define keywords to trigger specific responses
  if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hello! How can I assist you today? 😊";
  } else if (lowerInput.includes("how are you")) {
      return "I'm just a computer program, so I don't have feelings, but I'm here to help you! 😄";
  } else if (lowerInput.includes("help")) {
      return "Of course! What do you need help with?";
  } else if (lowerInput.includes("thank you") || lowerInput.includes("thanks")) {
      return "You're welcome! If you have more questions, feel free to ask.";
  } else if (lowerInput.includes("weather")) {
      return "I'm sorry, I can't provide real-time weather information. You can check a weather website or app for that.";
  } else if (lowerInput.includes("joke")) {
      return "Why don't scientists trust atoms? Because they make up everything! 😄";
  } else if (lowerInput.includes("bye") || lowerInput.includes("goodbye")) {
      return "Goodbye! If you ever have more questions, don't hesitate to return.";
  } else if (lowerInput.includes("time")) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
      return `The current time is ${currentTime}.`;
  } else if (lowerInput.includes("name")) {
      return "I don't have a name, but you can call me Chatbot!";
  } else if (lowerInput.includes("how old are you")) {
      return "I'm just a computer program, so I don't have an age.";
  } else if (lowerInput.includes("favorite color")) {
      return "I don't have a favorite color, but I can display messages in any color you like!";
  } else if (lowerInput.includes("meaning of life")) {
      return "The meaning of life is a deep philosophical question. Different people have different perspectives on it.";
  } else if (lowerInput.includes("how does a computer work")) {
      return "A computer works by processing instructions in a program, which is a set of steps to perform a task.";
  } else if (lowerInput.includes("tell me a fact")) {
      return "Here's a fact: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!";
  } else if (lowerInput.includes("tell me a riddle")) {
      return "Sure, here's a riddle: I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?";
  } else if (lowerInput.includes("answer to the riddle")) {
      return "The answer to the riddle is an echo!";
  } else if (lowerInput.includes("what is the capital of France")) {
      return "The capital of France is Paris.";
  } else if (lowerInput.includes("tell me about yourself")) {
      return "I'm just a chatbot designed to assist with questions and have conversations. Feel free to ask me anything!";
  } else if (lowerInput.includes("can you sing a song")) {
      return "I can't sing, but I can share song lyrics or provide information about songs and artists. What song would you like to know about?";
  } else if (lowerInput.includes("tell me a joke")) {
      return "Sure, here's a joke: Why did the scarecrow win an award? Because he was outstanding in his field! 😄";
  } else if (lowerInput.includes("what's your favorite movie")) {
      return "I don't have personal preferences, but I can recommend some great movies. What genre are you interested in?";
  } else if (lowerInput.includes("recommend a book")) {
      return "Certainly! How about 'To Kill a Mockingbird' by Harper Lee? It's a classic!";
  } else if (lowerInput.includes("what's the capital of Japan")) {
      return "The capital of Japan is Tokyo.";
  } else if (lowerInput.includes("tell me a fun fact")) {
      return "Here's a fun fact: The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in the heat.";
  } else if (lowerInput.includes("who won the World Series in 2022")) {
      return "I'm sorry, I don't have real-time information. You can check the latest sports news for the 2022 World Series winner.";
  } else if (lowerInput.includes("tell me a science fact")) {
      return "Sure, here's a science fact: Honey never spoils because of its low water content and high acidity, which create an inhospitable environment for bacteria and microorganisms.";
  } else if (lowerInput.includes("what's the largest planet in the solar system")) {
      return "The largest planet in our solar system is Jupiter.";
  } else if (lowerInput.includes("who is the author of '1984'")) {
      return "The author of '1984' is George Orwell.";
  } else if (lowerInput.includes("tell me a famous quote")) {
      return "Here's a famous quote by Albert Einstein: 'Imagination is more important than knowledge.'";
  } else if (lowerInput.includes("what's the tallest mountain in the world")) {
      return "The tallest mountain in the world is Mount Everest.";
  } else if (lowerInput.includes("who painted the Mona Lisa")) {
      return "The Mona Lisa was painted by Leonardo da Vinci.";
  } else if (lowerInput.includes("what's the largest mammal on Earth")) {
      return "The largest mammal on Earth is the blue whale.";
  } else if (lowerInput.includes("what's the chemical symbol for gold")) {
      return "The chemical symbol for gold is Au, which comes from the Latin word 'aurum.'";
  } else if (lowerInput.includes("tell me a historical fact")) {
      return "Here's a historical fact: The Great Wall of China is over 13,000 miles long and took centuries to build.";
  } else if (lowerInput.includes("what's the fastest land animal")) {
      return "The fastest land animal is the cheetah, capable of running at speeds of up to 60-70 miles per hour.";
  } else if (lowerInput.includes("who is the Greek god of thunder")) {
      return "The Greek god of thunder is Zeus.";
  } else if (lowerInput.includes("what's the largest desert in the world")) {
      return "The largest desert in the world is the Antarctic Desert.";
  } else if (lowerInput.includes("tell me an interesting animal fact")) {
      return "Here's an interesting animal fact: Octopuses have three hearts.";
  } else if (lowerInput.includes("who wrote 'Romeo and Juliet'")) {
      return "Romeo and Juliet was written by William Shakespeare.";
  } else if (lowerInput.includes("tell me a space fact")) {
      return "Sure, here's a space fact: The largest volcano in the solar system is Olympus Mons on Mars.";
  } else if (lowerInput.includes("what's the smallest planet in the solar system")) {
      return "The smallest planet in our solar system is Mercury.";
  } else if (lowerInput.includes("tell me a famous historical speech")) {
      return "Here's an excerpt from Martin Luther King Jr.'s 'I Have a Dream' speech: 'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.'";
  } else if (lowerInput.includes("what's the national flower of Japan")) {
      return "The national flower of Japan is the cherry blossom (sakura).";
  } else if (lowerInput.includes("tell me a technology fact")) {
      return "Here's a technology fact: The first computer programmer was Ada Lovelace, who wrote instructions for Charles Babbage's early mechanical general-purpose computer, the Analytical Engine.";
  } else if (lowerInput.includes("who wrote 'Pride and Prejudice'")) {
      return "'Pride and Prejudice' was written by Jane Austen.";
  } else if (lowerInput.includes("tell me a famous movie quote")) {
      return "Here's a famous movie quote from 'Casablanca': 'Here's looking at you, kid.'";
  } else if (lowerInput.includes("what's the deepest part of the ocean")) {
      return "The deepest part of the ocean is the Mariana Trench, and the deepest point within it is the Challenger Deep.";
  } else if (lowerInput.includes("tell me an interesting historical fact")) {
      return "Here's an interesting historical fact: The Great Fire of London in 1666 was so hot that it turned sand on the banks of the Thames River into glass.";
  } else if (lowerInput.includes("who is the author of 'The Catcher in the Rye'")) {
      return "'The Catcher in the Rye' was written by J.D. Salinger.";
  } else if (lowerInput.includes("tell me a fun science fact")) {
      return "Here's a fun science fact: A day on Venus (its rotation period) is longer than a year on Venus (its orbital period).";
  } else if (lowerInput.includes("what's the largest ocean in the world")) {
      return "The largest ocean in the world is the Pacific Ocean.";
  } else if (lowerInput.includes("tell me a famous historical quote")) {
      return "Here's a famous historical quote by Winston Churchill: 'We shall defend our island";
    } else {
        // Generic responses
        const genericResponses = [
            "I'm here to assist you with any questions or concerns you may have. 📩",
            "I'm sorry, I'm not able to browse the internet or access external information. Is there anything else I can help with? 💻",
            "What would you like to know? 🤔",
            "Is there anything specific you'd like to ask or talk about? I'm here to help with any questions or concerns you may have. 💬",
        ];
        return genericResponses[Math.floor(Math.random() * genericResponses.length)];
    }
}
