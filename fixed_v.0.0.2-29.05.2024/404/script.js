document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const closeBtn = document.getElementById('closeBtn');

    // Überprüfen, ob der Query-Parameter 404=true ist
    const urlParams = new URLSearchParams(window.location.search);
    const isErrorPage = urlParams.get('404') === 'true';

  
        // Banner anzeigen
        banner.style.display = 'block';
        banner.style.animation = 'slideDown 0.5s forwards';

        // Nach 5 Sekunden Banner ausblenden
        setTimeout(function() {
            banner.style.animation = 'slideUp 0.5s forwards';
            setTimeout(function() {
                banner.style.display = 'none';
            }, 500);
        }, 6000);
    

    // Schließen-Button
    closeBtn.addEventListener('click', function() {
        banner.style.animation = 'slideUp 0.5s forwards';
        setTimeout(function() {
            banner.style.display = 'none';
        }, 500);
    });
});
