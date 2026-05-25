const recentActivities = [
    { name: "Meditation Session", time: "08:00 AM", status: "✓ Completed" },
    { name: "Project Review", time: "10:30 AM", status: "Active" },
    { name: "Workout Tracking", time: "01:00 PM", status: "Pending" },
    { name: "Reading Habit", time: "04:00 PM", status: "✓ Completed" }
];

document.addEventListener("DOMContentLoaded", () => {
    renderActivityLog();
    initializeSmoothScrolling();
    setupLiveGoalsCounter();
    renderVisualProgressBars();
});

function renderActivityLog() {
    const tableBody = document.getElementById("activityTableBody");
    if (!tableBody) return;

    tableBody.innerHTML = "";
    recentActivities.forEach(item => {
        let statusStyle = "";
        if (item.status.includes("Completed")) {
            statusStyle = "color: #10B981; font-weight: 600;"; 
        } else if (item.status === "Active") {
            statusStyle = "color: #3b82f6; font-weight: 600;"; 
        } else {
            statusStyle = "color: #f59e0b; font-weight: 600;"; 
        }

        const tableRowElement = `
            <tr>
                <td><strong>${item.name}</strong></td>
                <td>${item.time}</td>
                <td><span style="${statusStyle}">${item.status}</span></td>
            </tr>
        `;
        tableBody.innerHTML += tableRowElement;
    });
}


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

function setupLiveGoalsCounter() {
  
    const metricCards = document.querySelectorAll('.metric-card');
    let goalsCardValueNode = null;

    metricCards.forEach(card => {
        if(card.querySelector('.metric-title').textContent.trim() === "Daily Goals") {
            goalsCardValueNode = card.querySelector('.metric-value');
        }
    });

    if (!goalsCardValueNode) return;

    const taskCheckboxes = document.querySelectorAll('.Tasks input[type="checkbox"]');
    
    function updateCounter() {
        const totalTasks = taskCheckboxes.length;
    
        const completedTasks = Array.from(taskCheckboxes).filter(cb => cb.checked).length;
        
    
        const baseScore = 6; 
        const liveScore = baseScore + completedTasks;
        const totalPossible = baseScore + totalTasks;

        
        goalsCardValueNode.textContent = `${liveScore} / ${totalPossible}`;
    }

    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCounter);
    });

    updateCounter();
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