(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(2),r=a(4),c=a(3),l=a(5),i=a(0),o=a.n(i),u=a(8),m=a.n(u);a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=function(){return o.a.createElement("header",{className:"title"},"My TodoDo list")},k=a(6);var h=function(e){return e.tasks.map(function(t){return o.a.createElement("div",{className:"input-item",key:t.toString()},o.a.createElement("input",{type:"checkbox",onClick:e.handleClick,name:t}),o.a.createElement("p",null," ",t," "))})},p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).addTask=function(){var e=Object(k.a)(a.state.tasks);e.push(a.inputTask.current.value),a.setState({tasks:e})},a.handleClick=function(e){var t=Object(k.a)(a.state.tasks),n=t.indexOf(e.target.name);t.splice(n,1),a.setState({tasks:t})},a.inputTask=o.a.createRef(),a.state={tasks:[]},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"start--task"},o.a.createElement("h3",null,"Todo:"),o.a.createElement("input",{className:"start--task--input",ref:this.inputTask}),o.a.createElement("div",{className:"start-task--btn-add"},o.a.createElement("button",{className:"btn btn-secondary mt-2",onClick:this.addTask},"Add your task"))),o.a.createElement("div",{className:"display--tasks",ref:"displayTasks"},o.a.createElement(h,{tasks:this.state.tasks,handleClick:this.handleClick})))}}]),t}(o.a.Component);var f=function(){return o.a.createElement("footer",null,'"It\'s your turn"')};"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()});var v=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"my-todo-list"},o.a.createElement(d,null),o.a.createElement(p,null),o.a.createElement(f,null))}}]),t}(o.a.Component);m.a.render(o.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.13a33a19.chunk.js.map