// mongodb 芒果odb 数据库
// https://www.mongodb.com/try/download/community
// 下载安装并解压（记住对应目录）
// cmd进入安装bin目录
// mongod启动数据库服务进程（保持启动状态，不能关闭）

// 启动不了？
// 1 检查盘符根目录下有没有data/db目录
// 2 启动时是否是在bin目录下启动的


// 在任意目录下都能启动服务？
// 需要修改环境变量
// 在计算机--属性--高级系统设置--环境变量--path中添加bin目录的地址


// 修改数据存储目录？
// mongod --dbpath "C:\Users\Administrator\Desktop\456\node\data\db" --logpath "C:\Users\Administrator\Desktop\456\node\data\log\mongodb.log" --logappend

// --dbpath "xxx"  修改数据存储目录为xxx
// --logpath "xxx"  修改日志存储目录为xxx
// --logappend 日志以追加形式添加（不在创建新文件）


// 进入数据库
// 输入mongo进入启动中的数据库
// show dbs 展示所有数据库 
// db 展示当前正在操作的数据库
// use xxx 切换或新建数据库
// db.xxx.insert({x:123}) 往xxx数据库中添加一条数据（只能操作当前正在操作的数据库）
// db.xxx.find() 查找xxx数据库中的所有数据（只能操作当前正在操作的数据库）
