document.addEventListener("DOMContentLoaded", () => {
    renderActivityLog();
    initializeSmoothScrolling();
    setupLiveGoalsCounter();
    renderVisualProgressBars();
});

function initializeSmoothScrolling() {
    const actionLinks = document.querySelectorAll(".nav-container a");
    actionLinks.forEach(anchorLink => {
        anchorLink.addEventListener("click", function(event) {
            const destinationId = this.getAttribute("href");
            if (destinationId && destinationId.startsWith("#")) {
                const targetDomNode = document.querySelector(destinationId);
                if (targetDomNode) {
                    event.preventDefault();
                    targetDomNode.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
}

function renderVisualProgressBars() {
    const progressBars = document.querySelectorAll('.Progress-bar');
    
    progressBars.forEach(bar => {
        const percentageText = bar.textContent.trim();
        const percentage = parseInt(percentageText); 
        
        if (!isNaN(percentage)) {
            
            bar.style.position = 'relative';
            bar.style.overflow = 'hidden';
            bar.style.zIndex = '1';
            bar.style.background = '#334155';
            
            bar.style.backgroundImage = `linear-gradient(to right, rgba(51, 195, 240, 0.2) ${percentage}%, transparent ${percentage}%)`;
            bar.style.border = '1px solid rgba(51, 195, 240, 0.4)';
        }
    });
}

let resumeURL = null;

function handleResumeClick() {
  const input = document.getElementById("resumeUpload");

  // If resume already uploaded → open it
  if (resumeURL) {
    window.open(resumeURL, "_blank");
    return;
  }

  // else trigger upload
  input.click();
}

// when file selected
document.getElementById("resumeUpload").addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file && file.type === "application/pdf") {
    resumeURL = URL.createObjectURL(file);

    document.getElementById("resume-status").innerText = "Resume uploaded ✔";

    document.getElementById("resumeBtn").innerText = "View Resume";
  } else {
    alert("Please upload a PDF file only");
  }
});

function openSidebar(){
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeSidebar(){
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

function logout(){
  alert("Logged out");
  window.location.href = "index.html";
}