package com.stackroute.userauthenticationservice.RabbitmqConfig;


import com.stackroute.userauthenticationservice.domain.User;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationPublisher {
    @Autowired
    private AmqpTemplate rabbitTemplate;
    @Autowired
    private RabbitTemplate rabbitTemplate1;
    @Autowired
    private Queue queue;
    private static Logger logger = LogManager.getLogger(AuthenticationPublisher.class.toString());

    public void sendMessageToRabbitMq(String email) {

        rabbitTemplate1.convertAndSend(MessageConfig.EXCHANGE,MessageConfig.ROUTING_KEY,email);

    }
}
