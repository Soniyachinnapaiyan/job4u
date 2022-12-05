package com.stackroute.experienceservice;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.stackroute.experienceservice.Model.ExperienceDetails;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableAutoConfiguration(exclude={org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration.class})
//<<<<<<< HEAD
@EnableEurekaClient
//=======
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id", scope = ExperienceDetails.class)
//>>>>>>> d6ff24324c154e7f2ed0c0e46162f8c8985cb54a
public class ExperienceServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExperienceServiceApplication.class, args);
	}

}
