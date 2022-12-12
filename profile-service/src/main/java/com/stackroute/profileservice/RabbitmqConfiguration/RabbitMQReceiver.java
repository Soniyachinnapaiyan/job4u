package com.stackroute.profileservice.RabbitmqConfiguration;



import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import com.stackroute.profileservice.Service.ProfileCommandServiceImpl;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;


@Component
public class RabbitMQReceiver implements RabbitListenerConfigurer {

    @Autowired
    ProfileRepo profileRepo;
    @Autowired
    ProfileCommandServiceImpl profileCommandService;
    private static final Logger logger = LoggerFactory.getLogger(RabbitMQReceiver.class);


    @RabbitListener(queues = "authentication_queue")
    public void receivedMessageFromPersonalDetail(String email) {
        ProfileDetails n = new ProfileDetails();
        n.setEmail(email);
        System.out.println("email is received" + email);
       profileRepo.save(n);
        //logger.info("Profile Details Received is.. " + personalDetail);
        //   System.out.println( this.profileCommandService.saveUser(n));
    }

    @RabbitListener(queues = "personal_queue")
    public void receivedMessageFromPersonalDetail(ProfileDetails profileDetails) {
        System.out.println(profileDetails.toString());
        Optional<ProfileDetails> n1 = profileRepo.findById(profileDetails.getEmail());

        logger.info("Profile Details Received is.. " + profileDetails);
        //ProfileDetails n = new ProfileDetails();
        //if(profileDetails.getEmail().equals(n.getEmail()))
       /*  Optional<ProfileDetails> optional= Optional.ofNullable(profileRepo.findUserByEmail(profileDetails.getEmail()));
         if(optional.isPresent()){
         }
         else {*/
        if (n1.isPresent()) {

            ProfileDetails n = n1.get();
            n.setUsername(profileDetails.getUsername());
//             n.setEmail(profileDetails.getEmail());
            n.setDob(profileDetails.getDob());
            n.setGender(profileDetails.getGender());
            n.setLocation(profileDetails.getLocation());
            n.setContactnumber(profileDetails.getContactnumber());
            profileRepo.save(n);
            profileRepo.createLocationRelationshipWithPersonalDetails(n.getEmail(),n.getLocation());
            profileRepo.createGenderRelationshipWithPersonalDetails(n.getEmail(),n.getGender());
        }
            /* n.setHighest_qualification(profileDetails.getHighest_qualification());
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
             System.out.println(this.profileCommandService.saveUser(n));*/
    }

    @RabbitListener(queues = "experience_queue")
    public void receivedMessageFromExperience(ProfileDetails profileDetails) {
        System.out.println(profileDetails.toString());
        Optional<ProfileDetails> n1 = profileRepo.findById(profileDetails.getEmail());

        logger.info("Profile Details Received is.. " + profileDetails);
        //ProfileDetails n = new ProfileDetails();
        //if(profileDetails.getEmail().equals(n.getEmail()))
       /*  Optional<ProfileDetails> optional= Optional.ofNullable(profileRepo.findUserByEmail(profileDetails.getEmail()));
         if(optional.isPresent()){
         }
         else {*/
        if (n1.isPresent()) {

            ProfileDetails n = n1.get();
            n.setDesignation(profileDetails.getDesignation());
            n.setCompanyname(profileDetails.getCompanyname());
            n.setNoticeperiod(profileDetails.getNoticeperiod());
            n.setExperience(profileDetails.getExperience());
            n.setCurrentsalary(profileDetails.getCurrentsalary());
            n.setJobprofile(profileDetails.getJobprofile());
           profileRepo.save(n);
           profileRepo.createExperienceRelationshipWithPersonalDetails(n.getEmail(),n.getExperience());
        }
    }

    @RabbitListener(queues = "academic_queue")
    public void receivedMessageFromAcademic(ProfileDetails profileDetails) {
        System.out.println(profileDetails.toString());
        Optional<ProfileDetails> n1 = profileRepo.findById(profileDetails.getEmail());

        logger.info("Profile Details Received is.. " + profileDetails);
        //ProfileDetails n = new ProfileDetails();
        //if(profileDetails.getEmail().equals(n.getEmail()))
       /*  Optional<ProfileDetails> optional= Optional.ofNullable(profileRepo.findUserByEmail(profileDetails.getEmail()));
         if(optional.isPresent()){
         }
         else {*/

        if (n1.isPresent()) {
            ProfileDetails n = n1.get();
            n.setHighest_qualification(profileDetails.getHighest_qualification());
            n.setSpecialization(profileDetails.getSpecialization());
            n.setInstitute_name(profileDetails.getInstitute_name());
            n.setPassing_year(profileDetails.getPassing_year());
            n.setCgpa(profileDetails.getCgpa());
            profileRepo.save(n);
        }
    }

   @RabbitListener(queues = "skills_queue")
    public void receivedMessageFromSkill(ProfileDetails profileDetails) {
        System.out.println(profileDetails.toString());
        Optional<ProfileDetails> n1 = profileRepo.findById(profileDetails.getEmail());

        logger.info("Profile Details Received is.. " + profileDetails);
        //ProfileDetails n = new ProfileDetails();
        //if(profileDetails.getEmail().equals(n.getEmail()))
       /*  Optional<ProfileDetails> optional= Optional.ofNullable(profileRepo.findUserByEmail(profileDetails.getEmail()));
         if(optional.isPresent()){
         }
         else {*/
        if (n1.isPresent()) {
            ProfileDetails n = n1.get();
            n.setSkill(profileDetails.getSkill());
            n.setOtherSkills(profileDetails.getOtherSkills());
            n.setSkilllevel(profileDetails.getSkilllevel());
            profileRepo.save(n);
            profileRepo.createSkillRelationshipWithPersonalDetails(n.getEmail(), n.getSkill(),n.getSkilllevel());
        }
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