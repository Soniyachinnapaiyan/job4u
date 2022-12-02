package com.stackroute.profileservice.Controller;

import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Service.ProfileCommandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/profile")
public class ProfileCommandController {

    @Autowired
    private ProfileCommandService profileCommandService;

    @PostMapping("/create")
    public String addProfileDetails(@RequestBody ProfileDetails profileDetails){
        profileCommandService.addPersonalDetails(profileDetails);
        return "profile created successfully";
    }
}
