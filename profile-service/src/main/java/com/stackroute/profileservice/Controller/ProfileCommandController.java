package com.stackroute.profileservice.Controller;

import com.stackroute.profileservice.Exception.ProfileAlreadyExistException;
import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import com.stackroute.profileservice.Service.ProfileCommandServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/profile")
public class ProfileCommandController {

    @Autowired
    private ProfileCommandServiceImpl profileCommandService;
    @Autowired
    private ProfileRepo profileRepo;


   /* @PostMapping("/user")
    public ResponseEntity createUser(@Valid @RequestBody ProfileDetails profileDetails) throws ProfileAlreadyExistException {
        ResponseEntity responseEntity;
        try {
            responseEntity = new ResponseEntity(profileCommandService.saveUser(profileDetails), HttpStatus.CREATED);
        } catch (ProfileAlreadyExistException e) {
            throw new ProfileAlreadyExistException("profile already Exist");
        }
        return responseEntity;
    }

   @GetMapping ("/userRelation/{email}")
    public ResponseEntity<?> createUserCityRelation(@PathVariable String email) throws ProfileAlreadyExistException {
       // ProfileDetails profileDetails =new ProfileDetails();
//        User users=gson.fromJson(user,User.class);
//        String u=userService.createUserNode(users);
       List<ProfileDetails> rec=profileRepo.findUserByEmail(email);
       // profileRepo.save(profileDetails);
       //  profileCommandService.createUserCityRelation(profileDetails.getEmail(), profileDetails.getLocation());
        return new ResponseEntity<>(rec, HttpStatus.CREATED);
    }
       /* @PostMapping("/userRelation")
    public ResponseEntity<?> createUserCityRelation(@RequestBody ProfileDetails profileDetails) throws ProfileAlreadyExistException {

//        User users=gson.fromJson(user,User.class);
//        String u=userService.createUserNode(users);
        //profileRepo.save(profileDetails);
        profileCommandService.saveUser(profileDetails);
        System.out.println("Node created");
       // profileCommandService.createUserCityRelation(profileDetails.getEmail(), profileDetails.getLocation());
        profileCommandService.createUserSkillRelation(profileDetails.getEmail(), profileDetails.getSkill());
        profileCommandService.createUserGenderRelation(profileDetails.getEmail(), profileDetails.getGender());
        profileCommandService.createUserExperienceRelation(profileDetails.getEmail(), profileDetails.getExperience());
        return new ResponseEntity<>(profileDetails, HttpStatus.CREATED);
    }*/
}


