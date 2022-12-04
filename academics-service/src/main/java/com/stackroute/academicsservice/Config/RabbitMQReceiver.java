package com.stackroute.academicsservice.Config;


import com.stackroute.academicsservice.Model.EducationDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.stereotype.Component;


@Component
public class RabbitMQReceiver implements RabbitListenerConfigurer {

    private static final Logger logger = LoggerFactory.getLogger(RabbitMQReceiver.class);

     @RabbitListener(queues ="authentication_queue")
    public void receivedMessageFromPersonalDetail(String email) {
         EducationDetails n = new EducationDetails();
           n.setEmail(email);
         //System.out.println( this.profileCommandService.saveUser(n));
    }

    @Override
    public void configureRabbitListeners(RabbitListenerEndpointRegistrar rabbitListenerEndpointRegistrar) {

    }

}