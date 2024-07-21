---
title: SpringBoot 工具类
order: 3
date: 2024-07-13
category:
  - SpringBoot
tag:
  - 工具
page:
  - frontmatter: false  
---



## 断言

1、简介 

提供了一系列断言方法，用于验证参数或状态。

2、方法


```java
// 要求参数 object 必须为非空（Not Null），否则抛出异常，不予放行
// 参数 message 参数用于定制异常信息。
void notNull(Object object, String message)
// 要求参数必须空（Null），否则抛出异常，不予『放行』。
// 和 notNull() 方法断言规则相反
void isNull(Object object, String message)
// 要求参数必须为真（True），否则抛出异常，不予『放行』。
void isTrue(boolean expression, String message)
// 要求参数（List/Set）必须非空（Not Empty），否则抛出异常，不予放行
void notEmpty(Collection collection, String message)
// 要求参数（String）必须有长度（即，Not Empty），否则抛出异常，不予放行
void hasLength(String text, String message)
// 要求参数（String）必须有内容（即，Not Blank），否则抛出异常，不予放行
void hasText(String text, String message)
// 要求参数是指定类型的实例，否则抛出异常，不予放行
void isInstanceOf(Class type, Object obj, String message)
// 要求参数 `subType` 必须是参数 superType 的子类或实现类，否则抛出异常，不予放行
void isAssignable(Class superType, Class subType, String message)
```

好的,我来为您总结一下Spring框架中Assert类的常用方法,并给出它们的用途和简单示例。

Assert类主要用于参数验证和状态检查,它可以帮助我们在代码中快速失败,提早发现问题。以下是一些常用方法:

1. notNull()

用途:检查对象是否为null。如果对象为null,则抛出IllegalArgumentException。

示例:
```java
public void processUser(User user) {
    Assert.notNull(user, "User must not be null");
    // 处理用户...
}
```

2. hasText()

用途:检查字符串是否有实际文本内容。如果字符串为null、空字符串或只包含空白字符,则抛出IllegalArgumentException。

示例:
```java
public void setUsername(String username) {
    Assert.hasText(username, "Username must not be empty");
    this.username = username;
}
```

3. isTrue()

用途:检查布尔表达式是否为true。如果为false,则抛出IllegalArgumentException。

示例:
```java
public void setAge(int age) {
    Assert.isTrue(age >= 0, "Age must be non-negative");
    this.age = age;
}
```

4. notEmpty() (用于数组、集合或Map)

用途:检查数组、集合或Map是否为空。如果为null或空,则抛出IllegalArgumentException。

示例:
```java
public void processOrders(List<Order> orders) {
    Assert.notEmpty(orders, "Orders list must not be empty");
    // 处理订单...
}
```

5. state()

用途:检查某个状态。如果状态不满足,则抛出IllegalStateException。

示例:
```java
public void withdraw(double amount) {
    Assert.state(isAccountActive(), "Account must be active");
    // 执行取款操作...
}
```

6. isInstanceOf()

用途:检查对象是否为指定类的实例。如果不是,则抛出IllegalArgumentException。

示例:
```java
public void processPayment(Payment payment) {
    Assert.isInstanceOf(CreditCardPayment.class, payment, "Only credit card payments are accepted");
    // 处理信用卡支付...
}
```

7. doesNotContain()

用途:检查字符串是否不包含指定的子字符串。如果包含,则抛出IllegalArgumentException。

示例:
```java
public void setPassword(String password) {
    Assert.doesNotContain(password, "admin", "Password must not contain 'admin'");
    this.password = password;
}
```

8. noNullElements()

用途:检查数组或集合中是否有null元素。如果有null元素,则抛出IllegalArgumentException。

示例:
```java
public void processNames(String[] names) {
    Assert.noNullElements(names, "Names array must not contain null elements");
    // 处理名字...
}
```

2、简单案例


4、使用细节以及注意事项







StringUtils

>来自 spring-core


## 参考资料


- [SpringBoot 内置工具类 - 掘金](https://juejin.cn/post/7043403364020781064)

- [xuchengsheng/spring-reading](https://github.com/xuchengsheng/spring-reading)

- [SpringBoot 内置工具类 - 掘金](https://juejin.cn/post/7043403364020781064)



