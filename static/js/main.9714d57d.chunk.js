(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(4),r=a.n(s),n=a(2),i=a(0);var j=function(e){return Object(i.jsxs)("div",{className:"card",id:e.id,children:[Object(i.jsxs)("div",{className:"top",children:[Object(i.jsxs)("h2",{className:"heading name",children:[e.fName," ",e.lName]}),Object(i.jsx)("img",{className:"circle-img",src:e.avatar,alt:"avatar_img"})]}),Object(i.jsx)("div",{className:"bottom",children:Object(i.jsx)("p",{className:"info",children:e.email})})]})};function d(e){return Object(i.jsx)(i.Fragment,{children:e.userdata.map((function(e,t){return Object(i.jsx)(j,{id:e.id,fName:e.first_name,lName:e.last_name,avatar:e.avatar,email:e.email})}))})}var l=function(){var e=Object(c.useState)(!0),t=Object(n.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)([]),j=Object(n.a)(r,2),l=j[0],b=j[1],h=Object(c.useState)(!1),m=Object(n.a)(h,2),o=m[0],u=m[1];return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("h1",{children:"UD"}),Object(i.jsx)("button",{onClick:function(){u(!0),fetch("https://reqres.in/api/users?page=1").then((function(e){return e.json()})).then((function(e){b(e.data),setInterval((function(){s(!1)}),1e3)})).catch((function(e){console.error("Error in fetching data: ",e)}))},children:"Get Users"})]}),Object(i.jsx)("h1",{className:"heading",children:"User Details"}),Object(i.jsx)("hr",{}),o?a?Object(i.jsx)("div",{children:" Loading data... "}):Object(i.jsx)("div",{className:"user-details",children:Object(i.jsx)(d,{userdata:l})}):Object(i.jsx)("div",{children:" User details will be displayed here. "})]})};r.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9714d57d.chunk.js.map