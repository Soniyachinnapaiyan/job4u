package com.stackroute.experienceservice.Configuration;
import com.stackroute.experienceservice.Model.ExperienceDetails;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class ExperiencePublisher {
    @Autowired
    private AmqpTemplate rabbitTemplate;
    @Autowired
    private Queue queue;
    private static Logger logger = LogManager.getLogger(ExperiencePublisher.class.toString());

    public void sendMessageToRabbitMq(ExperienceDetails experienceDetails) {
        rabbitTemplate.convertAndSend(queue.getName(), experienceDetails);
        logger.info("Sending Message to the Queue : " + experienceDetails.toString());
    }
}
