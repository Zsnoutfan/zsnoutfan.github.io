if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/AboutUsView.a8bd96c0.js",revision:null},{url:"assets/Article.5e8e7a04.js",revision:null},{url:"assets/Article.749d81fd.css",revision:null},{url:"assets/AutoFlipChessboardView.19632fac.js",revision:null},{url:"assets/BingoBoardView.7f503392.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoMasterView.48fd3ded.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.df9a2b85.js",revision:null},{url:"assets/CalculatingWeekdays.d9f83b6f.js",revision:null},{url:"assets/ChessVersusAI.00846912.js",revision:null},{url:"assets/ChessVersusBadAIView.988dafbc.js",revision:null},{url:"assets/ChessVersusCaptureAIView.9bc52a32.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.14cfb754.js",revision:null},{url:"assets/ChessVersusRandomView.46b759d9.js",revision:null},{url:"assets/ChessVersusStockfish.7786759f.js",revision:null},{url:"assets/ColorRemoverView.fff3e0f7.js",revision:null},{url:"assets/ConnectFourView.b91b51bf.js",revision:null},{url:"assets/ConnectFourView.c3d6cf17.css",revision:null},{url:"assets/cookie.648245ab.js",revision:null},{url:"assets/DivisibilityRules.8e30c05b.js",revision:null},{url:"assets/Does0Equal1.0db56e77.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/EnglishIsWeirdView.ff1c16d0.js",revision:null},{url:"assets/FakeGradient2View.a2aef87f.js",revision:null},{url:"assets/FakeGradientView.73aa2597.js",revision:null},{url:"assets/Forcing1089.8296b75a.js",revision:null},{url:"assets/FractalPresetsView.8519ead9.js",revision:null},{url:"assets/FractalView.26b8a342.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.b711d90b.js",revision:null},{url:"assets/FullscreenCanvas.2cffbe19.js",revision:null},{url:"assets/FullscreenDisplay.2736bd36.css",revision:null},{url:"assets/FullscreenDisplay.33743785.js",revision:null},{url:"assets/GithubCopilotIsAmazingView.9e918fbf.js",revision:null},{url:"assets/IllegalVersusStockfish.e4d24b49.js",revision:null},{url:"assets/index.26979f72.css",revision:null},{url:"assets/index.aa606557.js",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.92573174.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/LegalMoveChessboard.be54429c.js",revision:null},{url:"assets/MathemagicalTricks.0a453362.js",revision:null},{url:"assets/MetaballView.0fa3c3fd.js",revision:null},{url:"assets/MultDivQuizView.79e63031.js",revision:null},{url:"assets/NotFoundView.7d4958e2.js",revision:null},{url:"assets/OvercolorView.42c5ac93.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/Quiz.b84671b2.js",revision:null},{url:"assets/RainbowNoiseView.9ab8c3a4.js",revision:null},{url:"assets/SquareQuizView.99adba98.js",revision:null},{url:"assets/StandardChessboardView.24ca21d9.js",revision:null},{url:"assets/stockfish.77ed8172.js",revision:null},{url:"assets/stockfish.d5755b2d.js",revision:null},{url:"assets/storymatic.ef4fb9e9.css",revision:null},{url:"assets/storymatic.f3c72af8.js",revision:null},{url:"assets/StorymaticEditorView.36f4756f.js",revision:null},{url:"assets/StorymaticEditorView.f6181850.css",revision:null},{url:"assets/StorymaticJavaScriptView.93b04b4d.css",revision:null},{url:"assets/StorymaticJavaScriptView.c7829590.js",revision:null},{url:"assets/TicTacToeView.3cb8349f.css",revision:null},{url:"assets/TicTacToeView.f375568d.js",revision:null},{url:"assets/TropeHighlighterView.0b57f035.css",revision:null},{url:"assets/TropeHighlighterView.7f90a9b4.js",revision:null},{url:"assets/VideoCallView.3e7a6383.css",revision:null},{url:"assets/VideoCallView.9fde6cff.js",revision:null},{url:"assets/WebGL2Canvas.2ff1c09c.js",revision:null},{url:"assets/WebGL2Canvas.3d40e853.css",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.fb4f6b07.js",revision:null},{url:"index.html",revision:"a5f3ef2a36e655691fe4a1d517b86038"},{url:"/android-chrome-192x192.png",revision:"8902648791584993"},{url:"/android-chrome-512x512.png",revision:"8902648791584993"},{url:"/apple-touch-icon.png",revision:"8902648791584993"},{url:"/browserconfig.xml",revision:"8902648791584993"},{url:"/CNAME",revision:"8902648791584993"},{url:"/favicon-16x16.png",revision:"8902648791584993"},{url:"/favicon-32x32.png",revision:"8902648791584993"},{url:"/favicon.ico",revision:"8902648791584993"},{url:"/manifest.json",revision:"8902648791584993"},{url:"/mstile-150x150.png",revision:"8902648791584993"},{url:"/pwa-192x192.png",revision:"8902648791584993"},{url:"/pwa-512x512.png",revision:"8902648791584993"},{url:"/robots.txt",revision:"8902648791584993"},{url:"/safari-pinned-tab.svg",revision:"8902648791584993"},{url:"/zsnout.icns",revision:"8902648791584993"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"},{url:"manifest.webmanifest",revision:"162b6f9e02f9aed051cf6a04f955c3d1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
