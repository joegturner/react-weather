(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{22:function(e,t,a){e.exports=a(52)},28:function(e,t,a){},29:function(e,t,a){},51:function(e){e.exports=JSON.parse('{"key":"349f24454c8e9e8e8d427a41131e7a49"}')},52:function(e,t,a){"use strict";a.r(t);var c=a(0),l=a.n(c),n=a(18),r=a.n(n),m=(a(27),a(28),a(29),a(8)),s=a.n(m),i=a(7),d=a(21),f=a(19),o=a(3),p=a(4),x=a(6),E=a(5),h=a(2),u=a.n(h),N=function(e){Object(x.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={},e.renderCity=function(){var t=e.props.city,a=t.IM,c=t.ME,n=u()(a.sys.sunrise).format("h:mma"),r=u()(a.sys.sunset).format("h:mma"),m="http://openweathermap.org/img/w/".concat(a.weather[0].icon,".png");return l.a.createElement("div",{className:"card bg-primary container",style:{width:"40rem"}},l.a.createElement("div",{className:"card-header"},l.a.createElement("h1",{className:"card-title text-left"},t.name),l.a.createElement("div",{className:"d-flex"},l.a.createElement("img",{src:m,className:"img-fluid",alt:"Responsive image"}),l.a.createElement("h2",{className:"card-text text-left"},a.weather[0].description)),l.a.createElement("div",{className:"d-flex flex-wrap"},l.a.createElement("h1",{className:"card-text text-left"},a.main.temp),l.a.createElement("p",{className:"card-text text-left"},"\u02daF"),l.a.createElement("h1",{className:"card-text text-left"}," / ",c.main.temp),l.a.createElement("p",{className:"card-text text-left"},"\u02daC"))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("h4",{className:"card-text text-left"},"Feels like:"),l.a.createElement("div",{className:"d-flex flex-wrap"},l.a.createElement("h4",null,a.main.feels_like),l.a.createElement("p",{className:"card-text text-left"},"\u02daF"),l.a.createElement("h4",null,"/ ",c.main.feels_like),l.a.createElement("p",{className:"card-text text-left"},"\u02daC"))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"d-flex justify-content-center flex-column flex-wrap"},l.a.createElement("div",{className:"p-2"},l.a.createElement("h5",{className:"card-text text-left"},"Humidity:"),l.a.createElement("h5",{className:"card-text text-left"},a.main.humidity,"%")),l.a.createElement("div",{className:"p-2"},l.a.createElement("h5",{className:"card-text text-left"},"Wind:"),l.a.createElement("div",{className:"d-flex flex-wrap"},l.a.createElement("h5",{className:"card-text text-left"},a.wind.speed),l.a.createElement("p",{className:"card-text text-left"},"mph"),l.a.createElement("h5",{className:"card-text text-left"},"/ ",c.wind.speed),l.a.createElement("p",{className:"card-text text-left"},"kmh"))))))),l.a.createElement("div",{className:"card-footer row"},l.a.createElement("div",{className:"col sm-6 text-left"},l.a.createElement("h5",{className:"card-text text-left"},"Low:"),l.a.createElement("div",{className:"d-flex flex-wrap"},l.a.createElement("h5",null,a.main.temp_min),l.a.createElement("p",{className:"card-text text-left"},"\u02daF"),l.a.createElement("h5",null,"/ ",c.main.temp_min),l.a.createElement("p",{className:"card-text text-left"},"\u02daC"))),l.a.createElement("div",{className:"col sm-6 text-left"},l.a.createElement("h5",{className:"card-text text-left"},"High:"),l.a.createElement("div",{className:"d-flex flex-wrap"},l.a.createElement("h5",null,a.main.temp_max),l.a.createElement("p",{className:"card-text text-left"},"\u02daF"),l.a.createElement("h5",null,"/ ",c.main.temp_max),l.a.createElement("p",{className:"card-text text-left"},"\u02daC")))),l.a.createElement("div",{className:"card-footer row"},l.a.createElement("div",{className:"col sm-6 text-left"},l.a.createElement("h4",{className:"card-text"},"Sunrise: ",n)),l.a.createElement("div",{className:"col sm-6 text-left"},l.a.createElement("h4",{className:"card-text"},"Sunset: ",r))))},e}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.renderCity())}}]),a}(c.Component),v=a(20),w=a.n(v),y=a(48),g=a(51),b=function(e){Object(x.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={timestamp:"",cities:[{name:"New York",ME:{},IM:{}},{name:"Portland",ME:{},IM:{}}]},e.fetchWeatherData=function(e,t){new Date;e.map((function(t,a){t.name,a!==e.length-1&&","}));var a={appid:g.key,units:t,q:e[0].name},c="https://api.openweathermap.org/data/2.5/weather?".concat(y.stringify(a));return w.a.get(c)},e.getData=Object(f.a)(s.a.mark((function t(){var a,c,l,n,r,m,f;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchWeatherData(e.state.cities,"metric");case 2:return a=t.sent,t.next=5,e.fetchWeatherData(e.state.cities,"imperial");case 5:c=t.sent,l=u()().format("MM-DD-YY h:mma"),a&&c&&(n=Object(d.a)(e.state.cities),r=Object(i.a)({},n[0]),Object(i.a)({},n[0].ME),Object(i.a)({},n[0].IM),m=a.data,f=c.data,r={name:r.name,IM:f,ME:m},n[0]=r,console.log(n),e.setState({timestamp:l,cities:n}));case 8:case"end":return t.stop()}}),t)}))),e.renderCities=function(){for(var t=[],a=0;a<e.state.cities.length;a++)e.state.cities[a].IM.main&&t.push(l.a.createElement(N,{key:a,city:e.state.cities[a]}));return t},e.componentDidMount=function(){e.getData()},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.timestamp;return l.a.createElement("div",null,e.length>0?l.a.createElement("h3",null,this.state.timestamp):null,this.renderCities())}}]),a}(c.Component);var M=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(b,null)))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.9bc67eb6.chunk.js.map