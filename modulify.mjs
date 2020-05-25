/**
* import a js module as a normal module
* basically this takes all new variables in the window object, out of the window object,
* and returns them in an object
*
* @param {String} path - the url to import, cannot be a relative url
*/
export default async function mimport(path){
  const url = new URL(path)
  const contentsResp = await fetch(url)
  const contents = await contentsResp.text()
  const beforeVars = new Set(Object.keys(window))
  Function(contents)()
  const afterVars = new Set(Object.keys(window))
  const newStuff = {}
  afterVars.forEach(key => {
    if(!beforeVars.has(key)){
      newStuff[key] = window[key]
      delete window[key]
    }
  });

  return newStuff
}
