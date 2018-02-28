# react-scroll-sensor

Get the scroll positions of the window object in your component

[![](https://nodei.co/npm/react-scroll-sensor.png?compact=true)](https://nodei.co/npm/react-scroll-sensor/)

[![npm](https://img.shields.io/npm/dm/react-scroll-sensor.svg?style=for-the-badge)](https://www.npmjs.com/package/react-scroll-sensor)
[![npm](https://img.shields.io/npm/l/react-scroll-sensor.svg?style=for-the-badge)](https://www.npmjs.com/package/react-scroll-sensor)

<hr/>

<img src="https://github.com/imbhargav5/react-scroll-sensor/blob/master/.github/react-scroll-sensor.gif?raw=true"/>

<hr/>

## Usage

You can use this to build a sticky div which moves around with the cursor.

```javascript
import ScrollIndicator from "react-scroll-indicator";

<ScrollIndicator throttleDelay={300}>
  {(scrollX, scrollY) => (
    <p
      style={{
        transition: "all 1s ease",
        position: "relative",
        top: `${scrollY}px`,
        flex: "0 0 200px"
      }}
    >
      Hello
    </p>
  )}
</ScrollIndicator>;
```

### Props

| Prop          | Description                                              | Type   | Values        |
| ------------- | -------------------------------------------------------- | ------ | ------------- |
| throttleDelay | The time in milliseconds in which to throttle the event. | Number | `default 300` |

### Render props

| Render prop | Description                                                                                                         | Type    | Values     |
| ----------- | ------------------------------------------------------------------------------------------------------------------- | ------- | ---------- |
| scrollX     | window.scrollX rendered                                                                                             | Number  | 0          |
| scrollY     | window.scrollY                                                                                                      | Number  | 0          |
| mounted     | Whether react-scroll-sensor has already mounted. If it's not, then it's the first render and scroll positions are 0 | Boolean | true/false |

### Enjoy 🎆
