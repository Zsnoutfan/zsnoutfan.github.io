if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>i(s,n),a={module:{uri:n},exports:u,require:o};e[n]=Promise.all(l.map((s=>a[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c7240f55"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/AboutUsView.87515856.js",revision:null},{url:"assets/Article.51241e71.css",revision:null},{url:"assets/Article.c418035f.js",revision:null},{url:"assets/AutoFlipChessboardView.306abf9e.js",revision:null},{url:"assets/BingoBoardView.093777c8.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoMasterView.b5df7f36.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.ed4d07bc.js",revision:null},{url:"assets/CalculatingWeekdays.287d4076.js",revision:null},{url:"assets/ChessVersusAI.67467706.js",revision:null},{url:"assets/ChessVersusBadAIView.780f1deb.js",revision:null},{url:"assets/ChessVersusCaptureAIView.0e87f8d7.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.6b1f466e.js",revision:null},{url:"assets/ChessVersusRandomView.b98e0525.js",revision:null},{url:"assets/ChessVersusStockfish.36c709e6.js",revision:null},{url:"assets/ColorRemoverView.1ff2d738.js",revision:null},{url:"assets/cookie.648245ab.js",revision:null},{url:"assets/DivisibilityRules.1173af81.js",revision:null},{url:"assets/Does0Equal1.6b3bcc8f.js",revision:null},{url:"assets/EnglishIsWeirdView.33f3f127.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/FakeGradient2View.255d5af1.js",revision:null},{url:"assets/FakeGradientView.81f2dafb.js",revision:null},{url:"assets/Forcing1089.3a2088c9.js",revision:null},{url:"assets/FractalPresetsView.ec215bbf.js",revision:null},{url:"assets/FractalView.6f6aa17e.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.1ac4e896.js",revision:null},{url:"assets/FullscreenCanvas.0af4e350.js",revision:null},{url:"assets/FullscreenDisplay.2736bd36.css",revision:null},{url:"assets/FullscreenDisplay.f28d5208.js",revision:null},{url:"assets/GithubCopilotIsAmazingView.8052b45d.js",revision:null},{url:"assets/IllegalVersusStockfish.6acace63.js",revision:null},{url:"assets/index.26c9e390.css",revision:null},{url:"assets/index.b5946be6.js",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.4f545972.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/LegalMoveChessboard.75d28316.js",revision:null},{url:"assets/MetaballView.87854c96.js",revision:null},{url:"assets/modal.10ad4113.css",revision:null},{url:"assets/modal.75408464.js",revision:null},{url:"assets/MultDivQuizView.1e65586d.js",revision:null},{url:"assets/NotFoundView.dc5b161c.js",revision:null},{url:"assets/OvercolorView.a615a4e8.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/Quiz.a7f1e415.js",revision:null},{url:"assets/RainbowNoiseView.63e4d4d3.js",revision:null},{url:"assets/SquareQuizView.9e7b3144.js",revision:null},{url:"assets/StandardChessboardView.0d5e12f1.js",revision:null},{url:"assets/stockfish.0823b611.js",revision:null},{url:"assets/storymatic.5c5f453f.js",revision:null},{url:"assets/storymatic.8f35216e.css",revision:null},{url:"assets/StorymaticEditorView.41f93402.js",revision:null},{url:"assets/StorymaticEditorView.f6181850.css",revision:null},{url:"assets/StorymaticJavaScriptView.80ef245d.js",revision:null},{url:"assets/StorymaticJavaScriptView.93b04b4d.css",revision:null},{url:"assets/TropeHighlighterView.0c086786.js",revision:null},{url:"assets/TropeHighlighterView.e32278b9.css",revision:null},{url:"assets/VideoCallView.3e7a6383.css",revision:null},{url:"assets/VideoCallView.56be7311.js",revision:null},{url:"assets/WebGL2Canvas.05c5fc30.css",revision:null},{url:"assets/WebGL2Canvas.1198b5f2.js",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.a202cb0a.js",revision:null},{url:"index.html",revision:"5c2dec8b0b67fc0ba50143d009317609"},{url:"404.html",revision:"5344878451720865"},{url:"android-chrome-192x192.png",revision:"5344878451720865"},{url:"android-chrome-512x512.png",revision:"5344878451720865"},{url:"apple-touch-icon.png",revision:"5344878451720865"},{url:"browserconfig.xml",revision:"5344878451720865"},{url:"CNAME",revision:"5344878451720865"},{url:"favicon-16x16.png",revision:"5344878451720865"},{url:"favicon-32x32.png",revision:"5344878451720865"},{url:"favicon.ico",revision:"5344878451720865"},{url:"manifest.json",revision:"5344878451720865"},{url:"mstile-150x150.png",revision:"5344878451720865"},{url:"pwa-192x192.png",revision:"5344878451720865"},{url:"pwa-512x512.png",revision:"5344878451720865"},{url:"robots.txt",revision:"5344878451720865"},{url:"safari-pinned-tab.svg",revision:"5344878451720865"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
