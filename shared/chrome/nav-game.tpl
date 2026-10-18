<nav class="cg-nav">
    <a href="{{root}}index.html" class="cg-nav-brand">
        <img src="{{root}}shared/images/cosygames-logo.png" alt="COSYgames logo" class="cg-nav-logo">
        <span class="cg-nav-brand-text">COSYgames</span>
    </a>
    <div class="cg-nav-right">
        <a href="{{site.languages}}/" class="cg-nav-hub-link" target="_blank" rel="noopener">Home 🏠</a>
        <a href="{{root}}index.html" class="cg-nav-hub-link">All Games 🎮</a>
        <a href="{{site.tools}}/" class="cg-nav-hub-link" target="_blank" rel="noopener">Tools 🔎</a>
        <a href="{{site.events}}/" class="cg-nav-hub-link" target="_blank" rel="noopener">Events 🎉</a>
        <select id="cosy-ui-lang-switcher" class="cosy-lang-select" onchange="if(window.setLanguage)window.setLanguage(this.value)" aria-label="Interface language" title="Interface language">
            {{uiLanguageOptions}}
        </select>
        <button class="cg-theme-btn" onclick="toggleCosyGamesTheme()" aria-label="Toggle dark mode">🌓</button>
    </div>
</nav>
