### 单元测试

1. 添加egg-bin模块

```bash
npm i egg-bin --save-dev
```

2. 添加egg-bin到package.json

```json
{
  "scripts": {
    "dev": "egg-bin dev",
    "debug": "egg-bin debug",
    "test-local": "egg-bin test",
    "test": "npm run lint -- --fix && npm run test-local",
    "cov": "egg-bin cov",
    "lint": "eslint .",
    "ci": "npm run lint && npm run cov"
  }
}
```

3. 运行所有用例文件

    运行npm test 时会自动执行test目录下的以.test.js结尾的文件（默认 glob 匹配规则 test/**/*.test.js ）。

     ```bash
     npm test
      ```

4. 运行特定用例文件
    
    ```bash
    npm test test/app/controller/home.test.js
    ```
    
5. 指定用例超时时间(默认30s)

    ```bash
    npm test test/app/controller/home.test.js -t 5s
    ```
    
    ![avatar](https://raw.githubusercontent.com/wanglu1990/Egg.js/master/egg-example/doc/images/unittest-timeout-5s.png)
    
    or
    
    ```bash
    npm test test/app/controller/home.test.js --timeout 5s
    ```
    
    ![avatar](https://raw.githubusercontent.com/wanglu1990/Egg.js/master/egg-example/doc/images/unittest-timeout-5s-2.png)
    
    
6. 代码覆盖率

    6.1  添加 npm scripts 到 package.json：
    
    ```json
    {
          "scripts": {
            "cov": "egg-bin cov"
          }
    }
    ```
    
    6.2  运行命令
    
    ```bash
    npm run cov
    ```
    
     ![avatar](https://raw.githubusercontent.com/wanglu1990/Egg.js/master/egg-example/doc/images/unittest-run-cov.png)

    
    
    
    
    
    
    
    
    
    
    










