// 引入data.json文件
import data from './data.json'
// 引入mock
import Mock from 'mockjs'
Mock.mock('/goods', { code: 0, data: data.goods })
Mock.mock('/categorys', { code: 0, data: data.categorys })
