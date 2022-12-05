package com.stackroute.profileservice.Controller;

import com.stackroute.profileservice.Model.ProfileDetails;
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

    @PostMapping("/user")
    public ResponseEntity<?> createUser(@RequestBody ProfileDetails profileDetails)  {

        String u=profileCommandService.saveUser(profileDetails);
        return new ResponseEntity<>(u, HttpStatus.CREATED);
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
