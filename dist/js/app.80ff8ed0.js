(function(t){function e(e){for(var a,i,l=e[0],n=e[1],c=e[2],d=0,m=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,l=1;l<s.length;l++){var n=s[l];0!==r[n]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=n;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0538":function(t,e,s){},"0b75":function(t,e,s){},"0bb9":function(t,e,s){"use strict";var a=s("0b75"),r=s.n(a);r.a},1469:function(t,e,s){"use strict";var a=s("b9cc"),r=s.n(a);r.a},"272e":function(t,e,s){"use strict";var a=s("0538"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("f846");var a=s("2b0e"),r=s("5c96"),o=s.n(r),i=(s("0fae"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"index"}},[s("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"},[s("h5",{staticClass:"my-0 mr-md-auto font-weight-normal",on:{click:t.tohome}},[t._v("Powered by Webpack")]),t._m(0),s("a",{directives:[{name:"show",rawName:"v-show",value:!t.login,expression:"!login"}],staticClass:"btn btn-outline-primary",on:{click:t.tologin}},[t._v("log in")]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],staticClass:"btn btn-outline-primary",on:{click:t.logout}},[t._v("log out")])]),s("router-view",{on:{transfer:t.islogin}}),s("footer",{staticClass:"container py-5",staticStyle:{position:"relative",bottom:"0"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md"},[s("svg",{staticClass:"d-block mb-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",role:"img",viewBox:"0 0 24 24",focusable:"false"}},[s("title",[t._v("Product")]),s("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),s("path",{attrs:{d:"M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"}})]),s("small",{staticClass:"d-block mb-3 text-muted"},[t._v("© 2017-2019")])]),t._m(1),t._m(2),t._m(3),t._m(4)])])],1)}),l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"my-2 my-md-0 mr-md-3"},[s("a",{staticClass:"p-2 text-dark",attrs:{href:"#"}},[t._v("Features")]),s("a",{staticClass:"p-2 text-dark",attrs:{href:"#"}},[t._v("Enterprise")]),s("a",{staticClass:"p-2 text-dark",attrs:{href:"#"}},[t._v("Support")]),s("a",{staticClass:"p-2 text-dark",attrs:{href:"#"}},[t._v("Pricing")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 col-md"},[s("h5",[t._v("Features")]),s("ul",{staticClass:"list-unstyled text-small"},[s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Cool stuff")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Random feature")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Team feature")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Stuff for developers")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Another one")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Last time")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 col-md"},[s("h5",[t._v("Resources")]),s("ul",{staticClass:"list-unstyled text-small"},[s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Resource")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Resource name")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Another resource")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Final resource")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 col-md"},[s("h5",[t._v("Resources")]),s("ul",{staticClass:"list-unstyled text-small"},[s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Business")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Education")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Government")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Gaming")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 col-md"},[s("h5",[t._v("About")]),s("ul",{staticClass:"list-unstyled text-small"},[s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Team")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Locations")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Privacy")])]),s("li",[s("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Terms")])])])])}],n={name:"index",data:function(){return{login:!1}},methods:{tohome:function(){this.$router.push("/")},islogin:function(t){this.login=t},logout:function(){this.login=!1,console.log(this.login)},tologin:function(){this.$router.push("/login")}}},c=n,u=s("2877"),d=Object(u["a"])(c,i,l,!1,null,null,null),m=d.exports,h=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"index"}},[s("div",{staticClass:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"},[s("div",{staticClass:"col-md-5 p-lg-5 mx-auto my-5"},[s("h1",{staticClass:"display-4 font-weight-normal"},[t._v("Devops")]),s("p",{staticClass:"lead font-weight-normal"},[t._v("DevOps is a set of practices that combines software development (Dev) and information-technology operations (Ops) which aims to shorten the systems development life cycle and provide continuous delivery with high software quality.")]),s("el-popover",{attrs:{placement:"top-start",title:"页面跳转",width:"300",trigger:"hover",content:"将会跳转至我的github地址，由于github服务器在国外，打开稍慢"}},[s("el-button",{staticClass:"thisbtn",attrs:{slot:"reference"},on:{click:t.tomygithub},slot:"reference"},[t._v("My github")])],1)],1),s("div",{staticClass:"product-device shadow-sm d-none d-md-block"}),s("div",{staticClass:"product-device product-device-2 shadow-sm d-none d-md-block"})]),s("div",{staticClass:"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"},[t._m(0),s("div",{staticClass:"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"},[s("div",{staticClass:"my-3 p-3"},[s("h2",{staticClass:"display-5"},[t._v("Another headline")]),s("p",{staticClass:"lead",on:{click:t.toKanBan}},[t._v("And an even wittier subheading.")])]),s("div",{staticClass:"bg-dark shadow-sm mx-auto",staticStyle:{width:"80%",height:"300px","border-radius":"21px 21px 0 0"}})])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"},[a("div",{staticClass:"my-3 py-3"},[a("h2",{staticClass:"display-5"},[t._v("What is Devops?")]),a("p",{staticClass:"lead"},[t._v("Development + Operations + QA")])]),a("div",{staticClass:"bg-light shadow-sm mx-auto",staticStyle:{width:"80%",height:"300px","border-radius":"21px 21px 0 0"}},[a("img",{staticStyle:{width:"60%",height:"100%"},attrs:{src:s("db45")}})])])}],v={name:"index",data:function(){return{}},methods:{tomygithub:function(){window.location.href="https://github.com/ivansmoot"},toKanBan:function(){this.$router.push("/kanban")}}},b=v,g=(s("0bb9"),Object(u["a"])(b,f,p,!1,null,"3f95ffca",null)),x=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mydiv",attrs:{id:"app4"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],staticClass:"text-center mb-4"},[a("img",{staticClass:"mb-4",attrs:{src:s("bcf4"),alt:"",width:"72",height:"72"}}),a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("登录")]),t._m(0)]),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"-30px"},attrs:{"status-icon":"",model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"账号",prop:"account"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"admin"},model:{value:t.ruleForm.account,callback:function(e){t.$set(t.ruleForm,"account",e)},expression:"ruleForm.account"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"pass"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{type:"password",placeholder:"password"},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1),a("el-form-item",{attrs:{label:"验证码",prop:"checkcode"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:t.ruleForm.checkcode,callback:function(e){t.$set(t.ruleForm,"checkcode",e)},expression:"ruleForm.checkcode"}})],1)],1),a("div",[a("el-button",{staticClass:"thiscode",attrs:{type:"primary",round:""},on:{click:t.creatCode}},[t._v(t._s(t.code))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],staticClass:"checkbox mb-3"},[t._m(1)]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"},on:{click:t.jump}},[t._v("登录")])],1)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("这是目前测试的登录页面，"),s("br"),t._v("引入了bootstrap的Floating labels组件")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticStyle:{"margin-left":"20px"}},[s("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" 记住我 ")])}],w=s("bc3a"),y=s.n(w);function k(t){var e=y.a.create({baseURL:"/apis"});return e(t)}a["default"].use(o.a);var $={name:"login",data:function(){return{dialog_visible:!0,username1:"test",password1:"",code:"",id:"2",ruleForm:{account:"",pass:"",checkcode:""},rules:{account:[{required:!0,message:"请输入账户",trigger:"blur"}],pass:[{required:!0,message:"请输入密码",trigger:"blur"}],checkcode:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},mounted:function(){var t=this;k({url:"/users"}).then((function(e){console.log(e.data[0].account),t.username1=e.data[0].account,t.password1=e.data[0].password,console.log(t.username1),console.log(t.password1),console.log(e)})).catch((function(t){console.log(t)}))},created:function(){this.creatCode()},methods:{jump:function(){console.log("点击成功"),this.ruleForm.account===this.username1&&this.ruleForm.pass===this.password1?this.code===this.ruleForm.checkcode?(this.$alert("登陆成功","恭喜你",{confirmButtonText:"确定"}),this.$emit("transfer",!0),this.$router.push("/")):(console.log("wrong password"),this.$alert("请重新输入","验证码错误",{confirmButtonText:"确定"}),this.creatCode()):(console.log("wrong password"),this.$alert("请重新输入","账号/密码错误",{confirmButtonText:"确定"}),this.creatCode())},creatCode:function(){this.code="",this.checkCode="";for(var t=4,e=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],s=0;s<t;s++){var a=Math.floor(36*Math.random());this.code+=e[a]}}}},F=$,S=(s("1469"),Object(u["a"])(F,_,C,!1,null,"6b3aefb0",null)),O=S.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"kanban"}},[s("p",{staticStyle:{"text-align":"center",margin:"0 0 20px"}},[t._v("使用 render-content 自定义数据项")]),s("div",{staticStyle:{"text-align":"center"}},[s("el-transfer",{staticStyle:{"text-align":"left",display:"inline-block"},attrs:{filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":t.renderFunc,titles:["Source","Target"],"button-texts":["到左边","到右边"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:t.data},on:{change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[s("el-button",{staticClass:"transfer-footer",attrs:{slot:"left-footer",size:"small"},slot:"left-footer"},[t._v("操作")]),s("el-button",{staticClass:"transfer-footer",attrs:{slot:"right-footer",size:"small"},slot:"right-footer"},[t._v("操作")])],1)],1)])},E=[],M={name:"kanban",data:function(){this.$createElement;var t=function(t){var e=[];return e.push({key:1,label:"这是第一个"}),e};return{data:t(),value:[1],value4:[1],renderFunc:function(t,e){return t("span",[e.key," - ",e.label])}}},methods:{handleChange:function(t,e,s){console.log(t,e,s)}}},P=M,T=(s("272e"),Object(u["a"])(P,j,E,!1,null,"58a3d880",null)),B=T.exports;a["default"].use(h["a"]);var A=new h["a"]({mode:"history",routes:[{path:"/",redirect:"/firstpage"},{path:"/firstpage",component:x},{path:"/login",component:O},{path:"/kanban",component:B}]}),R=A;a["default"].config.productionTip=!1,a["default"].use(o.a),new a["default"]({router:R,render:function(t){return t(m)}}).$mount("#app")},b9cc:function(t,e,s){},bcf4:function(t,e,s){t.exports=s.p+"img/bootstrap-solid.3ff965b6.svg"},db45:function(t,e,s){t.exports=s.p+"img/devops.dbdc44c8.jpg"},f846:function(t,e,s){}});
//# sourceMappingURL=app.80ff8ed0.js.map