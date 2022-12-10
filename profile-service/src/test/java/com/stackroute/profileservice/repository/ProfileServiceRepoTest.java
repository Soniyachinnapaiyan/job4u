package com.stackroute.profileservice.repository;

import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import static org.junit.jupiter.api.Assertions.assertEquals;
@SpringBootTest
public class ProfileServiceRepoTest {
@Autowired
    private ProfileRepo profileRepo;

    @Test
    void getRecommendedUserByCity() {
        ProfileDetails location1=new ProfileDetails("prashanth@gmail.com","Mumbai");
        ProfileDetails addedlocation1=profileRepo.save(location1);
        assertEquals(location1.getEmail(),addedlocation1.getEmail(),"New Location should be saved and the same should be returned");
    }
    @Test
    void getRecommendedUserByChoice() {
        ProfileDetails location1=new ProfileDetails("prashanth@gmail.com","Mumbai","Angular","5+");
        ProfileDetails addedlocation1=profileRepo.save(location1);
        assertEquals(location1.getEmail(),addedlocation1.getEmail(),"New Relation should be saved and the same should be returned");
    }
    @Test
    void getRecommendedUserByPreference() {
        ProfileDetails location1=new ProfileDetails("prashanth@gmail.com","Mumbai","Angular","5+","Advance");
        ProfileDetails addedlocation1=profileRepo.save(location1);
        assertEquals(location1.getEmail(),addedlocation1.getEmail(),"New Relation should be saved and the same should be returned");
    }
}
