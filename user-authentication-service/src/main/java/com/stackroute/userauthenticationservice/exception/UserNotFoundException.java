package com.stackroute.userauthenticationservice.exception;

public class UserNotFoundException extends Exception{
    private String message;

    public UserNotFoundException(String message){
    }

    public UserNotFoundException(){

    }
}
