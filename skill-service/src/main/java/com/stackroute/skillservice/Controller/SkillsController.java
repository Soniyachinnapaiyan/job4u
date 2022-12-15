package com.stackroute.skillservice.Controller;

import com.stackroute.skillservice.Config.SkillsPublisher;
import com.stackroute.skillservice.Model.SkillsDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/skill-service")
//@CrossOrigin("*")
public class SkillsController {
    @Autowired
    SkillsPublisher rabbitMQSender;
    @PostMapping(value = "/sender")
    public void producer(@RequestBody SkillsDetails skillsDetails) {
        //Add validation
        rabbitMQSender.sendMessageToRabbitMq(skillsDetails);
//
        System.out.println("Message sent to the RabbitMQ Queue Successfully");
    }
}

