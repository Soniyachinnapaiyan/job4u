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
    public List<ProfileDetails> getRecommendedUserByChoice(String location, String skill, String experience) throws ProfileNotFoundException {
        List<ProfileDetails> profile= profileRepo.getRecommendedUserByChoice(location,skill,experience);
        if (profile.isEmpty()) {
            throw new ProfileNotFoundException("profile not found");
        } else {
            return profile;
        }
    }
    @Override
    public List<ProfileDetails> getRecommendedUserByPreference(String location, String skill, String experience,String skilllevel) throws ProfileNotFoundException {
        List<ProfileDetails> profile= profileRepo.getRecommendedUserByPreference(location,skill,experience,skilllevel);
        if (profile.isEmpty()) {
            throw new ProfileNotFoundException("profile not found");
        } else {
            return profile;
        }
    }
}