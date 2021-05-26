module.exports = {
    summary: 'Rule to modify request data',
    *beforeSendRequest(requestDetail) {
        console.log('已经进入拦截')

        if (requestDetail.url.endsWith('/api/shop/front/trcOrder/submitOrder') ||
            requestDetail.url.endsWith('/api/loan/front/loan-application') ) {

            json = requestDetail.requestData.toString()
            console.log("请求前json+++++++++++start++++++++++++++++++++++++++++++++++++")
            console.log(json)
            console.log("请求前json+++++++++++end++++++++++++++++++++++++++++++++++++++")
            json_obj = JSON.parse(json)
            //修改请求参数，增加"remark"="nancyaddvalue"这个key：value值
            json_obj["remark"]="nancyaddvalue"
            console.log("修改请求data的json+++++++++++start++++++++++++++++++++++++++++++++++++")
            console.log(json_obj)
            console.log("修改请求data的json+++++++++++end++++++++++++++++++++++++++++++++++++++")
            return {
                //返回的requestData不需要buffer形式，string类型即可
                requestData: JSON.stringify(json_obj)
            };
        }
    },
};