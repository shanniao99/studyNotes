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
// show collections 展示当前数据库下的所有集合
// db 展示当前正在操作的数据库
// use xxx 切换或新建数据库

// db.xxx.insert({x:123}) 往xxx数据库中添加一条数据（只能操作当前正在操作的数据库）
// db.xxx.save({x:123}) 往xxx数据库中添加一条数据

// db.xxx.remove({x:123}) //在xxx数据库中删除指定数据

// db.xxx.update({x:123},{x:666})//在xxx数据库中更新指定数据(替换一整条)
// db.xxx.update({x:123},{$set:{x:666}})//在xxx数据库中更新指定数据(替换部分数据)

// db.xxx.find() 查找xxx数据库中的所有数据（只能操作当前正在操作的数据库）


// 大于小于并且或者等条件查询
// $gt   大于
// $lt   小于
// $gte  大于等于
// $lte  小于等于
// $or   或者
// db.xxx.find({x:{$gt:3}})
// db.xxx.find({$or:[{x:{$gt:5}},{x:{$lt:3}}]})   //查找x<3或者x>5的数据

// 删除数据库(集合)
// db.news.drop()
// db.dropDatabase()


// 集合（类似于mysql里面的表）
// db.createCollection('xxx',{capped:true,size:100000,max:100})
// 创建xxx集合  capped:true 固定集合  size:10000 大小限制   max:100 条数限制








