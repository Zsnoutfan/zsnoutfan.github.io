if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c7240f55"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"2e0d727f3babd859f281cd69a1b93a74"},{url:"assets/AboutUsView.a31cc9b4.js",revision:null},{url:"assets/Article.330cf53e.js",revision:null},{url:"assets/Article.8d90d105.css",revision:null},{url:"assets/AutoFlipChessboardView.f9dae817.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoBoardView.f07654e3.js",revision:null},{url:"assets/BingoMasterView.4671d752.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.1bebf983.js",revision:null},{url:"assets/CalculatingWeekdays.e491828b.js",revision:null},{url:"assets/ChessVersusAI.2f3326f0.js",revision:null},{url:"assets/ChessVersusBadAIView.1ce61f3f.js",revision:null},{url:"assets/ChessVersusCaptureAIView.54321ca1.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.54736f3b.js",revision:null},{url:"assets/ChessVersusRandomView.1f1c136d.js",revision:null},{url:"assets/ChessVersusStockfish.3c5a00f1.js",revision:null},{url:"assets/ColorRemoverView.4ba8569c.js",revision:null},{url:"assets/DivisibilityRules.fb004329.js",revision:null},{url:"assets/Does0Equal1.0ad98899.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/EnglishIsWeirdView.448673fb.js",revision:null},{url:"assets/FakeGradient2View.4a733a84.js",revision:null},{url:"assets/FakeGradientView.11a4489f.js",revision:null},{url:"assets/Forcing1089.f8d4bba7.js",revision:null},{url:"assets/FractalPresetsView.da447b33.js",revision:null},{url:"assets/FractalView.ea2abd54.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.6fddb177.js",revision:null},{url:"assets/FullscreenCanvas.1226a04b.css",revision:null},{url:"assets/FullscreenCanvas.856bc7b5.js",revision:null},{url:"assets/GithubCopilotIsAmazingView.93418a3f.js",revision:null},{url:"assets/IllegalVersusStockfish.3f038db5.js",revision:null},{url:"assets/index.69319906.css",revision:null},{url:"assets/index.d668bf32.js",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.27000499.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/LegalMoveChessboard.ca526b50.js",revision:null},{url:"assets/MetaballView.fa544424.js",revision:null},{url:"assets/modal.10ad4113.css",revision:null},{url:"assets/modal.8aa9b983.js",revision:null},{url:"assets/MultDivQuizView.a45d9faf.js",revision:null},{url:"assets/NotFoundView.d1f9db38.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/Quiz.c05ac7a6.js",revision:null},{url:"assets/RainbowNoiseView.a4f275fa.js",revision:null},{url:"assets/SquareQuizView.82459aff.js",revision:null},{url:"assets/StandardChessboardView.bf0098dd.js",revision:null},{url:"assets/stockfish.2ec7d74b.js",revision:null},{url:"assets/stockfish.4393174c.js",revision:null},{url:"assets/TropeHighlighterView.e32278b9.css",revision:null},{url:"assets/TropeHighlighterView.ed47b1a8.js",revision:null},{url:"assets/vendor.c311a53b.js",revision:null},{url:"assets/WebGL2Canvas.8be2be70.js",revision:null},{url:"assets/WebGL2Canvas.d4a37cc6.css",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.386267b0.js",revision:null},{url:"index.html",revision:"80f85f45c7a7a4a703f03bf8d8fbd910"},{url:"404.html",revision:"6557039876343003"},{url:"android-chrome-192x192.png",revision:"6557039876343003"},{url:"android-chrome-512x512.png",revision:"6557039876343003"},{url:"apple-touch-icon.png",revision:"6557039876343003"},{url:"browserconfig.xml",revision:"6557039876343003"},{url:"CNAME",revision:"6557039876343003"},{url:"favicon-16x16.png",revision:"6557039876343003"},{url:"favicon-32x32.png",revision:"6557039876343003"},{url:"favicon.ico",revision:"6557039876343003"},{url:"manifest.json",revision:"6557039876343003"},{url:"mstile-150x150.png",revision:"6557039876343003"},{url:"pwa-192x192.png",revision:"6557039876343003"},{url:"pwa-512x512.png",revision:"6557039876343003"},{url:"robots.txt",revision:"6557039876343003"},{url:"safari-pinned-tab.svg",revision:"6557039876343003"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
