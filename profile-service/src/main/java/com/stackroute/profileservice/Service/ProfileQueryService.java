package com.stackroute.profileservice.Service;

import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ProfileQueryService {
    @Autowired
    private ProfileRepo profileRepo;

    public List<ProfileDetails> generateRecommendationByCity(String location) {
        return profileRepo.getRecommendedUserByCity(location);
    }
    public List<ProfileDetails> getRecommendedUserByChoice(String location, String skill, String experience) {
        return profileRepo.getRecommendedUserByChoice(location,skill,experience);
    }
}
