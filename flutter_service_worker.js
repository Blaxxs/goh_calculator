'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "921d2c65e65ce2edc676333fe3148325",
"version.json": "60a7334f735c781fde4852dc2f5df899",
"index.html": "2a98a2dca681d748be4d6c664952e307",
"/": "2a98a2dca681d748be4d6c664952e307",
"main.dart.js": "a83c5e117cd31e144675f85f44371fdd",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8fec9ad037728a9b96c732c8dd940976",
"assets/AssetManifest.json": "ef0de662ae0691949d87c7bb74b9c402",
"assets/NOTICES": "b9c10e3ba1c99bb66bb4114198408133",
"assets/FontManifest.json": "4346776ab48d745967d2961f730268fb",
"assets/AssetManifest.bin.json": "0f732624151d0131a20284c2cfa4908f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4ceb757ce3a9e7119d666abb1e7d9e59",
"assets/fonts/MaterialIcons-Regular.otf": "b856e310c139e136358a88ce9718d14b",
"assets/assets/images/accessories/daepodong_burger.png": "959758af1d9006a41c24dba926fc6c10",
"assets/assets/images/accessories/chess_choco_macaron_hat.png": "ce5b780bfb0fa0dcd820cc3c8ff9226f",
"assets/assets/images/accessories/guardians_blessing_%255Bin%255D.png": "c6ccec068cdc9bc9fa6c36050d031d33",
"assets/assets/images/accessories/baek_seung-cheols_hat.png": "21323b945a53a70c1abf65a484eb5ecc",
"assets/assets/images/accessories/meow_ribbon_headband.png": "c9c15d978c81ae178864abb64ce498e7",
"assets/assets/images/accessories/heart_gift_box.png": "844f34a4ad2c5b0bacdde33593fac266",
"assets/assets/images/accessories/skitzophrenic.png": "90a08c9e9e6a6406cd1a67aa5f26d734",
"assets/assets/images/accessories/guardians_blessing_%255Bmi%255D.png": "959301c61fc192b5044d4dd85c6cc6b9",
"assets/assets/images/accessories/guardians_blessing_%255Bsa%255D.png": "44b8e40d80ea952690ab0c4d7a140643",
"assets/assets/images/accessories/white_snowgloves.png": "12b0a139ebfa8c12e5c393d63262b16e",
"assets/assets/images/accessories/prosecutors_soul.png": "6dd2395fffb5016edb85bf4cfc87e304",
"assets/assets/images/accessories/guardians_blessing_%255Bsul%255D.png": "3a878c35ff32e06e214b04e9a7d82504",
"assets/assets/images/accessories/lucky_four_leaf_clover.png": "2529b6fe1ae78efe53a4ebbf6c01e197",
"assets/assets/images/accessories/primordial_energy.png": "a77146bef71eca4fa85d00e99925e2cd",
"assets/assets/images/accessories/black_cross_earrings.png": "ded10ed54f1a333580b6da28c83be183",
"assets/assets/images/accessories/cherry_blossom_snowglobe.png": "de98dacc01f4cc0130c973ec5d4fe0bc",
"assets/assets/images/accessories/guardians_blessing_%255Bchuk%255D.png": "5a3818c35bc97dce08fef6d2a3ee268b",
"assets/assets/images/accessories/alexs_hat.png": "bd5e42e015f7b66577032f57eeb3a989",
"assets/assets/images/accessories/ring_of_undead.png": "40b43373310cf6a583819a5084227732",
"assets/assets/images/accessories/guardians_blessing_%255Bsin%255D.png": "831af8316ec6df48fce08d3e6c46abf2",
"assets/assets/images/accessories/rose_of_sharon_hairpin.png": "4e3152d9e10a9440403c0f5175260efc",
"assets/assets/images/accessories/ayam_of_the_west_witch.png": "b9fa2bb5b3f3d65b73b669ea4d42683a",
"assets/assets/images/accessories/ungnyeos_headband.png": "d116f7a306a6d35a3065f90ac1c99dd1",
"assets/assets/images/accessories/peach_chocolate.png": "65cae4cdaee256286e9136cd9026cb81",
"assets/assets/images/accessories/hourglass_of_sin.png": "9bc189c8c2cfea67f5efc4229172ec9d",
"assets/assets/images/accessories/grand_mages_hat.png": "aeabf333ddb9ca5de460e8900eb3304f",
"assets/assets/images/accessories/happy_snowman.png": "0d991f8f523acb5d41b9699f753c1ab6",
"assets/assets/images/accessories/snow_flower_headband.png": "9fe9b90bf878801233b8cae4cf4a123f",
"assets/assets/images/accessories/blue_dragons_lantern.png": "4f53cab47c3d53018b05648138351a68",
"assets/assets/images/accessories/petit_rudolph.png": "db1048837affd5c3bb197d7a36de32c7",
"assets/assets/images/accessories/silver_sword_for_self-defense.png": "ed0250629ffc2654f373366d588d0dbb",
"assets/assets/images/accessories/guardians_blessing_%255Byu%255D.png": "93d2fbce8cb8f76737d840174261de34",
"assets/assets/images/accessories/lords_robe.png": "b711a552487385ce48a1f48dc7f38b14",
"assets/assets/images/accessories/vacation_beach_hat.png": "5dd835cd4983b1fa3acf79202a278147",
"assets/assets/images/accessories/warm_cherry_blossom_brooch.png": "fcf7db0b2ae20eee0a8c76ff2ee7180f",
"assets/assets/images/accessories/spicy_ramen.png": "820ba3b5e1ab0bf79a3fa7e49ba49d7e",
"assets/assets/images/accessories/compass_of_greed.png": "2c620dc0932c7575cae6394b6b417658",
"assets/assets/images/accessories/white_tea_cup.png": "b83127a0ab0960533daf48a680e7611f",
"assets/assets/images/accessories/costume_nurse_cap.png": "3d1104002c8b0e30265af66df284a51e",
"assets/assets/images/accessories/shield_kite_of_origin.png": "c589336c50c8a4631fa45d5ec8a6c853",
"assets/assets/images/accessories/titanium_implants.png": "0d71a42b2714573cd195aaf54395468d",
"assets/assets/images/accessories/guardians_blessing_%255Bjin%255D.png": "068a14bc738982001647078cf107c5db",
"assets/assets/images/accessories/jet_black_fox_ears.png": "ad1a96759784c601197f8ab9ad2fb697",
"assets/assets/images/accessories/devil_genes.png": "2a62e9e5b8be03e0834c057c292db5c1",
"assets/assets/images/accessories/medal_of_patriotic_hero.png": "94661a6196e650e792acff606d5525d8",
"assets/assets/images/accessories/rainbow_candy_magic_wand.png": "63e9ec8dddebe975d3dd36cd78144732",
"assets/assets/images/accessories/hwanwoongs_hat.png": "750d6d3020abb0dd3445385d9dbaf5b4",
"assets/assets/images/accessories/war_hat_of_hojosa.png": "45cc6134f686a41de2375497c4bb1401",
"assets/assets/images/accessories/mittens_of_first_snow.png": "a0d71d2d91de75d1ddf621e9af626fde",
"assets/assets/images/accessories/headband_of_jealousy.png": "b18f9163946bc72d2a7e9c4d88005ad9",
"assets/assets/images/accessories/confessing_bear.png": "88d66bb1d5fe9e07ca3710f20c655927",
"assets/assets/images/accessories/freshly_boiled_soybean_paste_soup.png": "a300c3505318a774411e5c257b49fff3",
"assets/assets/images/accessories/happy_happy_mini_tree.png": "76164f4c50eaa53924917cf1d4da1f23",
"assets/assets/images/accessories/fan_of_cheering.png": "bee78b06f6e8c0211ed29930789a65c0",
"assets/assets/images/accessories/pirate_hat_of_greed.png": "dde2f23bb0b5b76320dceccb4618e996",
"assets/assets/images/accessories/trophy_of_honor_3.png": "7af08928b40c9d4a1773d0b7d0e2f9ae",
"assets/assets/images/accessories/trophy_of_honor_2.png": "7af08928b40c9d4a1773d0b7d0e2f9ae",
"assets/assets/images/accessories/cherry_blossom_mask.png": "6169956cc874e60f8da871567683bca2",
"assets/assets/images/accessories/noxs_legacy.png": "284ef1cd00f9dfc3476c6ad23e34a00f",
"assets/assets/images/accessories/wizard_ilpyos_cursed_doll.png": "c3e5dbd369484ec93ba4400b0969abcc",
"assets/assets/images/accessories/silver_cross_earrings.png": "efa26db7c65fd4439905357b47f79d4b",
"assets/assets/images/accessories/guitar_of_haru.png": "120e58902776efa97695b1c5d2d3653c",
"assets/assets/images/accessories/ceos_luxury_necklace.png": "7a6fffb9e0c8ac79d97751a06e66024f",
"assets/assets/images/accessories/black_ring.png": "eec29f293c54e310771184db29096ae0",
"assets/assets/images/accessories/trophy_of_honor_1.png": "7af08928b40c9d4a1773d0b7d0e2f9ae",
"assets/assets/images/accessories/pandora_veil.png": "577b2ccefe418c67983ba747bbcffe03",
"assets/assets/images/accessories/earrings_of_fighting_god.png": "0b67c0561236bbb4ebc190e0d075aa26",
"assets/assets/images/accessories/lucky_jin_mori_roulette.png": "c6495c1f5a91992210339e7ed49271f1",
"assets/assets/images/accessories/beep_beep_hat.png": "475331cd100442971b79aa6d1fce9f18",
"assets/assets/images/accessories/orb_of_magical_power.png": "1fb1ec515943eefba069e871de606654",
"assets/assets/images/accessories/three_flavors_of_churro.png": "224e176a49aed50d6c0d7e499c4f636d",
"assets/assets/images/accessories/hanayama_badge.png": "bc81b2c1a38854f91b16354af994878f",
"assets/assets/images/accessories/transparent_waterproof_beach_bag.png": "18353a822c606ea3d5a8d2800044678b",
"assets/assets/images/accessories/choker_of_life.png": "fdc8a96b242d9cf29e9eff1f40f1e0fb",
"assets/assets/images/accessories/chungmugongs_helmet.png": "f1c75a2d2ac2abfcbd34fc963f0e6154",
"assets/assets/images/accessories/yosak_park.png": "1855ca61d87eaed250cd909424b42979",
"assets/assets/images/accessories/the_hat_of_king_uma.png": "297f50019370318e23a52e4ae1991d7a",
"assets/assets/images/accessories/chicken_tail_fishing_rod.png": "77b86bdac6593f917281fb418b4e8493",
"assets/assets/images/accessories/halloween_candy_basket.png": "776c005e10feaeeb620d5164984d936f",
"assets/assets/images/accessories/the_energy_of_the_black_tiger.png": "0ea31acf7df73344731058fa01456dac",
"assets/assets/images/accessories/%25E8%25B2%25AA.png": "594ee11c059729aaf70dee979b32ce21",
"assets/assets/images/accessories/mark_of_the_black_cat.png": "d6c11c05c143c92cca6260228681986c",
"assets/assets/images/accessories/halloween_skull_gourd.png": "6415511476852c34ecab55244c0a76bd",
"assets/assets/images/accessories/red_gloves.png": "fdab3d2c86b594de06c49d1b20e5aea7",
"assets/assets/images/accessories/shamans_jewel.png": "e30b62e30d291724a68674c942c5b47a",
"assets/assets/images/accessories/little_witch_park_il-ahs_magic_broom.png": "3edb9a05046d679bbc6e681281bcb33e",
"assets/assets/images/accessories/sweet_confession_basket.png": "bfa710017fbb363170e6ae82593c7079",
"assets/assets/images/accessories/stinging_cat_jelly.png": "fcf9a39ba0e0888ea36830cc9f9ef3e6",
"assets/assets/images/accessories/essence_of_the_demon_king.png": "5de56729b89e307393cde38fa4182333",
"assets/assets/images/accessories/backpack_full_of_snacks.png": "c321918b916ea8346a9a04833bda8a7d",
"assets/assets/images/accessories/cutie_mini_fan.png": "cd1ed6d56e58bc1a36a9eddb39574756",
"assets/assets/images/accessories/plc_white_whale.png": "3c3fb3caac9c1edc945abbc0eeac056f",
"assets/assets/images/accessories/kings_seal.png": "db7e484b6801674d021eabd63c2554e4",
"assets/assets/images/accessories/the_power_of_ocheon.png": "9a3de2f81ec724d9a9b774732fdc20ce",
"assets/assets/images/accessories/guardians_blessing_%255Boh%255D.png": "e93d53ae9348bc06f3905c2b95295559",
"assets/assets/images/accessories/candy_blade.png": "27133ad309f29efbfabc98d85d62fb0f",
"assets/assets/images/accessories/fox_ears_of_fascination.png": "106378e11f7caba393d42c7916ad5e35",
"assets/assets/images/accessories/palancs.png": "8c724c747297110848628a8cb460dea5",
"assets/assets/images/accessories/guardians_blessing_%255Bja%255D.png": "a84990830046107a2eeaf50b7ef6a8ea",
"assets/assets/images/accessories/taekwon_youngjaes_monkey_mini_bag.png": "73f391715c425695f4921a120720f588",
"assets/assets/images/accessories/park_il-ahs_pumpkin_witch_hat.png": "e906ece21cd7ce426188167e1c086d9d",
"assets/assets/images/enhancement_aids/mid_grade_aid.png": "ec73f7e44a7a2891d640df4d079ed9ff",
"assets/assets/images/enhancement_aids/special_high_grade_aid.png": "dd5cbb2c4427d3488a28f8fe2ec53927",
"assets/assets/images/enhancement_aids/high_grade_aid.png": "de830744e0b696bc70c1e576dcb074e2",
"assets/assets/images/enhancement_aids/special_super_grade_aid.png": "1f54e36de1a6e8ee32d9822cb15c1a5a",
"assets/assets/images/enhancement_aids/special_low_grade_aid.png": "f597ec387d51ffe3d8b526266d26ecbc",
"assets/assets/images/enhancement_aids/low_grade_aid.png": "774d3ceb6b7d8bbb6ba6ce2726765908",
"assets/assets/images/enhancement_aids/special_mid_grade_aid.png": "443b7e71bb809df8a3e065bed5044083",
"assets/assets/images/loading_logo.png": "8500f1e5cb6260f997fd82c23ba9c5c6",
"assets/assets/images/main_logo.png": "7a23d9c4d09d82bc3e3620d9226d260f",
"assets/assets/images/boxes/legendary_box.png": "799efedab14536e8c02eb5309f60372c",
"assets/assets/images/boxes/rare_box.png": "56ddfdd1dbf2a702ef8f732f0059eedd",
"assets/assets/images/boxes/normal_box.png": "c1cac2e92cc16b3887c5f7a6860ec481",
"assets/assets/fonts/NanumGothic-ExtraBold.ttf": "15baaeddcb7dc3bb0ab9627391c2b76a",
"assets/assets/fonts/NanumGothic-Bold.ttf": "ff7b7ea960c04ed87a503e57b0fcf288",
"assets/assets/fonts/NanumGothic-Regular.ttf": "71b4454d7e1036efb48604e6cfd8d0ca",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
