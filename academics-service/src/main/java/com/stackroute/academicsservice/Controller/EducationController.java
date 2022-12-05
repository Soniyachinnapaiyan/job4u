package com.stackroute.academicsservice.Controller;

import com.stackroute.academicsservice.Config.EducationPublisher;
import com.stackroute.academicsservice.Model.EducationDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/rabbitmq")
public class EducationController {
    @Autowired
    EducationPublisher rabbitMQSender;
    @PostMapping(value = "/sender")
    public String producer(@RequestBody EducationDetails educationDetails) {

        rabbitMQSender.sendMessageToRabbitMq(educationDetails);
        return "Message sent to the RabbitMQ Queue Successfully";
    }
}
