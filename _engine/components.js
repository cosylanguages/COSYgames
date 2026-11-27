/**
 * Shared Visual Genome UI Components - COSYgames Engine
 * Exports TurnBanner, ScoreDial, BuzzerButton
 */
(function (root) {
  'use strict';
  // Re-exports components attached to root/window
  root.TurnBanner = root.TurnBanner || null;
  root.ScoreDial = root.ScoreDial || null;
  root.BuzzerButton = root.BuzzerButton || null;
})(typeof self !== 'undefined' ? self : this);
