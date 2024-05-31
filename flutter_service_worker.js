'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "270b29030816a21913b76954d97ae351",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "590fba37da1788d5eafe0c73572010ac",
"/": "590fba37da1788d5eafe0c73572010ac",
"main.dart.js": "61480da2b2e815d413c3e3fbd4eaf53f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "96b4a5cc6f0478d1e8c426ad00b8040e",
".git/objects/68/a825842207440abed058d6974588600f503c88": "9a42dea82e9fc68d3cd84d8412995184",
".git/objects/6f/bc4e8744ade9d41338fa2b7d272b6300665162": "07cb9d3cc6a571ebe93a6251a9b03d2a",
".git/objects/93/26289792895f3ca434378a7bb643b9bd59a5a0": "20af67e9bf10f0693d44aa2c0b58434d",
".git/objects/94/94a601018ba554e769effa4a63bb07f4316c0d": "6d788769f1941a8eb6126d4602f8cc8e",
".git/objects/d0/01f3f3a0f31c8ddec15ce5fa5a6a602ec432b3": "865525f76d571a01e2352f8c86e323b3",
".git/objects/da/34f19b3ac157804a6372e0203a193053d9511d": "aae5564e9dba90da3db312e888f09467",
".git/objects/da/85f0ef4e91ec03c4c3d99fe1f03d91e0671a48": "e538ae8ada933d4025f15abd2fcbbcbb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/52360d6d85b0f0a5d4419aef1fde769c980158": "3c75cceaa10edd0b5401013d336fd736",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/76bcc747ad22caf0ac2eb013761e42b1c57bae": "7d423a4b36ae7ed6e5dc03f8a0e71cb3",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ed/5895f0302d22dffb7a37eafd1fa8b425bcbecc": "ada3f34ea334e76ba9acb604fde2afad",
".git/objects/29/b346acb491325ec162fcd3fc14789f20fb2e0f": "e8d0a98229d122cd896f0d8a9fb49ddb",
".git/objects/45/2746128031b2f7186f9357d4b5390b1d0f0bf1": "5df9e74c01e1344bcdae43e2acc3c0b5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/0408ad030d59667616fc040022b8c3f2399f53": "438f477526526aab2ff76002c5e8dd42",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/b34457455179ddc737a0924154e227823c70d2": "f7b8825cfa4d09543dad30e64fb8808d",
".git/objects/91/03fd7dd9e2afb240e15570100e4387e60a391b": "afb316e4494dd0a696c29b6dda706b43",
".git/objects/53/5851407b9a0cdf7cc98c00786fe84dd3a7b9e4": "1dd2d8b7a9145f6438f234e247b30c0d",
".git/objects/6c/cba9628c73d160a3945dda76c3db231dbd98f7": "5bddc2eb99f4803181b174a59153f1af",
".git/objects/b8/4b125aee9e3185b2fb849f082494f08518b2b4": "0fb924fc9f6b6713be514ab989a46733",
".git/objects/d5/105b62516e4d85a2719f056ddc35fcfb76db41": "428799be90b05571717e723ebd0b959b",
".git/objects/af/bbeff3b78595b4c9411ca5c7789ee6b1bbc918": "8244c91bb9fbfae05220d48429ae22ce",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/2393aead4a0ed227bf14f301fddc825d3c595f": "742d90f7b73197e40c8e95f5a45b3646",
".git/objects/e7/a2be75530572d271671c9b2c1d88ce43c35f8a": "0ef1ed9fa5755df277ebbbd327bbdae2",
".git/objects/cb/6bc558a25f55d0507d705269cba4de8fd6f262": "e482136cb9d34bfd1eaf63a6c12adbce",
".git/objects/f8/75dc07d117678c241befe254122ce93a016cee": "ca54b0a7437035132a692244c4d70611",
".git/objects/2c/9c1185d26109239197bc347164747cf5af2366": "081c7274a6b69b3ce1044114120e4509",
".git/objects/70/7c289809924d141cce842c4998c758d09ae345": "3d4acd0ce23ebf61882ebc4d8ab3fb2d",
".git/objects/23/66eae4d65f1fad5f4e3ab90ca78fa911b825b0": "a22c454d5b513b9abdbc6f9d7614d067",
".git/objects/82/ff8916b170bda1348a96d2cd84bfb099d26dfc": "da92fefadc5eda59f420517e75808b99",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3c94eaa14634d9eba7a2e81740e16ae4",
".git/logs/refs/heads/main": "fa8dc3e5f3600abf21ed757b7a374d00",
".git/logs/refs/remotes/origin/main": "94cd52a1b71435ba2810986c8c0e4abe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7c6a2fca409d1b80818c25578e169319",
".git/refs/remotes/origin/main": "7c6a2fca409d1b80818c25578e169319",
".git/index": "99bbc032d95bc68130ac1051ce15a424",
".git/COMMIT_EDITMSG": "ea98887fa5ba23c4691997c82a28d01e",
"assets/AssetManifest.json": "0a7c3ae6405c97fb22ab89b9ffeeec38",
"assets/NOTICES": "a428fe949642b90affa5cf3942b3e187",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b354baac6815f25ac616567ffe8473a3",
"assets/camila_cv.pdf": "6a85927761e1afec1b3991c629ba994e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/m2.jpg": "b6eb939345d87db51e2f81811370f98e",
"assets/lib/assets/m1.jpg": "646d200bedb4b11143eebfe1bbf5a29c",
"assets/lib/assets/logo_aktua.png": "23831a740802136809fdf5d613750688",
"assets/lib/assets/mi.jpeg": "57fe1d0a96f610501e6d73d9bfb5d983",
"assets/lib/assets/camila_cv.pdf": "6a85927761e1afec1b3991c629ba994e",
"assets/AssetManifest.bin": "ca5cdd3e20b3d3183ba60565772f0c43",
"assets/fonts/MaterialIcons-Regular.otf": "a25a14e373bcac52c02a19ddc3148801",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
