"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,c={unversionedId:"Java/leetcode/src/\u5251\u6307offer/\u5220\u9664\u94fe\u8868\u7684\u8282\u70b9",id:"Java/leetcode/src/\u5251\u6307offer/\u5220\u9664\u94fe\u8868\u7684\u8282\u70b9",title:"\u5220\u9664\u94fe\u8868\u7684\u8282\u70b9",description:"\u5251\u6307 Offer 18. \u5220\u9664\u94fe\u8868\u7684\u8282\u70b9",source:"@site/docs/Java/leetcode/src/\u5251\u6307offer/18-\u5220\u9664\u94fe\u8868\u7684\u8282\u70b9.md",sourceDirName:"Java/leetcode/src/\u5251\u6307offer",slug:"/Java/leetcode/src/\u5251\u6307offer/\u5220\u9664\u94fe\u8868\u7684\u8282\u70b9",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/\u5251\u6307offer/\u5220\u9664\u94fe\u8868\u7684\u8282\u70b9",draft:!1,editUrl:"https://github.com/zhiyu1998/Computer-Science-Learn-Notes/edit/master/docs/Java/leetcode/src/\u5251\u6307offer/18-\u5220\u9664\u94fe\u8868\u7684\u8282\u70b9.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{},sidebar:"sidebars",previous:{title:"\u5251\u6307 Offer 17. \u6253\u5370\u4ece1\u5230\u6700\u5927\u7684n\u4f4d\u6570",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/\u5251\u6307offer/\u6253\u5370\u4ece1\u5230\u6700\u5927\u7684n\u4f4d\u6570"},next:{title:"\u94fe\u8868\u4e2d\u5012\u6570\u7b2ck\u4e2a\u8282\u70b9",permalink:"/Computer-Science-Learn-Notes/docs/Java/leetcode/src/\u5251\u6307offer/\u94fe\u8868\u4e2d\u5012\u6570\u7b2ck\u4e2a\u8282\u70b9"}},l={},p=[{value:"\u5251\u6307 Offer 18. \u5220\u9664\u94fe\u8868\u7684\u8282\u70b9",id:"\u5251\u6307-offer-18-\u5220\u9664\u94fe\u8868\u7684\u8282\u70b9",level:2},{value:"\u89e3\u6cd51",id:"\u89e3\u6cd51",level:3}],s={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5251\u6307-offer-18-\u5220\u9664\u94fe\u8868\u7684\u8282\u70b9"},"\u5251\u6307 Offer 18. \u5220\u9664\u94fe\u8868\u7684\u8282\u70b9"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/?favorite=xb9nqhhg"},"\u5251\u6307 Offer 18. \u5220\u9664\u94fe\u8868\u7684\u8282\u70b9 - \u529b\u6263\uff08LeetCode\uff09")),(0,o.kt)("h3",{id:"\u89e3\u6cd51"},"\u89e3\u6cd51"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public ListNode deleteNode(ListNode head, int val) {\n        ListNode pre;\n        ListNode point = head;\n        if (head.val != val) {\n            pre = head;\n            point = point.next;\n        } else {\n            return head.next;\n        }\n        while (point != null) {\n            if (point.val == val) {\n                pre.next = point.next;\n                point = point.next;\n            }\n            pre = point;\n            if (point != null) point = point.next;\n        }\n        return head;\n    }\n}\n")))}f.isMDXComponent=!0}}]);