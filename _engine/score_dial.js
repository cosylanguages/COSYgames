/**
 * ScoreDial Component - COSYgames Visual Genome
 * Compact score display that scales up automatically under data-context="projector".
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ScoreDial = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function ScoreDial(container, options) {
    if (!(this instanceof ScoreDial)) {
      return new ScoreDial(container, options);
    }

    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    this.options = Object.assign({
      score: 0,
      label: 'Points'
    }, options || {});

    this.element = null;
    this.init();
  }

  ScoreDial.prototype.init = function () {
    this.element = document.createElement('div');
    this.element.className = 'score-dial';
    this.render();
    if (this.container) {
      this.container.appendChild(this.element);
    }
  };

  ScoreDial.prototype.render = function () {
    if (!this.element) return;
    const score = this.options.score !== undefined ? this.options.score : 0;
    const label = this.options.label || 'Points';

    this.element.innerHTML =
      '<div class="score-dial-value">' + score + '</div>' +
      '<div class="score-dial-label">' + escapeHtml(label) + '</div>';
  };

  ScoreDial.prototype.setScore = function (score) {
    this.options.score = score;
    this.render();
    this.animateChange();
  };

  ScoreDial.prototype.addScore = function (delta) {
    this.options.score = (this.options.score || 0) + delta;
    this.render();
    this.animateChange();
  };

  ScoreDial.prototype.animateChange = function () {
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

  return ScoreDial;
}));
