package com.stackroute.profileservice.Controller;

import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import com.stackroute.profileservice.Service.ProfileCommandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/profile")
public class ProfileCommandController {

    @Autowired
    private ProfileCommandService profileCommandService;
    @Autowired
    private ProfileRepo profileRepo;
    @PostMapping("/user")
    public ResponseEntity<?> createUser(@RequestBody ProfileDetails profileDetails)  {

        String u=profileCommandService.saveUser(profileDetails);
        return new ResponseEntity<>(u, HttpStatus.CREATED);
    }

    @PostMapping("/userRelation")
    public ResponseEntity<?> createUserCityRelation(@RequestBody ProfileDetails  profileDetails) {

//        User users=gson.fromJson(user,User.class);
//        String u=userService.createUserNode(users);
        //profileRepo.save(profileDetails);
        profileCommandService.saveUser(profileDetails);
        System.out.println("Node created");
        profileCommandService.createUserCityRelation(profileDetails.getEmail(), profileDetails.getLocation());
        profileCommandService.createUserSkillRelation(profileDetails.getEmail(), profileDetails.getSkill());
        profileCommandService.createUserGenderRelation(profileDetails.getEmail(), profileDetails.getGender());
        profileCommandService.createUserExperienceRelation(profileDetails.getEmail(), profileDetails.getExperience());
        return new ResponseEntity<>(profileDetails, HttpStatus.CREATED);
    }

   /* @PostMapping("/create")
    public String addProfileDetails(@RequestBody ProfileDetails profileDetails){
        profileCommandService.addPersonalDetails(profileDetails);
        return "profile created successfully";
    }

    @PostMapping("/addloan")
    public ResponseEntity<?> addLoanDetails(@RequestBody  ProfileDetails profileDetails){
        this.profileCommandService.addNode(profileDetails);
        return new ResponseEntity<>("Profile Details added...", HttpStatus.OK);
    }*/


}
