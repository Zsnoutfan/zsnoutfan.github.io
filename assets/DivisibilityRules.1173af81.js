import{r as n,o as a,c as r,w as m,a as s,b as l}from"./index.b5946be6.js";const o=s("div",{class:"markdown-body"},[s("p",null,[s("em",null,"Published by Zachary Sakowitz on December 7, 2021.")]),s("p",null,"You probably know how to find out if a number is divisible by 2, 5, or 10. But did you know that there\u2019s simple divisibility rules for other numbers? Let\u2019s check them out, from 2 to 12!"),s("h2",{id:"2",tabindex:"-1"},"2"),s("p",null,[l("A number is divisible by "),s("strong",null,"2"),l(" if it ends in a 0, 2, 4, 6, or 8. For example, 38324 ends in a 4, so it\u2019s divisible by 2.")]),s("h2",{id:"3",tabindex:"-1"},"3"),s("p",null,[l("A number is divisible by "),s("strong",null,"3"),l(" if the sum of the digits is divisible by 3. For example, 38324 is divisible by 3 because 3 + 8 + 3 + 2 = 15, which is divisible by 3. For long number you can repeat the operation. For example, summing up 45398527 gives 43, and summing up 43 gives 7, which is not divisible by 3. This means that 45398527 isn\u2019t divisible by 3.")]),s("h2",{id:"4",tabindex:"-1"},"4"),s("p",null,[l("A number is divisible by "),s("strong",null,"4"),l(" if either")]),s("ul",null,[s("li",null,"the 2nd last digit is even and the last digit is 0, 4, or 8, or"),s("li",null,"the 2nd last digit is odd and the last digit is 2 or 6.")]),s("p",null,"2342 is not divisible by 4 because the second-to-last digit (4) is even, but the last digit (2) is not 0, 4, or 8."),s("p",null,"2172 is divisible by 4 because the second-to-last digit (7) is odd, and the last digit (2) is 2 or 6."),s("p",null,"9233 is not divisible by 4 because it\u2019s an odd number."),s("h2",{id:"5",tabindex:"-1"},"5"),s("p",null,[l("A number is divisible by "),s("strong",null,"5"),l(" if the last digit is 0 or 5. For example, 98545 ends in a 5, so it\u2019s divisible by 5.")]),s("h2",{id:"6",tabindex:"-1"},"6"),s("p",null,[l("A number is divisible by "),s("strong",null,"6"),l(" if it is even and divisible by 3. For example, 2349 isn\u2019t divisible by 6 because it\u2019s not even.")]),s("h2",{id:"7",tabindex:"-1"},"7"),s("p",null,"There\u2019s not a great trick for 7 like there are for other numbers. The simplest trick is to add and subtract multiples of 7 until the number ends in 0. Then, you can remove the 0 at the end and continue. If the end number is divisible by 7, your original number was also divisible by 7. If not, then the original wasn\u2019t either. Let\u2019s try an example with 3582."),s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.25em",columnalign:"right left",columnspacing:"0em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mn",null,"3582"),s("mo",null,"+"),s("mn",null,"28")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mn",null,"3610")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mn",null,"361"),s("mo",null,"\u2212"),s("mn",null,"21")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mn",null,"340")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mn",null,"34"),s("mo",null,"\u2212"),s("mn",null,"14")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("mrow"),s("mo",null,"="),s("mn",null,"20")])])])])]),s("annotation",{encoding:"application/x-tex"},"\\begin{aligned} 3582 + 28 &= 3610 \\\\ 361 - 21 &= 340 \\\\ 34 - 14 &= 20 \\\\ \\end{aligned} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"4.5em","vertical-align":"-2em"}}),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-r"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.5em"}},[s("span",{style:{top:"-4.66em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"3582"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"28")])]),s("span",{style:{top:"-3.16em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"361"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"21")])]),s("span",{style:{top:"-1.66em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"34"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"\u2212"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"14")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2em"}},[s("span")])])])]),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.5em"}},[s("span",{style:{top:"-4.66em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"3610")])]),s("span",{style:{top:"-3.16em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"340")])]),s("span",{style:{top:"-1.66em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"}),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"20")])])]),s("span",{class:"vlist-s"},"\u200B")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2em"}},[s("span")])])])])])])])])])])]),s("p",null,"20 is not a multiple of 7, so 3582 isn\u2019t divisible by 7."),s("h2",{id:"8",tabindex:"-1"},"8"),s("p",null,[l("A number is divisible by "),s("strong",null,"8"),l(" if dividing the last 3 digits by 2 yields a multiple of 4. For example, 2232 is divisible by 8 because 232\xF72 (116) is divisible by 4.")]),s("h2",{id:"9",tabindex:"-1"},"9"),s("p",null,[s("em",null,"What about 9? 7 8 9\u2026 #obscurereferences")]),s("p",null,[l("A number is divisible by "),s("strong",null,"9"),l(" if the sum of the digits is a multiple of 9. For example, 457 isn\u2019t divisible by 9 because 4+5+7 (16) isn\u2019t divisible by 9.")]),s("h2",{id:"10",tabindex:"-1"},"10"),s("p",null,[l("A number is divisible by "),s("strong",null,"10"),l(" if it ends in 0. For example, 920 is divisible by 10 because it ends in 0.")]),s("h2",{id:"11",tabindex:"-1"},"11"),s("p",null,[l("To check for divisibility by "),s("strong",null,"11"),l(", reverse the ordering of the digits. Then, alternately subtract and add digits. If the final result is divisible by 11, then the original number was divisible by 11. For example, the number 328149 is not divisible by 11 because 9-4+1-8+2-3 (-3) is not divisible by 11.")]),s("h2",{id:"12",tabindex:"-1"},"12"),s("p",null,[l("A number is divisible by "),s("strong",null,"12"),l(" if it is divisible by 3 and 4. For example, 1068 is divisible by 12 because it is divisible by 3 (1+0+6+8 = 15) and it is divisible by 4 (6 is even and 8 is 0/4/8).")])],-1),b={setup(d,{expose:e}){const i={};return e({frontmatter:i}),(p,u)=>{const t=n("Article");return a(),r(t,{frontmatter:i},{default:m(()=>[o]),_:1})}}};export{b as default};
