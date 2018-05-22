import React, { Component} from 'react';
import CustomerTypePie from './CompanyCustomerTypePie';


import moment from 'moment';

import style from './index.less';

class Brand extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            listAndFlow: {},
            rankList: [],
            provinceName: '',
            provinceId: ''
        };

        this.onClickMap = this.onClickMap.bind(this);
        this.onClickMapBlank = this.onClickMapBlank.bind(this);
    }

    componentDidMount(){

        const recordList = [
            {
                "order":1,
                "area":"浙江省-杭州市",       //所属区域
                "shopName":"便利店1",       //门店名称
                "shopId":20,                //门店id
                "todayCustomer":300,        //今日客流
                "yesterdayCustomer":200,    //昨日客流
                "male":100,                 //男性比例
                "maleRate":0.33333,         //男性比例
                "maleRateStr":"33%",        //男性比例百分比
                "female":200,               //女性比例
                "femaleRate":0.66667,       //女性比例
                "femaleRateStr":"67%",  //女性比例百分比
                "newCustomer":100,          //新客数量
                "oldCustomer":200,          //老客数量
            },
            {
                "order":2,
                "area":"浙江省-杭州市",       //所属区域
                "shopName":"便利店2",       //门店名称
                "shopId":201,                //门店id
                "todayCustomer":300,        //今日客流
                "yesterdayCustomer":200,    //昨日客流
                "male":100,                 //男性比例
                "maleRate":0.33333,         //男性比例
                "maleRateStr":"33%",        //男性比例百分比
                "female":200,               //女性比例
                "femaleRate":0.66667,       //女性比例
                "femaleRateStr":"67%",  //女性比例百分比
                "newCustomer":100,          //新客数量
                "oldCustomer":200,          //老客数量
            },
            {
                "order":3,
                "area":"浙江省-杭州市",       //所属区域
                "shopName":"便利店3",       //门店名称
                "shopId":2,                //门店id
                "todayCustomer":300,        //今日客流
                "yesterdayCustomer":200,    //昨日客流
                "male":100,                 //男性比例
                "maleRate":0.33333,         //男性比例
                "maleRateStr":"33%",        //男性比例百分比
                "female":200,               //女性比例
                "femaleRate":0.66667,       //女性比例
                "femaleRateStr":"67%",  //女性比例百分比
                "newCustomer":100,          //新客数量
                "oldCustomer":200,          //老客数量
            },
            {
                "order":4,
                "area":"浙江省-杭州市",       //所属区域
                "shopName":"便利店4",       //门店名称
                "shopId":3,                //门店id
                "todayCustomer":300,        //今日客流
                "yesterdayCustomer":200,    //昨日客流
                "male":100,                 //男性比例
                "maleRate":0.33333,         //男性比例
                "maleRateStr":"33%",        //男性比例百分比
                "female":200,               //女性比例
                "femaleRate":0.66667,       //女性比例
                "femaleRateStr":"67%",  //女性比例百分比
                "newCustomer":100,          //新客数量
                "oldCustomer":200,          //老客数量
            },
            {
                "order":5,
                "area":"浙江省-杭州市",       //所属区域
                "shopName":"便利店5",       //门店名称
                "shopId":4,                //门店id
                "todayCustomer":300,        //今日客流
                "yesterdayCustomer":200,    //昨日客流
                "male":100,                 //男性比例
                "maleRate":0.33333,         //男性比例
                "maleRateStr":"33%",        //男性比例百分比
                "female":200,               //女性比例
                "femaleRate":0.66667,       //女性比例
                "femaleRateStr":"67%",  //女性比例百分比
                "newCustomer":100,          //新客数量
                "oldCustomer":200,          //老客数量
            },
            {
                "order":6,
                "area":"浙江省-杭州市",       //所属区域
                "shopName":"便利店6",       //门店名称
                "shopId":5,                //门店id
                "todayCustomer":300,        //今日客流
                "yesterdayCustomer":200,    //昨日客流
                "male":100,                 //男性比例
                "maleRate":0.33333,         //男性比例
                "maleRateStr":"33%",        //男性比例百分比
                "female":200,               //女性比例
                "femaleRate":0.66667,       //女性比例
                "femaleRateStr":"67%",  //女性比例百分比
                "newCustomer":100,          //新客数量
                "oldCustomer":200,          //老客数量
            },
            {
                "order":7,
                "area":"浙江省-杭州市",       //所属区域
                "shopName":"便利店7",       //门店名称
                "shopId":6,                //门店id
                "todayCustomer":300,        //今日客流
                "yesterdayCustomer":200,    //昨日客流
                "male":100,                 //男性比例
                "maleRate":0.33333,         //男性比例
                "maleRateStr":"33%",        //男性比例百分比
                "female":200,               //女性比例
                "femaleRate":0.66667,       //女性比例
                "femaleRateStr":"67%",  //女性比例百分比
                "newCustomer":100,          //新客数量
                "oldCustomer":200,          //老客数量
            },
            {
                "order":8,
                "area":"浙江省-杭州市",       //所属区域
                "shopName":"便利店8",       //门店名称
                "shopId":7,                //门店id
                "todayCustomer":300,        //今日客流
                "yesterdayCustomer":200,    //昨日客流
                "male":100,                 //男性比例
                "maleRate":0.33333,         //男性比例
                "maleRateStr":"33%",        //男性比例百分比
                "female":200,               //女性比例
                "femaleRate":0.66667,       //女性比例
                "femaleRateStr":"67%",  //女性比例百分比
                "newCustomer":100,          //新客数量
                "oldCustomer":200,          //老客数量
            },
            {
                "order":9,
                "area":"浙江省-杭州市",       //所属区域
                "shopName":"便利店9",       //门店名称
                "shopId":8,                //门店id
                "todayCustomer":300,        //今日客流
                "yesterdayCustomer":200,    //昨日客流
                "male":100,                 //男性比例
                "maleRate":0.33333,         //男性比例
                "maleRateStr":"33%",        //男性比例百分比
                "female":200,               //女性比例
                "femaleRate":0.66667,       //女性比例
                "femaleRateStr":"67%",  //女性比例百分比
                "newCustomer":100,          //新客数量
                "oldCustomer":200,          //老客数量
            },
            {
                "order":10,
                "area":"浙江省-杭州市",       //所属区域
                "shopName":"便利店10",       //门店名称
                "shopId":9,                //门店id
                "todayCustomer":300,        //今日客流
                "yesterdayCustomer":200,    //昨日客流
                "male":100,                 //男性比例
                "maleRate":0.33333,         //男性比例
                "maleRateStr":"33%",        //男性比例百分比
                "female":200,               //女性比例
                "femaleRate":0.66667,       //女性比例
                "femaleRateStr":"67%",  //女性比例百分比
                "newCustomer":100,          //新客数量
                "oldCustomer":200,          //老客数量
            }
            ];
        const rankList = this.transformToRankList(recordList);
        this.setState({
            isLoaded: true,
            listAndFlow: {
                "shopTotalCount":120,           //全国店铺总数
                "CustomerTotalCount":1200000,   //全国实时客流
                "companyId":100,            //企业id
                "companyName":"名创优品",   //企业名称
                "MaxProvince":"浙江省",
                "shopCount":20,
                "endTime": 1526786144174,            //截止时间ms
                "recordList": [
                    {
                        "provinceName":"浙江",
                        "customerCount":12033,     //客流量
                        "shopCount":10,              //店铺数量
                        provinceId: 10
                    },
                    {
                        "provinceName":"江苏",
                        "customerCount":100000,     //客流量
                        "shopCount":10,              //店铺数量
                        provinceId: 10
                    },
                    {
                        provinceName: '北京',
                        shopCount: 5.3,
                        "customerCount":100000,
                        provinceId: 10
                    },
                    {
                        provinceName: '天津',
                        shopCount: 3.8,
                        "customerCount":100000,
                        provinceId: 10
                    },
                    {
                        provinceName: '上海',
                        "customerCount":100000,
                        shopCount: 4.6,
                        provinceId: 10
                    },
                    {
                        provinceName: '重庆',
                        "customerCount":100000,
                        shopCount: 3.6,
                        provinceId: 10
                    },
                    {
                        provinceName: '河北',
                        "customerCount":100000,
                        shopCount: 3.4,
                        provinceId: 10
                    },
                    {
                        provinceName: '河南',
                        "customerCount":100000,
                        shopCount: 3.2
                    },
                    {
                        provinceName: '云南',
                        "customerCount":100000,
                        shopCount: 1.6
                    },
                    {
                        provinceName: '辽宁',
                        "customerCount":100000,
                        shopCount: 4.3
                    },
                    {
                        provinceName: '黑龙江',
                        "customerCount":100000,
                        shopCount: 4.1
                    },
                    {
                        provinceName: '湖南',
                        "customerCount":100000,
                        shopCount: 2.4
                    },
                    {
                        provinceName: '安徽',
                        "customerCount":100000,
                        shopCount: 3.3
                    },
                    {
                        provinceName: '山东',
                        "customerCount":100000,
                        shopCount: 3.0
                    },
                    {
                        provinceName: '新疆',
                        "customerCount":100000,
                        shopCount: 1
                    },
                    {
                        provinceName: '江西',
                        "customerCount":100000,
                        shopCount: 2.0
                    },
                    {
                        provinceName: '湖北',
                        "customerCount":100000,
                        shopCount: 2.1
                    },
                    {
                        provinceName: '广西',
                        "customerCount":100000,
                        shopCount: 3.0
                    },
                    {
                        provinceName: '甘肃',
                        "customerCount":100000,
                        shopCount: 1.2
                    },
                    {
                        provinceName: '山西',
                        "customerCount":100000,
                        shopCount: 3.2
                    },
                    {
                        provinceName: '内蒙古',
                        "customerCount":100000,
                        shopCount: 3.5
                    },
                    {
                        provinceName: '陕西',
                        "customerCount":100000,
                        shopCount: 2.5
                    },
                    {
                        provinceName: '吉林',
                        "customerCount":100000,
                        shopCount: 4.5
                    },
                    {
                        provinceName: '福建',
                        "customerCount":100000,
                        shopCount: 2.8
                    },
                ]
            },
            rankList: rankList,
            provinceName: '全国'
        });

        // todo: 接口对接

        // this.timerID = setInterval(
        //     () => {
        //         this.setState({
        //             mapData: this.getData(),
        //             maleData: [0.07,0.4,.23,.2,.01]
        //         })
        //     },1000*300
        // )

        // axios.all([
        //     getCompanyListAndFlow({
        //         companyId: 0
        //     }),
        //     getCustomerRank({
        //         companyId: 0,
        //         currPage: 1,
        //         pageSize: 10
        //     })
        // ]).then(axios.spread(function (listAndFlow, customerRank) {
        //         const rankList = this.transformToRankList(customerRank.recordList);
        //
        //         this.setState({
        //             isLoaded: true,
        //             listAndFlow,
        //             rankList,
        //             provinceName: '全国'
        //         });
        //     })
        // ).catch((error) => {
        //     this.setState({
        //         isLoaded: true,
        //         error
        //     })
        // });

    }

    componentWillUnmount() {
        // clearInterval(this.timerID);
    }

    transformToRankList(arr) {
        if(arr) {
            const rankList = arr.map((item) => {
                return {
                    shopId: item.shopId,
                    orderStr: 'No.' + item.order,
                    shopName: item.shopName,
                    todayCustomer: item.todayCustomer
                }
            });
            return rankList;
        }
    }

    onClickMap(params) {
        params.event.event.stopPropagation();
        console.log('click',params);

        // todo: 接口对接
        // const provinceName = params.data.name;
        // const provinceId = params.data.provinceId;
        // getCustomerRank({
        //     companyId: 0,
        //     provinceId: provinceId,
        //     currPage: 1,
        //     pageSize: 10
        // }).then((res) => {
        //     const rankList = this.transformToRankList(res.recordList);
        //     this.setState({
        //         rankList,
        //         provinceName,
        //         provinceId
        //     });
        // });
    }

    onClickMapBlank() {

        console.log('all');

        // todo: 接口对接
        // getCustomerRank({
        //     companyId: 0,
        //     currPage: 1,
        //     pageSize: 10
        // }).then((res) => {
        //     const rankList = this.transformToRankList(res.recordList);
        //     this.setState({
        //         rankList,
        //         provinceName: '全国',
        //         provinceId: ''
        //     });
        // });

    }

    onClickRank(shopId) {
        window.open(window.location.origin + '/home/' + shopId,'shopInfo');
    }

    getData() {
        function randomData() {
            return Math.round(Math.random()*1000);
        }

        const data = [
            {name: '北京',value: randomData() },
            {name: '天津',value: randomData() },
            {name: '上海',value: randomData() },
            {name: '重庆',value: randomData() },
            {name: '河北',value: randomData() },
            {name: '河南',value: randomData() },
            {name: '云南',value: randomData() },
            {name: '辽宁',value: randomData() },
            {name: '黑龙江',value: randomData() },
            {name: '湖南',value: randomData() },
            {name: '安徽',value: randomData() },
            {name: '山东',value: randomData() },
            {name: '新疆',value: randomData() },
            {name: '江苏',value: randomData() },
            {name: '浙江',value: randomData() },
            {name: '江西',value: randomData() },
            {name: '湖北',value: randomData() },
            {name: '广西',value: randomData() },
            {name: '甘肃',value: randomData() },
            {name: '山西',value: randomData() },
            {name: '内蒙古',value: randomData() },
            {name: '陕西',value: randomData() },
            {name: '吉林',value: randomData() },
            {name: '福建',value: randomData() },
            {name: '贵州',value: randomData() },
            {name: '广东',value: randomData() },
            {name: '青海',value: randomData() },
            {name: '西藏',value: randomData() },
            {name: '四川',value: randomData() },
            {name: '宁夏',value: randomData() },
            {name: '海南',value: randomData() },
            {name: '台湾',value: randomData() },
            {name: '香港',value: randomData() },
            {name: '澳门',value: randomData() }
        ]
        return data;
    }

    render() {
        const { error, isLoaded, listAndFlow, provinceId } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading</div>
        } else {

            return (
                <div className={style.con}>
                    <CustomerTypePie endTime={1526901927167} beginTime={1526774400000} />
                </div>
            );
        }
    }
}

export default Brand;
