package com.stackroute.experienceservice.Controller;
import com.stackroute.experienceservice.Configuration.ExperiencePublisher;
import com.stackroute.experienceservice.Model.ExperienceDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping(value = "/rabbitmq")
public class ExperienceController {
    @Autowired
    ExperiencePublisher rabbitMQSender;
    @PostMapping(value = "/sender")
    public String producer(@RequestBody ExperienceDetails experienceDetails) {
        rabbitMQSender.sendMessageToRabbitMq(experienceDetails);
        return "Message sent to the RabbitMQ Queue Successfully";
    }
}
