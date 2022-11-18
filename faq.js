const accordion_questions = document.querySelectorAll(".faq-accordion-question");


// checks a click event and extends the accordion according to the size needed
accordion_questions.forEach((accordion_question) => { 
    accordion_question.addEventListener('click', () => {
        const height = accordion_question.nextElementSibling.scrollHeight;
        console.log(height);
        accordion_question.classList.toggle('active-header');
        if(accordion_question.classList.contains('active-header')) {
            accordion_question.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            accordion_question.nextElementSibling.style.maxHeight = '0px';
        }
    });
});

