"use strict";(self.webpackChunkyezi_blog=self.webpackChunkyezi_blog||[]).push([[752],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},9603:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>h});var n=a(641);const l=[(0,n.Fv)('<h2 id="断言" tabindex="-1"><a class="header-anchor" href="#断言"><span>断言</span></a></h2><p>1、简介</p><p>提供了一系列断言方法，用于验证参数或状态。</p><p>2、方法</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 要求参数 object 必须为非空（Not Null），否则抛出异常，不予放行</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 参数 message 参数用于定制异常信息。</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> notNull</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> message)</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 要求参数必须空（Null），否则抛出异常，不予『放行』。</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 和 notNull() 方法断言规则相反</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> isNull</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> message)</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 要求参数必须为真（True），否则抛出异常，不予『放行』。</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> isTrue</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> expression</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> message)</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 要求参数（List/Set）必须非空（Not Empty），否则抛出异常，不予放行</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> notEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Collection</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> collection</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> message)</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 要求参数（String）必须有长度（即，Not Empty），否则抛出异常，不予放行</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> hasLength</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> message)</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 要求参数（String）必须有内容（即，Not Blank），否则抛出异常，不予放行</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> hasText</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> message)</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 要求参数是指定类型的实例，否则抛出异常，不予放行</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> isInstanceOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Class</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> obj</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> message)</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 要求参数 `subType` 必须是参数 superType 的子类或实现类，否则抛出异常，不予放行</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> isAssignable</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Class</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> superType</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Class</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> subType</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> message)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好的,我来为您总结一下Spring框架中Assert类的常用方法,并给出它们的用途和简单示例。</p><p>Assert类主要用于参数验证和状态检查,它可以帮助我们在代码中快速失败,提早发现问题。以下是一些常用方法:</p><ol><li>notNull()</li></ol><p>用途:检查对象是否为null。如果对象为null,则抛出IllegalArgumentException。</p><p>示例:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> processUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> user) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Assert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">notNull</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(user, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;User must not be null&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 处理用户...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>hasText()</li></ol><p>用途:检查字符串是否有实际文本内容。如果字符串为null、空字符串或只包含空白字符,则抛出IllegalArgumentException。</p><p>示例:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> setUsername</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> username) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Assert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">hasText</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(username, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Username must not be empty&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">username</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> username</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>isTrue()</li></ol><p>用途:检查布尔表达式是否为true。如果为false,则抛出IllegalArgumentException。</p><p>示例:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> setAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> age) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Assert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">isTrue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(age </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Age must be non-negative&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">age</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> age</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>notEmpty() (用于数组、集合或Map)</li></ol><p>用途:检查数组、集合或Map是否为空。如果为null或空,则抛出IllegalArgumentException。</p><p>示例:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> processOrders</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Order</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> orders) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Assert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">notEmpty</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(orders, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Orders list must not be empty&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 处理订单...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>state()</li></ol><p>用途:检查某个状态。如果状态不满足,则抛出IllegalStateException。</p><p>示例:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> withdraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">double</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> amount) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Assert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">state</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">isAccountActive</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Account must be active&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 执行取款操作...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>isInstanceOf()</li></ol><p>用途:检查对象是否为指定类的实例。如果不是,则抛出IllegalArgumentException。</p><p>示例:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> processPayment</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Payment</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> payment) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Assert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">isInstanceOf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">CreditCardPayment</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, payment, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Only credit card payments are accepted&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 处理信用卡支付...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>doesNotContain()</li></ol><p>用途:检查字符串是否不包含指定的子字符串。如果包含,则抛出IllegalArgumentException。</p><p>示例:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> setPassword</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> password) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Assert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">doesNotContain</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(password, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;admin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Password must not contain &#39;admin&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">password</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> password</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>noNullElements()</li></ol><p>用途:检查数组或集合中是否有null元素。如果有null元素,则抛出IllegalArgumentException。</p><p>示例:</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> processNames</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">[] names) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Assert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">noNullElements</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(names, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Names array must not contain null elements&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 处理名字...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、简单案例</p><p>4、使用细节以及注意事项</p><p>StringUtils</p><blockquote><p>来自 spring-core</p></blockquote><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li><p><a href="https://juejin.cn/post/7043403364020781064" target="_blank" rel="noopener noreferrer">SpringBoot 内置工具类 - 掘金</a></p></li><li><p><a href="https://github.com/xuchengsheng/spring-reading" target="_blank" rel="noopener noreferrer">xuchengsheng/spring-reading</a></p></li><li><p><a href="https://juejin.cn/post/7043403364020781064" target="_blank" rel="noopener noreferrer">SpringBoot 内置工具类 - 掘金</a></p></li></ul>',45)],t={},e=(0,a(6262).A)(t,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,l)}]]),h=JSON.parse('{"path":"/deploy/toolclass/springbootutil.html","title":"SpringBoot 工具类","lang":"zh-CN","frontmatter":{"title":"SpringBoot 工具类","order":3,"date":"2024-07-13T00:00:00.000Z","category":["SpringBoot"],"tag":["工具"],"page":[{"frontmatter":false}],"description":"断言 1、简介 提供了一系列断言方法，用于验证参数或状态。 2、方法 好的,我来为您总结一下Spring框架中Assert类的常用方法,并给出它们的用途和简单示例。 Assert类主要用于参数验证和状态检查,它可以帮助我们在代码中快速失败,提早发现问题。以下是一些常用方法: notNull() 用途:检查对象是否为null。如果对象为null,则抛出I...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/deploy/toolclass/springbootutil.html"}],["meta",{"property":"og:site_name","content":"CodeCanvas 技术分享"}],["meta",{"property":"og:title","content":"SpringBoot 工具类"}],["meta",{"property":"og:description","content":"断言 1、简介 提供了一系列断言方法，用于验证参数或状态。 2、方法 好的,我来为您总结一下Spring框架中Assert类的常用方法,并给出它们的用途和简单示例。 Assert类主要用于参数验证和状态检查,它可以帮助我们在代码中快速失败,提早发现问题。以下是一些常用方法: notNull() 用途:检查对象是否为null。如果对象为null,则抛出I..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-21T07:04:46.000Z"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:published_time","content":"2024-07-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-21T07:04:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot 工具类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-21T07:04:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"断言","slug":"断言","link":"#断言","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1721545486000,"updatedTime":1721545486000,"contributors":[{"name":"your_global_eamil@","email":"115145444+powwssir@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.76,"words":828},"filePathRelative":"deploy/toolclass/springbootutil.md","localizedDate":"2024年7月13日","excerpt":"<h2>断言</h2>\\n<p>1、简介</p>\\n<p>提供了一系列断言方法，用于验证参数或状态。</p>\\n<p>2、方法</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 要求参数 object 必须为非空（Not Null），否则抛出异常，不予放行</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 参数 message 参数用于定制异常信息。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">void</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> notNull</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\">Object</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> object</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> message)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 要求参数必须空（Null），否则抛出异常，不予『放行』。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 和 notNull() 方法断言规则相反</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">void</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> isNull</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\">Object</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> object</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> message)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 要求参数必须为真（True），否则抛出异常，不予『放行』。</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">void</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> isTrue</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">boolean</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> expression</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> message)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 要求参数（List/Set）必须非空（Not Empty），否则抛出异常，不予放行</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">void</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> notEmpty</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\">Collection</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> collection</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> message)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 要求参数（String）必须有长度（即，Not Empty），否则抛出异常，不予放行</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">void</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> hasLength</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\">String</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> text</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> message)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 要求参数（String）必须有内容（即，Not Blank），否则抛出异常，不予放行</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">void</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> hasText</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\">String</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> text</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> message)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 要求参数是指定类型的实例，否则抛出异常，不予放行</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">void</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> isInstanceOf</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\">Class</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> type</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> Object</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> obj</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> message)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 要求参数 `subType` 必须是参数 superType 的子类或实现类，否则抛出异常，不予放行</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">void</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> isAssignable</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\">Class</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> superType</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> Class</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> subType</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E5C07B\\"> String</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> message)</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);