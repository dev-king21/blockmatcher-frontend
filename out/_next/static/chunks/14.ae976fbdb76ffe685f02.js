(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"4hqb":function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var c=a("q1tI"),n=c.createContext();function r(){return c.useContext(n)}t.a=n},EHdT:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a("q1tI"),n=a("4hqb");function r(){return c.useContext(n.a)}},LM3S:function(e,t,a){"use strict";a.r(t);var c=a("nKUr"),n=a("KQm4"),r=a("1OyB"),i=a("vuIU"),s=a("JX7q"),o=a("Ji7U"),l=a("md7G"),d=a("foSv"),p=a("rePB"),u=a("q1tI"),h=a("/MKj"),b=a("Ty5D"),m=a("e+cM"),f=a("ZpDd"),j=a("LADp"),O=a("UhlP");a("Q9U0");function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,c=Object(d.a)(e);if(t){var n=Object(d.a)(this).constructor;a=Reflect.construct(c,arguments,n)}else a=c.apply(this,arguments);return Object(l.a)(this,a)}}var y=function(e){Object(o.a)(a,e);var t=g(a);function a(e){var c;return Object(r.a)(this,a),c=t.call(this,e),Object(p.a)(Object(s.a)(c),"toggleEdit",(function(e){e.preventDefault();var t=c.state.editable;c.setState({editable:!t})})),Object(p.a)(Object(s.a)(c),"showPasswordForm",(function(e){e.preventDefault(),c.props.dispatch(Object(f.B)("change-password"))})),Object(p.a)(Object(s.a)(c),"updateProfile",(function(e){e.preventDefault();var t=c.state,a=t.first_name,n=t.last_name,r=t.email;if(a.trim())if(n.trim())if(r.trim()){var i={first_name:a.trim(),last_name:n.trim(),email:r.trim()};c.props.dispatch(Object(j.C)(i,(function(){c.props.dispatch(Object(f.L)())}),(function(e){c.props.dispatch(Object(f.w)()),e&&e.success&&c.props.dispatch(Object(f.C)({message:"Profile has been updated",color:"success",type:"profile"}))})))}else c.props.dispatch(Object(f.K)("Please input email"));else c.props.dispatch(Object(f.K)("Please input last name"));else c.props.dispatch(Object(f.K)("Please input first name"))})),Object(p.a)(Object(s.a)(c),"turnOn",(function(e){e.preventDefault(),confirm("Are you sure you are going to turn on Two-Factor Authentication?")&&c.props.dispatch(Object(j.h)((function(){c.props.dispatch(Object(f.L)())}),(function(e){c.props.dispatch(Object(f.w)()),e.success&&c.props.dispatch(Object(f.B)("two-factor-auth",(function(){return c.props.dispatch(Object(f.C)({message:"Two-Factor Authentication has been turned on",color:"success",type:"profile"}))})))})))})),Object(p.a)(Object(s.a)(c),"turnOff",(function(e){e.preventDefault(),confirm("Are you sure you are going to turn off Two-Factor Authentication?")&&c.props.dispatch(Object(j.g)((function(){c.props.dispatch(Object(f.L)())}),(function(e){c.props.dispatch(Object(f.w)()),e.success&&c.props.dispatch(Object(f.C)({message:"Two-Factor Authentication has been turned off",color:"success",type:"profile"}))})))})),c.state={first_name:"",last_name:"",email:"",two_fa:!1,editable:!1,admin:!1,apis:[]},c}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.initValues()}},{key:"componentDidUpdate",value:function(e){var t=this.props.authUser;JSON.stringify(e.authUser)!=JSON.stringify(t)&&this.initValues()}},{key:"initValues",value:function(){var e=this,t=this.props.authUser;t&&t.id&&(this.setState({first_name:t.first_name,last_name:t.last_name,email:t.email,two_fa:!!t.profile.two_fa,admin:"admin"===t.role}),"admin"===t.role&&this.props.dispatch(Object(j.k)((function(t){var a=t.api_keys;e.setState({apis:Object(n.a)(a)})}))))}},{key:"inputField",value:function(e,t){this.setState(Object(p.a)({},t,e.target.value))}},{key:"changeApiCode",value:function(e,t){var a=this.state.apis;a[t].code=e.target.value,this.setState({apis:Object(n.a)(a)})}},{key:"updateApi",value:function(e){var t=this,a=this.state.apis[e];this.props.dispatch(Object(j.y)(a,(function(){t.props.dispatch(Object(f.L)())}),(function(){t.props.dispatch(Object(f.K)("Api Key for ".concat(a.app_name," has been successfully updated"),"success")),t.props.dispatch(Object(f.w)())})))}},{key:"renderAlert",value:function(){var e=this.props.blockAlertData;return e&&"profile"==e.type?Object(c.jsx)(m.a,{data:e}):null}},{key:"render",value:function(){var e=this,t=this.state,a=t.first_name,n=t.last_name,r=t.email,i=t.two_fa,s=t.admin,o=t.editable,l=t.apis;return Object(c.jsx)("div",{id:"app-profile-page",children:Object(c.jsxs)("div",{className:"c-container small",children:[this.renderAlert(),Object(c.jsx)("h2",{className:"mb-4",children:"Your Profile"}),Object(c.jsxs)("form",{action:"",method:"POST",onSubmit:this.updateProfile,children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"c-form-row",children:[Object(c.jsx)("label",{children:"First name"}),o?Object(c.jsx)(m.c,{value:a,onChange:function(t){return e.inputField(t,"first_name")},type:"text",height:"40px",required:!0}):Object(c.jsx)("span",{className:"font-weight-bold text-dark-primary",children:a})]})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsxs)("div",{className:"c-form-row",children:[Object(c.jsx)("label",{children:"Last name"}),o?Object(c.jsx)(m.c,{value:n,onChange:function(t){return e.inputField(t,"last_name")},type:"text",height:"40px",required:!0}):Object(c.jsx)("span",{className:"font-weight-bold text-dark-primary",children:n})]})})]}),Object(c.jsxs)("div",{className:"c-form-row",children:[Object(c.jsx)("label",{children:"Work Email"}),o?Object(c.jsx)(m.c,{value:r,onChange:function(t){return e.inputField(t,"email")},type:"email",height:"40px",required:!0}):Object(c.jsx)("span",{className:"font-weight-bold text-dark-primary",children:r})]}),Object(c.jsx)("div",{id:"app-profile-page__buttons",children:o?Object(c.jsxs)(u.Fragment,{children:[Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update Info"}),Object(c.jsx)("a",{className:"btn btn-light",onClick:this.toggleEdit,children:"Cancel"})]}):Object(c.jsx)("a",{className:"btn btn-primary",onClick:this.toggleEdit,children:"Edit"})})]}),Object(c.jsx)("div",{className:"spacer mt-4 mb-4"}),Object(c.jsx)("h2",{className:"mb-4",children:"Password"}),Object(c.jsx)("a",{className:"btn btn-primary",onClick:this.showPasswordForm,children:"Change Password"}),Object(c.jsx)("div",{className:"spacer mt-4 mb-4"}),Object(c.jsx)("h2",{children:"Two-Factor Authentication"}),Object(c.jsx)("p",{className:"mt-1 mb-3",children:"Two factor authentication uses a code sent to your email address to verify your logins."}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"font-weight-bold text-dark-primary",children:"Turn on 2fa"}),Object(c.jsx)(O.a,{checked:i,onChange:i?this.turnOff:this.turnOn,color:"primary",name:"treeView",inputProps:{"aria-label":"primary checkbox"}})]}),s&&l.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"spacer mt-4 mb-4"}),Object(c.jsx)("h2",{className:"mb-4",children:"API Keys"}),l.map((function(t,a){return Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{className:"mb-2",children:t.app_name}),Object(c.jsx)(m.c,{value:t.code,onChange:function(t){return e.changeApiCode(t,a)},type:"text",height:"40px",required:!0}),Object(c.jsx)("a",{className:"btn btn-primary mt-2 mb-4",onClick:function(t){return e.updateApi(a)},children:"Update"})]},"api-key-".concat(t.id))}))]}):null]})})}}]),a}(u.Component);t.default=Object(h.b)((function(e){return{blockAlertData:e.global.blockAlertData,authUser:e.global.authUser}}))(Object(b.h)(y))},UhlP:function(e,t,a){"use strict";var c=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),s=a("H2TA"),o=a("ye/S"),l=a("NqtD"),d=a("ODXe"),p=a("yCxk"),u=a("EHdT"),h=a("PsDL"),b=r.forwardRef((function(e,t){var a=e.autoFocus,s=e.checked,o=e.checkedIcon,l=e.classes,b=e.className,m=e.defaultChecked,f=e.disabled,j=e.icon,O=e.id,g=e.inputProps,y=e.inputRef,v=e.name,x=e.onBlur,k=e.onChange,w=e.onFocus,C=e.readOnly,N=e.required,_=e.tabIndex,S=e.type,F=e.value,P=Object(n.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),A=Object(p.a)({controlled:s,default:Boolean(m),name:"SwitchBase",state:"checked"}),$=Object(d.a)(A,2),I=$[0],D=$[1],E=Object(u.a)(),q=f;E&&"undefined"===typeof q&&(q=E.disabled);var B="checkbox"===S||"radio"===S;return r.createElement(h.a,Object(c.a)({component:"span",className:Object(i.a)(l.root,b,I&&l.checked,q&&l.disabled),disabled:q,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),E&&E.onFocus&&E.onFocus(e)},onBlur:function(e){x&&x(e),E&&E.onBlur&&E.onBlur(e)},ref:t},P),r.createElement("input",Object(c.a)({autoFocus:a,checked:s,defaultChecked:m,className:l.input,disabled:q,id:B&&O,name:v,onChange:function(e){var t=e.target.checked;D(t),k&&k(e,t)},readOnly:C,ref:y,required:N,tabIndex:_,type:S,value:F},g)),I?o:j)})),m=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(b),f=r.forwardRef((function(e,t){var a=e.classes,s=e.className,o=e.color,d=void 0===o?"secondary":o,p=e.edge,u=void 0!==p&&p,h=e.size,b=void 0===h?"medium":h,f=Object(n.a)(e,["classes","className","color","edge","size"]),j=r.createElement("span",{className:a.thumb});return r.createElement("span",{className:Object(i.a)(a.root,s,{start:a.edgeStart,end:a.edgeEnd}[u],"small"===b&&a["size".concat(Object(l.a)(b))])},r.createElement(m,Object(c.a)({type:"checkbox",icon:j,checkedIcon:j,classes:{root:Object(i.a)(a.switchBase,a["color".concat(Object(l.a)(d))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},f)),r.createElement("span",{className:a.track}))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(o.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(o.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(f)},yCxk:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("q1tI");function n(e){var t=e.controlled,a=e.default,n=(e.name,e.state,c.useRef(void 0!==t).current),r=c.useState(a),i=r[0],s=r[1];return[n?t:i,c.useCallback((function(e){n||s(e)}),[])]}}}]);