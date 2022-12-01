package com.stackroute.skillservice.Controller;

import com.stackroute.skillservice.Config.SkillsPublisher;
import com.stackroute.skillservice.Model.SkillsDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping(value = "/rabbitmq")
public class SkillsController {
    @Autowired
    SkillsPublisher rabbitMQSender;
    @PostMapping(value = "/sender")
    public String producer(@RequestBody SkillsDetails skillsDetails) {
        rabbitMQSender.sendMessageToRabbitMq(skillsDetails);
        return "Message sent to the RabbitMQ Queue Successfully";
    }
}

