const { GestureDescription, Finger, FingerCurl } = window.fp;

const ScrollUpGesture = new GestureDescription("scroll-down"); // ✊️
const ScrollDownGesture = new GestureDescription("scroll-up"); // 🖐

// Scroll Up
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
ScrollUpGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ScrollUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ScrollUpGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  ScrollUpGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// Scroll Down
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  ScrollDownGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

const knownGestures = [ScrollUpGesture, ScrollDownGesture];

const gestureStrings = {
  "scroll-up": "🖐",
  "scroll-down": "✊️",
};

export { knownGestures, gestureStrings };
