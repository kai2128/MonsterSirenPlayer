import { useRoutes, RouteObject } from "react-router-dom";

type RouteObjectExtends = RouteObject & {
  navInfo?: {
    name: string,
    path: string
  }
}

const routerList: RouteObjectExtends[] = [
  {
    index: true,
    path: '/',
    element: '',
  },
  {
    navInfo: {
      name: "我的音乐",
      path: "/list"
    },
    path: '/list/:type?/:id?/:page?',
    element: ""
  },
  {
    navInfo: {
      name: "正在播放",
      path: "/music"
    },
    path: '/music/:id?',
    element: ""
  },
  {
    path: '/settings',
    element: <div>settings</div>
  },
  {
    navInfo: {
      name: "已下载",
      path: '/download',
    },
    path: '/download',
    children: [
      {
        path: 'processing',
        element: <div>download/processing</div>
      },
      {
        path: 'done',
        element: <div>download/done</div>
      }
    ]
  },
  {
    path: '/*',
    element: <div>404</div>
  }
]

const asyncRouterList: RouteObject[] = []

export {
  routerList,
  asyncRouterList
}

export default [...routerList, ...asyncRouterList]