export const data = JSON.parse("{\"key\":\"v-272de7fe\",\"path\":\"/Java/jvm/part1/8.%E5%A0%86.html\",\"title\":\"堆\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":8,\"title\":\"堆\",\"category\":[\"JVM\"],\"tag\":[\"JVM上篇\"],\"description\":\"[toc] 认识堆内存\\r一个进程对应一个JVM实例; \\r一个JVM实例对应一个堆空间; \\r进程包含多个线程，所以线程之间共享同一个堆空间; image\\r一个JVM实例只存在一个堆内存，堆也是Java内存管理的核心区域。; \\rJava堆区在JVM启动的时候即被创建，其空间大小也就确定了，堆是JVM管理的最大一块内存空间。; \\r堆内存的大小是可以调节的。;...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhiyu1998.github.io/Java/jvm/part1/8.%E5%A0%86.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"堆\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"[toc] 认识堆内存\\r一个进程对应一个JVM实例; \\r一个JVM实例对应一个堆空间; \\r进程包含多个线程，所以线程之间共享同一个堆空间; image\\r一个JVM实例只存在一个堆内存，堆也是Java内存管理的核心区域。; \\rJava堆区在JVM启动的时候即被创建，其空间大小也就确定了，堆是JVM管理的最大一块内存空间。; \\r堆内存的大小是可以调节的。;...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://zhiyu1998.github.io/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-04-04T15:12:04.000Z\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"堆\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"zhiyu1998\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"JVM上篇\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-04-04T15:12:04.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"堆\\\",\\\"image\\\":[\\\"https://zhiyu1998.github.io/\\\"],\\\"dateModified\\\":\\\"2023-04-04T15:12:04.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"zhiyu1998\\\",\\\"url\\\":\\\"https://github.com/zhiyu1998\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"认识堆内存\",\"slug\":\"认识堆内存\",\"link\":\"#认识堆内存\",\"children\":[]},{\"level\":2,\"title\":\"代码示例\",\"slug\":\"代码示例\",\"link\":\"#代码示例\",\"children\":[]},{\"level\":2,\"title\":\"查看堆内存\",\"slug\":\"查看堆内存\",\"link\":\"#查看堆内存\",\"children\":[]},{\"level\":2,\"title\":\"堆内存分区\",\"slug\":\"堆内存分区\",\"link\":\"#堆内存分区\",\"children\":[]},{\"level\":2,\"title\":\"设置堆空间大小\",\"slug\":\"设置堆空间大小\",\"link\":\"#设置堆空间大小\",\"children\":[{\"level\":3,\"title\":\"如何验证？\",\"slug\":\"如何验证\",\"link\":\"#如何验证\",\"children\":[]}]},{\"level\":2,\"title\":\"OOM举例\",\"slug\":\"oom举例\",\"link\":\"#oom举例\",\"children\":[]},{\"level\":2,\"title\":\"配置新老比例\",\"slug\":\"配置新老比例\",\"link\":\"#配置新老比例\",\"children\":[{\"level\":3,\"title\":\"新生区中的比例\",\"slug\":\"新生区中的比例\",\"link\":\"#新生区中的比例\",\"children\":[]}]},{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"图解对象分配(重要)\",\"slug\":\"图解对象分配-重要\",\"link\":\"#图解对象分配-重要\",\"children\":[{\"level\":3,\"title\":\"分解\",\"slug\":\"分解\",\"link\":\"#分解\",\"children\":[]},{\"level\":3,\"title\":\"特殊情况说明\",\"slug\":\"特殊情况说明\",\"link\":\"#特殊情况说明\",\"children\":[]},{\"level\":3,\"title\":\"JVM常用调优工具\",\"slug\":\"jvm常用调优工具\",\"link\":\"#jvm常用调优工具\",\"children\":[]},{\"level\":3,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}]},{\"level\":2,\"title\":\"分代收集思想(面试必问)\",\"slug\":\"分代收集思想-面试必问\",\"link\":\"#分代收集思想-面试必问\",\"children\":[]},{\"level\":2,\"title\":\"Young/Minor GC\",\"slug\":\"young-minor-gc\",\"link\":\"#young-minor-gc\",\"children\":[]},{\"level\":2,\"title\":\"Major GC\",\"slug\":\"major-gc\",\"link\":\"#major-gc\",\"children\":[]},{\"level\":2,\"title\":\"Full GC\",\"slug\":\"full-gc\",\"link\":\"#full-gc\",\"children\":[]},{\"level\":2,\"title\":\"GC 日志分析\",\"slug\":\"gc-日志分析\",\"link\":\"#gc-日志分析\",\"children\":[]},{\"level\":2,\"title\":\"为什么有 TLAB\",\"slug\":\"为什么有-tlab\",\"link\":\"#为什么有-tlab\",\"children\":[]},{\"level\":2,\"title\":\"什么是 TLAB\",\"slug\":\"什么是-tlab\",\"link\":\"#什么是-tlab\",\"children\":[]},{\"level\":2,\"title\":\"TLAB 分配过程\",\"slug\":\"tlab-分配过程\",\"link\":\"#tlab-分配过程\",\"children\":[{\"level\":3,\"title\":\"测试是否是首选\",\"slug\":\"测试是否是首选\",\"link\":\"#测试是否是首选\",\"children\":[]},{\"level\":3,\"title\":\"过程详解\",\"slug\":\"过程详解\",\"link\":\"#过程详解\",\"children\":[]}]},{\"level\":2,\"title\":\"常用参数设置\",\"slug\":\"常用参数设置\",\"link\":\"#常用参数设置\",\"children\":[]},{\"level\":2,\"title\":\"空间分配担保\",\"slug\":\"空间分配担保\",\"link\":\"#空间分配担保\",\"children\":[]},{\"level\":2,\"title\":\"堆是分配对象存储的唯一选择吗？\",\"slug\":\"堆是分配对象存储的唯一选择吗\",\"link\":\"#堆是分配对象存储的唯一选择吗\",\"children\":[]},{\"level\":2,\"title\":\"逃逸分析\",\"slug\":\"逃逸分析\",\"link\":\"#逃逸分析\",\"children\":[{\"level\":3,\"title\":\"举例说明\",\"slug\":\"举例说明\",\"link\":\"#举例说明\",\"children\":[]},{\"level\":3,\"title\":\"参数设置\",\"slug\":\"参数设置\",\"link\":\"#参数设置\",\"children\":[]},{\"level\":3,\"title\":\"结论\",\"slug\":\"结论\",\"link\":\"#结论\",\"children\":[]},{\"level\":3,\"title\":\"代码优化\",\"slug\":\"代码优化\",\"link\":\"#代码优化\",\"children\":[]}]},{\"level\":2,\"title\":\"栈上分配\",\"slug\":\"栈上分配\",\"link\":\"#栈上分配\",\"children\":[]},{\"level\":2,\"title\":\"同步省略\",\"slug\":\"同步省略\",\"link\":\"#同步省略\",\"children\":[]},{\"level\":2,\"title\":\"分离对象或标量替换\",\"slug\":\"分离对象或标量替换\",\"link\":\"#分离对象或标量替换\",\"children\":[{\"level\":3,\"title\":\"逃逸分析参数设置总结\",\"slug\":\"逃逸分析参数设置总结\",\"link\":\"#逃逸分析参数设置总结\",\"children\":[]},{\"level\":3,\"title\":\"逃逸分析的不足\",\"slug\":\"逃逸分析的不足\",\"link\":\"#逃逸分析的不足\",\"children\":[]}]}],\"git\":{\"createdTime\":1680621124000,\"updatedTime\":1680621124000,\"contributors\":[{\"name\":\"RrOrange\",\"email\":\"542716863@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":35.51,\"words\":10653},\"filePathRelative\":\"Java/jvm/part1/8.堆.md\",\"localizedDate\":\"2023年4月4日\",\"autoDesc\":true}")
