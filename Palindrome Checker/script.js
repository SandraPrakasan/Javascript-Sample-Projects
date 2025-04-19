document.getElementById('check-btn').addEventListener('click', function() {
    let inputText = document.getElementById('text-input').value;
    let result = document.getElementById('result');
  
    // Check if the input is empty
    if (!inputText.trim()) {
      alert('Please input a value');
      return;
    }
  
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
    // Check if the cleaned text is a palindrome
    if (cleanedText === cleanedText.split('').reverse().join('')) {
      result.textContent = `${inputText} is a palindrome`;
    } else {
      result.textContent = `${inputText} is not a palindrome`;
    }
  });
  