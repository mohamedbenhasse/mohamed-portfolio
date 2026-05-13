console.log("Portfolio website loaded successfully.");

const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const quickQuestions = document.querySelectorAll(".quick-question");

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className =
    sender === "user" ? "message user-message" : "message bot-message";
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendQuestion(customQuestion) {
  const question = customQuestion || chatInput.value.trim();

  if (!question) {
    return;
  }

  addMessage(question, "user");
  chatInput.value = "";

  addMessage("Thinking...", "bot");

  try {
    const response = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question })
    });

    const data = await response.json();

    const thinkingMessage = chatMessages.lastChild;
    thinkingMessage.textContent =
      data.answer || data.error || "No answer returned.";
  } catch (error) {
    const thinkingMessage = chatMessages.lastChild;
    thinkingMessage.textContent =
    "The AI chatbot is coming soon. For now, please contact Mohamed through email, LinkedIn, or GitHub.";
  }
}

if (chatSend && chatInput) {
  chatSend.addEventListener("click", function () {
    sendQuestion();
  });

  chatInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendQuestion();
    }
  });
}

quickQuestions.forEach(function (button) {
  button.addEventListener("click", function () {
    sendQuestion(button.textContent.trim());
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(function (element) {
  revealObserver.observe(element);
});

const certificateCards = document.querySelectorAll(".certificate-card");
const certificateModal = document.getElementById("certificateModal");
const certificateImage = document.getElementById("certificateImage");
const closeCertificateModal = document.getElementById("closeCertificateModal");

certificateCards.forEach(function (card) {
  card.addEventListener("click", function () {
    const imagePath = card.getAttribute("data-image");
    certificateImage.src = imagePath;
    certificateModal.classList.add("show");
  });
});

function closeModal() {
  certificateModal.classList.remove("show");
  certificateImage.src = "";
}

if (closeCertificateModal) {
  closeCertificateModal.addEventListener("click", closeModal);
}

if (certificateModal) {
  certificateModal.addEventListener("click", function (event) {
    if (event.target === certificateModal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && certificateModal.classList.contains("show")) {
    closeModal();
  }
});