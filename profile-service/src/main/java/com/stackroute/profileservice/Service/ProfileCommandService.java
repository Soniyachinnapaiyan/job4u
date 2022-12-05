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
       //List<ProfileDetails> cities=profileRepo.findCity(cityName);
      //  if(cities.size()==0){
          //  City cityNode=new City();
          //  cityNode.setCityName(cityName);
           // cityRepository.save(cityNode);
       // }
        profileRepo.createLocationRelationshipWithPersonalDetails(email, location);
    }
}
