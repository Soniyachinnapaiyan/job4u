package com.stackroute.userauthenticationservice;

import org.springframework.boot.SpringApplication;


import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
@EnableAutoConfiguration(exclude={org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration.class})

public class UserAuthenticationServiceApplication {

	public static void main(String[] args) {

		SpringApplication.run(UserAuthenticationServiceApplication.class, args);
	}

}
