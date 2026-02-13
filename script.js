 const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Make "No" button run away!
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// When "Yes" is clicked
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="container">
      <h1> Thankyou for choosing Yes 🙃
      ! ❤️🌸🪷
      Please don't mind I made it out of fun, by just using chat gpt, and deploying it myself, 😓</h1>
      <p>Happy Valentine’s Day 😃🤍</p>
      <img src> " https://giphy.com/gifs/myemotionalsupportanimal-love-cat-priceless-yjvfyJN1regrQLDxGl❤️"</img>
    </div>
  `;

});



