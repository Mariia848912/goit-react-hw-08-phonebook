"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[296],{5834:function(n,e,t){t.d(e,{W:function(){return s}});var r,a=t(168),i=t(7691).ZP.div(r||(r=(0,a.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0 16px;\n  padding-bottom: 16px;\n\n  text-align: center;\n\n  @media screen and (min-width: 452px) {\n    max-width: 452px;\n  }\n"]))),o=t(184),s=function(n){var e=n.children;return(0,o.jsx)(i,{children:e})}},3296:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r=t(5834),a=t(2791),i=t(5705),o=t(6727);function s(){return o.Ry().shape({name:o.Z_().required("Name is a required field").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:o.Z_().required("Number is a required field").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")})}var l,d,u,m,c,p,h,x,f,g=t(9434),b=t(6916),v=function(n){return n.filter.value},Z=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},w=(0,b.P1)([function(n){return n.contacts.items},v],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),y=t(3634),C=t(7509),P=t(4281),T=t(168),k=t(7691),z=k.ZP.div(l||(l=(0,T.Z)(["\n  margin: 20px 0;\n  padding: 20px;\n \n  border: 0.4px solid rgba(25, 118, 210, 0.5);\n  border-radius: 4px;\n\n  @media screen and (min-width: 452px) {\n    padding: 41px;\n      }\n"]))),F=t(184),A=function(){var n=(0,g.v9)(w),e=(0,g.I0)(),t=(0,i.TA)({initialValues:{name:"",number:""},validationSchema:s,onSubmit:function(t,r){var a=t.name,i=t.number,o=n.some((function(n){return n.name.toLowerCase()===a.toLowerCase()})),s=n.some((function(n){return parseInt(i.replace(/[^\d]/g,""))===parseInt(n.number.replace(/[^\d]/g,""))}));return o?(r.resetForm(),window.alert("".concat(a," is already in contacts"))):s?(r.resetForm(),window.alert("".concat(i," is already in contacts"))):(e((0,y.uK)(t)),void r.resetForm())}});return(0,F.jsx)(z,{children:(0,F.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,F.jsx)(C.Z,{id:"name",name:"name",label:"Name",type:"text",fullWidth:!0,size:"small",style:{marginBottom:"20px"},value:t.values.name,onChange:t.handleChange,error:t.touched.name&&Boolean(t.errors.name),helperText:t.touched.name&&t.errors.name}),(0,F.jsx)(C.Z,{id:"number",name:"number",label:"Number",type:"tel",fullWidth:!0,size:"small",style:{marginBottom:"20px"},value:t.values.number,onChange:t.handleChange,error:t.touched.number&&Boolean(t.errors.number),helperText:t.touched.number&&t.errors.number}),(0,F.jsx)(P.Z,{color:"primary",style:{marginTop:"10px",textTransform:"none"},variant:"contained",fullWidth:!0,type:"submit",children:"Add contact"})]})})},I=k.ZP.ul(d||(d=(0,T.Z)(["\n  display: flex;\n\n  justify-content: center;\n  flex-direction: column;\n\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 420px;\n\n  text-align: left;\n"]))),B=k.ZP.li(u||(u=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n\n  &:not(:last-child) {\n    margin-bottom: 12px;\n  }\n"]))),L=k.ZP.p(m||(m=(0,T.Z)(["\n  margin-right: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 6px;\n  width: 328px;\n\n  background-color: #f5f4fa;\n  border-radius: 4px;\n"]))),W=function(n){var e=n.name,t=n.id,r=n.number,a=(0,g.I0)();return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(B,{children:[(0,F.jsxs)(L,{children:[e,": ",r]}),(0,F.jsx)(P.Z,{variant:"outlined",href:"#outlined-buttons",size:"small",type:"submit",style:{fontSize:14,textTransform:"none",marginLeft:"auto"},onClick:function(){return a((0,y.GK)(t))},children:"Delete"})]})})},_=k.ZP.p(c||(c=(0,T.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n\n  width: 420px;\n  text-align: start;\n"]))),N=function(n){var e=n.name;return(0,F.jsxs)(_,{children:["The ",e," is empty."]})},S=function(){var n=(0,g.v9)(w);return(0,F.jsx)(F.Fragment,{children:0===n.length?(0,F.jsx)(N,{name:"contact list"}):(0,F.jsx)(I,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,F.jsx)(W,{id:e,name:t,number:r},e)}))})})},q=t(4808),K=k.ZP.div(p||(p=(0,T.Z)(["\n  text-align: left;\n"]))),D=function(){var n=(0,g.I0)(),e=(0,g.v9)(v);return(0,F.jsx)(K,{children:(0,F.jsx)(C.Z,{id:"filter",size:"small",label:"Find contacts by name",variant:"outlined",value:e.value,onChange:function(e){n((0,q.bI)(e.currentTarget.value))},style:{marginBottom:"20px",width:"328px",marginTop:20}})})},E=(t(5462),t(7482)),G=k.ZP.p(h||(h=(0,T.Z)(["\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  /* padding-left: 14px; */\n\n  width: 420px;\n  text-align: start;\n"]))),J=function(){return(0,F.jsx)(G,{children:"Whoops, something went wrong. Try later."})},M=k.ZP.h2(x||(x=(0,T.Z)(["\nmargin-top: 20px;\n"]))),R=k.ZP.h3(f||(f=(0,T.Z)(["\nmargin-top: 40px;\n\n"]))),V=function(){var n=(0,g.I0)(),e=(0,g.v9)(Z),t=(0,g.v9)(j);return(0,a.useEffect)((function(){n((0,y.yF)())}),[n]),(0,F.jsxs)(F.Fragment,{children:[e&&(0,F.jsx)(E.Z,{}),(0,F.jsxs)(r.W,{children:[(0,F.jsx)(M,{children:"Phonebook"}),(0,F.jsx)(A,{}),(0,F.jsx)(R,{children:"Contacts"}),(0,F.jsx)(D,{}),!e&&"get"!==t&&(0,F.jsx)(S,{}),"get"===t&&(0,F.jsx)(J,{})]})]})}}}]);
//# sourceMappingURL=296.50f53792.chunk.js.map