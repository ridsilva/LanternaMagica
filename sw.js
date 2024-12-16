const cacheName = 'LM-v2';
const staticAssets =[
  './index.html',
  './style.css',
  './sketch.js',
  './manifest.webmanifest',
  './preview/animation0.gif',
  './preview/animation1.gif',
  './preview/animation2.gif',
  './preview/animation3.gif',
  './preview/animation4.gif',
  './preview/animation5.gif',
  './preview/animation6.gif',
  './preview/animation7.gif',
  './preview/animation8.gif',
  './originals/image0.gif',
  './originals/image1.gif',
  './originals/image2.gif',
  './originals/image3.gif',
  './originals/image4.gif',
  './originals/image5.gif',
  './originals/image6.gif',
  './originals/image7.gif',
  './originals/image8.gif',
  './homePage/lanternEN.png',
  './homePage/lanternPT.png',
  './Icons/eraser.png',
  './Icons/paint.png'
]

/**
 *   './masks/mask0-body.png',
  './masks/mask0-head.png',
  './masks/mask1.png',
  './masks/mask2-body.png',
  './masks/mask2-head.png',
  './masks/mask2-lion.png',
  './masks/mask3-cabbage.png',
  './masks/mask3-elf.png',
  './masks/mask4-monster.png',
  './masks/mask4-person.png',
  './masks/mask5-body.png',
  './masks/mask5-head.png',
  './masks/mask5-pig.png',
  './masks/mask6-goose.png',
  './masks/mask6-person.png',
  './masks/mask7-lowerBody.png',
  './masks/mask7-statue.png',
  './masks/mask7-upperBody.png',
  './masks/mask8-armL.png',
  './masks/mask8-armR.png',
  './masks/mask8-body.png',
  './masks/mask8-legL.png',
  './masks/mask8-legR.png',
  './lines/image0.png',
  './lines/image1.png',
  './lines/image2.png',
  './lines/image3.png',
  './lines/image4.png',
  './lines/image5.png',
  './lines/image6.png',
  './lines/image7.png',
  './lines/image8.png',
  './js/animation.js',
  './js/background.js',
  './js/details.js',
  './js/events.js',
  './js/flood.js',
  './js/language.js',
  './js/menuChanges.js',
  './js/palette.js',
  './js/shape.js',
  './js/stack.js',
  './img-small/image0.png',
  './img-small/image1.png',
  './img-small/image2.png',
  './img-small/image3.png',
  './img-small/image4.png',
  './img-small/image5.png',
  './img-small/image6.png',
  './img-small/image7.png',
  './img-small/image8.png',
  './img/image0.png',
  './img/image1.png',
  './img/image2.png',
  './img/image3.png',
  './img/image4.png',
  './img/image5.png',
  './img/image6.png',
  './img/image7.png',
  './img/image8.png',
  './Icons-White/!.png',
  './Icons-White/brush.png',
  './Icons-White/bucket.png',
  './Icons-White/eraser.png',
  './Icons-White/final.png',
  './Icons-White/palette.png',
  './Icons-White/pipeta.png',
  './Icons-White/redo.png',
  './Icons-White/save.png',
  './Icons-White/undo.png',
  './Icons/eraser.png',
  './Icons/paint.png',
    './frames/frame-circle.png',
  './frames/frame-small.png',
  './frames/wood-medium.png',
  './frames/wood.png',
    './homePage/logos.png',
  './homePage/Start.png'
 */

  self.addEventListener('install',  function (e) {
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        console.log("CACHING /INDEX.HTML");
        return cache.addAll(staticAssets);
      })
    ); 
    console.log('[Service Worker] Install');   
  });
  
  self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (cache !== cacheName) {
              console.log('Service Worker: Clearing Old Cache');
              return caches.delete(cache);
            }
          })
        );
      })
    );
  });
  
  // FETCH PROXY & CACHING
  // 1.) try get resource from cache else fetch and update cache else --> error
  self.addEventListener('fetch', function (e) {
    console.log('network or cache: ' + e.request.url);
    e.respondWith(
      caches.match(e.request).then(function (r) {
        return r || fetch(e.request).then(function (response) {
          return caches.open(cacheName).then(function (cache) {
            console.log('Caching new resource: ' + e.request.url);
            cache.put(e.request, response.clone());
            return response;
          });
        }).catch(function(err){console.log(err);});
      })
    );
  });
  

/*
self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  console.log('Service Worker installing...');
  
  console.log('Opened cache');
      
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e =>{
  self.clients.claim();
});
  
self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);

  if(url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else{
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req){
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req){
  const cache = await caches.open(cacheName);
  try{
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch(e){
    const cached = await cache.match(req);
    return cached;
  }
}*/