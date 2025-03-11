function netSalaryCalculator() {
    const salary = parseFloat(prompt("Enter your basic salary:"));
    const benefits = parseFloat(prompt("Enter your benefits:"));
    const grossSalary = salary + benefits;
    const payee = grossSalary * 0.3; // Example 30% tax
    const nhif = 1700; // Example NHIF deduction
    const nssf = 400; // Example NSSF deduction
    const netSalary = grossSalary - (payee + nhif + nssf);
    alert(`Net Salary: ${netSalary.toFixed(2)}`);
}
