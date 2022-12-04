package com.stackroute.profileservice.RabbitmqConfiguration;



import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Service.ProfileCommandService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Component
public class RabbitMQReceiver implements RabbitListenerConfigurer {

    @Autowired
    ProfileCommandService profileCommandService;
    private static final Logger logger = LoggerFactory.getLogger(RabbitMQReceiver.class);


     @RabbitListener(queues = {"personal_queue"})
    public void receivedMessageFromPersonalDetail(ProfileDetails profileDetails) {

        //logger.info("Profile Details Received is.. " + profileDetails);
         ProfileDetails n = new ProfileDetails();
        // n.setEntityId(profileDetails.getEntityId());
         n.setUsername(profileDetails.getUsername());
         n.setEmail(profileDetails.getEmail());
         n.setDob(profileDetails.getDob());
         n.setGender(profileDetails.getGender());
         n.setLocation(profileDetails.getLocation());
         n.setContactnumber(profileDetails.getContactnumber());
         n.setHighest_qualification(profileDetails.getHighest_qualification());
         n.setSpecialization(profileDetails.getSpecialization());
         n.setInstitute_name(profileDetails.getInstitute_name());
         n.setPassing_year(profileDetails.getPassing_year());
         n.setCgpa(profileDetails.getCgpa());
         n.setTechnicalSkills(profileDetails.getTechnicalSkills());
         n.setOtherSkills(profileDetails.getOtherSkills());
         n.setDesignation(profileDetails.getDesignation());
         n.setCompanyname(profileDetails.getCompanyname());
         n.setNoticeperiod(profileDetails.getNoticeperiod());
         n.setTotalexperience(profileDetails.getTotalexperience());
         n.setCurrentsalary(profileDetails.getCurrentsalary());
         n.setJobprofile(profileDetails.getJobprofile());
         System.out.println(n);
         System.out.println( this.profileCommandService.saveUser(n));
    }
   /* @RabbitListener(queues = "personal_queue")
    public void receivedMessageFromPersonalDetail(PersonalDetail personalDetail) {

        logger.info("Personal Details Received is.. " + personalDetail);
    }

    @RabbitListener(queues = "education_queue")
    public void receivedMessageFromEducationDetails(EducationDetails educationDetails) {

        logger.info("Education Details Received is.. " + educationDetails);
    }
    @RabbitListener(queues = "experience_queue")
    public void receivedMessageFromExperienceDetails(ExperienceDetails experienceDetails) {

        logger.info("Experience Details Received is.. " + experienceDetails);
    }

    @RabbitListener(queues = "skills_queue")
    public void receivedMessageFromSkillDetails(SkillsDetails skillsDetails) {

        logger.info("Skill Details Received is.. " + skillsDetails);
    }
        */
    @Override
    public void configureRabbitListeners(RabbitListenerEndpointRegistrar rabbitListenerEndpointRegistrar) {

    }

}