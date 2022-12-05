package com.stackroute.personaldetailservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PersonalDetailServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersonalDetailServiceApplication.class, args);
	}

}
