// Learning Tank — shared quiz handler.
// Wires up any .quiz block: mark the correct option with data-answer on the
// .quiz element, and (optionally) data-correct / data-incorrect feedback text.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var button = quiz.querySelector(".quiz-submit");
    var feedback = quiz.querySelector(".quiz-feedback");
    if (!button || !feedback) return;

    var answer = quiz.getAttribute("data-answer");
    var correctMsg = quiz.getAttribute("data-correct") || "Correct.";
    var incorrectMsg = quiz.getAttribute("data-incorrect") || "Not quite — try again.";

    button.addEventListener("click", function () {
      var chosen = quiz.querySelector("input[type=radio]:checked");
      feedback.classList.remove("correct", "incorrect");
      if (!chosen) {
        feedback.textContent = "Pick an answer first.";
        feedback.classList.add("incorrect");
        feedback.style.display = "block";
        return;
      }
      var isCorrect = chosen.value === answer;
      feedback.textContent = isCorrect ? correctMsg : incorrectMsg;
      feedback.classList.add(isCorrect ? "correct" : "incorrect");
      feedback.style.display = "block";
    });
  });
});
