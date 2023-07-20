document.addEventListener("DOMContentLoaded", function () {
    const heading = document.getElementById("heading");
    const texts = ["Frontend Developer", "Programmer", "Backend Developer"];
    let currentTextIndex = 0;
    let currentLetterIndex = 0;
  
    function animateText() {
      const currentText = texts[currentTextIndex];
      heading.textContent = currentText.substring(0, currentLetterIndex + 1);
      currentLetterIndex++;
  
      if (currentLetterIndex <= currentText.length) {
        setTimeout(animateText, 100);
      } else {
        currentLetterIndex = 0;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(animateText, 2000);
      }
    }
  
    animateText();
  });
  