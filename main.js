document.addEventListener('DOMContentLoaded', function () {

    const navLinks = document.querySelectorAll('nav a');
  
    const contentSections = document.querySelectorAll('.content-section');
  
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
  
        const targetId = link.getAttribute('href').substring(1);
  
        contentSections.forEach(function (section) {
          if (section.id === targetId) {
            section.classList.remove('hidden');
          } else {
            section.classList.add('hidden');
          }
        });
  
        updateAsideMenu(targetId);
      });
    });
  
    const loginForm = document.getElementById('login-form');
  
    const username = "User";
    const password = "User";
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const usernameInput = document.getElementById('username').value;
      const passwordInput = document.getElementById('password').value;
  
      if (usernameInput === username && passwordInput === password) {
        alert('Επιτυχής σύνδεση.Δεν προλαβα να υλοποιησω τα υπολοιπα ζητουμενα');
        updateButtonVisibility(true);
    
      } else {
        alert('Αποτυχία σύνδεσης. Ελέγξτε τα στοιχεία σας.'); 
        updateButtonVisibility(false);
      }
      const disconnectButton = document.getElementById('disconnect-button');
  
      
      disconnectButton.addEventListener('click', function (event) {
        event.preventDefault();
        updateButtonVisibility(false);
      });
    });
  
  
    function updateButtonVisibility(isAuthenticated) {
      const addProjectButton = document.getElementById('add-project-button');
      const editProjectButton = document.getElementById('edit-project-button');
      const manageProjectsButton = document.getElementById('manage-projects-button');
  
      if (isAuthenticated) {
  
        addProjectButton.style.display = 'block';
        editProjectButton.style.display = 'block';
        manageProjectsButton.style.display = 'block';
      } else {
  
        addProjectButton.style.display = 'none';
        editProjectButton.style.display = 'none';
        manageProjectsButton.style.display = 'none';
      }
    }
  
    function updateAsideMenu(section) {
      document.querySelectorAll('aside > div').forEach(div => {
        div.style.display = div.id === section ? 'block' : 'none';
      });
    }
  });