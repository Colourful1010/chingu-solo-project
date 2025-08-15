function checkAnswers() {

    let correctAnswers = ['a', 'a', 'b', 'c', 'b', 'c', 'a', 'c', 'b', 'c'];
    let userAnswers = [];

    // Extract user answers from radio buttons
    for (let i = 1; i <= 10; i++) {
        let selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        userAnswers.push(selectedAnswer ? selectedAnswer.value : '');
    }

    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
    }

    // Calculate percentage
    let percentage = (score / correctAnswers.length) * 100;

    // Determine performance analysis based on percentage
    let performanceAnalysis;
    if (percentage >= 80) {
        performanceAnalysis = "Excellent";
        } 
    else if (percentage >= 60) {
        performanceAnalysis = "Good";
        } 
    else {
        performanceAnalysis = "Needs Improvement";
        }

    // Display results
    document.getElementById("result").innerHTML = `
    <center>
        <h1>Congratulations! You have completed the quiz!</h1>
        <h2>Here are your results.</h2>

        <h3>Your name: ${document.getElementById("name").value}</h3>
        <h3>Your total score is: ${score} out of ${correctAnswers.length}</h3>
        <h3>Score in percentage: ${percentage.toFixed(2)}%</h3>
        <h4>${performanceAnalysis}</h4>
        <p>Date:${getCurrentDate()}</p>
    </center>
    `;

    // Hide name input, questions, and submit button

    document.getElementById("quiz").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("result").style.display = "block";




    function getCurrentDate() {
    let currentDate = new Date().toLocaleDateString();
    return currentDate;
    }
}