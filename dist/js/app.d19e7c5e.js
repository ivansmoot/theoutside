(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],h=0,d=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"024c":function(t,e,a){"use strict";var n=a("71ea"),s=a.n(n);s.a},"02ff":function(t,e,a){"use strict";var n=a("3bd6"),s=a.n(n);s.a},"3bd6":function(t,e,a){},"3c19":function(t,e,a){},4070:function(t,e){t.exports="data:image/png;base64,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"},4222:function(t,e,a){"use strict";var n=a("fcb5"),s=a.n(n);s.a},"469f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("ab8b");var n=a("2b0e"),s=a("9ca8"),i=(a("ef97"),a("5c96")),o=a.n(i),r=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("div",{staticClass:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"},[a("h5",{staticClass:"my-0 mr-md-auto font-weight-normal",on:{click:t.tohome}},[t._v("Powered by Webpack")]),a("nav",{staticClass:"my-2 my-md-0 mr-md-3"},[a("a",{staticClass:"p-2 text-dark",attrs:{href:"#"}},[t._v("Features")]),a("a",{staticClass:"p-2 text-dark",attrs:{href:"#"}},[t._v("Enterprise")]),a("a",{staticClass:"p-2 text-dark",attrs:{href:"#"}},[t._v("Support")]),a("a",{staticClass:"p-2 text-dark",on:{click:t.tochat}},[t._v("Chat")])]),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.login,expression:"!login"}],staticClass:"btn btn-outline-primary",on:{click:t.tologin}},[t._v("log in")]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],staticClass:"btn btn-outline-primary",on:{click:t.logout}},[t._v("log out")])]),a("router-view",{on:{transfer:t.islogin}}),a("footer",{staticClass:"container py-5",staticStyle:{position:"relative",bottom:"0"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md"},[a("svg",{staticClass:"d-block mb-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",role:"img",viewBox:"0 0 24 24",focusable:"false"}},[a("title",[t._v("Product")]),a("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),a("path",{attrs:{d:"M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"}})]),a("small",{staticClass:"d-block mb-3 text-muted"},[t._v("© 2017-2019")])]),t._m(0),t._m(1),t._m(2),t._m(3)])])],1)}),l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 col-md"},[a("h5",[t._v("Features")]),a("ul",{staticClass:"list-unstyled text-small"},[a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Cool stuff")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Random feature")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Team feature")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Stuff for developers")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Another one")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Last time")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 col-md"},[a("h5",[t._v("Resources")]),a("ul",{staticClass:"list-unstyled text-small"},[a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Resource")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Resource name")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Another resource")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Final resource")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 col-md"},[a("h5",[t._v("Resources")]),a("ul",{staticClass:"list-unstyled text-small"},[a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Business")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Education")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Government")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Gaming")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 col-md"},[a("h5",[t._v("About")]),a("ul",{staticClass:"list-unstyled text-small"},[a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Team")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Locations")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Privacy")])]),a("li",[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Terms")])])])])}],c={name:"index",data:function(){return{login:!1}},methods:{tohome:function(){this.$router.push("/")},islogin:function(t){this.login=t},logout:function(){var t=this;this.$confirm("确认退出账号吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"成功退出账号"}),t.login=!1})).catch((function(){t.$message({type:"info",message:"已取消退出"})})),console.log(this.login)},tologin:function(){this.$router.push("/login")},tochat:function(){this.$router.push("/chat")}}},u=c,h=(a("024c"),a("2877")),d=Object(h["a"])(u,r,l,!1,null,null,null),f=d.exports,p=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("div",{staticClass:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"},[a("div",{staticClass:"col-md-5 p-lg-5 mx-auto my-5"},[a("h1",{staticClass:"display-4 font-weight-normal"},[t._v("Devops")]),a("p",{staticClass:"lead font-weight-normal"},[t._v("DevOps is a set of practices that combines software development (Dev) and information-technology operations (Ops) which aims to shorten the systems development life cycle and provide continuous delivery with high software quality.")]),a("el-popover",{attrs:{placement:"top-start",title:"页面跳转",width:"300",trigger:"hover",content:"将会跳转至我的github地址，由于github服务器在国外，打开稍慢"}},[a("el-button",{staticClass:"thisbtn",attrs:{slot:"reference"},on:{click:t.tomygithub},slot:"reference"},[t._v("My github")])],1)],1),a("div",{staticClass:"product-device shadow-sm d-none d-md-block"}),a("div",{staticClass:"product-device product-device-2 shadow-sm d-none d-md-block"})]),a("div",{staticClass:"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"},[a("div",{staticClass:"bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"},[a("div",{staticClass:"my-3 py-3"},[a("h2",{staticClass:"display-5"},[t._v("燃尽图")]),a("el-link",{on:{click:t.toRanJin}},[t._v("点此打开燃尽图"),a("i",{staticClass:"el-icon-view el-icon--right"})])],1),a("div",{staticClass:"bg-light shadow-sm mx-auto",staticStyle:{width:"80%",height:"300px","border-radius":"21px 21px 0 0"}})]),a("div",{staticClass:"bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"},[a("div",{staticClass:"my-3 p-3"},[a("h2",{staticClass:"display-5"},[t._v("Kanban")]),a("el-link",{on:{click:t.toKanBan}},[t._v("click here to use a simple Kanban"),a("i",{staticClass:"el-icon-view el-icon--right"})])],1),a("div",{staticClass:"bg-dark shadow-sm mx-auto",staticStyle:{width:"80%",height:"300px","border-radius":"21px 21px 0 0"}})])])])},v=[],g={name:"index",data:function(){return{}},methods:{tomygithub:function(){window.location.href="https://github.com/ivansmoot"},toKanBan:function(){this.$router.push("/kanban")},toRanJin:function(){this.$router.push("/ranjin")}}},b=g,x=(a("e1f8"),Object(h["a"])(b,m,v,!1,null,"d7c5c9de",null)),y=x.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mydiv",attrs:{id:"app4"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],staticClass:"text-center mb-4"},[n("img",{staticClass:"mb-4",attrs:{src:a("4070"),alt:""}}),n("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("登录")]),n("p",[t._v("Be agile")])]),n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"-30px"},attrs:{"status-icon":"",model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"账号",prop:"account"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"admin"},model:{value:t.ruleForm.account,callback:function(e){t.$set(t.ruleForm,"account",e)},expression:"ruleForm.account"}})],1),n("el-form-item",{attrs:{label:"密码",prop:"pass"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{type:"password",placeholder:"password"},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1),n("el-form-item",{attrs:{label:"验证码",prop:"checkcode"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{id:"codeinput",placeholder:"Verification code"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.jump()}},model:{value:t.ruleForm.checkcode,callback:function(e){t.$set(t.ruleForm,"checkcode",e)},expression:"ruleForm.checkcode"}})],1),n("div",{staticStyle:{position:"absolute",right:"30px",bottom:"237px"}},[n("el-button",{attrs:{type:"primary",round:""},on:{click:t.creatCode}},[t._v(t._s(t.code))])],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],staticClass:"checkbox mb-3"},[t._m(0)]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.dialog_visible,expression:"dialog_visible"}],staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"},on:{click:t.jump}},[t._v("登录")])],1)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"margin-left":"20px"}},[a("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" 记住我 ")])}],C=a("bc3a"),S=a.n(C);function P(t){var e=S.a.create({baseURL:"/apis"});return e(t)}var O={name:"login",data:function(){return{dialog_visible:!0,username1:"test",password1:"",code:"",id:"2",ruleForm:{account:"",pass:"",checkcode:""},rules:{account:[{required:!0,message:"请输入账户",trigger:"blur"}],pass:[{required:!0,message:"请输入密码",trigger:"blur"}],checkcode:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},mounted:function(){var t=this;P({url:"/users"}).then((function(e){t.username1=e.data[0].account,t.password1=e.data[0].password})).catch((function(t){console.log(t)}))},created:function(){this.creatCode()},methods:{jump:function(){var t=document.getElementById("codeinput");t.blur(),this.ruleForm.account===this.username1&&this.ruleForm.pass===this.password1?this.code===this.ruleForm.checkcode?(this.$alert("登陆成功","恭喜你",{confirmButtonText:"确定"}),this.$emit("transfer",!0),this.$router.push("/")):(console.log("wrong password"),this.$alert("请重新输入","验证码错误",{confirmButtonText:"确定"}),this.creatCode()):(console.log("wrong password"),this.$alert("请重新输入","账号/密码错误",{confirmButtonText:"确定"}),this.creatCode())},creatCode:function(){this.code="",this.checkCode="";for(var t=4,e=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a=0;a<t;a++){var n=Math.floor(36*Math.random());this.code+=e[n]}}}},T=O,_=(a("4222"),Object(h["a"])(T,w,k,!1,null,"385abcec",null)),j=_.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"kanban"}},[a("p",{staticStyle:{"text-align":"center",margin:"0 0 20px",height:"50px"}},[t._v("a simple KanBan")]),a("div",{staticStyle:{"text-align":"center"}},[a("el-transfer",{staticStyle:{"text-align":"left",display:"inline-block",height:"500px"},attrs:{filterable:"","target-order":"original","render-content":t.renderFunc,titles:["BugList","待测试"],"button-texts":["到左边","到右边"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:t.data},on:{"left-check-change":t.leftCheckChange,"right-check-change":t.rightCheckChange,change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("el-popover",{attrs:{slot:"left-footer",placement:"top",width:"160",cclass:"transfer-footer"},slot:"left-footer",model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("el-input",{staticStyle:{position:"absolute",left:"0",top:"-45px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.pushdata()}},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.visible=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.pushdata}},[t._v("确定")])],1),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("+")])],1),a("el-popover",{attrs:{slot:"right-footer",placement:"top",width:"160",cclass:"transfer-footer"},slot:"right-footer",model:{value:t.visible1,callback:function(e){t.visible1=e},expression:"visible1"}},[a("p",[t._v("确认删除选中的项吗？")]),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.visible1=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.deleteItems}},[t._v("确定")])],1),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[t._v("-")])],1)],1)],1)])},z=[],D=(a("99af"),a("c975"),a("a434"),a("e25e"),a("4328")),N=a.n(D);n["default"].prototype.$qs=N.a;var R={name:"kanban",data:function(){this.$createElement;return{data:[],value:[],renderFunc:function(t,e){return t("span",[e.key," - ",e.label])},visible:!1,visible1:!1,textarea:"",keynum:1,leftchoosen:[],rightchoosen:[]}},mounted:function(){var t=this;P({url:"/kanban"}).then((function(e){t.data=e.data;for(var a=0;a<e.data.length;a++)"right"===e.data[a].location&&t.value.push(e.data[a].key);t.keynum=t.findMaxKey(t.data)+1})).catch((function(t){console.log(t)}))},methods:{handleChange:function(t,e,a){if("right"===e)for(var n=0;n<a.length;n++)for(var s=0;s<this.data.length;s++)if(this.data[s].key===a[n]){var i=this.$qs.stringify({location:"right"});P({method:"patch",url:"/kanban/"+this.data[s].id,data:i}).then((function(t){console.log(t)}))}if("left"===e)for(var o=0;o<a.length;o++)for(var r=0;r<this.data.length;r++)if(this.data[r].key===a[o]){var l=this.$qs.stringify({location:"left"});P({method:"patch",url:"/kanban/"+this.data[r].id,data:l}).then((function(t){console.log(t)}))}},handleCurrentChange:function(t){this.currentPage=t},randomString:function(t){t=t||32;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=e.length,n="",s=0;s<t;s++)n+=e.charAt(Math.floor(Math.random()*(a+1)));return n},findMaxKey:function(t){for(var e=0,a=0;a<t.length;a++)e<parseInt(t[a].key)&&(e=parseInt(t[a].key));return e},leftCheckChange:function(t){for(var e=0;e<t.length;e++)-1===this.leftchoosen.indexOf(t[e])&&this.leftchoosen.push(t[e]);for(var a=0;a<this.leftchoosen.length;a++)-1===t.indexOf(this.leftchoosen[a])&&this.leftchoosen.splice(a,1)},rightCheckChange:function(t){for(var e=0;e<t.length;e++)-1===this.rightchoosen.indexOf(t[e])&&this.rightchoosen.push(t[e]);for(var a=0;a<this.rightchoosen.length;a++)-1===t.indexOf(this.rightchoosen[a])&&this.rightchoosen.splice(a,1)},pushdata:function(){var t=this;this.visible=!1;var e=this.$qs.stringify({id:this.randomString(32),key:this.keynum,label:this.textarea,location:"left"});P({method:"post",url:"/kanban",data:e}).then((function(t){console.log(t)})),P({url:"/kanban"}).then((function(e){t.data=e.data,t.keynum=t.findMaxKey(t.data)+1})).catch((function(t){console.log(t)})),this.textarea=null},deleteItems:function(){for(var t=this,e=this.leftchoosen.concat(this.rightchoosen),a=0;a<e.length;a++)for(var n=0;n<this.data.length;n++)this.data[n].key===e[a]&&P({method:"delete",url:"/kanban/"+this.data[n].id}).then((function(t){console.log(t)}));P({url:"/kanban"}).then((function(e){t.data=e.data,t.keynum=t.findMaxKey(t.data)+1})).catch((function(t){console.log(t)})),this.leftchoosen=[],this.rightchoosen=[]}}},K=R,V=(a("02ff"),Object(h["a"])(K,A,z,!1,null,null,null)),q=V.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chat"}},[a("div",{staticStyle:{position:"relative",width:"600px",height:"440px","box-shadow":"0 2px 12px 0 rgba(0, 0, 0, 0.1)",margin:"0 auto"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"username",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"content",label:"内容"}})],1),a("el-pagination",{staticStyle:{position:"absolute",top:"400px",left:"180px"},attrs:{background:"",layout:"prev, pager, next","page-size":t.pagesize,total:this.filterInfs.length},on:{"current-change":t.handleCurrentChange}})],1),a("p"),a("div",{staticStyle:{margin:"0 auto",width:"600px"}},[a("el-tag",{staticStyle:{left:"100px"},attrs:{type:"info"}},[t._v("发表评论")]),a("p"),a("el-input",{staticStyle:{width:"600px"},attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"140","show-word-limit":""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.pushContent()}},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),a("div",{staticStyle:{position:"relative",left:"520px",top:"15px"}},[a("el-button",{attrs:{type:"primary",round:""},on:{click:t.pushContent}},[t._v("发表")])],1)],1)])},M=[];a("fb6a");n["default"].prototype.$qs=N.a;var X={name:"chat",data:function(){return{textarea:"",pagesize:6,currentPage:1,filterInfs:[]}},mounted:function(){var t=this;P({url:"/content"}).then((function(e){t.filterInfs=e.data})).catch((function(t){console.log(t)}))},computed:{tableData:function(){return this.filterInfs.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)}},methods:{handleCurrentChange:function(t){this.currentPage=t},randomString:function(t){t=t||32;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=e.length,n="",s=0;s<t;s++)n+=e.charAt(Math.floor(Math.random()*(a+1)));return n},getdate:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth(),n=t.getDate(),s=t.getHours(),i=t.getMinutes(),o=t.getSeconds();a<10&&(a="0"+a),n<10&&(n="0"+n),s<10&&(s="0"+s),i<10&&(i="0"+i),n<10&&(o="0"+o);var r=e+"-"+a+"-"+n+" "+s+":"+i+":"+o;return r},pushContent:function(){var t=this,e=this.$qs.stringify({id:this.randomString(32),username:"奈德史塔克",date:this.getdate(),content:this.textarea});P({method:"post",url:"/content",data:e}).then((function(t){console.log(t)})),P({url:"/content"}).then((function(e){t.filterInfs=e.data})).catch((function(t){console.log(t)})),this.textarea=""}}},B=X,Q=Object(h["a"])(B,G,M,!1,null,"3c11abc0",null),Y=Q.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ranjin"},[a("v-chart",{ref:"chart1",attrs:{options:t.orgOptions,"auto-resize":!0}}),a("div",{staticStyle:{"text-align":"center"}},[a("span",[t._v("请选择项目起止时间")]),a("p"),a("el-date-picker",{staticStyle:{width:"400px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),a("P"),a("el-button",{attrs:{type:"primary",round:""},on:{click:t.showdate}},[t._v("绘制理想燃尽图")])],1)],1)},H=[],I={name:"ranjin",data:function(){return{orgOptions:{},value1:"",xData:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],yData:[820,932,901,934,1290,1330,1320],yData2:[920,1032,1001,1034,1390,1430,1420]}},mounted:function(){this.drawIt()},methods:{drawIt:function(){this.orgOptions={xAxis:{type:"category",data:this.xData},yAxis:{type:"value"},series:[{data:this.yData,type:"line",smooth:!0},{data:this.yData2,type:"line",smooth:!0}]}},showdate:function(){this.xData=[],this.yData=[];for(var t=parseInt(this.value1[0].substr(8,2)),e=parseInt(this.value1[1].substr(8,2)),a=t;a<=e;a++)this.xData.push(a);this.yData.push("100");for(var n=100,s=100/(e-t),i=t+1;i<e;i++)n-=s,this.yData.push(n);this.yData.push("0"),this.drawIt()}}},J=I,W=(a("7137"),Object(h["a"])(J,E,H,!1,null,"7e6c1539",null)),F=W.exports;n["default"].use(p["a"]);var L=new p["a"]({mode:"history",routes:[{path:"/",redirect:"/firstpage"},{path:"/firstpage",component:y},{path:"/login",component:j},{path:"/kanban",component:q},{path:"/chat",component:Y},{path:"/ranjin",component:F}],scrollBehavior:function(t,e,a){return{x:0,y:0}}}),U=L;n["default"].component("v-chart",s["a"]),n["default"].use(o.a),new n["default"]({router:U,render:function(t){return t(f)}}).$mount("#app")},7137:function(t,e,a){"use strict";var n=a("3c19"),s=a.n(n);s.a},"71ea":function(t,e,a){},e1f8:function(t,e,a){"use strict";var n=a("469f"),s=a.n(n);s.a},fcb5:function(t,e,a){}});
//# sourceMappingURL=app.d19e7c5e.js.map