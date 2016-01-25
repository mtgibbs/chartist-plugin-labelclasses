# chartist-plugin-labelclasses


[![Build Status](https://travis-ci.org/mtgibbs/chartist-plugin-labelclasses.svg?branch=master)](https://travis-ci.org/mtgibbs/chartist-plugin-labelclasses)

[Chartist-js](https://github.com/gionkunz/chartist-js) Plugin for adding css classes to Labels

## Usage



##### Default Options

The chart options that are valid depend on the chart type.  
- Pie Label Classes are only applied to pie charts.
- X and Y Axis Label Classes are applied to line and bar charts.

```javascript
var defaultOptions = {
  axisXLabelClasses: [],
  axisYLabelClasses: [],
  pieLabelClasses: []
};
```

##### Example Script

The classes are applied in order with the data series that has been defined.

So in this pie chart example:
- 5: 'ct-x'
- 3: 'ct-y'
- 4: 'ct-z'

```javascript
new Chartist.Pie('#example-pie-chart', {
  series:  [5, 3, 4]
} , {
  plugins: [
    Chartist.plugins.ctLabelClasses({
      pieLabelClasses: ['ct-x', 'ct-y', 'ct-z']
    })
  ]
});

new Chartist.Bar('#test-bar-chart', {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  series: [
    [5, 4, 3, 7, 5, 10, 3],
    [1, 2, 3, 4, 5, 6, 7]
  ]
}, {
  seriesBarDistance: 10,
  reverseData: true,
  horizontalBars: true,
  axisY: {
    offset: 70
  },
  plugins: [
    Chartist.plugins.ctLabelClasses({
      axisXLabelClasses: ['first'],
      axisYLabelClasses: ['foo', 'bar', 'foobar']
    })
  ]
});
```

##TODO

- Honor the reverseData flag so that classes for the labels are reversed as well.
- Allow for gaps in classes
- Allow for ranges of classes

##License

Licensed under the WTFPL to be in line with Chartist License.
