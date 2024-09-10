function openInfograficoModal(element) {
    var modal = document.getElementById('infograficoModal');
    var modalImg = document.getElementById('infograficoImg');
    var captionText = document.getElementById('infograficoCaption');

    var img = element.querySelector('img');
    var caption = element.querySelector('.infografico-content p').innerText;

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerText = caption;

    modal.classList.add('active');
}


function closeInfograficoModal() {
    var modal = document.getElementById('infograficoModal');
    modal.style.display = "none";
    modal.classList.remove('active');

}

document.querySelector('.close-infografico').addEventListener('click', closeInfograficoModal);

window.addEventListener('click', function(event) {
    var modal = document.getElementById('infograficoModal');
    if (event.target === modal) {
        closeInfograficoModal();
    }
});


function openCampanhaModal(element) {
    var modal = document.getElementById('campanhaModal');
    var modalImg = document.getElementById('campanhaImg');
    var captionText = document.getElementById('campanhaCaption');

    var img = element.querySelector('img');
    var caption = element.querySelector('.campanha-content h3').innerText;

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerText = caption;

    modal.classList.add('active');
}

function closeCampanhaModal() {
    var modal = document.getElementById('campanhaModal');
    modal.style.display = "none";
    modal.classList.remove('active');

}

document.querySelector('.close-campanha').addEventListener('click', closeCampanhaModal);

window.addEventListener('click', function(event) {
    var modal = document.getElementById('campanhaModal');
    if (event.target === modal) {
        closeCampanhaModal();
    }
});

