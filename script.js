function updateProgress(){
    const input=document.querySelectorAll('.inner-circle');
    for(let i=0;i<input.length;i++){

    
    let percentage = input[i].textContent || input[i].innerText;
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
        percentage = 0; // Default to 0% if invalid
    }
    const circle=document.querySelectorAll('.outer-circle')[i];
    let color;
    if (percentage <= 25) {
        color = '#ff4d4d'; // Red
    } else if (percentage <= 50) {
        color = '#ff9933'; // Orange
    } else if (percentage <= 75) {
        color = '#ffcc33'; // Yellow
    } else {
        color = '#4caf50'; // Green
    } 
    circle.style.backgroundColor=color;
}
}
// for(let i=0;i<4;i++){
//     if (i <= 25) {
//         color = '#ff4d4d'; // Red
//     } else if (percentage <= 50) {
//         color = '#ff9933'; // Orange
//     } else if (percentage <= 75) {
//         color = '#ffcc33'; // Yellow
//     } else {
//         color = '#4caf50'; // Green
//     } 
//     document.querySelectorAll[i].style.backgroundColor="#4caf50"
// }
              $(function() {
              $('.chart').easyPieChart({
                size: 60,
                barColor: "#36e617",
                scaleLength: 0,
                lineWidth: 8,
                trackColor: "#525151",
                lineCap: "circle",
                animate: 2000,
              });
            });