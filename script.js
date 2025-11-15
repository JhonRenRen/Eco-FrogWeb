document.getElementById('year').textContent = new Date().getFullYear();

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

function openModal() {
  document.getElementById("aboutModal").style.display = "flex";
  document.getElementById("menu").classList.remove("show");
}

function closeModal() {
  document.getElementById("aboutModal").style.display = "none";
}

// ✅ Added for "About the Game"
function openGameInfo() {
  document.getElementById("gameInfoModal").style.display = "flex";
  document.getElementById("menu").classList.remove("show");
}

function closeGameInfo() {
  document.getElementById("gameInfoModal").style.display = "none";
}

// 🔹 Smooth parallax feel (disabled inside About modal)
document.addEventListener("mousemove", (e) => {
  const modal = document.getElementById("aboutModal");
  if (modal.style.display === "flex") return;

  let moveX = (e.clientX / window.innerWidth - 0.5) * 5;
  let moveY = (e.clientY / window.innerHeight - 0.5) * 5;
  document.body.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// 🔹 Auto detect file size (Manual for Dropbox or inaccessible files)
(function() {
  const fileSizeInMB = 10.5; // Set the file size manually (in MB)
  document.getElementById('filesize').textContent = `File size: ${fileSizeInMB.toFixed(2)} MB`;
})();

// 🔹 Falling Leaves Generator
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");

  leaf.style.left = Math.random() * 100 + "vw";

  const size = Math.random() * 40 + 40;
  leaf.style.width = size + "px";
  leaf.style.height = size + "px";

  const duration = Math.random() * 5 + 5;
  leaf.style.animationDuration = duration + "s";
  leaf.style.animationDelay = Math.random() * 5 + "s";

  const leafTypes = ["Images/GreenLeaf.png", "Images/BrownLeaf.png", "Images/leaves.png", "Images/lips.png"];
  const chosen = leafTypes[Math.floor(Math.random() * leafTypes.length)];
  leaf.style.backgroundImage = `url('${chosen}')`;

  document.body.appendChild(leaf);
  setTimeout(() => leaf.remove(), (duration + 5) * 1000);
}

setInterval(createLeaf, 2000);
