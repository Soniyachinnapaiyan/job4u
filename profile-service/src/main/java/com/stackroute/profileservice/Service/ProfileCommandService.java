package com.stackroute.profileservice.Service;

import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileCommandService {
    @Autowired
    private ProfileRepo profileRepo;

    public String saveUser(ProfileDetails profileDetails) {
       /* List<ProfileDetails> users=profileRepo.findUserByEmail(profileDetails.getEmailId());
        if(users.size()==0){
            profileRepo.save(profileDetails);
            return "Profile node created";
        }
       else{
        return "Profile already exist";
    }*/
        profileRepo.save(profileDetails);
        return "Profile node created";
    }


   /* public String addPersonalDetails(ProfileDetails profileDetails){
        profileRepo.save(profileDetails);
        return "data updated";
    }

    public void addNode(ProfileDetails profileDetails) {
        profileRepo.save(profileDetails);
        profileRepo.createInterestRelationshipWithLoanDetails(profileDetails.,profileDetails.getLocation());

    }*/

    public void createUserCityRelation(String email, String location){
        System.out.println(email);
        System.out.println(location);
        profileRepo.createLocationRelationshipWithPersonalDetails(email, location);
    }
    public void createUserSkillRelation(String email, String skill){
        System.out.println(email);
        System.out.println(skill);
        profileRepo.createSkillRelationshipWithPersonalDetails(email, skill);
    }
    public void createUserExperienceRelation(String email, String experience){
        System.out.println(email);
        System.out.println(experience);
        profileRepo.createExperienceRelationshipWithPersonalDetails(email, experience);
    }
    public void createUserGenderRelation(String email, String gender){
        System.out.println(email);
        System.out.println(gender);
        profileRepo.createGenderRelationshipWithPersonalDetails(email, gender);
    }
}
