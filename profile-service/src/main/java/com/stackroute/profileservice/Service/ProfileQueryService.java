package com.stackroute.profileservice.Service;

import com.stackroute.profileservice.Model.ProfileDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProfileQueryService {
    public List<ProfileDetails> generateRecommendationByCity(String location);
    public List<ProfileDetails> getRecommendedUserByChoice(String location, String skill, String experience);
    public List<ProfileDetails> getRecommendedUserByPreference(String location, String skill, String experience,String skilllevel);

}
