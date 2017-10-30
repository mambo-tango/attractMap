package com.tango.test.scheduler;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.tango.test.webSockets.TestWebSocket;

import java.io.IOException;
import java.util.Date;

/**
 * 临时禁止掉
 */
@Component
@EnableScheduling
public class AppSchedulingConfig {
    /**
     * 每10秒执行一次
     *
     * @author 
     */
//    @Scheduled(cron = "0/10 * * * * ? ")
//    public void doJobByCron() {
//        System.out.println(new Date() + "-----------------doJobByCron");
//    }
    /**
     * 固定每5秒执行一次
     *
     * @author 
     */
    @Scheduled(fixedRate = 1 * 1000)
    public void doJobByFixedRate() {
        System.out.println(new Date() + "-----------------");
        
        //群发消息
        for (TestWebSocket item : TestWebSocket.webSocketSet) {
            try {
                item.sendMessage(String.valueOf((int)(Math.random()*16+1)));
//                item.sendMessage(String.valueOf(1));

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    /**
     * 上次任务结束后一秒后再次执行
     *
     * @author 
     */
//    @Scheduled(fixedDelay = 1 * 1000)
//    public void doJobByFixedDelay() {
//        System.out.println(new Date() + "******************doJobByFixedDelay");
//    }
    /**
     * 第一次延迟1秒后执行，之后按fixedRate的规则每2秒执行一次
     *
     * @author 
     */
//    @Scheduled(initialDelay = 1000, fixedRate = 2000)
//    public void doInitialDelay() {
//        System.out.println(new Date() + "+++++++++++++++++++doInitialDelay");
//    }
}
