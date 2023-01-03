package com.stackroute.personaldetailservice.Controller;


import com.stackroute.personaldetailservice.Model.PersonalDetail;
import com.stackroute.personaldetailservice.Service.PersonalProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping(value = "/personal-detail-service")
//@CrossOrigin("*")
public class PersonalController {
    @Autowired
    PersonalProducer rabbitMQSender;
    @PostMapping(value = "/sender")
    public void producer(@RequestBody PersonalDetail personalDetail) {
        System.out.println(personalDetail.toString());
        rabbitMQSender.sendMessageToRabbitMq(personalDetail);
        System.out.println("Message sent to the RabbitMQ Queue Successfully");
//        return "Message sent to the RabbitMQ Queue Successfully";
    }

}
