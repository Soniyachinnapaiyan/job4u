package com.stackroute.experienceservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration(exclude={org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration.class})
public class ExperienceServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExperienceServiceApplication.class, args);
	}

}
