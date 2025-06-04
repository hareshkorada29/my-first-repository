document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const mainImage = document.getElementById('main-image');
    const mainText = document.querySelector('#main-text h1');
    const mainDesc = document.getElementById('main-desc');

    // Get current main content
    const tempName = mainText.textContent.replace(' 🍽️', '');
    const tempDesc = mainDesc.textContent;
    const tempImgSrc = mainImage.src;

    // Get clicked item content
    const clickedImg = item.querySelector('img');
    const clickedImgSrc = clickedImg.src;
    const clickedName = item.getAttribute('data-name');
    const clickedDesc = item.getAttribute('data-desc');

    // Swap text and image
    mainText.textContent = clickedName + ' 🍽️';
    mainDesc.textContent = clickedDesc;
    mainImage.src = clickedImgSrc;

    // Set clicked item back to old main content
    clickedImg.src = tempImgSrc;
    item.setAttribute('data-name', tempName);
    item.setAttribute('data-desc', tempDesc);
    item.querySelector('h3').textContent = tempName;
    item.querySelector('p').textContent = tempDesc;
  });
});
