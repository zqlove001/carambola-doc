# 快速了解
## 系统说明
- 基于 Spring Cloud Hoxton 、Spring Boot 2.4、 OAuth2 的 RBAC **权限管理系统**
- 基于数据驱动视图的理念封装 element-ui，即使没有 vue 的使用经验也能快速上手
- 提供对常见容器化支持 Docker、Kubernetes、Rancher2 支持
- 提供 lambda 、stream api 、webflux 的生产实践

## 核心依赖
| 依赖                   | 版本          |
| ---------------------- | ------------- |
| Spring Boot            | 2.4.3 |
| Spring Cloud           | 2020    |
| Spring Cloud Alibaba   | 2.2.5.RELEASE |
| Spring Security OAuth2 | 2.3.6         |
| Mybatis Plus           | 3.4.2         |
| hutool                 | 5.5.8         |
| Avue                   | 2.6.16        |

## 模块说明
```lua

carambola
├── carambola-auth -- 授权服务提供[3000]
└── carambola-common -- 系统公共模块
     ├── carambola-common-core -- 公共工具类核心包
     ├── carambola-common-datasource -- 动态数据源包
     ├── carambola-common-job -- xxl-job 封装
     ├── carambola-common-log -- 日志服务
     ├── carambola-common-mybatis -- mybatis 扩展封装
     ├── carambola-common-security -- 安全工具类
     ├── carambola-common-swagger -- 接口文档
     ├── carambola-common-feign -- feign 扩展封装
     └── carambola-common-test -- oauth2.0 单元测试扩展封装
├── carambola-soul -- soul 网关[9999]
└── carambola-upms -- 通用用户权限管理模块
     └── carambola-upms-api -- 通用用户权限管理系统公共api模块
     └── carambola-upms-biz -- 通用用户权限管理系统业务处理模块[4000]



