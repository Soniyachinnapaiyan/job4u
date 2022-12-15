package com.stackroute.profileservice.Controller;

import com.stackroute.profileservice.Exception.ProfileNotFoundException;
import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Service.ProfileQueryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/profile")
@CrossOrigin("*")
public class ProfileQueryController {
    @Autowired
    private ProfileQueryServiceImpl profileQueryService;

    @GetMapping("/getAllProfile")
    public ResponseEntity<?> getAllProfile() {
        ArrayList<ProfileDetails> rec = this.profileQueryService.getAllProfile();
        return new ResponseEntity<>(rec, HttpStatus.OK);
    }

    @GetMapping("/recommendByCity/{location}")
    public ResponseEntity<?> getRecommendedUserByCity(@PathVariable String location) {
        try {
            System.out.println(location);
            List<ProfileDetails> rec = this.profileQueryService.generateRecommendationByCity(location);
            return new ResponseEntity<>(rec, HttpStatus.OK);
        } catch (ProfileNotFoundException e) {
            return new ResponseEntity("Profile Not Exits", HttpStatus.CONFLICT);
        }
    }
    @GetMapping("/recommendBySkill/{skill1}/{level1}")
    public ResponseEntity<?> getRecommendedUserBySkill(@PathVariable String skill1, @PathVariable String level1) {
        try {
            List<ProfileDetails> rec = this.profileQueryService.getRecommendedUserBySkill(skill1,level1);
            return new ResponseEntity<>(rec, HttpStatus.OK);
        } catch (ProfileNotFoundException e) {
            return new ResponseEntity("Profile Not Exits", HttpStatus.CONFLICT);
        }
    }
    @GetMapping("/recommendBySLE/{skill1}/{level1}/{experience}")
    public ResponseEntity<?> getRecommendedUserBySLE(@PathVariable String skill1, @PathVariable String level1,@PathVariable String experience) {
        try {
            System.out.println(skill1+level1+experience);
            List<ProfileDetails> rec = this.profileQueryService.getRecommendedUserBySLE(skill1,level1,experience);
            return new ResponseEntity<>(rec, HttpStatus.OK);
        } catch (ProfileNotFoundException e) {
            return new ResponseEntity("Profile Not Exits", HttpStatus.CONFLICT);
        }
    }
    @GetMapping("/recommendBySLL/{skill1}/{level1}/{location}")
    public ResponseEntity<?> getRecommendedUserBySLL(@PathVariable String skill1, @PathVariable String level1,@PathVariable String location) {
        try {
            List<ProfileDetails> rec = this.profileQueryService.getRecommendedUserBySLL(skill1,level1,location);
            return new ResponseEntity<>(rec, HttpStatus.OK);
        } catch (ProfileNotFoundException e) {
            return new ResponseEntity("Profile Not Exits", HttpStatus.CONFLICT);
        }
    }
    @GetMapping("/recommendByExperience/{experience}")
    public ResponseEntity<?> getRecommendedUserByExperience(@PathVariable String experience) {
        try {
            List<ProfileDetails> rec = this.profileQueryService.getRecommendedUserByExperience(experience);
            return new ResponseEntity<>(rec, HttpStatus.OK);
        } catch (ProfileNotFoundException e) {
            return new ResponseEntity("Profile Not Exits", HttpStatus.CONFLICT);
        }
    }


    @GetMapping("/recommendByESL/{location}/{skill1}/{experience}")
    public ResponseEntity<?> getRecommendedUserByChoice(@PathVariable String location, @PathVariable String skill1, @PathVariable String experience) {
        try {
            List<ProfileDetails> rec = this.profileQueryService.getRecommendedUserByChoice(location, skill1, experience);
            return new ResponseEntity<>(rec, HttpStatus.OK);
        } catch (ProfileNotFoundException e) {
            return new ResponseEntity<>("Profile Not Exists", HttpStatus.CONFLICT);
        }
    }

//    @GetMapping("/recommendByCity")
//    public ResponseEntity<?> getRecommendedUserByPreference(@RequestParam("location") String location, @RequestParam("skill1") String skill1, @RequestParam("experience") String experience, @RequestParam("level1") String level1) {
//        try {
//            System.out.println(location+skill1+experience+level1);
//            List<ProfileDetails> rec = this.profileQueryService.getRecommendedUserByPreference(location, skill1, experience, level1);
//            return new ResponseEntity<>(rec, HttpStatus.OK);
//        } catch (ProfileNotFoundException e) {
//
//            return new ResponseEntity<>("Profile Not Exists", HttpStatus.CONFLICT);
//        }
//    }
    @GetMapping("/recommendByCity/{location}/{skill1}/{experience}/{level1}")
    public ResponseEntity<?> getRecommendedUserByPreference(@PathVariable String location, @PathVariable String skill1, @PathVariable String experience, @PathVariable String level1) {
        try {
            List<ProfileDetails> rec = this.profileQueryService.getRecommendedUserByPreference(location, skill1, experience, level1);
            return new ResponseEntity<>(rec, HttpStatus.OK);
        } catch (ProfileNotFoundException e) {
            return new ResponseEntity<>("Profile Not Exists", HttpStatus.CONFLICT);
        }
    }
}