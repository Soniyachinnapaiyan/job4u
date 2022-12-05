package com.stackroute.userauthenticationservice;

import org.springframework.boot.SpringApplication;
<<<<<<< HEAD

=======
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
>>>>>>> d6ff24324c154e7f2ed0c0e46162f8c8985cb54a
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
<<<<<<< HEAD
@EnableEurekaClient



=======
@EnableAutoConfiguration(exclude={org.springframework.boot.autoconfigure.amqp.RabbitAutoConfiguration.class})
>>>>>>> d6ff24324c154e7f2ed0c0e46162f8c8985cb54a
public class UserAuthenticationServiceApplication {

	public static void main(String[] args) {

		SpringApplication.run(UserAuthenticationServiceApplication.class, args);
	}

}
