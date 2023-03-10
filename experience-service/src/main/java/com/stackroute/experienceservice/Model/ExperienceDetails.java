package com.stackroute.experienceservice.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExperienceDetails {
    private String email;
    private String designation;
    private String companyname;
    private String noticeperiod;

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    private String experience;
    private String currentsalary;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getCompanyname() {
        return companyname;
    }

    public void setCompanyname(String companyname) {
        this.companyname = companyname;
    }

    public String getNoticeperiod() {
        return noticeperiod;
    }

    public void setNoticeperiod(String noticeperiod) {
        this.noticeperiod = noticeperiod;
    }



    public String getCurrentsalary() {
        return currentsalary;
    }

    public void setCurrentsalary(String currentsalary) {
        this.currentsalary = currentsalary;
    }


}
