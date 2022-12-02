package com.stackroute.academicsservice.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class EducationDetails {
    private String highest_qualification;
    private String specialization;
    private String institute_name;
    private Integer passing_year;
    private Double cgpa;
}
