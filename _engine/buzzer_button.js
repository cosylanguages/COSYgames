/**
 * BuzzerButton Component - COSYgames Visual Genome
 * Big tap target button with pressed-state animation & haptic scale bounce.
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BuzzerButton = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function BuzzerButton(container, options) {
    if (!(this instanceof BuzzerButton)) {
      return new BuzzerButton(container, options);
    }

    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    this.options = Object.assign({
      label: 'BUZZ!',
      onBuzz: null,
      disabled: false
    }, options || {});

    this.element = null;
    this.init();
  }

  BuzzerButton.prototype.init = function () {
    this.element = document.createElement('button');
    this.element.type = 'button';
    this.element.className = 'buzzer-button';
    this.element.innerText = this.options.label || 'BUZZ!';
    if (this.options.disabled) {
      this.element.disabled = true;
    }

    const self = this;

    const handlePress = function (e) {
      if (e) e.preventDefault();
      if (self.options.disabled) return;
      self.trigger();
    };

    this.element.addEventListener('click', handlePress);

    if (this.container) {
      this.container.appendChild(this.element);
    }
  };

  BuzzerButton.prototype.trigger = function () {
    if (!this.element) return;

    // Haptic scale bounce animation
    this.element.classList.remove('buzzer-button-bounce');
    void this.element.offsetWidth;
    this.element.classList.add('buzzer-button-bounce');

    // Trigger haptic vibration if supported on device
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate([40, 20, 40]);
      } catch (e) {}
    }

    if (typeof this.options.onBuzz === 'function') {
      this.options.onBuzz.call(this);
    }
  };

  BuzzerButton.prototype.setDisabled = function (disabled) {
    this.options.disabled = !!disabled;
    if (this.element) {
      this.element.disabled = this.options.disabled;
    }
  };

  return BuzzerButton;
}));
