/**
 * TurnBanner Component - COSYgames Visual Genome
 * Displays active turn and optional next turn with high contrast display.
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.TurnBanner = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function TurnBanner(container, options) {
    if (!(this instanceof TurnBanner)) {
      return new TurnBanner(container, options);
    }

    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    this.options = Object.assign({
      currentTurn: 'Player 1',
      nextTurn: null,
      label: 'Current Turn'
    }, options || {});

    this.element = null;
    this.init();
  }

  TurnBanner.prototype.init = function () {
    this.element = document.createElement('div');
    this.element.className = 'turn-banner motion-slide-chain';
    this.render();
    if (this.container) {
      this.container.appendChild(this.element);
    }
  };

  TurnBanner.prototype.render = function () {
    if (!this.element) return;
    const current = this.options.currentTurn || '';
    const next = this.options.nextTurn;
    const label = this.options.label || 'Current Turn';

    let html = '<div class="turn-banner-label">' + escapeHtml(label) + '</div>' +
               '<div class="turn-banner-current">' + escapeHtml(current) + '</div>';

    if (next) {
      html += '<div class="turn-banner-next">Up Next: ' + escapeHtml(next) + '</div>';
    }

    this.element.innerHTML = html;
  };

  TurnBanner.prototype.setTurn = function (currentTurn, nextTurn) {
    this.options.currentTurn = currentTurn;
    if (typeof nextTurn !== 'undefined') {
      this.options.nextTurn = nextTurn;
    }
    this.render();
    if (this.element) {
      this.element.classList.remove('motion-burst');
      void this.element.offsetWidth;
      this.element.classList.add('motion-burst');
    }
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  return TurnBanner;
}));
