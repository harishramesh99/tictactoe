document.getElementById('startGame').addEventListener('click', () => {
    const username = document.getElementById('username').value;
   // const gridSize = document.getElementById('gridSize').value;

    if (username === '') {
        alert('Please enter your name');
        return;
    }

    localStorage.setItem('username', username);
   // localStorage.setItem('gridSize', gridSize);

    window.location.href = 'cube.html';
});
