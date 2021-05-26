https://blog.csdn.net/xc_zhou/article/details/86090193?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162193430216780357273001%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162193430216780357273001&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-86090193.first_rank_v2_pc_rank_v29&utm_term=AnyProxy&spm=1018.2226.3001.4187


lib/requestHandler.js
538行

npm install -g n 
n stable

#生成ca证书
anyproxy-ca

#启动AnyProxy，并解析所有https请求
anyproxy --intercept

#代理WebSocket  当启用HTTPS代理时，wss也会被代理，但是不会被AnyProxy记录。需要开启--ws-intercept后才会从界面上看到相应内容。
anyproxy --ws-intercept

#下载证书
http://ip:8002/fetchCrtFile


pm2 start anyproxy -x -- -i
pm2 list
pm2 stop anyproxy
pm2 start anyproxy
pm2 restart anyproxy


sudo npm install -g pm2


#anyproxy怎么做到开机自启动，只需执行命令
pm2 save

#保存当前pm2运行的各个应用，重启时就会启动保存的各个应用。再执行命令
pm2 startup


#第四个问题，怎么防止别人盗用自己搭建的anyproxy服务器，其实很简单，只要设置为只允许公司内网访问就可以了，回家想访问通过公司的vpn访问。


首先安装pm2

sudo npm install -g pm2

在pm2环境下运行anyproxy

sudo pm2 start anyproxy -x – -i

现在anyproxy就在pm2的环境中运行了

之后还有几个pm2的命令可以帮助管理和监控anyproxy

//查看运行日志
sudo pm2 logs anyproxy [–lines 10]
//关闭anyproxy
sudo pm2 delete anyproxy
//重启anyproxy
sudo pm2 restart anyproxy
//监控内存占用
sudo pm2 monit
//监控运行状态
sudo pm2 list

特别提示：pm2运行后，终端窗口是可以关闭的。

使用pm2管理anyproxy进程，最重要的目的是：anyproxy因为错误而退出程序之后，pm2可以另anyproxy自动重启。
————————————————
版权声明：本文为CSDN博主「chijiaodaxie」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/chijiaodaxie/article/details/76906418



#多实例
anyproxy -i -p 8001 -w 8002 -r /usr/local/lib/node_modules/anyproxy/lib/rule_default.js
anyproxy -i -p 8003 -w 8004 -r /usr/local/lib/node_modules/anyproxy/lib/rule_default2.js

pm2 start anyproxy --name anyproxy1 -- -i -p 8001 -w 8002 -r /usr/local/lib/node_modules/anyproxy/lib/rule_default.js
pm2 start anyproxy --name anyproxy2 -- -i -p 8003 -w 8004 -r /usr/local/lib/node_modules/anyproxy/lib/rule_default2.js
