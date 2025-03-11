function speedDetector() {
    const speed = prompt("Enter car speed:");
    if (speed < 70) {
        alert("Ok");
    } else {
        const points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            alert("License suspended");
        } else {
            alert(`Points: ${points}`);
        }
    }
}
