package com.tango.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Hello world!
 *
 */
@EnableAutoConfiguration
@SpringBootApplication
public class App {
    
//    @RequestMapping("/")
//    @ResponseBody
//    String home() {
//        return "Hello World!";
//    }
    
//    @RequestMapping("/")
//    public ModelAndView index() {
//        ModelAndView modelAndView = new ModelAndView("/index");
//        modelAndView.addObject("hello", "tango");
//        return modelAndView;
//    }
    
    public static void main( String[] args ){
        SpringApplication.run(App.class, args);
    }
}
