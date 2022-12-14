# Web server for reGuard ( back-end )

# API文档

> 由于项目的具体参数还未完善，还处于建设过程当中，同时也考虑到了组件的封装性，因此此后台服务相当于与数据库连接的接口，提供数据储存服务。其中数据库采用mongodb，即Nosql，类似于对象储存，具体会在下面的demo进行说明。

## 基础信息

### 接口风格

restful风格

### 统一返回格式

```json
{
    "msg": "" //返回信息
    "code": 0 //状态 0为异常 1为请求成功
    "data": Array<Object> | Object //返回数据
}
```

## 新增数据

> 用于接收传入的数据，一般是由sdk触发，前面提到因为参数不全等，因此数据处理逻辑下放至可视化界面处理

url : http//43.142.* * * .* * *:3000/tracker

http method: POST

### 请求示例:

```json
{
    "uuid": "12131",
    "type": "test"
}
```
### 返回示例

```json
{
     "msg": "success" //返回信息
    "code": 1 //状态 0为异常 1为请求成功
    "data": {
        "_id": "***"//对应数据被标记的_id 此项目中可以忽略
    }
}
```

## 查询数据

> 用于数据的查询，其中请求参数则为查询与用于筛选参数

url : http//43.142.* * * .* * *:3000/tracker

http method: GET

请求示例:

### 单参数查询

```json
{
    "uuid": "12131" //查询uuid为12131的所有数据
}
```

### 多参数筛选

```json
{
    "uuid": "12131" //查询uuid为12131的所有数据
    "type": "test" // 查询type为test的所有数据
}
// 返回符合两个条件的数据
```


### 返回示例

```json
{
    "msg": "success" //返回信息
    "code": 1 //状态 0为异常 1为请求成功
    "data": [
        "_id": "***"//对应数据被标记的_id 此项目中可以忽略
        "uuid": "12131"
        "type": "test" //之前存的参数
    ]
}
```


## 删除数据

> 用于数据的查询，其中请求参数则为查询与用于筛选参数

url : http//43.142.* * * .* * *:3000/tracker

http method: DELETE

请求示例:


### 单参数删除

```json
{
    "uuid": "12131" //删除uuid为12131的所有数据
}
```

### 多参数删除

```json
{
    "uuid": "12131" //删除uuid为12131的所有数据
    "type": "test" // 删除type为test的所有数据
}
// 删除符合两个条件的数据
```


### 返回示例

```json
{
    "msg": "success" //返回信息
    "code": 1 //状态 0为异常 1为请求成功
    "data": [
        "deleteCount": 1 //返回被删除的数据个数
    ]
}
```
