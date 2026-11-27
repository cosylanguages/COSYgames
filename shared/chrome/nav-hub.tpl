<nav class="cg-nav">
    <a href="{{root}}index.html" class="cg-nav-brand">
        <img src="{{root}}shared/images/cosygames-logo.png" alt="COSYgames logo" class="cg-nav-logo">
        <span class="cg-nav-brand-text">COSYgames</span>
    </a>
    <div class="cg-nav-right">
        <a href="#grid-speaking" class="cg-nav-hub-link" data-i18n="nav_speaking">Speaking & Fluency 🗣️</a>
        <a href="#grid-mystery" class="cg-nav-hub-link" data-i18n="nav_mystery">Mystery & Guesses 🔍</a>
        <a href="#grid-vocab" class="cg-nav-hub-link" data-i18n="nav_vocab">Vocab & Puzzles 🧩</a>
        <select id="cosy-ui-lang-switcher" class="cosy-lang-select" onchange="if(window.setLanguage)window.setLanguage(this.value)" aria-label="Interface language" title="Interface language">
            {{uiLanguageOptions}}
        </select>
        <button class="cg-theme-btn" onclick="toggleCosyGamesTheme()" aria-label="Toggle dark mode">🌓</button>
    </div>
</nav>
