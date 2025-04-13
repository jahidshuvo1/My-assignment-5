document.addEventListener("DOMContentLoaded", function () {
    const themeLink = document.querySelector(".theme-change");
    const body = document.body;
  
    //A List Of Colors
    const colors = [
      "#F4F7FF",
      "#FFEBEE",
      "#E8F5E9",
      "#FFF3E0",
      "#D1C4E9",
      "#B3E5FC",
      "#FFCDD2",
      "#C8E6C9",
    ];
  
    themeLink.addEventListener("click", function (event) {
      event.preventDefault();
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      body.style.backgroundColor = randomColor;
    });
  });
  
  const date = new Date();
      
  // Get the current day, month, date, and year
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  
  // Split the formatted date
  const parts = formattedDate.split(' ');
  document.getElementById("present-day").textContent = parts[0] + ',';  
  document.getElementById("present-month").textContent = parts.slice(1).join(' ');
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    // Select All "Completed" Buttons
    const buttons = document.querySelectorAll(".card-btn");
    const sendMessage = document.querySelector("#send-message");
    const dateUpdate = document.querySelector("#date-update");
    const mainTextBox = document.querySelector("#comment-list");
    const deleteHistory = document.querySelector("#delete-history");
  
    if (!sendMessage || !dateUpdate || !mainTextBox) {
      console.error("Required elements not found!");
      return;
    }
  
    let dateUpdates = parseInt(dateUpdate.innerText.trim()) || 0;
    let sendMessageValue = parseInt(sendMessage.innerText.trim()) || 0;
  
    // Hide The Comment Box Initially!!
    mainTextBox.style.display = "none";
  
    // Add Click Event To All "Completed" Buttons!!
    buttons.forEach((button, index) => {
      button.addEventListener("click", function () {
        setTimeout(() => alert("Board Updated Successfully!"), 500);
  
        // Second Alert Here
        if (index === buttons.length - 1) {
          setTimeout(() => alert("Congrats!!! You Have Complete All The Current Task"), 1000);
        }
  
        if (this.disabled) return;
  
        const taskCard = button.closest(".task-card");
        if (!taskCard) return;
  
        const taskTitle = taskCard.querySelector(".title-day")?.innerText || "No Title";
        dateUpdates += 1;
        sendMessageValue = Math.max(sendMessageValue - 1, 0);
  
        dateUpdate.innerText = dateUpdates;
        sendMessage.innerText = sendMessageValue;
  
        // Get The Current Time
        let currentTime = new Date().toLocaleTimeString();
        const newComment = document.createElement("p");
        newComment.innerHTML = `You have Complete The Task ${taskTitle} at: ${currentTime}`;
        newComment.classList.add(
          "newComment",
          "mt-4",
          "py-4",
          "px-2",
          "bg-[#E8F0FE]",
          "rounded-lg",
          "shadow-md"
        );
  
        // Append The New Comment To The Comment List
        mainTextBox.appendChild(newComment);
        mainTextBox.style.display = "block";  
  
        // Disable The Button And Change Its Styles
        this.disabled = true;
        this.classList.add("bg-blue-200", "cursor-not-allowed");
        this.classList.remove(
          "bg-blue-700",
          "hover:bg-blue-800",
          "dark:bg-blue-600",
          "dark:hover:bg-blue-700"
        );
      });
    });
  
    // Clear All Comments When "Clear History" Is Clicked!
    if (deleteHistory) {
      deleteHistory.addEventListener("click", function (event) {
        event.preventDefault();
        mainTextBox.innerHTML = "";
        mainTextBox.style.display = "none";
      });
    }
  });
  
  
  document.getElementById("questions-page").addEventListener("click", function(){
    window.location.href = "questions.html"
  });