(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85],{9965:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7378),a=n(8944),c=n(9899),l=n(5318),o=n(4896),i=n(7205),s=n(176),m="mdxPageWrapper_X-9I";var u=function(e){var t=e.content,n=t.frontMatter,u=t.metadata,d=n.title,f=n.description,v=n.wrapperClassName,p=n.hide_table_of_contents,E=u.permalink;return r.createElement(c.Z,{title:d,description:f,permalink:E,wrapperClassName:null!=v?v:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",m)},r.createElement("div",{className:(0,a.Z)("col",!p&&"col--8")},r.createElement(l.Zo,{components:o.Z},r.createElement(t,null))),!p&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(i.Z,{toc:t.toc})))))}},7205:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7378),a=n(8944);var c=function(e,t,n){var a=(0,r.useState)(void 0),c=a[0],l=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,o=!1,i=document.getElementsByClassName(e);a<i.length&&!o;){var s=i[a],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));r.id===u&&(c&&c.classList.remove(t),s.classList.add(t),l(s),o=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},l="tableOfContents_3J2a",o="table-of-contents__link";function i(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return c(o,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(l,"thin-scrollbar")},r.createElement(i,{toc:t}))}}}]);