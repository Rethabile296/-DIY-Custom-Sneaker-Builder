// Select elements
const sneakerBase = document.getElementById('sneakerBase');
const customDesign = document.getElementById('customDesign');
const colorPicker = document.getElementById('colorPicker');
const uploadImage = document.getElementById('uploadImage');
const addText = document.getElementById('addText');
const fontSize = document.getElementById('fontSize');
const fontColor = document.getElementById('fontColor');
const resetBtn = document.getElementById('resetBtn');
const saveBtn = document.getElementById('saveBtn');

// Default sneaker color
let sneakerColor = '#FFFFFF';

// Function to update sneaker color
colorPicker.addEventListener('input', (e) => {
    sneakerColor = e.target.value;
    updateSneaker();
});

// Function to upload image onto sneaker
uploadImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (readerEvent) => {
            const image = new Image();
            image.src = readerEvent.target.result;
            image.onload = () => {
                addImageToSneaker(image);
            };
        };
        reader.readAsDataURL(file);
    }
});

// Function to add text onto sneaker
addText.addEventListener('input', () => {
    updateTextOnSneaker();
});

// Function to adjust font size
fontSize.addEventListener('input', () => {
    updateTextOnSneaker();
});

// Function to adjust font color
fontColor.addEventListener('input', () => {
    updateTextOnSneaker();
});

// Function to reset customization
resetBtn.addEventListener('click', () => {
    sneakerColor = '#FFFFFF'; // Reset color to default
    colorPicker.value = sneakerColor;
    customDesign.innerHTML = ''; // Remove uploaded images and text
    addText.value = ''; // Clear text input
    fontSize.value = 20; // Reset font size
    fontColor.value = '#000000'; // Reset font color
    updateSneaker();
});

// Function to save sneaker design (example of saving design logic)
saveBtn.addEventListener('click', () => {
    alert('Sneaker Design Saved!');
    // You can extend this to send data to a backend or save in local storage
});

// Function to update sneaker base color
function updateSneaker() {
    sneakerBase.style.backgroundColor = sneakerColor;
}

// Function to add uploaded image onto sneaker
function addImageToSneaker(image) {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.style.position = 'absolute';
    imgElement.style.top = '50%'; // Centering the image
    imgElement.style.left = '50%';
    imgElement.style.transform = 'translate(-50%, -50%)'; // Center the image perfectly
    imgElement.style.maxWidth = '50%';
    customDesign.appendChild(imgElement);
}

// Function to update text on the sneaker
function updateTextOnSneaker() {
    const existingText = document.querySelector('.sneaker-text');
    if (existingText) {
        existingText.textContent = addText.value;
        existingText.style.fontSize = `${fontSize.value}px`;
        existingText.style.color = fontColor.value;
    } else {
        const textElement = document.createElement('div');
        textElement.classList.add('sneaker-text');
        textElement.textContent = addText.value;
        textElement.style.position = 'absolute';
        textElement.style.top = '70%';
        textElement.style.left = '50%';
        textElement.style.transform = 'translateX(-50%)';
        textElement.style.fontSize = `${fontSize.value}px`;
        textElement.style.color = fontColor.value;
        customDesign.appendChild(textElement);
    }
}

// Initialize with default sneaker color
updateSneaker();

