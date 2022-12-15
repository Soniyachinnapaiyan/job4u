package com.stackroute.profileservice.Service;

import com.stackroute.profileservice.Exception.ProfileNotFoundException;
import com.stackroute.profileservice.Model.ProfileDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public interface ProfileQueryService {
    public List<ProfileDetails> generateRecommendationByCity(String location) throws ProfileNotFoundException;
    public List<ProfileDetails> getRecommendedUserByChoice(String location, String skill1, String experience) throws ProfileNotFoundException;
    public List<ProfileDetails> getRecommendedUserByPreference(String location, String skill1, String experience,String level1) throws  ProfileNotFoundException;
    public List<ProfileDetails> getRecommendedUserBySkill(String skill1, String level1) throws ProfileNotFoundException;
    public List<ProfileDetails> getRecommendedUserByExperience (String experience) throws ProfileNotFoundException;
    public ArrayList<ProfileDetails> getAllProfile();
    public List<ProfileDetails> getRecommendedUserBySLE(String skill1, String experience,String level1) throws  ProfileNotFoundException;
    public List<ProfileDetails> getRecommendedUserBySLL(String location, String skill1,String level1) throws  ProfileNotFoundException;
    public ProfileDetails getByEmail(String email) throws ProfileNotFoundException;
}
