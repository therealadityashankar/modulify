export default async function mimport(path, baseurl){
  if(!baseurl) baseurl = location.href
  const url = new URL(path, baseurl)
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
