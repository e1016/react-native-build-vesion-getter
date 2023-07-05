# react-native-build-vesion-getter

✨ Get easy version code and name from your app without access any permissions or extra info (lightweight alternative to react-native-device-info basically), works on Android an iOS only.

## Installation

```sh
npm i -s react-native-build-vesion-getter
```

## Usage

```js
import useVersion from 'react-native-build-vesion-getter'

// ...

const { name, code, done } = useVersion()
```

|prop | type    | default | description|
|----|---------|---------|-------------|
|name | string  | ""      | version name something like '4.79.3', this is a empty string before its done|
|code | number  | 0       | version code something like 18, its 0 before its done|
|done | boolean | false   | this library get in async way the code and name so, before this values are getted this is false, and helps to know when name and code are recovered or errored turning into true after that|

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
