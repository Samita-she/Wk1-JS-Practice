function gradeGenerator() {
    const marks = prompt("Enter student marks (0-100):");
    let grade;
    if (marks > 79) grade = "A";
    else if (marks >= 60) grade = "B";
    else if (marks >= 50) grade = "C";
    else if (marks >= 40) grade = "D";
    else grade = "E";
    alert(`Grade: ${grade}`);
}
