"use strict";(self.webpackChunkyezi_blog=self.webpackChunkyezi_blog||[]).push([[8428],{6262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}},8237:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>p,data:()=>t});var e=a(641);const i=[(0,e.Fv)('<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>public class JdkProxyDemo {</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    public static void main(String[] args) {</span></span>\n<span class="line"><span>        // 创建目标对象</span></span>\n<span class="line"><span>        MyService target = new MyServiceImpl();</span></span>\n<span class="line"><span>        // 获取目标对象的类对象</span></span>\n<span class="line"><span>        Class clz = target.getClass();</span></span>\n<span class="line"><span>        // 创建代理对象，并指定目标对象的类加载器、实现的接口以及调用处理器</span></span>\n<span class="line"><span>        MyService proxyObject = (MyService) Proxy.newProxyInstance(clz.getClassLoader(), clz.getInterfaces(), new MyInvocationHandler(target));</span></span>\n<span class="line"><span>        // 打印代理对象的类信息</span></span>\n<span class="line"><span>        System.out.println(&quot;ProxyObject = &quot; + proxyObject.getClass());</span></span>\n<span class="line"><span>        // 通过代理对象调用方法，实际上会调用 MyInvocationHandler 中的 invoke 方法</span></span>\n<span class="line"><span>        proxyObject.doSomething();</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>class MyInvocationHandler implements InvocationHandler {</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    private Object target;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    public MyInvocationHandler(Object target) {</span></span>\n<span class="line"><span>        this.target = target;</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    @Override</span></span>\n<span class="line"><span>    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {</span></span>\n<span class="line"><span>        System.out.println(&quot;Before method execution&quot;);</span></span>\n<span class="line"><span>        Object result = method.invoke(target, args);</span></span>\n<span class="line"><span>        System.out.println(&quot;After method execution&quot;);</span></span>\n<span class="line"><span>        return result;</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2)],l={},p=(0,a(6262).A)(l,[["render",function(s,n){return(0,e.uX)(),(0,e.CE)("div",null,i)}]]),t=JSON.parse('{"path":"/basic/structure/structure.html","title":"测试","lang":"zh-CN","frontmatter":{"title":"测试","index":false,"category":["测试"],"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/basic/structure/structure.html"}],["meta",{"property":"og:site_name","content":"CodeCanvas 技术分享"}],["meta",{"property":"og:title","content":"测试"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-13T03:00:11.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-13T03:00:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"测试\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-13T03:00:11.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1720839611000,"updatedTime":1720839611000,"contributors":[{"name":"powwssir","email":"115145444+powwssir@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.53,"words":160},"filePathRelative":"basic/structure/structure.md","localizedDate":"2024年7月13日","excerpt":"<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>public class JdkProxyDemo {</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span>    public static void main(String[] args) {</span></span>\\n<span class=\\"line\\"><span>        // 创建目标对象</span></span>\\n<span class=\\"line\\"><span>        MyService target = new MyServiceImpl();</span></span>\\n<span class=\\"line\\"><span>        // 获取目标对象的类对象</span></span>\\n<span class=\\"line\\"><span>        Class clz = target.getClass();</span></span>\\n<span class=\\"line\\"><span>        // 创建代理对象，并指定目标对象的类加载器、实现的接口以及调用处理器</span></span>\\n<span class=\\"line\\"><span>        MyService proxyObject = (MyService) Proxy.newProxyInstance(clz.getClassLoader(), clz.getInterfaces(), new MyInvocationHandler(target));</span></span>\\n<span class=\\"line\\"><span>        // 打印代理对象的类信息</span></span>\\n<span class=\\"line\\"><span>        System.out.println(\\"ProxyObject = \\" + proxyObject.getClass());</span></span>\\n<span class=\\"line\\"><span>        // 通过代理对象调用方法，实际上会调用 MyInvocationHandler 中的 invoke 方法</span></span>\\n<span class=\\"line\\"><span>        proxyObject.doSomething();</span></span>\\n<span class=\\"line\\"><span>    }</span></span>\\n<span class=\\"line\\"><span>}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}')}}]);