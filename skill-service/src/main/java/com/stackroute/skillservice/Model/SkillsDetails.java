package com.stackroute.skillservice.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SkillsDetails {
    private String emailId;
    private String technicalSkills;
    private String otherSkills;
}
