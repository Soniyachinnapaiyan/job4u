package com.stackroute.userauthenticationservice.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue
    private Long userid;
    @NotNull
    @NotBlank
    @Email
    private String email;


    @NotNull
//    @Size(min=8, message = "First Name should have atleast 2 characters")
    private String password;

    @NotNull
//    @Size(min=8, message = "First Name should have atleast 2 characters")
    private String cpassword;





    //private byte[] image;

//    public User(String email, String firstname, String lastname, String password, String cpassword, String street, String city, String state, String pincode, long contactNo, int alternateNo) {
//        this.email = email;
//        this.firstname = firstname;
//        this.lastname = lastname;
//        this.password = password;
//        this.cpassword = cpassword;
//        this.address = address;
//        this.contactNo = contactNo;
//        this.alternateNo = alternateNo;
//    }
}

