function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const player = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveVertical(player, 50);
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveVertical(player, -50);
    } else if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveHorizontal(player, 50, 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveHorizontal(player, -50, -1);
    }

    if (isTouching(player, coin)) {
        moveCoin();
    }
});

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
};

const moveHorizontal = (element, amount, scaleX) => {
    const currLeft = extractPos(element.style.left);
    element.style.transform = `scale(${scaleX}, 1)`;
    element.style.left = `${currLeft + amount}px`;
};

const extractPos = pos => {
    if (!pos) return 100;
    return parseInt(pos.slice(0, -2));
};

// randomly place coin //
const moveCoin = function() {
    const coinRandomPosX = Math.floor(Math.random() * window.innerWidth);
    const coinRandomPosY = Math.floor(Math.random() * window.innerHeight);

    coin.style.top = `${coinRandomPosY}px`;
    coin.style.left = `${coinRandomPosX}px`;
};

moveCoin();
