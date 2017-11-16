# html-tool
It's used to parse html and generate html

## api

#### parse(str, opt)

属性 | 说明 | 类型
-----|-----|-----
str | html字符串 | String 
opt | 请查看htmlparser2的opt参数 | Object

example 
```js
parse('<html><body></body></html>')
```

#### traverse(node, cb)
traverse node tree

```js
let node = parse('<html><body></body></html>')
traverse(node, function () {
  // ..
})
```

#### generate(node)

```js
let node = parse('<html><body></body></html>')
traverse(node, function () {
  // ..
})
let str = generate(node)
```