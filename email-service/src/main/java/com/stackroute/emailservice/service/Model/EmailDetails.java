package com.stackroute.emailservice.service.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmailDetails {

    @NotEmpty
    @Email
    private String recipient;
    @NotEmpty(message = "Company name shouldn't be null")
    private String company_name;
    @NotEmpty(message = "Job role shouldn't be null")
    private String job_role;
    @NotEmpty(message = "Recruiter name shouldn't be null")
    private String recruiter_name;
    @NotEmpty(message ="Recruiter id shouldn't be null" )
    @Email
    private String recruiter_id;
    @NotEmpty(message = "Message shouldn't be null")
    private String message;
    //private String attachment;
    private String textt = "ThankYou.\r\n"

            + "Team Job4u";
    private String subject = "Congratulations,Someone Show Interest In Your Profile";
    private String msgBody = "Dear Candidate,\r\n"
            + "\r\n"
            + "Greetings from JOB4u!\r\n"

            + "We would like to inform you that one recruiter has shown interest in your profile.\r\n"
            + "For more information find the below details:";


}



















