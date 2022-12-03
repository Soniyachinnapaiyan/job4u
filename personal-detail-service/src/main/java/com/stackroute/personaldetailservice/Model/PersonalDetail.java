package com.stackroute.personaldetailservice.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonalDetail {
    private String username;
    private String emailId;
    private String dob;
    private String gender;
    private String location;
    private long contactnumber;
}
