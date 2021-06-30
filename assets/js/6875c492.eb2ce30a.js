(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[610],{940:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(7378),l=a(8944),n=a(5318),s=a(1787),i=a(4142),m=a(176),c=a(4896),o=a(1956),d=a(9169),u="blogPostTitle_28zC",g="blogPostData_2ipU",p="blogPostDetailsFull_2LNT";var h=function(e){var t,a,h,E=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=e.children,v=e.frontMatter,f=e.metadata,N=e.truncated,_=e.isBlogPostPage,k=void 0!==_&&_,Z=f.date,T=f.formattedDate,w=f.permalink,P=f.tags,I=f.readingTime,L=f.title,M=f.editUrl,y=v.author,C=v.image,U=v.keywords,x=v.author_url||v.authorURL,z=v.author_title||v.authorTitle,A=v.author_image_url||v.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(o.Z,{keywords:U,image:C}),r.createElement("article",{className:k?void 0:"margin-bottom--xl"},(h=k?"h1":"h2",r.createElement("header",null,r.createElement(h,{className:u},k?L:r.createElement(i.Z,{to:w},L)),r.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:Z},T),I&&r.createElement(r.Fragment,null," \xb7 ",E(I))),r.createElement("div",{className:"avatar margin-vert--md"},A&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:x},r.createElement("img",{src:A,alt:y})),r.createElement("div",{className:"avatar__intro"},y&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:x},y)),r.createElement("small",{className:"avatar__subtitle"},z)))))),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:c.Z},b)),(P.length>0||N)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(t={},t[p]=k,t))},P.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),P.map((function(e){var t=e.label,a=e.permalink;return r.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),k&&M&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.Z,{editUrl:M})),!k&&N&&r.createElement("div",{className:"col text--right"},r.createElement(i.Z,{to:f.permalink,"aria-label":"Read more about "+L},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5940:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7378),l=a(8944),n=a(4142),s="sidebar_3pri",i="sidebarItemTitle_2iko",m="sidebarItemList_3aXd",c="sidebarItem_2HDj",o="sidebarItemLink_VIvG",d="sidebarItemLinkActive_34mL",u=a(1787);function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},e.title))}))))}},4411:function(e,t,a){"use strict";a.r(t);var r=a(7378),l=a(9899),n=a(940),s=a(4142),i=a(5940),m=a(1787),c=a(176);t.default=function(e){var t,a=e.metadata,o=e.items,d=e.sidebar,u=a.allTagsPath,g=a.name,p=a.count,h=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(p),tagName:g});return r.createElement(l.Z,{title:E,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(i.Z,{sidebar:d})),r.createElement("main",{className:"col col--7"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,E),r.createElement(s.Z,{href:u},r.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return r.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))}))))))}},9169:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(7378),l=a(1787),n=a(9603),s=a(120),i=a(8944),m="iconEdit_1CBY",c=["className"],o=function(e){var t=e.className,a=(0,s.Z)(e,c);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(o,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);