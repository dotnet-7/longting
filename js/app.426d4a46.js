(function(t){function e(e){for(var s,n,l=e[0],r=e[1],c=e[2],p=0,u=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00e4":function(t,e,a){},"03ee":function(t,e,a){},"0531":function(t,e,a){},"0d35":function(t,e,a){},"0fea":function(t,e,a){},"10cb":function(t,e,a){t.exports=a.p+"img/幻灯片11.5c762f4f.png"},"10cb8":function(t,e,a){t.exports=a.p+"img/幻灯片12.bceadb17.png"},"10cb8a":function(t,e,a){t.exports=a.p+"img/幻灯片13.f6eda712.png"},"10cb8a9":function(t,e,a){t.exports=a.p+"img/幻灯片14.b8917a0f.png"},"12ba":function(t,e,a){"use strict";a("9d59")},"131c":function(t,e,a){t.exports=a.p+"img/幻灯片23.42d6bd65.png"},"131c9":function(t,e,a){t.exports=a.p+"img/幻灯片30.e7512faa.png"},2134:function(t,e,a){"use strict";a("03ee")},"21bc":function(t,e,a){"use strict";a("0531")},"2e30":function(t,e,a){"use strict";a("d13f")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{class:{"text-dark":!t.nightMode,"text-light":t.nightMode},attrs:{id:"app"}},[e("Navbar",{attrs:{nightMode:t.nightMode},on:{scroll:t.scrollTo,nightMode:t.switchMode}}),e("div",{staticClass:"parent"},[e("Home",{attrs:{nightMode:t.nightMode}}),e("About",{attrs:{id:"about",nightMode:t.nightMode}}),e("Skills",{attrs:{id:"skills",nightMode:t.nightMode}}),e("Portfolio",{attrs:{id:"portfolio",nightMode:t.nightMode}}),e("Contact",{attrs:{id:"contact",nightMode:t.nightMode}}),e("Footer",{attrs:{nightMode:t.nightMode}})],1)],1)},o=[],n=(a("14d9"),function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light fixed-top p-st",class:{"bg-light":!t.nightMode,"navbar-blur":t.navbarConfig.blur,"bg-dark2":t.nightMode}},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","home")}}},[e("Logo",{attrs:{nightMode:t.nightMode}})],1),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item mx-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/about"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","about")}}},[t._v("About")])]),e("li",{staticClass:"nav-item mx-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/skills"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","skills")}}},[t._v("Skills")])]),e("li",{staticClass:"nav-item mx-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/portfolio"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","portfolio")}}},[t._v("Portfolio")])]),e("li",{staticClass:"nav-item mx-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/contact"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","contact")}}},[t._v("Contact")])]),e("li",{staticClass:"nav-item ml-2"},[e("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.switchMode.apply(null,arguments)}}},[e("i",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.nightMode?"Light Mode":"Night Mode",expression:"nightMode ? 'Light Mode' : 'Night Mode'",modifiers:{bottom:!0}}],class:{"fas fa-moon":t.nightMode,"far fa-moon":!t.nightMode}})])])])])])])])}),l=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticStyle:{color:"gray","font-size":"23px"}},[e("i",{staticClass:"fas fa-bars"})])])}],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo-div"},[e("span",{staticClass:"logo-title-name",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v(t._s(t.name))]),e("span",{staticClass:"logo-title-dot pblue"},[t._v(t._s(t.dot))])])},c=[];let d={name:"longting",logo_name:"lt",flat_picture:a("9f2c"),config:{use_cookies:!0,navbar:{blur:!1}},description:"longting",links:{linkedin:"https://www.linkedin.com/in/",github:"https://github.com/dotnet-7"},education:[{name:"重庆建筑工程职业学院",place:"重庆",date:"sep, 2022 - 2024",degree:"室内设计",gpa:"3.5/4.0",description:"",skills:["室内设计","软装工装"]}],experience:[{name:"ITI",place:"重庆",date:"1,sep, 2021 - 28,sep, 2021",position:"VueJS web developer",description:"",skills:["HTML5","CSS3","Bootstrap","JQuery","Json","JavaSript","TypeSript","es6","VueJS"]},{name:"Udacity",place:"重庆",date:"Jun 2021 - Jan 2022",position:"React Web Developer",description:"",skills:["Javascript","Typescript","ReactJS","React-Redux","webpack","NLP"]}],skills:[{title:"建模",info:["3DMAX","SketchUp","Enscape"],icon:"fa fa-pencil-square-o"},{title:"画图",info:["CAD","PS"],icon:"fa fa-cubes"}],portfolio_design:[{name:"ACBC餐吧",title:"商业设计",pictures:[{img:a("131c"),title:"MoodBoard"},{img:a("131c9"),title:"show"}],technologies:["CAD","Enscape","SketchUp"],category:"室内设计",github:"",date:"Jan, 2022",visit:"",description:""},{name:"商城茶室",title:"商业设计",pictures:[{img:a("61d2"),title:"MoodBoard"},{img:a("61d21"),title:"效果图"},{img:a("61d21e"),title:"效果图"},{img:a("61d21e0"),title:"平面图"}],technologies:["CAD","Enscape","SketchUp"],category:"Visual Design",github:"",date:"Dec, 2021",visit:"",description:""},{name:"宜室宜家",title:"住宅设计",pictures:[{img:a("d331"),title:"效果图"},{img:a("d331f"),title:"效果图"},{img:a("ab27"),title:"效果图"},{img:a("ab27d"),title:"效果图"},{img:a("ab27d8"),title:"效果图"},{img:a("ab27d84"),title:"效果图"},{img:a("ab27d84f"),title:"效果图"},{img:a("ab27d84fa"),title:"效果图"},{img:a("ab27d84fa4"),title:"效果图"},{img:a("ab27d84fa4a"),title:"效果图"},{img:a("ab27d84fa4a8"),title:"效果图"},{img:a("ab27d84fa4a87"),title:"效果图"},{img:a("ab27d84fa4a877"),title:"效果图"},{img:a("ab27d84fa4a8778"),title:"效果图"},{img:a("ab27d84fa4a8778d"),title:"效果图"},{img:a("ab27d84fa4a8778df"),title:"效果图"},{img:a("ab27d84fa4a8778df1"),title:"效果图"},{img:a("ab27d84fa4a8778df15"),title:"效果图"},{img:a("ab27d84fa4a8778df154"),title:"效果图"},{img:a("ab27d84fa4a8778df154e"),title:"效果图"},{img:a("ab27d84fa4a8778df154ea"),title:"效果图"},{img:a("ab27d84fa4a8778df154eaa"),title:"效果图"},{img:a("ab27d84fa4a8778df154eaa7"),title:"效果图"}],technologies:["CAD","Enscape"],category:"室内设计",github:"",date:"Dec, 2023",visit:"",description:""}],portfolio:[{name:"Diary App",pictures:[{img:a("794e")},{img:a("794ef")},{img:a("794efe")}],technologies:["react","scss","local storage"],category:"Web App",date:"Aug, 2021 - 20 days",github:"",visit:"",description:" Diary react app with some new features: Dark mode, upload images, tags, filter search with title/content/tag "},{name:"Online Examination",pictures:[{img:a("794efe6")},{img:a("794efe6c")},{img:a("794efe6c9")},{img:a("794efe6c96")},{img:a("794efe6c968")}],technologies:["HTML","CSS","JavaSript","JQuery","PHP","MySQL"],category:"Web App",date:"Apr, 2021 - May, 2021",github:"",visit:"",description:"Online Examination System Today Online Examination System has become a fast growing examination method because of its speed and accuracy. It is also needed less manpower to execute the examination. Almost all organizations now-a-days, are conducting their objective exams by online examination system, it saves students time in examinations. Organizations can also easily check the performance of the student that they give in an examination. As a result of this, organizations are releasing results in less time. It also helps the environment by saving paper. According to today’s requirement, online examination project in php is very useful to learn it. What is an online examination system? In an online examination system examine get their user id and password with his/her admit card. This id is already saved in the examination server. When examine login to the server he/she get his/her profile already register. On the certain time examine gets the message to start the examination. All answers given by examine are saved into the server with his/her profile information. Online examination system also allows to correct the answer if the examine needed to change any answer in the examination time duration, however, after the time duration any change will not allow. This also makes c checking the answer easy and error proof as computers are more accurate than man and provide fast results too. Php is a web base language so we can create an online examination system in PHP. Administrator of Online Examination has multiple features such as Add, Delete, Update Topics and Question. To Login as Admin put inside your browser."},{name:"MyFlix.com",pictures:[{img:a("10cb")},{img:a("10cb8")},{img:a("10cb8a")},{img:a("10cb8a9")}],technologies:["react","css","TMDB"],category:"Web App",date:"Aug, 2021 - 10 days",github:"",visit:"",description:" flix.com is a netflix clone using React JS and TMDB with courusal and search engine. "}]};var p=d,u={name:"Logo",props:{nightMode:{type:Boolean}},data(){return{name:p.logo_name,dot:"."}}},g=u,m=(a("e03e"),a("2877")),h=Object(m["a"])(g,r,c,!1,null,"8d13128e",null),f=h.exports,b={name:"Navbar",props:{nightMode:{type:Boolean}},data(){return{navbarConfig:p.config.navbar,localNightMode:this.nightMode}},components:{Logo:f},methods:{switchMode(){this.localNightMode=!this.localNightMode,this.$emit("nightMode",this.localNightMode)}}},v=b,y=(a("8782"),Object(m["a"])(v,n,l,!1,null,"163e87aa",null)),x=y.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-5 p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[e("div",{staticClass:"container",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center"},[e("img",{attrs:{src:t.picture}})]),e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5"},[e("span",{staticClass:"home-title",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Welcome to my portfolio!")]),e("div",[e("p",{domProps:{innerHTML:t._s(t.description)}})]),e("div",{staticClass:"text-center pb-4"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"LinkedIn",expression:"'LinkedIn'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("linkedin")}}},[e("i",{staticClass:"fab fa-linkedin"})]),e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"GitHub",expression:"'GitHub'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("github")}}},[e("i",{staticClass:"fab fa-github"})]),e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"behance",expression:"'behance'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("behance")}}},[e("i",{staticClass:"fab fa-behance"})]),e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"Resume",expression:"'Resume'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("resume")}}},[e("i",{staticClass:"fa fa-file"})])])])])])])},C=[],_=function(){var t=this,e=t._self._c;return e("span",{staticClass:"wave"},[t._v("👋🏽npm ")])},k=[],w={name:"Wave"},S=w,T=(a("dff9"),Object(m["a"])(S,_,k,!1,null,"df85ed74",null)),D=T.exports,j={name:"Home",components:{Wave:D},props:{nightMode:{type:Boolean}},data(){return{picture:p.flat_picture,description:p.description,name:p.name,linkedin:p.links.linkedin,github:p.links.github,behance:p.links.behance,resume:p.links.resume}},methods:{open(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"behance":window.open(this.behance,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},O=j,B=(a("5f66"),Object(m["a"])(O,M,C,!1,null,"04ee2dd8",null)),A=B.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("About Me.")])]),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[e("Timeline",{attrs:{data:t.education,nightMode:t.nightMode}})],1),e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[e("Timeline",{attrs:{data:t.experience,nightMode:t.nightMode}})],1)])])])},P=[],N=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"mx-3 mt-3 mb-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-bg-12 col-md-12 col-sm-12"},[e("p",{staticClass:"title1",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"}},[t._v(" "+t._s(t.data.title)+" ")]),t._l(t.data.data,(function(a,s){return e("ul",{key:a.name,staticClass:"timeline m-0 pt-1",style:{"transition-delay":s/4.2+"s"},attrs:{"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"}},[e("li",{staticClass:"m-0 pb-2"},[e("div",[e("div",{staticClass:"px-2 title2"},[t._v(t._s(a.name)+", "+t._s(a.place))]),e("div",{staticClass:"px-2 title3"},[t._v(" "+t._s(a.degree||a.position)+" "+t._s(a.gpa?"("+a.gpa+")":"")+" ")]),e("div",{staticClass:"px-2 date"},[t._v(t._s(a.date))]),e("div",{staticClass:"px-2 pb-2 pt-2",staticStyle:{"text-align":"justify"}},[t._v(" "+t._s(a.description)+" ")]),t._l(a.skills,(function(a){return e("span",{key:a,staticClass:"mx-2 badge p-2 mb-2",class:{"bg-dark2":t.nightMode}},[t._v(t._s(a))])})),e("p",{staticClass:"m-2"})],2)])])}))],2)])])])},I=[],L={name:"Timeline",props:{data:{type:Object},nightMode:{type:Boolean}}},$=L,J=(a("2134"),Object(m["a"])($,N,I,!1,null,"72b2c29a",null)),H=J.exports,V={name:"About",components:{Timeline:H},props:{nightMode:{type:Boolean}},data(){return{education:{title:"education",data:p.education},experience:{title:"experiences",data:p.experience}}}},F=V,W=(a("764d"),Object(m["a"])(F,E,P,!1,null,"c4af5526",null)),z=W.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[e("div",{staticClass:"container py-4"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Skills.")])]),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),e("br"),e("div",{staticClass:"row"},t._l(t.skills,(function(a,s){return e("div",{key:a.title,staticClass:"col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4",style:{"transition-delay":s/4.2+"s"},attrs:{"data-aos":"fade-up","data-aos-offset":"10","data-aos-delay":"30","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[e("div",{staticClass:"bg-div"},[e("i",{class:a.icon})]),e("div",{staticClass:"title2 pt-2"},[t._v(t._s(a.title))]),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),e("span",{staticClass:"title3"},[t._v(t._s(a.info.join(", ")))])])})),0)])])},R=[],U={name:"Skills",props:{nightMode:{type:Boolean}},data(){return{skills:p.skills}}},Q=U,q=(a("a4da"),Object(m["a"])(Q,G,R,!1,null,"c71fcfc2",null)),X=q.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Portfolio.")])]),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),e("vue-tabs",{attrs:{activeTextColor:t.nightMode?"#dfdfdf":"#535A5E"}},[e("v-tab",{attrs:{title:"design"}},[e("div",{staticClass:"row"},t._l(t.desgin_info,(function(a,s){return e("div",{key:s,staticClass:"col-xl-6 col-bg-6 col-md-12 col-sm-12",class:{"mt-4":!0},staticStyle:{position:"relative"}},[e("vueper-slides",{staticStyle:{position:"aboslute"},attrs:{"dragging-distance":50,"fixed-height":"300px",bullets:!1,"slide-content-outside":"bottom"},on:{click:function(e){return e.preventDefault(),t.showDesignModalFn(a)}}},t._l(a.pictures,(function(t,a){return e("vueper-slide",{key:a,attrs:{image:t.img}})})),1),e("div",{staticClass:"mt-2",staticStyle:{width:"100%",display:"flex","justify-content":"space-between"}},[e("div",[e("div",{staticClass:"title2",staticStyle:{"font-weight":"500"}},[t._v(t._s(a.title))]),t._l(a.technologies,(function(a){return e("span",{key:a,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(a))])})),t._v(" • "),e("span",{staticClass:"date ml-1"},[t._v(t._s(a.date))])],2),e("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline",staticStyle:{height:"31px","margin-top":"5px"},on:{click:function(e){return e.preventDefault(),t.showDesignModalFn(a)}}},[t._v(" read more ")])])],1)})),0),e("br")]),e("v-tab",{attrs:{title:"development"}},[e("br"),e("div",{staticClass:"row"},t._l(t.portfolio_info,(function(a,s){return e("div",{key:a.name,staticClass:"col-xl-4 col-bg-4 col-md-6 col-sm-12"},[e("Card",{style:{"transition-delay":s%3/4.2+"s"},attrs:{portfolio:a,"data-aos":"fade-up",nightMode:t.nightMode,"data-aos-offset":"100","data-aos-delay":"10","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"},on:{show:t.showModalFn}})],1)})),0),"show less"!==t.showBtn?e("div",{staticClass:"text-center py-3"},[e("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.showMore.apply(null,arguments)}}},[t._v(t._s(t.showBtn))])]):t._e()])],1)],1),e("transition",{attrs:{name:"modal"}},[t.showModal?e("Modal",{attrs:{showModal:t.showModal,portfolio:t.modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1),e("transition",{attrs:{name:"modal"}},[t.showDesignModal?e("DesignModal",{attrs:{showModal:t.showDesignModal,portfolio:t.design_modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1)],1)},K=[],Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-3 mx-3"},[e("div",{staticClass:"card smcard",class:{"pcard-dark":t.nightMode,pcard:!t.nightMode,"bg-dark3":t.nightMode}},[e("div",{staticStyle:{height:"180px"}},[e("img",{staticClass:"card-img-top",attrs:{src:t.portfolio.pictures[0].img,alt:"Card image cap"}})]),e("div",{staticClass:"card-body pborder-top"},[e("h5",{staticClass:"title2"},[t._v(t._s(t.portfolio.name))]),e("div",[e("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(a){return e("span",{key:a,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(a))])})),0),e("p",{staticClass:"title3 m-0 pb-2 pheight pt-1",domProps:{innerHTML:t._s(t.portfolio.description.length>100?t.portfolio.description.substring(0,105)+"...":t.portfolio.description)}})]),e("div",{staticClass:"text-center mt-2"},[e("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.showModal.apply(null,arguments)}}},[t._v(" read more ")]),t.portfolio.visit?e("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline ml-4",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(" visit website ")]):t._e()])])])])},tt=[],et={name:"Card",props:{portfolio:{type:Object},nightMode:{type:Boolean}},methods:{open(t){window.open(t,"_blank")},showModal(){this.$emit("show",this.portfolio)}}},at=et,st=(a("a5c4"),Object(m["a"])(at,Y,tt,!1,null,"181ed13a",null)),it=st.exports,ot=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[e("div",{staticClass:"title1 px-4 pt-3"},[e("span",[e("a",{class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(t._s(t.portfolio.name))])]),e("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(e){return t.$emit("close")}}},[e("i",{staticClass:"fas fa-times"})]),e("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),e("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[e("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}},[e("span",[t._v(t._s(t.portfolio.date)+" • "+t._s(t.portfolio.category))])]),e("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(a){return e("span",{key:a,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(a))])})),0),e("div",{staticStyle:{"text-align":"justify"}},[e("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),e("hr"),e("div",[e("Gallery",{attrs:{images:t.portfolio.pictures}})],1)]),e("div",{staticClass:"text-center pb-3"},[e("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),e("button",{staticClass:"btn w-25 mr-3",on:{click:function(e){return t.open(t.portfolio.github)}}},[t._v(" github ")]),e("button",{staticClass:"btn w-25",on:{click:function(e){return t.$emit("close")}}},[t._v("close")])])])])])])},nt=[],lt=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"carousel slide",staticStyle:{height:"200px"},attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[e("div",{staticClass:"carousel-inner"},t._l(t.images,(function(t){return e("div",{key:t,staticClass:"carousel-item active"},[e("img",{staticClass:"d-block w-100",attrs:{src:"https://picsum.photos/id/237/200/300",alt:"Second slide"}})])})),0),t._m(0),t._m(1)])])},rt=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Next")])])}],ct={name:"Carousel",props:{images:{type:Array},name:{type:String}},mounted(){}},dt=ct,pt=Object(m["a"])(dt,lt,rt,!1,null,"2682f26c",null),ut=pt.exports,gt=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{overflow:"auto"}},[e("div",{staticClass:"prow"},t._l(t.images,(function(a,s){return e("div",{key:a.title,staticClass:"pcolumn",class:{flex:t.design?"100%":"50%","-ms-flex":t.design?"100%":"50%","max-width":t.design?"100%":"50%"}},[e("img",{staticClass:"g-img",staticStyle:{width:"100%"},attrs:{src:a.img,id:"gi"+s},on:{click:function(e){return t.showImg(s)}}}),e("div",{staticClass:"mt-1"},[e("p",{staticStyle:{"font-weight":"500"}},[t._v(t._s(a.title))])])])})),0),t._m(0)])},mt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal",attrs:{id:"myModal"}},[e("span",{staticClass:"close"},[t._v("×")]),e("img",{staticClass:"modal-content",attrs:{id:"modalImg"}}),e("div",{attrs:{id:"caption"}})])}],ht={name:"Gallery",props:{images:{type:Array},design:{type:Boolean}},data(){return{modal:null}},methods:{showImg(t){var e=document.getElementById("myModal"),a=document.getElementById("gi"+t),s=document.getElementById("modalImg");e.style.display="block",s.src=a.src;var i=document.getElementsByClassName("close")[0];i.onclick=function(){s.classList.add("closeModal"),e.classList.add("modalClose"),setTimeout(()=>{e.style.display="none",s.classList.remove("closeModal"),e.classList.remove("modalClose")},200)}}}},ft=ht,bt=(a("6c8c"),Object(m["a"])(ft,gt,mt,!1,null,"0382ed62",null)),vt=bt.exports,yt={name:"Modal",components:{Carousel:ut,Gallery:vt},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean}},created(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open(t){window.open(t,"_blank")}}},xt=yt,Mt=(a("12ba"),Object(m["a"])(xt,ot,nt,!1,null,"463bb61e",null)),Ct=Mt.exports,_t=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[e("div",{staticClass:"title1 px-4 pt-3"},[e("span",{class:{"text-light":t.nightMode}},[t._v(t._s(t.portfolio.name))]),e("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(e){return t.$emit("close")}}},[e("i",{staticClass:"fas fa-times"})]),e("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),e("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[e("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}},[e("span",[t._v(t._s(t.portfolio.date)+" • "+t._s(t.portfolio.category))])]),e("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(a){return e("span",{key:a,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(a))])})),0),e("div",{staticStyle:{"text-align":"justify"}},[e("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),e("hr"),e("div",[e("Gallery",{attrs:{images:t.portfolio.pictures,design:!0}})],1)]),e("div",{staticClass:"text-center pb-3"},[e("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),e("button",{staticClass:"btn w-25",on:{click:function(e){return t.$emit("close")}}},[t._v("close")])])])])])])},kt=[],wt={name:"Modal",components:{Carousel:ut,Gallery:vt},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean}},created(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open(t){window.open(t,"_blank")}}},St=wt,Tt=(a("688f"),Object(m["a"])(St,_t,kt,!1,null,"921496ce",null)),Dt=Tt.exports,jt=a("4d48"),Ot=(a("4bf4"),a("b1b5")),Bt=(a("2ec8"),{name:"Portfolio",components:{Card:it,Modal:Ct,VueTabs:jt["VueTabs"],VTab:jt["VTab"],VueperSlides:Ot["VueperSlides"],VueperSlide:Ot["VueperSlide"],DesignModal:Dt},props:{nightMode:{type:Boolean}},data(){return{all_info:p.portfolio,desgin_info:p.portfolio_design,portfolio_info:[],showModal:!1,showDesignModal:!1,modal_info:{},design_modal_info:{},number:3,showBtn:"show more",shower:0,data:['<div class="example-slide">Slide 1</div>','<div class="example-slide">Slide 2</div>','<div class="example-slide">Slide 3</div>']}},created(){for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])},watch:{number(){this.portfolio_info=[];for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])}},methods:{next(){this.$refs.flickity.next()},previous(){this.$refs.flickity.previous()},closeModal(){this.showModal=!1,this.showDesignModal=!1,document.getElementsByTagName("body")[0].classList.remove("modal-open")},showModalFn(t){this.modal_info=t,this.showModal=!0},showDesignModalFn(t){this.design_modal_info=t,this.showDesignModal=!0},showMore(){if(this.number!=this.all_info.length&&(this.number+=3,window.scrollBy({top:document.getElementsByClassName("smcard")[0].clientHeight,behavior:"smooth"}),this.number>this.all_info.length&&(this.number=this.all_info.length)),this.number==this.all_info.length&&0==this.shower)this.shower=1,this.showBtn="show less";else if(this.number==this.all_info.length&&1==this.shower){var t=document.getElementById("portfolio").offsetTop;window.scrollTo({top:t+5,behavior:"smooth"}),this.shower=0,this.number=3,this.showBtn="show more"}}}}),At=Bt,Et=(a("2e30"),Object(m["a"])(At,Z,K,!1,null,"4b4254a0",null)),Pt=Et.exports,Nt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[e("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Contact.")])]),e("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),e("br"),e("div",{staticClass:"text-center"},[e("div",{staticClass:"mb-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.2s"},attrs:{type:"text",name:"user_name",placeholder:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.4s"},attrs:{type:"email",name:"user_email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.6s"},attrs:{name:"message",placeholder:"message",rows:"4"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),e("button",{staticClass:"mt-1 btn mb-3",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000","data-aos-offset":"50"},on:{click:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[t._v(" Send ")])]),e("Snackbar",{attrs:{showSnackbar:t.showSnackbar,snackbarMessage:t.snackbarMessage,snackbarColor:t.snackbarColor},on:{close:t.closeSnackbar}})],1)])},It=[];let Lt={emailjs:{serviceID:"gmail",templateID:"template_zHretJ0d",userID:"user_8g0rh3d6Qj1QZBEU8USls"}};var $t=Lt,Jt=a("0f91"),Ht=a.n(Jt),Vt=function(){var t=this,e=t._self._c;return e("div",[e("div",{class:{show:t.showSnackbar},style:{"background-color":t.snackbarColor},attrs:{id:"snackbar"}},[t._v(" "+t._s(t.snackbarMessage)+" ")])])},Ft=[],Wt={name:"Snackbar",props:{showSnackbar:{type:Boolean},snackbarMessage:{type:String},snackbarColor:{type:String}},watch:{showSnackbar(t){t&&setTimeout(()=>{this.$emit("close",!1)},1900)}}},zt=Wt,Gt=(a("868c"),Object(m["a"])(zt,Vt,Ft,!1,null,"13e93b43",null)),Rt=Gt.exports,Ut={name:"Contact",components:{Snackbar:Rt},props:{nightMode:{type:Boolean}},data(){return{email:"",name:"",text:"",showSnackbar:!1,snackbarMessage:"",snackbarColor:""}},methods:{closeSnackbar(t){t||setTimeout(()=>{this.showSnackbar=t},1e3)},sendEmail(){if(this.email&&this.name&&this.text){var t={user_email:this.email,from_name:this.name,message_html:this.text,to_name:"long ting"};Ht.a.send($t.emailjs.serviceID,$t.emailjs.templateID,t,$t.emailjs.userID).then(t=>{this.showSnackbar=!0,this.snackbarMessage="Thanks! Message recieved.",this.snackbarColor="#1aa260",this.email="",this.text="",this.name=""},t=>{this.showSnackbar=!0,this.snackbarMessage="Oops! Something went wrong.",this.snackbarColor="#64808E"})}else this.showSnackbar=!0,this.snackbarMessage="Please all the fields",this.snackbarColor="#64808E"}}},Qt=Ut,qt=(a("cf2a"),Object(m["a"])(Qt,Nt,It,!1,null,"248128d2",null)),Xt=qt.exports,Zt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-secondary"},[e("div",{staticClass:"container py-3"},[e("div",{staticClass:"row pt-1 align-items-center"},[t._m(0),e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("linkedin")}}},[e("i",{staticClass:"fab fa-linkedin"})]),e("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("github")}}},[e("i",{staticClass:"fab fa-github"})]),e("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("behance")}}},[e("i",{staticClass:"fab fa-behance"})]),e("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("resume")}}},[e("i",{staticClass:"fa fa-file"})])])])])])])},Kt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow",staticStyle:{color:"white"}},[e("span",[t._v("© 2021 Copyright: long ting")])])}],Yt={name:"Footer",data(){return{linkedin:p.links.linkedin,github:p.links.github,behance:p.links.behance,resume:p.links.resume}},methods:{open(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"behance":window.open(this.behance,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},te=Yt,ee=(a("744a"),Object(m["a"])(te,Zt,Kt,!1,null,"489c77ef",null)),ae=ee.exports,se={name:"App",components:{Navbar:x,Home:A,About:z,Skills:X,Portfolio:Pt,Contact:Xt,Footer:ae},data(){return{nightMode:!1,config:p.config}},created(){this.config.use_cookies&&(this.nightMode="true"===this.$cookie.get("nightMode"))},mounted(){["about","contact","skills","portfolio"].forEach(t=>{if(window.location.href.includes(t)){var e=document.getElementById(t).offsetTop;window.scrollTo({top:e-35,behavior:"smooth"})}})},methods:{switchMode(t){this.config.use_cookies&&this.$cookie.set("nightMode",t),this.nightMode=t},scrollTo(t){if("home"==t)this.$router.push("/").catch(()=>{}),window.scrollTo({top:-80,behavior:"smooth"});else{var e=document.getElementById(t).offsetTop;window.scrollTo({top:e-35,behavior:"smooth"}),this.$router.history.current.path!=="/"+t&&this.$router.push("/"+t)}}}},ie=se,oe=(a("21bc"),Object(m["a"])(ie,i,o,!1,null,null,null)),ne=oe.exports,le=a("f5af"),re=a.n(le),ce=(a("e829"),a("b3b5")),de=a("f13c"),pe=a.n(de),ue=a("8c4f"),ge=a("e37d"),me=a("00e7");s["a"].use(ge["a"]),s["a"].use(ue["a"]),s["a"].use(pe.a),s["a"].use(me),s["a"].use(ce["a"]),s["a"].config.productionTip=!1;const he=[{path:"/"}],fe=new ue["a"]({mode:"hash",routes:he});new s["a"]({created(){re.a.init()},router:fe,render:t=>t(ne)}).$mount("#app")},"5f66":function(t,e,a){"use strict";a("61cc")},"61cc":function(t,e,a){},"61d2":function(t,e,a){t.exports=a.p+"img/幻灯片46.3bc42e28.png"},"61d21":function(t,e,a){t.exports=a.p+"img/幻灯片47.63a5c4c6.png"},"61d21e":function(t,e,a){t.exports=a.p+"img/幻灯片48.b9bece7b.png"},"61d21e0":function(t,e,a){t.exports=a.p+"img/幻灯片15.d529947b.png"},"688f":function(t,e,a){"use strict";a("8317")},6998:function(t,e,a){},"6c8c":function(t,e,a){"use strict";a("a7cc")},"6d39":function(t,e,a){},"740d":function(t,e,a){},"744a":function(t,e,a){"use strict";a("c6e8")},"764d":function(t,e,a){"use strict";a("0d35")},"794e":function(t,e,a){t.exports=a.p+"img/幻灯片7.8c82e0f2.png"},"794ef":function(t,e,a){t.exports=a.p+"img/幻灯片8.76acc6c4.png"},"794efe":function(t,e,a){t.exports=a.p+"img/幻灯片9.a0380edd.png"},"794efe6":function(t,e,a){t.exports=a.p+"img/幻灯片2.92b338d3.png"},"794efe6c":function(t,e,a){t.exports=a.p+"img/幻灯片3.5c9fe19a.png"},"794efe6c9":function(t,e,a){t.exports=a.p+"img/幻灯片4.358db2cc.png"},"794efe6c96":function(t,e,a){t.exports=a.p+"img/幻灯片5.6d4b30dc.png"},"794efe6c968":function(t,e,a){t.exports=a.p+"img/幻灯片6.1137931e.png"},8317:function(t,e,a){},"868c":function(t,e,a){"use strict";a("6998")},8782:function(t,e,a){"use strict";a("00e4")},"9d59":function(t,e,a){},"9f2c":function(t,e,a){t.exports=a.p+"img/me.4abde177.png"},a4da:function(t,e,a){"use strict";a("ef01")},a5c4:function(t,e,a){"use strict";a("d33a")},a7cc:function(t,e,a){},ab27:function(t,e,a){t.exports=a.p+"img/幻灯片10.3fd85a91.png"},ab27d:function(t,e,a){t.exports=a.p+"img/幻灯片11.27f5b8e5.png"},ab27d8:function(t,e,a){t.exports=a.p+"img/幻灯片12.e5753ad1.png"},ab27d84:function(t,e,a){t.exports=a.p+"img/幻灯片13.bad644f1.png"},ab27d84f:function(t,e,a){t.exports=a.p+"img/幻灯片14.f45b1ebb.png"},ab27d84fa:function(t,e,a){t.exports=a.p+"img/幻灯片15.ca6e0b59.png"},ab27d84fa4:function(t,e,a){t.exports=a.p+"img/幻灯片16.12e38d28.png"},ab27d84fa4a:function(t,e,a){t.exports=a.p+"img/幻灯片17.5fcb4079.png"},ab27d84fa4a8:function(t,e,a){t.exports=a.p+"img/幻灯片18.cac0eba7.png"},ab27d84fa4a87:function(t,e,a){t.exports=a.p+"img/幻灯片19.77ef13aa.png"},ab27d84fa4a877:function(t,e,a){t.exports=a.p+"img/幻灯片20.1e79ec5c.png"},ab27d84fa4a8778:function(t,e,a){t.exports=a.p+"img/幻灯片21.5d5b18eb.png"},ab27d84fa4a8778d:function(t,e,a){t.exports=a.p+"img/幻灯片22.e44006f3.png"},ab27d84fa4a8778df:function(t,e,a){t.exports=a.p+"img/幻灯片23.5dffbdbf.png"},ab27d84fa4a8778df1:function(t,e,a){t.exports=a.p+"img/幻灯片24.3d0d7159.png"},ab27d84fa4a8778df15:function(t,e,a){t.exports=a.p+"img/幻灯片25.01df2283.png"},ab27d84fa4a8778df154:function(t,e,a){t.exports=a.p+"img/幻灯片26.8894f811.png"},ab27d84fa4a8778df154e:function(t,e,a){t.exports=a.p+"img/幻灯片27.3b02aae4.png"},ab27d84fa4a8778df154ea:function(t,e,a){t.exports=a.p+"img/幻灯片28.39f83bac.png"},ab27d84fa4a8778df154eaa:function(t,e,a){t.exports=a.p+"img/幻灯片29.37598dbc.png"},ab27d84fa4a8778df154eaa7:function(t,e,a){t.exports=a.p+"img/幻灯片30.2dbbde70.png"},c6e8:function(t,e,a){},cf2a:function(t,e,a){"use strict";a("740d")},d13f:function(t,e,a){},d331:function(t,e,a){t.exports=a.p+"img/幻灯片8.a60702c1.png"},d331f:function(t,e,a){t.exports=a.p+"img/幻灯片9.c6fa7542.png"},d33a:function(t,e,a){},dff9:function(t,e,a){"use strict";a("0fea")},e03e:function(t,e,a){"use strict";a("6d39")},ef01:function(t,e,a){}});
//# sourceMappingURL=app.426d4a46.js.map