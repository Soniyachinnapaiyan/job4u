package com.stackroute.userauthenticationservice.config;


import com.stackroute.userauthenticationservice.domain.User;

import java.util.Map;

public interface JWTTokenGenerator {
    Map<String, String> generateToken(User user);

}
