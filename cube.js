// Select the cube element
const cubeEl = document.querySelector(".cube");
// Select the toggle move button
const toggleMoveBtn = document.getElementById('toggleMove');
let isMovable = false;  // Variable to track if the cube is movable

let clickX = 0;  // X coordinate when clicking
let clickY = 0;  // Y coordinate when clicking

let moveX = 0;  // X coordinate for movement
let moveY = 0;  // Y coordinate for movement

let lastX = -25;  // Last X coordinate after moving
let lastY = 25;   // Last Y coordinate after moving

// Function to toggle cube movability
const toggleCubeMove = () => {
    isMovable = !isMovable;  // Toggle the movable state
    cubeEl.classList.toggle('2d', !isMovable);  // Toggle 2D class
    // Change the button icon based on the movable state
    toggleMoveBtn.innerHTML = isMovable ? '<i class="fas fa-arrows-alt"></i>' : '<i class="fas fa-arrows-alt-h"></i>';
};

// Event listener for the toggle move button
toggleMoveBtn.addEventListener('click', toggleCubeMove);

// Function to handle mouse movement
const onMouseMove = (e) => {
    if (!isMovable) return;  // Only move if the cube is movable

    const nowX = e.screenX;  // Current X coordinate
    const nowY = e.screenY;  // Current Y coordinate

    moveX = lastX + clickY - nowY;  // Calculate new X coordinate
    moveY = lastY - clickX + nowX;  // Calculate new Y coordinate

    // Use GSAP to animate the cube rotation
    gsap.to(cubeEl, 0.1, {
        transform: `rotateX(${moveX}deg) rotateY(${moveY}deg)`,
    });
};

// Function to handle mouse up event
const onMouseUp = () => {
    if (!isMovable) return;  // Only proceed if the cube is movable
    
    lastX = moveX;  // Update last X coordinate
    lastY = moveY;  // Update last Y coordinate
    window.removeEventListener("mousemove", onMouseMove);  // Remove mouse move listener
};

// Event listener for mousedown event on the cube
cubeEl.addEventListener("mousedown", (e) => {
    if (!isMovable) return;  // Only proceed if the cube is movable

    clickX = e.screenX;  // Set click X coordinate
    clickY = e.screenY;  // Set click Y coordinate

    window.addEventListener("mousemove", onMouseMove);  // Add mouse move listener
    window.addEventListener("mouseup", onMouseUp, { once: true });  // Add mouse up listener
});

// Event listener for touch start event on the cube
cubeEl.addEventListener(
    "touchstart",
    (e) => {
        if (!isMovable) return;  // Only proceed if the cube is movable

        clickX = e.targetTouches[0].screenX;  // Set click X coordinate for touch
        clickY = e.targetTouches[0].screenY;  // Set click Y coordinate for touch

        // Function to handle touch move
        const onTouchMove = (e) => {
            if (!isMovable) return;  // Only proceed if the cube is movable

            const nowX = e.targetTouches[0].screenX;  // Current X coordinate for touch
            const nowY = e.targetTouches[0].screenY;  // Current Y coordinate for touch

            moveX = lastX + clickY - nowY;  // Calculate new X coordinate
            moveY = lastY - clickX + nowX;  // Calculate new Y coordinate

            // Use GSAP to animate the cube rotation
            gsap.to(cubeEl, 0.1, {
                transform: `rotateX(${moveX}deg) rotateY(${moveY}deg)`,
            });
        };

        // Function to handle touch end
        const onTouchEnd = () => {
            if (!isMovable) return;  // Only proceed if the cube is movable
            
            lastX = moveX;  // Update last X coordinate
            lastY = moveY;  // Update last Y coordinate
            window.removeEventListener("touchmove", onTouchMove);  // Remove touch move listener
        };

        window.addEventListener("touchmove", onTouchMove);  // Add touch move listener
        window.addEventListener("touchend", onTouchEnd, { once: true });  // Add touch end listener
    },
    false
);

// Function to load Tic Tac Toe components on each face of the cube
const loadTicTacToeComponents = () => {
    const faces = ['front', 'back', 'top', 'bottom', 'left', 'right'];
    faces.forEach(face => {
        const container = document.getElementById(`tic-tac-toe-${face}`);
        container.innerHTML = `
            <table>
                <tr>
                    <td><button class="cell" data-index="0"></button></td>
                    <td><button class="cell" data-index="1"></button></td>
                    <td><button class="cell" data-index="2"></button></td>
                </tr>
                <tr>
                    <td><button class="cell" data-index="3"></button></td>
                    <td><button class="cell" data-index="4"></button></td>
                    <td><button class="cell" data-index="5"></button></td>
                </tr>
                <tr>
                    <td><button class="cell" data-index="6"></button></td>
                    <td><button class="cell" data-index="7"></button></td>
                    <td><button class="cell" data-index="8"></button></td>
                </tr>
            </table>
        `;
    });

    // Add event listeners to each cell for making moves
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('click', () => makeMove(cell.dataset.index));
    });

    printOnBoard();  // Print the initial board state
};

// Load Tic Tac Toe components when the window loads
window.onload = loadTicTacToeComponents;
