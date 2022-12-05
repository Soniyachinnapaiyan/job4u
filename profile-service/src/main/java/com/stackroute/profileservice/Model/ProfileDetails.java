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
@Node
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id", scope = ProfileDetails .class)
public class ProfileDetails {
    @Id
    private String email;
    private String username;
    private String dob;
    private String gender;
    private String location;
    private Long contactnumber;
    private String highest_qualification;
    private String specialization;
    private String institute_name;
    private Integer passing_year;
    private Double cgpa;
    private String technicalSkills;
    private String otherSkills;
    private String designation;
    private String companyname;
    private String noticeperiod;
    private String totalexperience;
    private Double currentsalary;
    private String jobprofile;

}
