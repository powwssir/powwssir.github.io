---
title: IDEA快捷命令、常用插件
order: 1
date: 2024-07-12
category:
  - 工具
  - 效率
---
## 快捷命令

以下都是windows命令:

### 快速命令

- Shift 双击，搜索
- Ctrl + F 在当前文件进行文本查找
- Ctrl + Shift + F 根据输入内容查找整个项目 或 指定目录内文件
- Ctrl + R 在当前文件进行文本替换
- Ctrl + Shift + R 根据输入内容替换对应内容，范围为整个项目 或 指定目录内文件
- Ctrl + Alt + L 格式化代码 —— 你可以格式化；整个工程、默认当前打开的文件、选中的代码区域
- Ctrl + shift + O 排掉当前类中，不需要的引入包 
- Shift + Option + 上/下 可以把当前行的代码，上移或者下移





### 其他命令

- Ctrl + Shift + Z 取消撤销
- Ctrl + D 复制光标所在行 或 复制选择内容，并把复制内容插入光标位置下面
- ==Ctrl + W== 递进式选择代码块。可选中光标所在的单词或段落，连续按会在原有选中的基础上再扩展选中范围
- Ctrl + E 显示最近打开的文件记录列表
- ==Ctrl + N== 根据输入的 **类名** 查找类文件
- Ctrl + J  插入自定义动态代码模板
- Ctrl + P 方法参数提示显示
- Ctrl + U 前往当前光标所在的方法的父类的方法 / 接口定义
- Ctrl + B 进入光标所在的方法/变量的接口或是定义处，等效于 `Ctrl + 左键单击`
- Ctrl + /  注释光标所在行代码，会根据当前不同文件类型使用不同的注释符号
- Ctrl + F1 在光标所在的错误代码处显示错误信息
- Ctrl + F3 调转到所选中的词的下一个引用位置
- Ctrl + Delete 删除光标后面的单词或是中文句
- Ctrl + BackSpace 删除光标前面的单词或是中文句
- Ctrl + 1,2,3...9 定位到对应数值的书签位置
- Ctrl + 左键单击 在打开的文件标题上，弹出该文件路径
- Ctrl + 左方向键 光标跳转到当前单词 / 中文句的左侧开头位置
- Ctrl + 右方向键 光标跳转到当前单词 / 中文句的右侧开头位置
- Ctrl + 前方向键 等效于鼠标滚轮向前效果
- Ctrl + 后方向键 等效于鼠标滚轮向后效果
- ==Alt + Insert== 代码自动生成，如生成对象的 set / get 方法，构造函数，toString() 等
- Shift + Enter  开始新一行。光标所在行下空出一行，光标定位到新行位置
- Shift + 左键单击 在打开的文件名上按此快捷键，可以关闭当前打开文件
- shift  + F6 修改文件名称
- Ctrl + Alt + O 优化导入的类，可以对当前文件和整个包目录使用
- Ctrl + Alt + T 对选中的代码弹出环绕选项弹出层
- ==Ctrl + Alt + S==  打开 IntelliJ IDEA 系统设置
- ==Ctrl + Alt + Enter== 光标所在行上空出一行，光标定位到新行
- ==Ctrl + Alt + 左方向键== 退回到上一个操作的地方
- ==Ctrl + Shift + C==  复制当前文件磁盘路径到剪贴板
- ==Ctrl + Shift + T==  对当前类生成单元测试类，如果已经存在的单元测试类则可以进行选择
- Ctrl + Shift + U  对选中的代码进行大 / 小写轮流转换
- ==Ctrl + Shift + N== 通过文件名定位 / 打开文件 / 目录，打开目录需要在输入的内容后面多加一个正斜杠
- Ctrl + Shift + /  代码块注释
- ==Ctrl + Shift + +==  展开所有代码
- ==Ctrl + Shift + -== 折叠所有代码
- ==Ctrl + Shift + Backspace==　退回到上次修改的地方
- ==Ctrl + Shift + 左键单击==　把光标放在某个类变量上，按此快捷键可以直接定位到该类中





### 源码查看

- Ctrl + H 查看当前类的层次结构
- Alt + 7   查看类结构
- Ctrl + N 快速检索类/文件
- Ctrl + F 当前文件下搜索
- Ctrl + Shift + F 全局的文本搜索
- Ctrl + Alt + B 查看方法/类的实现类,直接在方法名或者类名上使用快捷键
- Alt + F7  查看方法被使用的情况,直接在方法名上使用使用快捷键
- Ctrl + E 查看最近使用的文件

补充:选中类名然后点击右键选择 **Show Diagrams** 查看图表形式的类继承链







## 插件

1、快捷键提示:

- [Key Promoter X](https://idea.javaguide.cn/plugins/shortcut-key.html)

2、代码智能提示:

- [Tabnine](https://idea.javaguide.cn/plugins/improve-code.html#codota-%E4%BB%A3%E7%A0%81%E6%99%BA%E8%83%BD%E6%8F%90%E7%A4%BA) 提供在线网站 [Tabnine](https://www.tabnine.com/code/java/classes/java.util.stream.Stream)

- [通义灵码](https://tongyi.aliyun.com/lingma)

3、代码规范

- [Alibaba Java Code Guidelines: 阿里巴巴 Java 代码规范](https://idea.javaguide.cn/plugins/improve-code.html#codota-%E4%BB%A3%E7%A0%81%E6%99%BA%E8%83%BD%E6%8F%90%E7%A4%BA)

- [SonarLint: 代码审核检查](https://idea.javaguide.cn/plugins/improve-code.html#sonarlint-%E5%B8%AE%E4%BD%A0%E4%BC%98%E5%8C%96%E4%BB%A3%E7%A0%81)

- [CheckStyle: 代码格式规范](https://idea.javaguide.cn/plugins/improve-code.html#checkstyle-java-%E4%BB%A3%E7%A0%81%E6%A0%BC%E5%BC%8F%E8%A7%84%E8%8C%83)

- [Git Commit Template: 代码提交格式规范](https://idea.javaguide.cn/plugins/git-commit-template/)

- Coverage: 单元测试覆盖率统计

- Squaretest 自动生成Mock测试插件

- GenerateAllSetter 快速创建set方法




4、代码统计

- [Statistic: 代码统计](https://idea.javaguide.cn/plugins/code-statistic/)

5、字节码查看

- [jclasslib: 字节码查看](https://idea.javaguide.cn/plugins/jclasslib/)

6、Maven

[Maven Helper: 解决 Maven 依赖冲突问题](https://idea.javaguide.cn/plugins/maven-helper.html)

7、类关系

- [SequenceDiagram: 生成时序图](https://idea.javaguide.cn/plugins/sequence-diagram.html)







## 参考资料

- [主页 | IDEA 高效使用指南](https://idea.javaguide.cn/)

- [IntelliJ IDEA | 小傅哥 bugstack 虫洞栈](https://bugstack.cn/md/road-map/intellij-idea.html)



