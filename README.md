# Vue-directive
## Simple plugin to apply directive


### Install:
```
npm i @leetajz/vue-directive
```

### Usage:
Register:
```
plugins: [
    ...
    '@/node_modules/@leetajz/vue-directive'
    ...
]
```

And use:
```
<div v-anim></div>
```

In order to use different animations you have to nest the classes like so:
```
.slide-in {
    .anim {}
    .before-anim {}
}

.pop-up {
    .anim {}
    .before-anim {}
}
```
