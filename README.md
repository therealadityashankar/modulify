# modulify

an easy way to import modules that were not intended to be js modules, as js modules

usage:

```js
import mimport from "./modulify.mjs"
async main(){
  const {Matter} = await mimport("https://cdn.jsdelivr.net/gh/liabru/matter-js@0.14.2/build/matter.js")
}

main()
```
