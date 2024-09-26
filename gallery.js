// Array of objects containing image paths and text
const data = [
    { img: 'Art/BoxLost.jpeg', title: 'Box Lost', text: 'This is the text next to the image on the left.' },
    { img: 'Art/CoralDock.jpeg', title: 'Coral Dock', text: 'This is the text next to the image on the right.' },
    { img: 'Art/FairlySpring.jpeg', title: 'Fairly Spring', text: 'This is the text next to the image on the left again.' },
    { img: 'Art/Fox.jpeg', title: 'Fox', text: 'This is the text next to the image on the right again.' }
];

const container = document.getElementById('content');

// Loop through the data and dynamically create the rows
data.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'row';

    // Apply the reverse class to every second row
    if (index % 2 !== 0) {
        row.classList.add('reverse');
    }

    // Create the image element
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;

    // Create the text container
    const textDiv = document.createElement('div');
    textDiv.className = 'text';
    const title = document.createElement('h2');
    title.textContent = item.title;
    const paragraph = document.createElement('p');
    paragraph.textContent = item.text;

    // Append title and text to textDiv
    textDiv.appendChild(title);
    textDiv.appendChild(paragraph);

    // Append the image and textDiv to the row
    row.appendChild(img);
    row.appendChild(textDiv);

    // Append the row to the container
    container.appendChild(row);
});

