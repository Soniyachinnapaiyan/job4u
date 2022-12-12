package com.stackroute.personaldetailservice.Controller;


import com.stackroute.personaldetailservice.Model.PersonalDetail;
import com.stackroute.personaldetailservice.Service.PersonalProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping(value = "/rabbitmq")
@CrossOrigin("*")
public class PersonalController {
    @Autowired
    PersonalProducer rabbitMQSender;
    @PostMapping(value = "/sender")
    public String producer(@RequestBody PersonalDetail personalDetail) {
        System.out.println(personalDetail.toString());
        rabbitMQSender.sendMessageToRabbitMq(personalDetail);
        return "Message sent to the RabbitMQ Queue Successfully";
    }
}
