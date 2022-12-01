package com.stackroute.academicsservice.Config;
import com.stackroute.academicsservice.Model.EducationDetails;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EducationPublisher {
    @Autowired
    private AmqpTemplate rabbitTemplate;
    @Autowired
    private Queue queue;
    private static Logger logger = LogManager.getLogger(EducationPublisher.class.toString());

    public void sendMessageToRabbitMq(EducationDetails educationDetails) {
        rabbitTemplate.convertAndSend(queue.getName(), educationDetails);
        logger.info("Sending Message to the Queue : " + educationDetails.toString());
    }
}
