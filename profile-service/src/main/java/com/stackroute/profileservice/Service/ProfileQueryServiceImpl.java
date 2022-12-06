package com.stackroute.profileservice.Service;

import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ProfileQueryServiceImpl implements ProfileQueryService {
    @Autowired
    private ProfileRepo profileRepo;
    @Override
    public List<ProfileDetails> generateRecommendationByCity(String location) {
        return profileRepo.getRecommendedUserByCity(location);
    }
    @Override
    public List<ProfileDetails> getRecommendedUserByChoice(String location, String skill, String experience) {
        return profileRepo.getRecommendedUserByChoice(location,skill,experience);
    }
    @Override
    public List<ProfileDetails> getRecommendedUserByPreference(String location, String skill, String experience,String skilllevel) {
        return profileRepo.getRecommendedUserByPreference(location,skill,experience,skilllevel);
    }
}
