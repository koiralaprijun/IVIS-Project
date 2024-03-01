import React from "react"
import "/Users/amy/Library/Mobile\ Documents/com\~apple\~CloudDocs/2_Master/DH2321\ Information\ Visualization/Group\ project/src/css/Faq.css"

document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.getElementById('faq-container');
    const faqs = [
      { question: 'What is PM?', answer: 'PM stands for Particulate Matter which is a mixture of solid particles and liquid droplets found in the air.' },
      { question: 'What is O2?', answer: 'O2 stands for Oxygen, which is an essential element for life on Earth.' },
      { question: 'What is NOx?', answer: 'NOx is a generic term for the nitrogen oxides that are most relevant for air pollution.' },
      // Xinyue will add more FAQ later
    ];
  
    faqs.forEach((faq, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'faq-question';
     
      if (index === 0) {
        questionDiv.classList.add('active');
      }

      questionDiv.innerHTML = `<div class="triangle"></div> ${faq.question}`;
      
      const answerDiv = document.createElement('div');
      answerDiv.className = 'faq-answer';
      answerDiv.textContent = faq.answer;
      
      questionDiv.addEventListener('click', () => {
        questionDiv.classList.toggle('active');
        answerDiv.style.display = answerDiv.style.display === 'none' ? 'block' : 'none';
      });
      
      faqContainer.appendChild(questionDiv);
      faqContainer.appendChild(answerDiv);
    });
  });
  