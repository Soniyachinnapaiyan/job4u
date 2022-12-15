package com.stackroute.profileservice.service;

import com.stackroute.profileservice.Exception.ProfileNotFoundException;
import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import com.stackroute.profileservice.Service.ProfileQueryServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class ProfileServiceTest {

//    @Mock
//    ProfileRepo profileRepo;
//
//    @InjectMocks
//    ProfileQueryServiceImpl profileQueryServiceimpl;
//
//
//
//
//    @Test
//    void generateRecommendationByCity() throws ProfileNotFoundException{
//        Optional<ProfileDetails> optionalData=Optional.empty();
//        when(profileRepo.findById("soniya@gmail.com")).thenReturn(optionalData);
//        assertThrows(ProfileNotFoundException.class,()->{
//            profileQueryServiceimpl.getByEmail("soniya@gmail.com");
//        });
//
//    }
//
//    @Test
//    void getRecommendedUserByChoice()  throws ProfileNotFoundException {
//        Optional<ProfileDetails> optionalData=Optional.empty();
//        when(profileRepo.findById("soniya@gmail.com")).thenReturn(optionalData);
//        assertThrows(ProfileNotFoundException.class,()->{
//            profileQueryServiceimpl.getByEmail("soniya@gmail.com");
//        });
//
//    }
//
//    @Test
//    void getRecommendedUserByPreference() throws ProfileNotFoundException {
//        Optional<ProfileDetails> optionalData=Optional.empty();
//        when(profileRepo.findById("soniya@gmail.com")).thenReturn(optionalData);
//        assertThrows(ProfileNotFoundException.class,()->{
//            profileQueryServiceimpl.getByEmail("soniya@gmail.com");
//        });
//    }
}
