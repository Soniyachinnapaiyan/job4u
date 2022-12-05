package com.stackroute.personaldetailservice.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonalDetail {
    private String email;
    private String username;
    private String dob;
    private String gender;
    private String location;
    private long contactnumber;
}
