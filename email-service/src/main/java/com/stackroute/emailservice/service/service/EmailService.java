package com.stackroute.emailservice.service.service;

import com.stackroute.emailservice.service.Model.EmailDetails;

public interface EmailService {

    String sendMailWithAttachment(EmailDetails details);
}



