//Time
    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Add leading zeros
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      const currentTime = `${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').textContent = currentTime;
    }

    // Update every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call


//Notes
const notesList = document.getElementById("notesList");
const noteInput = document.getElementById("noteInput");

function addNote() {
    if (noteInput.value.trim() === "") return; // Prevent empty notes

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${noteInput.value}</span>
        <button onclick="editNote(this)">Edit</button>
        <button onclick="deleteNote(this)">Delete</button>
    `;
    notesList.appendChild(li);
    noteInput.value = ""; // Clear input field
}

function deleteNote(button) {
    button.parentElement.remove();
}

function editNote(button) {
    const span = button.parentElement.querySelector("span");
    const newText = prompt("Edit your note:", span.textContent);
    if (newText !== null) span.textContent = newText;
}

