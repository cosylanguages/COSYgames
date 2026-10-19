<div class="go-topbar">
    <button class="go-back cg-btn cg-btn-secondary" onclick="COSYUtils.backToHub()" data-i18n="back_to_games">← Back to Games Hub</button>
    <div class="go-title-wrapper">
        <h1 class="go-title" id="go-title">{{game.display_name}}</h1>
        <div class="go-meta" id="go-meta" data-meta-category="{{game.category_key}}" data-meta-mode="{{game.mode_key}}" data-meta-levels="{{game.levels}}">{{game.category}} · {{game.mode_label}} · CEFR {{game.levels}}</div>
    </div>
    <div id="go-topbar-right">
        <a aria-label="Report an issue" data-i18n-aria-label="report_issue_aria" href="{{repository}}/issues/new?template=bug_report.yml&amp;game={{game.name_param}}" target="_blank" rel="noopener" class="report-issue-link">🚩 <span class="report-issue-text" data-i18n="report_issue">Report Issue</span></a>
    </div>
</div>
