package com.stackroute.profileservice.Service;

import com.stackroute.profileservice.Exception.ProfileAlreadyExistException;
import com.stackroute.profileservice.Exception.ProfileNotFoundException;
import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service

public class ProfileQueryServiceImpl implements ProfileQueryService {
    @Autowired
    private ProfileRepo profileRepo;
    @Override
    public ArrayList<ProfileDetails> getAllProfile() {
        return (ArrayList<ProfileDetails>) profileRepo.findAll();
    }
    @Override
    public ProfileDetails getByEmail(String email) throws ProfileNotFoundException {
        Optional<ProfileDetails> pro = profileRepo.findById(email);
        if (pro.isPresent()) {
            return pro.get();
        } else {
            throw new ProfileNotFoundException("profile not found");
        }
    }

    @Override
    public List<ProfileDetails> generateRecommendationByCity(String location) throws ProfileNotFoundException {
        List<ProfileDetails> profile= profileRepo.getRecommendedUserByCity(location);
        if (profile.isEmpty()) {
            throw new ProfileNotFoundException("profile not found");
        } else {
            return profile;
        }
    }
    @Override
    public List<ProfileDetails> getRecommendedUserBySkill(String skill1,String level1) throws ProfileNotFoundException {
        List<ProfileDetails> profile= profileRepo.getRecommendedUserBySkill(skill1,level1);
        if (profile.isEmpty()) {
            throw new ProfileNotFoundException("profile not found");
        } else {
            return profile;
        }
    }
    public List<ProfileDetails> getRecommendedUserBySLE(String skill1,String level1,String experience) throws  ProfileNotFoundException{
        List<ProfileDetails> profile= profileRepo.getRecommendedUserBySLE(skill1,level1,experience);
        if (profile.isEmpty()) {
            throw new ProfileNotFoundException("profile not found");
        } else {
            return profile;
        }
    }
    public List<ProfileDetails> getRecommendedUserBySLL(String location, String skill1,String level1) throws  ProfileNotFoundException{
        List<ProfileDetails> profile= profileRepo.getRecommendedUserBySLL(skill1,level1,location);
        if (profile.isEmpty()) {
            throw new ProfileNotFoundException("profile not found");
        } else {
            return profile;
        }
    }
    @Override
    public List<ProfileDetails> getRecommendedUserByExperience(String experience) throws ProfileNotFoundException {
        List<ProfileDetails> profile= profileRepo.getRecommendedUserByExperience(experience);
        if (profile.isEmpty()) {
            throw new ProfileNotFoundException("profile not found");
        } else {
            return profile;
        }
    }

    @Override
    public List<ProfileDetails> getRecommendedUserByChoice(String location, String skill1, String experience) throws ProfileNotFoundException {
        List<ProfileDetails> profile= profileRepo.getRecommendedUserByChoice(location,skill1,experience);
        if (profile.isEmpty()) {
            throw new ProfileNotFoundException("profile not found");
        } else {
            return profile;
        }
    }
    @Override
    public List<ProfileDetails> getRecommendedUserByPreference(String location, String skill1, String experience,String level1) throws ProfileNotFoundException {
        System.out.println(experience);
        List<ProfileDetails> profile= profileRepo.getRecommendedUserByPreference(location,skill1,experience,level1);
        if (profile.isEmpty()) {
            throw new ProfileNotFoundException("profile not found");
        } else {
            return profile;
        }
    }
}