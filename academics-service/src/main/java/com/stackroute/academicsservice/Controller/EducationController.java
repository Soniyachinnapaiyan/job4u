package com.stackroute.academicsservice.Controller;

import com.stackroute.academicsservice.Config.EducationPublisher;
import com.stackroute.academicsservice.Model.EducationDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/rabbitmq")
@CrossOrigin("*")
public class EducationController {
    @Autowired
    EducationPublisher rabbitMQSender;
    @PostMapping(value = "/sender")
    public void producer(@RequestBody EducationDetails educationDetails) {

        rabbitMQSender.sendMessageToRabbitMq(educationDetails);
        System.out.println("Message sent to the RabbitMQ Queue Successfully");
//        return "Message sent to the RabbitMQ Queue Successfully";
    }
}
