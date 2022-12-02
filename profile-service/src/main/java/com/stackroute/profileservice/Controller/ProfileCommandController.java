package com.stackroute.profileservice.Controller;


import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Service.ProfileCommandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileCommandController {
    @Autowired
    private ProfileCommandService commandService;

    @PostMapping("/persons")
    public String addProfileDetails(@RequestBody ProfileDetails detail)  {
        commandService.addProfileDetails(detail);
        return "Profile Added";
    }
}
