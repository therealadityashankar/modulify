import mimport from "./modulify.mjs"

async function main(){
  const {Matter} = await mimport("https://cdn.jsdelivr.net/gh/liabru/matter-js@0.14.2/build/matter.js")
  console.log(Matter);
}

main()
