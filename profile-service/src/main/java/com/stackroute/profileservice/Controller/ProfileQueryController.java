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
            List<ProfileDetails> rec = this.profileQueryService.generateRecommendationByCity(location);
            return new ResponseEntity<>(rec, HttpStatus.OK);
        } catch (ProfileNotFoundException e) {
            return new ResponseEntity("Profile Not Exits", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/recommendByCity/{location}/{skill}/{experience}")
    public ResponseEntity<?> getRecommendedUserByChoice(@PathVariable String location, @PathVariable String skill, @PathVariable String experience) {
        try {
            List<ProfileDetails> rec = this.profileQueryService.getRecommendedUserByChoice(location, skill, experience);
            return new ResponseEntity<>(rec, HttpStatus.OK);
        } catch (ProfileNotFoundException e) {
            return new ResponseEntity<>("Profile Not Exists", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/recommendByCity/{location}/{skill}/{experience}/{skilllevel}")
    public ResponseEntity<?> getRecommendedUserByPreference(@PathVariable String location, @PathVariable String skill, @PathVariable String experience, @PathVariable String skilllevel) {
        try {
            List<ProfileDetails> rec = this.profileQueryService.getRecommendedUserByPreference(location, skill, experience, skilllevel);
            return new ResponseEntity<>(rec, HttpStatus.OK);
        } catch (ProfileNotFoundException e) {
            return new ResponseEntity<>("Profile Not Exists", HttpStatus.CONFLICT);
        }
    }
}