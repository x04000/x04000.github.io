let t;
let styleTable = {
    1 : "https://static.moewalls.com/videos/preview/2023/deep-space-galactic-preview.mp4",
    2 : "https://static.moewalls.com/videos/preview/2024/purple-infinity-galaxy-preview.mp4",
    3 : "https://static.moewalls.com/videos/preview/2023/universe-waterfall-preview.mp4",
    4 : "https://static.moewalls.com/videos/preview/2024/moonlight-night-sakura-river-preview.mp4",
    5 : "https://static.moewalls.com/videos/preview/2021/the-bridge-under-the-northern-lights-preview.mp4"
};

function changeStyle(t) {
    if (!styleTable[t]) { t = 1; }
    document.getElementById("bg-video-src").src = styleTable[t];
    document.getElementById("bg-video").load();
    document.getElementById("css-ref").href = "styles"+t+".css";
}