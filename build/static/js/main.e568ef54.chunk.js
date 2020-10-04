(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},21:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),o=n.n(c),u=(n(21),n(1)),s=n.n(u),l=n(3),i=n(4),m=n(5),p=n.n(m),d="/api/persons",f={getAll:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(d);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post(d,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("".concat(d,"/").concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(l.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.put("".concat(d,"/").concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()},h=(n(40),function(e){var t=e.person,n=e.deletePerson;return a.a.createElement("li",{className:"person-details"},a.a.createElement("button",{className:"person-details-button",onClick:function(){return n(t.id)}},"delete"),t.name,": ",t.number)}),v=function(e){var t=e.displayList,n=e.deletePerson,r=t?t.map((function(e){return a.a.createElement(h,{key:e.id,person:e,deletePerson:n})})):[];return a.a.createElement("div",null,a.a.createElement("h2",null,"Numbers"),r.length>0?a.a.createElement("ul",{style:{padding:0}},r):a.a.createElement("p",null,"No data from server"))},b=function(e){var t=e.term,n=e.action;return a.a.createElement("div",{className:"search"},a.a.createElement("h4",null,"Search"),a.a.createElement("input",{label:"Search",value:t,onChange:n}))},E=function(e){var t=e.add,n=e.name,r=e.phone,c=e.handleName,o=e.handleNumber;return a.a.createElement("div",{className:"add-person-form"},a.a.createElement("h3",null,"Add contact"),a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:n,onChange:c})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{value:r,onChange:o})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit",disabled:!n.length||!r.length},"ADD"))))},g=function(e){var t=e.message,n=e.type;return null===t?null:a.a.createElement("div",{className:"error"===n?"error-message":"success-message"},t)},w=(n(41),function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),u=Object(i.a)(o,2),m=u[0],p=u[1],d=Object(r.useState)(""),h=Object(i.a)(d,2),w=h[0],k=h[1],y=Object(r.useState)(""),x=Object(i.a)(y,2),j=x[0],O=x[1],N=Object(r.useState)(null),P=Object(i.a)(N,2),S=P[0],C=P[1],L=Object(r.useState)(null),A=Object(i.a)(L,2),D=A[0],J=A[1];Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getAll();case 2:t=e.sent;try{c(t)}catch(n){console.log(n)}case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var B=function(){var e=Object(l.a)(s.a.mark((function e(t){var r,a,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!((r={name:m,number:w}).name.length<3)){e.next=6;break}throw M("add-error","Person name is too short"),q(),new Error("Name too short - minlength(3)");case 6:if(!(r.number.length<8)){e.next=10;break}throw M("add-error","Person number is too short"),q(),new Error("Number too short - minlength(8)");case 10:if(!(a=n.find((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})))){e.next=18;break}return e.next=14,f.update(a.id,r);case 14:o=e.sent;try{c(n.map((function(e){return e.id!==a.id?e:o}))),M("update-success",r.name),q()}catch(s){M("update-error",r.name),console.log(s),q()}e.next=22;break;case 18:return e.next=20,f.create(r);case 20:u=e.sent;try{c(n.concat(u)),M("add-success",u.name),q()}catch(s){M("add-error",u.name),q()}case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(s.a.mark((function e(t){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.find((function(e){return e.id===t})),!window.confirm("Do you really want to remove ".concat(r.name," ?"))){e.next=7;break}return e.next=5,f.remove(t);case 5:a=e.sent;try{204===a.status&&(M("delete-success",r.name),c(n.filter((function(e){return e.id!==t}))))}catch(o){M("delete-error",r.name),c(n.filter((function(e){return e.id!==t}))),console.log(o)}case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e,t){"add-error"===e?(C("Error adding person to Phonebook"),J("error"),T()):"add-success"===e?(C("".concat(t," added to Phonebook")),J("success"),T()):"update-success"===e?(C("".concat(t," phone updated")),J("success"),T()):"update-error"===e?(C("Error updating ".concat(t)),J("error"),T()):"delete-success"===e?(C("".concat(t," removed from Phonebook")),J("success"),T()):"delete-error"===e&&(C("".concat(t," information not found on server")),J("error"),T())},T=function(){setTimeout((function(){C(null),J(null)}),4800)},q=function(){p(""),k("")},z=n,F=n?n.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())})):[],G=F.length?F:z;return a.a.createElement("div",{className:"app"},a.a.createElement("h1",null,"Phonebook"),S?a.a.createElement(g,{message:S,type:D}):null,a.a.createElement(E,{add:B,name:m,phone:w,handleName:function(e){p(e.target.value)},handleNumber:function(e){k(e.target.value)}}),a.a.createElement(b,{term:j,action:function(e){O(e.target.value)}}),a.a.createElement(v,{className:"person-list",displayList:G,deletePerson:I}))});o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e568ef54.chunk.js.map