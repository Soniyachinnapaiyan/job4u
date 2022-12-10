package com.stackroute.profileservice.Model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.GeneratedValue;

import javax.validation.constraints.*;

@Node
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id", scope = ProfileDetails .class)
public class ProfileDetails {
    @Id
    @Email
    @NotEmpty(message = "Email is required")
    private String email;
    @NotBlank(message = "Please enter username")
    private String username;
    @NotBlank(message = "Please enter dob")
    private String dob;
    @NotBlank(message = "Please enter gender")
    private String gender;
    @NotBlank(message = "Please enter location")
    private String location;
    @NotNull
    @NotEmpty(message = "Mobile number is required")
    @Pattern(regexp = "(^$|[0-9]{10})", message = "Mobile number is invalid")
    private String contactnumber;
    @NotBlank(message = "Please enter highest_qualification ")
    private String highest_qualification;
    @NotBlank(message = "Please enter specialization ")
    private String specialization;
    @NotBlank(message = "Please enter institute_name ")
    private String institute_name;
    @NotNull(message = "Please enter passing year")
    private Integer passing_year;
    @NotNull(message = "Please enter cgpa")
    private Double cgpa;
    @NotBlank(message = "Please enter skill")
    private String skill;
    @NotBlank(message = "Please enter otherSkills")
    private String otherSkills;
    @NotBlank(message = "Please enter designation")
    private String designation;
    @NotBlank(message = "Please enter companyname")
    private String companyname;
    @NotBlank(message = "Please enter noticeperiod")
    private String noticeperiod;
    @NotBlank(message = "Please enter experience")
    private String experience;
    @NotBlank(message ="Please enter currentsalary")
    private String currentsalary;
    @NotBlank(message = "Please enter jobprofile")
    private String jobprofile;
    @NotBlank(message = "Please enter skilllevel")
    private String skilllevel;


    public ProfileDetails( String email, String location) {
        super();
        this.email=email;
        this.location=location;
    }
    public ProfileDetails( String email, String location,String skill,String experience) {
        super();
        this.email=email;
        this.location=location;
        this.skill=skill;
        this.experience=experience;
    }
    public ProfileDetails( String email,String location, String skill, String experience,String skilllevel) {
        super();
        this.email=email;
        this.location=location;
        this.skill=skill;
        this.experience=experience;
        this.skilllevel=skilllevel;
    }

}
