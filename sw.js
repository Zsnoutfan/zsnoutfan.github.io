if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/AboutUsView.6cc375e1.js",revision:null},{url:"assets/Article.4e41cda8.js",revision:null},{url:"assets/Article.bfb90365.css",revision:null},{url:"assets/AutoFlipChessboardView.bc2dc447.js",revision:null},{url:"assets/BingoBoardView.2b10e612.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoMasterView.5eb07899.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.dd6ebfd0.js",revision:null},{url:"assets/CalculatingWeekdays.282fa4fa.js",revision:null},{url:"assets/ChessVersusAI.a235c643.js",revision:null},{url:"assets/ChessVersusBadAIView.d126f9ea.js",revision:null},{url:"assets/ChessVersusCaptureAIView.64cc6e9a.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.5165315a.js",revision:null},{url:"assets/ChessVersusRandomView.9111c141.js",revision:null},{url:"assets/ChessVersusStockfish.039bda5e.js",revision:null},{url:"assets/ColorRemoverView.5e7c4a88.js",revision:null},{url:"assets/ConnectFourView.0aa28070.js",revision:null},{url:"assets/ConnectFourView.c3d6cf17.css",revision:null},{url:"assets/cookie.648245ab.js",revision:null},{url:"assets/DivisibilityRules.af6dd918.js",revision:null},{url:"assets/Does0Equal1.3dd3bebd.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/EnglishIsWeirdView.468fa19d.js",revision:null},{url:"assets/FakeGradient2View.3bb4d6f0.js",revision:null},{url:"assets/FakeGradientView.88009d60.js",revision:null},{url:"assets/Forcing1089.43657f58.js",revision:null},{url:"assets/FractalPresetsView.bdd898ea.js",revision:null},{url:"assets/FractalView.ba929a94.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.6548c1d1.js",revision:null},{url:"assets/FullscreenCanvas.44cd1916.js",revision:null},{url:"assets/FullscreenDisplay.2736bd36.css",revision:null},{url:"assets/FullscreenDisplay.46453689.js",revision:null},{url:"assets/GithubCopilotIsAmazingView.798c6651.js",revision:null},{url:"assets/IllegalVersusStockfish.2f1cd819.js",revision:null},{url:"assets/index.433d3aa7.css",revision:null},{url:"assets/index.795723d8.js",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.fbff59f4.js",revision:null},{url:"assets/LegalMoveChessboard.013fe317.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/MathemagicalTricks.2fc95e00.js",revision:null},{url:"assets/MetaballView.876a38a7.js",revision:null},{url:"assets/MultDivQuizView.29e7351b.js",revision:null},{url:"assets/NotFoundView.06be56e5.js",revision:null},{url:"assets/OvercolorView.fb5b8c7b.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/Quiz.c66aa064.js",revision:null},{url:"assets/RainbowNoiseView.8ef6a2c4.js",revision:null},{url:"assets/SquareQuizView.05b8396c.js",revision:null},{url:"assets/StandardChessboardView.2881e120.js",revision:null},{url:"assets/stockfish.77ed8172.js",revision:null},{url:"assets/stockfish.d5755b2d.js",revision:null},{url:"assets/storymatic.4a6b0fa7.js",revision:null},{url:"assets/storymatic.ef4fb9e9.css",revision:null},{url:"assets/StorymaticEditorView.bf341b49.js",revision:null},{url:"assets/StorymaticEditorView.f6181850.css",revision:null},{url:"assets/StorymaticJavaScriptView.93b04b4d.css",revision:null},{url:"assets/StorymaticJavaScriptView.a1c29feb.js",revision:null},{url:"assets/TicTacToeView.3cb8349f.css",revision:null},{url:"assets/TicTacToeView.f8ea40b2.js",revision:null},{url:"assets/TropeHighlighterView.087459ba.js",revision:null},{url:"assets/TropeHighlighterView.0b57f035.css",revision:null},{url:"assets/VideoCallView.3e7a6383.css",revision:null},{url:"assets/VideoCallView.d8f49e5f.js",revision:null},{url:"assets/WebGL2Canvas.3d40e853.css",revision:null},{url:"assets/WebGL2Canvas.a1c57ddf.js",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.34c6c7db.js",revision:null},{url:"index.html",revision:"b9c5cf2870a1704b7cc12046ae517edc"},{url:"/android-chrome-192x192.png",revision:"8135279604776067"},{url:"/android-chrome-512x512.png",revision:"8135279604776067"},{url:"/apple-touch-icon.png",revision:"8135279604776067"},{url:"/browserconfig.xml",revision:"8135279604776067"},{url:"/CNAME",revision:"8135279604776067"},{url:"/favicon-16x16.png",revision:"8135279604776067"},{url:"/favicon-32x32.png",revision:"8135279604776067"},{url:"/favicon.ico",revision:"8135279604776067"},{url:"/manifest.json",revision:"8135279604776067"},{url:"/mstile-150x150.png",revision:"8135279604776067"},{url:"/pwa-192x192.png",revision:"8135279604776067"},{url:"/pwa-512x512.png",revision:"8135279604776067"},{url:"/robots.txt",revision:"8135279604776067"},{url:"/safari-pinned-tab.svg",revision:"8135279604776067"},{url:"/zsnout.icns",revision:"8135279604776067"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
