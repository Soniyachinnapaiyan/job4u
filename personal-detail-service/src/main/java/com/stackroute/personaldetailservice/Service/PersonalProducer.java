package com.stackroute.personaldetailservice.Service;

import com.stackroute.personaldetailservice.Model.PersonalDetail;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonalProducer {

    @Autowired
    private AmqpTemplate rabbitTemplate;

    @Autowired
    private Queue queue;

    private static Logger logger = LogManager.getLogger(PersonalProducer.class.toString());


    public void sendMessageToRabbitMq(PersonalDetail personalDetail) {
        rabbitTemplate.convertAndSend(queue.getName(), personalDetail);
        logger.info("Sending Message to the Queue : " + personalDetail.toString());
    }
}
