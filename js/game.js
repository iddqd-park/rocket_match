$(document).ready(function () {
    // Game State
    let level = 1;
    let score = 0;
    let maxTime = 20000;
    let currentTime = maxTime;
    let timerInterval;
    let isPlaying = false;
    let isPaused = false;
    let currentTarget = null;
    let targetDetailType = "";

    // Audio Context
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    const bgm = document.getElementById('bgm');

    // DOM Elements
    const $gameArea = $('#game-area');
    const $timeBar = $('#time-bar');
    const $overlay = $('#overlay');
    const $overlayTitle = $('#overlay-title');
    const $overlayMsg = $('#overlay-msg');
    const $startBtn = $('#start-btn');
    const $levelDisplay = $('#level-display');
    const $targetName = $('#target-name');
    const $targetOrder = $('#target-order');
    const $targetDetail = $('#target-detail');
    const $levelupOverlay = $('#levelup-overlay');

    // Start Game
    $startBtn.on('click', function () {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        bgm.volume = 0.5;
        bgm.play().catch(e => console.log("BGM Play failed:", e));

        startGame();
    });

    function startGame() {
        level = 1;
        score = 0;
        maxTime = 20000;
        currentTime = maxTime;
        isPlaying = true;
        isPaused = false;

        $overlay.addClass('hidden');
        updateLevelDisplay();
        startTimer();
        nextStage();
    }

    function gameOver() {
        isPlaying = false;
        clearInterval(timerInterval);
        bgm.pause();
        bgm.currentTime = 0;

        playTone(150, 'sawtooth', 0.5);

        $overlayTitle.text("GAME OVER");
        $overlayMsg.html(`
            <div class="text-center">
                <h3>LEVEL: ${level}</h3>
                <h3>SCORE: ${score}</h3>
                <br>
                <p></p>
            </div>
        `);
        $startBtn.text("RETRY");
        $overlay.removeClass('hidden');
    }

    function startTimer() {
        clearInterval(timerInterval);
        let lastTick = Math.floor(currentTime / 1000);

        timerInterval = setInterval(function () {
            if (!isPlaying || isPaused) return;

            currentTime -= 50;

            const currentTick = Math.floor(currentTime / 1000);
            if (currentTick < lastTick && currentTick < 5) {
                playTone(800, 'sine', 0.05, 0.1);
                lastTick = currentTick;
            } else if (currentTick < lastTick) {
                lastTick = currentTick;
            }

            const percentage = (currentTime / maxTime) * 100;
            $timeBar.css('width', percentage + '%');

            if (percentage < 30) {
                $timeBar.css('background-color', 'red');
            } else {
                $timeBar.css('background-color', 'var(--hacker-green)');
            }

            if (currentTime <= 0) {
                gameOver();
            }
        }, 50);
    }

    function updateLevelDisplay() {
        $levelDisplay.text(`LV.${level}`);
    }

    function nextStage() {
        if (!isPlaying) return;

        const targetIndex = Math.floor(Math.random() * MOCK_DATA.length);
        currentTarget = MOCK_DATA[targetIndex];

        const orderIndex = Math.floor(Math.random() * currentTarget.orders.length);
        const targetOrderEmoji = currentTarget.orders[orderIndex];

        const detailTypes = ['address', 'contact', 'email'];
        targetDetailType = detailTypes[Math.floor(Math.random() * detailTypes.length)];
        const targetDetailValue = currentTarget[targetDetailType];

        $targetName.text(currentTarget.name);
        $targetOrder.text(targetOrderEmoji);
        $targetDetail.text(`${currentTarget.address} | ${currentTarget.contact} | ${currentTarget.email}`);

        $gameArea.empty();

        const correctPosition = Math.floor(Math.random() * 9);

        for (let i = 0; i < 9; i++) {
            const $cell = $('<div class="game-cell"></div>');
            let emoji = "";
            let text = "";

            if (i === correctPosition) {
                emoji = targetOrderEmoji;
                text = targetDetailValue;
                $cell.data('correct', true);
            } else {
                const useTargetEmoji = Math.random() < 0.3;
                if (useTargetEmoji) {
                    emoji = targetOrderEmoji;
                    text = getRandomWrongText(currentTarget);
                } else {
                    emoji = getRandomEmoji();
                    const useTargetText = Math.random() < 0.3;
                    if (useTargetText) {
                        text = targetDetailValue;
                    } else {
                        text = getRandomWrongText(currentTarget);
                    }
                }
            }

            $cell.append(`<div class="cell-emoji">${emoji}</div>`);
            $cell.append(`<div class="cell-text">${text}</div>`);

            $cell.on('mousedown touchstart', function (e) {
                handleCellClick($(this), e);
            });

            $gameArea.append($cell);
        }
    }

    function handleCellClick($cell, e) {
        if (!isPlaying || isPaused) return;
        if ($cell.hasClass('clicked')) return;

        $cell.addClass('clicked');
        setTimeout(() => $cell.removeClass('clicked'), 200);

        const pos = getEventPos(e, $cell);

        if ($cell.data('correct')) {
            score++;

            // Enhanced VFX
            $cell.addClass('correct-flash');

            createParticles(pos.x, pos.y);
            showFloatingText(pos.x, pos.y, "+2 SEC");

            playTone(600, 'sine', 0.1);
            setTimeout(() => playTone(800, 'sine', 0.1), 100);

            currentTime = Math.min(currentTime + 2000, maxTime);

            // Delay next stage slightly to show the effect
            isPaused = true;
            setTimeout(() => {
                isPaused = false;
                if (score % 5 === 0) {
                    levelUp();
                } else {
                    nextStage();
                }
            }, 400); // 400ms delay to enjoy the flash

        } else {
            $cell.addClass('shake');
            playTone(150, 'sawtooth', 0.3);
            currentTime -= 2000;
            showFloatingText(pos.x, pos.y, "-2 SEC", "red");
            setTimeout(() => $cell.removeClass('shake'), 500);
        }
    }

    function levelUp() {
        level++;
        isPaused = true;

        updateLevelDisplay();
        $('.levelup-title').text(`LEVEL ${level}`);
        maxTime = Math.max(5000, 20000 - (level * 1000));

        $levelupOverlay.removeClass('hidden');

        playTone(400, 'square', 0.1);
        setTimeout(() => playTone(600, 'square', 0.1), 100);
        setTimeout(() => playTone(800, 'square', 0.2), 200);
        setTimeout(() => playTone(1000, 'square', 0.4), 300);

        setTimeout(() => {
            $levelupOverlay.addClass('hidden');
            isPaused = false;
            nextStage();
        }, 1500);
    }

    function getRandomWrongText(target) {
        let randomPerson;
        do {
            randomPerson = MOCK_DATA[Math.floor(Math.random() * MOCK_DATA.length)];
        } while (randomPerson === target && MOCK_DATA.length > 1);

        const types = ['address', 'contact', 'email'];
        const type = types[Math.floor(Math.random() * types.length)];
        return randomPerson[type];
    }

    function getRandomEmoji() {
        const allEmojis = [...CONFUSION_ITEMS];
        MOCK_DATA.forEach(p => allEmojis.push(...p.orders));
        return allEmojis[Math.floor(Math.random() * allEmojis.length)];
    }

    function playTone(freq, type, duration, vol = 0.3) {
        if (!audioCtx) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    }

    function createParticles(x, y) {
        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            const $p = $('<div class="particle"></div>');
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 150 + 50;
            const tx = Math.cos(angle) * velocity + 'px';
            const ty = Math.sin(angle) * velocity + 'px';

            const colors = ['var(--hacker-green)', '#fff', '#ccffcc'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            $p.css({
                left: x + 'px',
                top: y + 'px',
                '--tx': tx,
                '--ty': ty,
                backgroundColor: color
            });

            $('body').append($p);
            setTimeout(() => $p.remove(), 800);
        }
    }

    function showFloatingText(x, y, text, color = "#fff") {
        const $el = $('<div class="floating-text"></div>');
        $el.text(text);
        $el.css({
            left: x + 'px',
            top: y + 'px',
            color: color
        });
        $('body').append($el);
        setTimeout(() => $el.remove(), 1000);
    }

    // Helper to get coordinates from mouse or touch event
    function getEventPos(e, $el) {
        let x, y;
        if (e.type === 'touchstart' || e.type === 'touchmove') {
            const touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            x = touch.pageX;
            y = touch.pageY;
        } else if (e.type === 'mousedown' || e.type === 'click') {
            x = e.pageX;
            y = e.pageY;
        }

        // Fallback if undefined (shouldn't happen with correct event handling)
        if (x === undefined || y === undefined) {
            const offset = $el.offset();
            x = offset.left + $el.width() / 2;
            y = offset.top + $el.height() / 2;
        }
        return { x, y };
    }
});
