package com.stackroute.profileservice.Service;

import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileCommandService {
    @Autowired
    private ProfileRepo profileRepo;

    public String addPersonalDetails(ProfileDetails profileDetails){
        profileRepo.save(profileDetails);
        return "data updated";
    }
}
