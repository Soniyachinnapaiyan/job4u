package com.stackroute.experienceservice.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExperienceDetails {
    private Long entityId;
    private String designation;
    private String companyname;
    private String noticeperiod;
    private String totalexperience;
    private Double currentsalary;
    private String jobprofile;
}
