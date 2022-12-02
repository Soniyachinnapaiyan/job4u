package com.stackroute.profileservice.Service;


import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public interface ProfileCommandService {

    public void addProfileDetails(ProfileDetails profileDetails);
}
