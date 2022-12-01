package com.stackroute.skillservice.Config;

import com.stackroute.skillservice.Model.SkillsDetails;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class SkillsPublisher {
    @Autowired
    private AmqpTemplate rabbitTemplate;
    @Autowired
    private Queue queue;
    private static Logger logger = LogManager.getLogger(SkillsPublisher.class.toString());

    public void sendMessageToRabbitMq(SkillsDetails personalDetail) {
        rabbitTemplate.convertAndSend(queue.getName(), personalDetail);
        logger.info("Sending Message to the Queue : " + personalDetail.toString());
    }
}
