package com.stackroute.emailservice.service.Controller;

import com.stackroute.emailservice.service.Model.EmailDetails;
import com.stackroute.emailservice.service.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
//@CrossOrigin("*")
@RequestMapping("/email-service")
public class EmailController {
    @Autowired
    private EmailService emailService;
    @PostMapping("/sendMailWithAttachment")
    public void sendMailWithAttachment( @RequestBody EmailDetails details)
    {
        String status
                = emailService.sendMailWithAttachment(details);
        System.out.println(status);

    }
}



