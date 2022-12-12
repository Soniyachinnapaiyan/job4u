package com.stackroute.emailservice.service.Controller;

import com.stackroute.emailservice.service.Model.EmailDetails;
import com.stackroute.emailservice.service.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class EmailController {
    @Autowired
    private EmailService emailService;
    @PostMapping("/sendMailWithAttachment")
    public String sendMailWithAttachment( @RequestBody EmailDetails details)
    {
        String status
                = emailService.sendMailWithAttachment(details);

        return status;
    }
}



