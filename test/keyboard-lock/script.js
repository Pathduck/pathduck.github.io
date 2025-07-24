if (window.self === window.top) {
  if (!("keyboard" in navigator)) {
    alert("Your browser does not support the Keyboard Lock API.");
  }
}

const fullscreenButton = document.querySelector("#fullscreen");
const keyboardButton = document.querySelector("#keyboard");
const pointerButton = document.querySelector("#pointer");
const body = document.body;
const div = document.querySelector("div");
const info = document.querySelector(".info");

const ENTER_FULLSCREEN = "Enter full screen";
const LEAVE_FULLSCREEN = "Leave full screen";
const ACTIVATE_KEYBOARD_LOCK = "Activate keyboard lock";
const DEACTIVATE_KEYBOARD_LOCK = "Dectivate keyboard lock";
const ACTIVATE_POINTER_LOCK= "Activate pointer lock";
const DEACTIVATE_POINTER_LOCK= "Pointer lock activated";

//const LOCKED_KEYS = ["MetaLeft", "MetaRight", "Tab", "KeyN", "KeyT", "Escape"];

let lock = false;

// FULLSCREEN
// Click handler to toggle fullscreen
fullscreenButton.addEventListener("click", async () => {
  if (window.self !== window.top) {
    window.open(location.href, "", "noopener,noreferrer");
    return;
  }
  try {
    if (!document.fullscreen) {
      await document.documentElement.requestFullscreen();
      fullscreenButton.textContent = LEAVE_FULLSCREEN;
      return;
    }
    await document.exitFullscreen();
    fullscreenButton.textContent = ENTER_FULLSCREEN;
  } catch (err) {
    fullscreenButton.textContent = ENTER_FULLSCREEN;
    alert(`${err.name}: ${err.message}`);
  }
});

// KEYBOARD LOCK
// Click handler to toggle keyboard lock
keyboardButton.addEventListener("click", async () => {
  try {
    if (!lock) {
      //await navigator.keyboard.lock(LOCKED_KEYS);
      await navigator.keyboard.lock();
      lock = true;
      keyboardButton.textContent = DEACTIVATE_KEYBOARD_LOCK;
      return;
    }
    navigator.keyboard.unlock();
    keyboardButton.textContent = ACTIVATE_KEYBOARD_LOCK;
    lock = false;
  } catch (err) {
    lock = false;
    keyboardButton.textContent = ACTIVATE_KEYBOARD_LOCK;
    alert(`${err.name}: ${err.message}`);
  }
});

// POINTER LOCK
// Click handler to toggle pointer lock
pointerButton.addEventListener("click", async () => {
  try {
    const isLocked = document.pointerLockElement === document.body;

    if (!isLocked) {
      await document.body.requestPointerLock();
    } else {
      document.exitPointerLock();
    }
  } catch (err) {
    alert(`${err.name}: ${err.message}`);
  }
});

// Update button text based on current pointer lock state
function updatePointerButtonText() {
  const isLocked = document.pointerLockElement === document.body;
  pointerButton.textContent = isLocked
    ? DEACTIVATE_POINTER_LOCK
    : ACTIVATE_POINTER_LOCK;
}

// Listen for lock state changes (user presses Esc, tab switches, etc.)
document.addEventListener("pointerlockchange", updatePointerButtonText);

// Listen for full screen change event
document.addEventListener("fullscreenchange", () => {
  keyboardButton.textContent = ACTIVATE_KEYBOARD_LOCK;
  lock = false;
  if (document.fullscreen) {
    fullscreenButton.textContent = LEAVE_FULLSCREEN;
    document
      .querySelectorAll("main > div:not(.info)")
      .forEach(div => (div.hidden = false));
    return;
  }
  fullscreenButton.textContent = ENTER_FULLSCREEN;
  document
    .querySelectorAll("main > div:not(.info)")
    .forEach(div => (div.hidden = true));
});

// Listen for keydown events
document.addEventListener("keydown", (e) => {
  if (lock) {
    info.style.display = "block";
    setTimeout(() => {
      info.style.display = "none";
    }, 3000);
  }
});
