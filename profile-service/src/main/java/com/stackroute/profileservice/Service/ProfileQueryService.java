package com.stackroute.profileservice.Service;

import com.stackroute.profileservice.Exception.ProfileNotFoundException;
import com.stackroute.profileservice.Model.ProfileDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface ProfileQueryService {
    public List<ProfileDetails> generateRecommendationByCity(String location) throws ProfileNotFoundException;
    public List<ProfileDetails> getRecommendedUserByChoice(String location, String skill, String experience) throws ProfileNotFoundException;
    public List<ProfileDetails> getRecommendedUserByPreference(String location, String skill, String experience,String skilllevel) throws  ProfileNotFoundException;
    public ArrayList<ProfileDetails> getAllProfile();

    public ProfileDetails getByEmail(String email) throws ProfileNotFoundException;
}
