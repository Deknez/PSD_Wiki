document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Збирає дані з форми
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirm_password = document.getElementById('confirm_password').value;
      const provided_access_code = '5mH9T2xi'; // Статичний код доступу
  
      // Створює об'єкт для відправки на сервер
      const userData = {
        username: username,
        email: email,
        password: password,
        confirm_password: confirm_password,
        provided_access_code: provided_access_code
      };
  
      // Відправляє дані на сервер за допомогою - Fetch API
      fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data.message);
        // Обробка успішної реєстрації
        alert(data.message);
        window.location.href = '/'; // Перенаправлення на сторінку входу
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
    });
  });
  