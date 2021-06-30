(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89],{3643:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return g}});var r=t(7378),l=t(353),n=t(9899),i=t(940),s=t(4142),m=t(1787);var o=function(e){var a=e.metadata,t=a.previousPage,l=a.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=t(5940),d=t(176);var g=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,l.Z)().siteConfig.title,g=a.blogDescription,u=a.blogTitle,p="/"===a.permalink?m:u;return r.createElement(n.Z,{title:p,description:g,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(c.Z,{sidebar:s})),r.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return r.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.createElement(a,null))})),r.createElement(o,{metadata:a})))))}},940:function(e,a,t){"use strict";t.d(a,{Z:function(){return v}});var r=t(7378),l=t(8944),n=t(5318),i=t(1787),s=t(4142),m=t(176),o=t(4896),c=t(1956),d=t(9169),g="blogPostTitle_28zC",u="blogPostData_2ipU",p="blogPostDetailsFull_2LNT";var v=function(e){var a,t,v,E=(t=(0,m.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),b=e.children,h=e.frontMatter,_=e.metadata,N=e.truncated,f=e.isBlogPostPage,Z=void 0!==f&&f,k=_.date,T=_.formattedDate,w=_.permalink,L=_.tags,I=_.readingTime,P=_.title,M=_.editUrl,C=h.author,x=h.image,y=h.keywords,A=h.author_url||h.authorURL,U=h.author_title||h.authorTitle,R=h.author_image_url||h.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(c.Z,{keywords:y,image:x}),r.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(v=Z?"h1":"h2",r.createElement("header",null,r.createElement(v,{className:g},Z?P:r.createElement(s.Z,{to:w},P)),r.createElement("div",{className:(0,l.Z)(u,"margin-vert--md")},r.createElement("time",{dateTime:k},T),I&&r.createElement(r.Fragment,null," \xb7 ",E(I))),r.createElement("div",{className:"avatar margin-vert--md"},R&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:A},r.createElement("img",{src:R,alt:C})),r.createElement("div",{className:"avatar__intro"},C&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:A},C)),r.createElement("small",{className:"avatar__subtitle"},U)))))),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:o.Z},b)),(L.length>0||N)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=Z,a))},L.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var a=e.label,t=e.permalink;return r.createElement(s.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),Z&&M&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:M})),!Z&&N&&r.createElement("div",{className:"col text--right"},r.createElement(s.Z,{to:_.permalink,"aria-label":"Read more about "+P},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5940:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var r=t(7378),l=t(8944),n=t(4142),i="sidebar_3pri",s="sidebarItemTitle_2iko",m="sidebarItemList_3aXd",o="sidebarItem_2HDj",c="sidebarItemLink_VIvG",d="sidebarItemLinkActive_34mL",g=t(1787);function u(e){var a=e.sidebar;return 0===a.items.length?null:r.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},a.title),r.createElement("ul",{className:m},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:o},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:d},e.title))}))))}},9169:function(e,a,t){"use strict";t.d(a,{Z:function(){return d}});var r=t(7378),l=t(1787),n=t(9603),i=t(120),s=t(8944),m="iconEdit_1CBY",o=["className"],c=function(e){var a=e.className,t=(0,i.Z)(e,o);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,a),"aria-hidden":"true"},t),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var a=e.editUrl;return r.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);