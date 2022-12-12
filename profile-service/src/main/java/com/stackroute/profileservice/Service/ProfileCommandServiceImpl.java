package com.stackroute.profileservice.Service;

import com.stackroute.profileservice.Exception.ProfileAlreadyExistException;
import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileCommandServiceImpl implements ProfileCommandService {
    @Autowired
    private ProfileRepo profileRepo;
    @Override
    public void deleteUserNode(String email) {
        ProfileDetails data = profileRepo.findUserByEmail(email);
        profileRepo.delete(data);
    }

   /* public String saveUser(ProfileDetails profileDetails) throws ProfileAlreadyExistException {
        List<ProfileDetails> users=profileRepo.findUserByEmail(profileDetails.getEmail());
        if(users.size()==0){
            profileRepo.save(profileDetails);
            profileRepo.createLocationRelationshipWithPersonalDetails(profileDetails.getEmail(), profileDetails.getLocation());
            profileRepo.createSkillRelationshipWithPersonalDetails(profileDetails.getEmail(), profileDetails.getSkill());
            profileRepo.createExperienceRelationshipWithPersonalDetails(profileDetails.getEmail(), profileDetails.getExperience());
            profileRepo.createGenderRelationshipWithPersonalDetails(profileDetails.getEmail(), profileDetails.getGender());
            return "Profile node created";
        }
       else{
           throw new ProfileAlreadyExistException("Profile already Exists");
    }
    }


  /*  public void createUserCityRelation(String email, String location){
        System.out.println(email);
        System.out.println(location);
        profileRepo.createLocationRelationshipWithPersonalDetails(email, location);
    }
   /* public void createUserSkillRelation(String email, String skill){
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
    }*/
}
