package com.stackroute.emailservice.service.service;

import com.stackroute.emailservice.service.Model.EmailDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String sender;
    private String name;

    public String
    sendMailWithAttachment(EmailDetails details) {

        MimeMessage mimeMessage
                = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper;

        try {


            mimeMessageHelper
                    = new MimeMessageHelper(mimeMessage, true);
            mimeMessageHelper.setFrom(sender);
            mimeMessageHelper.setTo(details.getRecipient());
            mimeMessageHelper.setSubject(details.getSubject());
            mimeMessageHelper.setText(details.getMsgBody());
            mimeMessageHelper.setText(details.getMsgBody() + "\r\n" + "Company Name : " + details.getCompany_name() + "\r\n" +

                    "Recruiter Name : " + details.getRecruiter_name() + "\r\n" +
                    "Message : " + details.getMessage() + "\r\n\r\n" + details.getTextt());
          //  FileSystemResource file = new FileSystemResource(new File(details.getAttachment()));

            //mimeMessageHelper.addAttachment(file.getFilename(), file);

            javaMailSender.send(mimeMessage);
            return "Mail sent Successfully";
        } catch (MessagingException e) {


            return "Error while sending mail!!!";
        }

    }

}
















