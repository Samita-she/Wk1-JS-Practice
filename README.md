# Wk1-JS-Practice
# Week 1 Toy Problems

This repository contains solutions to three JavaScript toy problems assigned during Week 1. Each challenge is structured in its own folder with a dedicated `.js` file for the solution.

## Project Structure
```
.
├── challenge-1-student-grade-generator
│   └── gradeGenerator.js
├── challenge-2-speed-detector
│   └── speedDetector.js
├── challenge-3-net-salary-calculator
│   └── netSalaryCalculator.js
└── README.md
```

---

## How to Run the Code

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd week-1-toy-problems
   ```

2. **Run Each Solution**
   - For the **Student Grade Generator**:
     ```bash
     node challenge-1-student-grade-generator/gradeGenerator.js
     ```

   - For the **Speed Detector**:
     ```bash
     node challenge-2-speed-detector/speedDetector.js
     ```

   - For the **Net Salary Calculator**:
     ```bash
     node challenge-3-net-salary-calculator/netSalaryCalculator.js
     ```

> **Note:** Ensure Node.js is installed on your system to run these files.

---

## Challenge Explanations

### 1. Student Grade Generator
- This function prompts the user to input student marks (between 0 and 100) and assigns a corresponding grade:
  - **A:** Greater than 79
  - **B:** Between 60 and 79
  - **C:** Between 49 and 59
  - **D:** Between 40 and 49
  - **E:** Less than 40

### 2. Speed Detector
- This program evaluates the speed of a car based on the following logic:
  - **Speed below 70:** "Ok"
  - **Speed above 70:** Adds 1 demerit point for every 5 km/s above the limit.
  - **More than 12 points:** "License suspended"

### 3. Net Salary Calculator
- This program calculates an individual's net salary by:
  - Getting the inputs for **basic salary** and **benefits**.
  - Calculating:
    - **Payee (Tax)**
    - **NHIF Deductions**
    - **NSSF Deductions**
    - **Gross Salary**
    - **Net Salary**

> **Important:** The tax rates, NHIF, and NSSF values follow Kenyan regulations.

---

## Author
**Sheila Khanyunya Samita**

---

## License
This project is open-source and free to use under the [MIT License](LICENSE).

