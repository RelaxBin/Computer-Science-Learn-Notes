const e=JSON.parse('{"key":"v-cb774688","path":"/Java/eightpart/virtualMachine.html","title":"JVM","lang":"zh-CN","frontmatter":{"order":4,"author":"zhiyu1998","title":"JVM","category":["虚拟机","八股文"],"description":"♻️ JVM 图解JVM结构 整体架构图：建议默写 image-20220629110459744 程序计数器 程序计数器是一块较小的内存空间，它可以看作是当前线程所执行的字节码的行号指示器。字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。 由于 J...","head":[["meta",{"property":"og:url","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/Java/eightpart/virtualMachine.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"JVM"}],["meta",{"property":"og:description","content":"♻️ JVM 图解JVM结构 整体架构图：建议默写 image-20220629110459744 程序计数器 程序计数器是一块较小的内存空间，它可以看作是当前线程所执行的字节码的行号指示器。字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。 由于 J..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-24T14:15:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"JVM"}],["meta",{"property":"article:author","content":"zhiyu1998"}],["meta",{"property":"article:modified_time","content":"2023-06-24T14:15:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM\\",\\"image\\":[\\"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/\\"],\\"dateModified\\":\\"2023-06-24T14:15:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zhiyu1998\\"}]}"]]},"headers":[{"level":2,"title":"♻️ JVM","slug":"♻️-jvm","link":"#♻️-jvm","children":[{"level":3,"title":"图解JVM结构","slug":"图解jvm结构","link":"#图解jvm结构","children":[]},{"level":3,"title":"⭐️类的生命周期、类加载的过程","slug":"⭐️类的生命周期、类加载的过程","link":"#⭐️类的生命周期、类加载的过程","children":[]},{"level":3,"title":"JDK 中有哪些默认的类加载器","slug":"jdk-中有哪些默认的类加载器","link":"#jdk-中有哪些默认的类加载器","children":[]},{"level":3,"title":"如何对栈进行参数调优","slug":"如何对栈进行参数调优","link":"#如何对栈进行参数调优","children":[]},{"level":3,"title":"说一下方法区和永久代的关系","slug":"说一下方法区和永久代的关系","link":"#说一下方法区和永久代的关系","children":[]},{"level":3,"title":"如何判断对象是否死亡","slug":"如何判断对象是否死亡","link":"#如何判断对象是否死亡","children":[]},{"level":3,"title":"什么是GC Root？有哪些常见的GC Root？","slug":"什么是gc-root-有哪些常见的gc-root","link":"#什么是gc-root-有哪些常见的gc-root","children":[]},{"level":3,"title":"⭐️虚引用与软引用和弱引用的区别","slug":"⭐️虚引用与软引用和弱引用的区别","link":"#⭐️虚引用与软引用和弱引用的区别","children":[]},{"level":3,"title":"如何判断一个常量是废弃常量","slug":"如何判断一个常量是废弃常量","link":"#如何判断一个常量是废弃常量","children":[]},{"level":3,"title":"双亲委派模型？如果我们不想用双亲委派模型怎么办？","slug":"双亲委派模型-如果我们不想用双亲委派模型怎么办","link":"#双亲委派模型-如果我们不想用双亲委派模型怎么办","children":[]},{"level":3,"title":"如何判断一个类是无用的类","slug":"如何判断一个类是无用的类","link":"#如何判断一个类是无用的类","children":[]},{"level":3,"title":"⭐️垃圾收集有哪些算法，各自的特点","slug":"⭐️垃圾收集有哪些算法-各自的特点","link":"#⭐️垃圾收集有哪些算法-各自的特点","children":[]},{"level":3,"title":"跨代引用假说、弱分代假说 和 强分代假说","slug":"跨代引用假说、弱分代假说-和-强分代假说","link":"#跨代引用假说、弱分代假说-和-强分代假说","children":[]},{"level":3,"title":"HotSpot 为什么要分为新生代和老年代","slug":"hotspot-为什么要分为新生代和老年代","link":"#hotspot-为什么要分为新生代和老年代","children":[]},{"level":3,"title":"⭐️常见的垃圾回收器有哪些","slug":"⭐️常见的垃圾回收器有哪些","link":"#⭐️常见的垃圾回收器有哪些","children":[]},{"level":3,"title":"卡表","slug":"卡表","link":"#卡表","children":[]},{"level":3,"title":"TLAB（Thread Local Allocation Buffer）","slug":"tlab-thread-local-allocation-buffer","link":"#tlab-thread-local-allocation-buffer","children":[]},{"level":3,"title":"Minor Gc 和 Full GC 有什么不同呢","slug":"minor-gc-和-full-gc-有什么不同呢","link":"#minor-gc-和-full-gc-有什么不同呢","children":[]},{"level":3,"title":"⭐️对象的创建过程","slug":"⭐️对象的创建过程","link":"#⭐️对象的创建过程","children":[]},{"level":3,"title":"对象访问方式","slug":"对象访问方式","link":"#对象访问方式","children":[]},{"level":3,"title":"安全点和安全区各代表什么？","slug":"安全点和安全区各代表什么","link":"#安全点和安全区各代表什么","children":[]},{"level":3,"title":"三色标记法","slug":"三色标记法","link":"#三色标记法","children":[]},{"level":3,"title":"什么是字节码？类文件结构的组成了解吗？","slug":"什么是字节码-类文件结构的组成了解吗","link":"#什么是字节码-类文件结构的组成了解吗","children":[]},{"level":3,"title":"OOM 常见原因及解决方法","slug":"oom-常见原因及解决方法","link":"#oom-常见原因及解决方法","children":[]}]}],"git":{"createdTime":1680621124000,"updatedTime":1687616152000,"contributors":[{"name":"RrOrange","email":"542716863@qq.com","commits":8}]},"readingTime":{"minutes":116.7,"words":35009},"filePathRelative":"Java/eightpart/virtualMachine.md","localizedDate":"2023年4月4日","autoDesc":true,"excerpt":""}');export{e as data};
