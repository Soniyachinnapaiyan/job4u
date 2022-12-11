package com.stackroute.skillservice.Model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
//@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class SkillsDetails {
    private String email;
    private String skill1;
    private String skill2;
    private String skill3;
    private String level1;
    private String level2;
    private String level3;
}
