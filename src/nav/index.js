const navData = [
    {
        title: "管理员管理",
        icon: "tags",
        target:1,
        rootRouter: "/functional",
        defaultPath:"/user",
        subList: [
            // {
            //     title: "机构管理",
            //     router: "/organizational",
            // },
            {
                title: "用户管理",
                router: "/user",
            },
        ]
    },{
        title: "数据管理",
        icon: "bars",
        target:2,
        rootRouter: "/functional",
        defaultPath:"/datalocking",
        subList: [
            {
                title: "数据锁定",
                router: "/datalocking",
            },{
                title: "数据源",
                router: "/datasource",
            },{
                title: "企业标准",
                router: "/enterprisestandard",
            },
        ]
    }
]
export default navData