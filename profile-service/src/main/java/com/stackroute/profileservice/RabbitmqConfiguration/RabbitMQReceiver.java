package com.stackroute.profileservice.RabbitmqConfiguration;



import com.stackroute.profileservice.Model.ProfileDetails;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Component
public class RabbitMQReceiver implements RabbitListenerConfigurer {

    private static final Logger logger = LoggerFactory.getLogger(RabbitMQReceiver.class);


     @RabbitListener(queues = {"personal_queue","skills_queue", "education_queue","experience_queue"})
    public void receivedMessageFromPersonalDetail(ProfileDetails ProfileDetails) {
        logger.info("Profile Details Received is.. " + ProfileDetails);
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