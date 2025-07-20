function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);

  const resultElement = document.getElementById("result");

  if (height > 0 && weight > 0) {
    const bmi = weight / (height * height);
    let message = "";
    let tips = "";

    if (bmi < 18.5) {
      message = "Underweight";
      tips = `
        - Eat more frequently with healthy snacks<br>
        - Include protein-rich foods and healthy fats<br>
        - Consult a nutritionist for a balanced meal plan<br>
        - Strength training can help build muscle mass
      `;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      message = "Normal weight";
      tips = `
        - Maintain a balanced diet with fruits and veggies<br>
        - Continue regular physical activity (like walking, yoga)<br>
        - Get regular health check-ups<br>
        - Stay hydrated and sleep well
      `;
    } else if (bmi >= 25 && bmi < 29.9) {
      message = "Overweight";
      tips = `
        - Reduce sugar and processed food intake<br>
        - Engage in daily exercise (30+ mins)<br>
        - Focus on portion control and mindful eating<br>
        - Avoid late-night eating
      `;
    } else {
      message = "Obesity";
      tips = `
        - Consult a doctor or dietitian for a personalized plan<br>
        - Start slow with low-impact exercises<br>
        - Focus on calorie control and healthy substitutes<br>
        - Keep a journal to track food and exercise
      `;
    }

    resultElement.innerHTML = `
      <p>Your BMI is <strong>${bmi.toFixed(2)}</strong> - <strong>${message}</strong></p>
      <div><strong>Health Tips:</strong><br>${tips}</div>
    `;
  } else {
    resultElement.innerHTML = "<p style='color:red;'>Please enter valid height and weight!</p>";
  }
}
