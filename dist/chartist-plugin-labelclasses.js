(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['Chartist.plugins.ctLabelClasses'] = factory();
  }
}(this, function () {

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define([], function() {
        return (root.returnExportsGlobal = factory());
      });
    } else if (typeof exports === 'object') {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like enviroments that support module.exports,
      // like Node.
      module.exports = factory();
    } else {
      root['Chartist.plugins.ctLabelClasses'] = factory();
    }
  }(this, function() {

    /**
     * Chartist.js plugin to add classes to chart labels
     */
    /* global Chartist */
    (function(window, document, Chartist) {
      'use strict';

      var defaultOptions = {
        axisXLabelClasses: [],
        axisYLabelClasses: [],
        pieLabelClasses: []
      };

      Chartist.plugins = Chartist.plugins || {};
      Chartist.plugins.ctLabelClasses = function(options) {

        return function ctLabelClasses(chart) {

          options = Chartist.extend({}, defaultOptions, options);

          chart.on('draw', function(data) {
            if (data.type === 'label') {

              if (data.axis) {
                var childElement = data.element.querySelector('span');
                if (data.axis.counterUnits.pos === 'x') {
                  applyClassToLabel(options.axisXLabelClasses, data.index, childElement);
                } else if (data.axis.counterUnits.pos === 'y') {
                  applyClassToLabel(options.axisYLabelClasses, data.index, childElement);
                }
              } else {
                applyClassToLabel(options.pieLabelClasses, data.index, data.element);
              }
            }
          });
        };
      };

    }(window, document, Chartist));

    return Chartist.plugins.ctLabelClasses;
  }));

  function applyClassToLabel(classesArray, index, element) {
    if (classesArray && index <= classesArray.length - 1) {
      var cssClass = classesArray[index];

      if (element) {
        element.addClass(cssClass);
      }
    }
  }

  return Chartist.plugins.ctLabelClasses;

}));
