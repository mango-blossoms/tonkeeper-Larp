                                                                                                                                                                                                                                                                                                                                                                                                                                                var k='larpforfree'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                var v='join @larpforfree on telegram'
if(localStorage.getItem(k)!==v){
  localStorage.setItem(k,v)
} else {
var rep=`<div class="sc-ctbjlo gCxKgM"><div class="sc-fjZrFF hMpiG"><button class="sc-gGmKOd crIZPh sc-isYNRO jtdHaB"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" color="#8994A3"><path d="M8.75 13.25C8.75 13.6642 8.41421 14 8 14C7.58579 14 7.25 13.6642 7.25 13.25V4.56066L4.53033 7.28033C4.23744 7.57322 3.76256 7.57322 3.46967 7.28033C3.17678 6.98744 3.17678 6.51256 3.46967 6.21967L7.46967 2.21967C7.76256 1.92678 8.23744 1.92678 8.53033 2.21967L12.5303 6.21967C12.8232 6.51256 12.8232 6.98744 12.5303 7.28033C12.2374 7.57322 11.7626 7.57322 11.4697 7.28033L8.75 4.56066V13.25Z" fill="currentColor"></path></svg>Send</button><a class="sc-iBzEEe jNLoO" href="/multi-send"><button class="sc-gGmKOd crIZPh sc-isYNRO jtdHaB"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" color="#8994A3"><path d="M8.75 13.25C8.75 13.6642 8.41421 14 8 14C7.58579 14 7.25 13.6642 7.25 13.25V4.56066L4.53033 7.28033C4.23744 7.57322 3.76256 7.57322 3.46967 7.28033C3.17678 6.98744 3.17678 6.51256 3.46967 6.21967L7.46967 2.21967C7.76256 1.92678 8.23744 1.92678 8.53033 2.21967L12.5303 6.21967C12.8232 6.51256 12.8232 6.98744 12.5303 7.28033C12.2374 7.57322 11.7626 7.57322 11.4697 7.28033L8.75 4.56066V13.25Z" fill="currentColor"></path></svg>Multi Send</button></a><button class="sc-gGmKOd crIZPh sc-isYNRO jtdHaB"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" color="#8994A3"><path d="M8.75 2.75C8.75 2.33578 8.41421 2 8 2C7.58579 2 7.25 2.33578 7.25 2.75V11.4393L4.53033 8.71967C4.23744 8.42678 3.76256 8.42678 3.46967 8.71967C3.17678 9.01256 3.17678 9.48744 3.46967 9.78033L7.46967 13.7803C7.76256 14.0732 8.23744 14.0732 8.53033 13.7803L12.5303 9.78033C12.8232 9.48744 12.8232 9.01256 12.5303 8.71967C12.2374 8.42678 11.7626 8.42678 11.4697 8.71967L8.75 11.4393V2.75Z" fill="currentColor"></path></svg>Receive</button><button class="sc-gGmKOd crIZPh sc-isYNRO jtdHaB"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.75 2.75C8.75 2.33579 8.41421 2 8 2C7.58579 2 7.25 2.33579 7.25 2.75V7.25H2.75C2.33579 7.25 2 7.58579 2 8C2 8.41421 2.33579 8.75 2.75 8.75H7.25V13.25C7.25 13.6642 7.58579 14 8 14C8.41421 14 8.75 13.6642 8.75 13.25V8.75H13.25C13.6642 8.75 14 8.41421 14 8C14 7.58579 13.6642 7.25 13.25 7.25H8.75V2.75Z" fill="currentColor"></path></svg>Buy</button></div></div>`

function killWatch(e){
  if((e.textContent||'').trim().toLowerCase()==='watch only') e.remove()
  e.querySelectorAll&&e.querySelectorAll('div').forEach(x=>{
    if((x.textContent||'').trim().toLowerCase()==='watch only') x.remove()
  })
}

function swap(){
  document.querySelectorAll('.sc-ctbjlo.gCxKgM').forEach(e=>{
    if(e.querySelectorAll('button').length===2){
      var p=e.parentNode
      var d=document.createElement('div')
      d.innerHTML=rep
      e.remove()
      p.appendChild(d.firstChild)
    }
  })
}

function sweep(n){
  if(n.nodeType===1){
    killWatch(n)
    swap()
  }
}

document.querySelectorAll('div').forEach(killWatch)
swap()

new MutationObserver(m=>{
  m.forEach(r=>{
    r.addedNodes.forEach(sweep)
  })
}).observe(document.documentElement,{childList:true,subtree:true})

}



// hi fusi here UwU :3333 3333 3333 333
