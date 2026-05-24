const recentActivities = [
    { name: "Meditation Session", time: "08:00 AM", status: "✓ Completed" },
    { name: "Project Review", time: "10:30 AM", status: "Active" },
    { name: "Workout Tracking", time: "01:00 PM", status: "Pending" },
    { name: "Reading Habit", time: "04:00 PM", status: "✓ Completed" }
];

document.addEventListener("DOMContentLoaded", () => {
    renderActivityLog();
    initializeSmoothScrolling();
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