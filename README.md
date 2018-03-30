# react-baidumap
Display the location on Baidu map.

## Demo link

https://ruoru.github.io/react-baidumap

## Support environment

* Support Chrome, Firefox, Safari.

## Applicable scene

1.  use in Explorer;

## Interface design

### Point

| property name       | type     | description                                                                                                               | default  |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- | -------- |
| mapDOMId \*         | String   | The document Element ID of this component.                                                                                | -        |
| centerPoint \*      | Object   | The map center Point and show positioning icon. eg: { lng: 113.952682, lat: 22.553414 }                                   | -        |

## Install

```bash
npm install --save react-baidumap
```

## Example code

[Location code](./example/views/Location.js)

```js
import React, { Component } from 'react';
import { Point } from '../../src';
class Location extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="location">
        <Point mapDOMId="our-address" centerPoint={{ lng: 113.952682, lat: 22.553414 }} />
      </div>
    );
  }
};
export default Location;
```

## Local development

```sh
$ git clone https://github.com/ruoru/react-baidumap.git
$ npm install
$ npm start
```
