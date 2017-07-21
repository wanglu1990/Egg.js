####路由


1. 路由的完整定义，参数可以根据场景的不同，自由选择:
app.verb(路由别名[可选]，路由URL路径, 中间件[可选],app.controller.controller.action);

2.app.get('home','/', 'home.index')提示404

app.get('/', 'home.index')可访问


