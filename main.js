const question = document.querySelectorAll(".question");

question.forEach((qst) =>
  qst.addEventListener("click", () => {
    if (qst.parentNode.classList.contains("active")) {
      qst.parentNode.classList.toggle("active");
    } else {
      question.forEach((qst) => qst.parentNode.classList.remove("active"));
      qst.parentNode.classList.add("active");
    }
  })
);
