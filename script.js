const earImg = document.querySelector('.ear-img');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 200) { 
    earImg.style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
  } else {
    earImg.style.clipPath = 'none';
  }
});
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const errorMessageElement = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  const isValid = validateForm(nameValue, emailValue, messageValue);
  if (!isValid) return;

  submitFormData(nameValue, emailValue, messageValue);
});

function validateForm(name, email, message) {
  let isValid = true;

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    displayErrorMessage('Please enter a valid name.');
    isValid = false;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    displayErrorMessage('Please enter a valid email address.');
    isValid = false;
  }

  if (message.length < 10) {
    displayErrorMessage('Please enter a message with at least 10 characters.');
    isValid = false;
  }

  return isValid;
}

function submitFormData(name, email, message) {
    try {
      fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert('Message sent successfully!');
        })
        .catch((error) => {
          console.error(error);
          alert('Error sending message. Please try again.');
        });
    } catch (error) {
      console.error(error);
      alert('Error sending message. Please try again.');
    }
  }

const productImage = document.querySelector('.prod1-detail img');

const productDetails = document.querySelector('.prod1-detail');

productImage.addEventListener('mouseover', function() {
  this.style.transform = 'scale(1.1)';
  this.style.transition = 'transform 0.2s ease-in-out';
});


productImage.addEventListener('mouseout', function() {
  this.style.transform = 'scale(1)';
  this.style.transition = 'transform 0.2s ease-in-out';
});
document.querySelector('.prod1-detail button').addEventListener('click', function() {
  alert('Thank you for your purchase!');
});