---
title: 测试
index: false
category:
  - 测试
---


```
public class JdkProxyDemo {

    public static void main(String[] args) {
        // 创建目标对象
        MyService target = new MyServiceImpl();
        // 获取目标对象的类对象
        Class clz = target.getClass();
        // 创建代理对象，并指定目标对象的类加载器、实现的接口以及调用处理器
        MyService proxyObject = (MyService) Proxy.newProxyInstance(clz.getClassLoader(), clz.getInterfaces(), new MyInvocationHandler(target));
        // 打印代理对象的类信息
        System.out.println("ProxyObject = " + proxyObject.getClass());
        // 通过代理对象调用方法，实际上会调用 MyInvocationHandler 中的 invoke 方法
        proxyObject.doSomething();
    }
}
```







```
class MyInvocationHandler implements InvocationHandler {

    private Object target;

    public MyInvocationHandler(Object target) {
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("Before method execution");
        Object result = method.invoke(target, args);
        System.out.println("After method execution");
        return result;
    }
}
```

