package com.stackroute.skillservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableAutoConfiguration(exclude={org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration.class})
@EnableEurekaClient
public class    SkillServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkillServiceApplication.class, args);
	}

}
