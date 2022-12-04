package com.stackroute.experienceservice.Configuration;


import com.stackroute.experienceservice.Model.ExperienceDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.stereotype.Component;


@Component
public class RabbitMQReceiver implements RabbitListenerConfigurer {

    private static final Logger logger = LoggerFactory.getLogger(RabbitMQReceiver.class);

     @RabbitListener(queues ="authentication_queue1")
    public void receivedMessageFromPersonalDetail(String email) {
         ExperienceDetails n = new ExperienceDetails();
           n.setEmail(email);
         System.out.println( "email is received"+email);
        //logger.info("Profile Details Received is.. " + personalDetail);
       //   System.out.println( this.profileCommandService.saveUser(n));
    }

    @Override
    public void configureRabbitListeners(RabbitListenerEndpointRegistrar rabbitListenerEndpointRegistrar) {

    }

}