const dino = document.getElementById("dino");
const obstacle = document.getElementById("obstacle");
const game_area = document.getElementById("game_area");
const restartBtn = document.getElementById("restartBtn");

const makeJump = () => {
  if (dino.classList != "make_dino_jump") {
    dino.classList.add("make_dino_jump");
  }

  setTimeout(() => {
    dino.classList.remove("make_dino_jump");
  }, 500);
};

const checkCollision = () => {
  let dinoPosTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );

  let ObstaclePosLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  if (ObstaclePosLeft < 50 && ObstaclePosLeft > 0 && dinoPosTop >= 130) {
    obstacle.style.animation = "none";
    obstacle.style.display = "none";

    alert("You lost!");
    restartBtn.style.display = "block";
  }
};

const restartGame = () => {
  obstacle.style.animation = "enemy_move 1s infinite linear";
  obstacle.style.display = "block";
  restartBtn.style.display = "none";
};

game_area.addEventListener("click", makeJump);
restartBtn.addEventListener("click", restartGame);

// Start the game initially
setInterval(checkCollision, 10);
