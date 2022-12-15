package com.stackroute.profileservice.controller;

import com.stackroute.profileservice.Model.ProfileDetails;
import com.stackroute.profileservice.Repository.ProfileRepo;
import com.stackroute.profileservice.Service.ProfileCommandServiceImpl;
import com.stackroute.profileservice.Service.ProfileQueryService;
import com.stackroute.profileservice.Service.ProfileQueryServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import static org.hamcrest.CoreMatchers.is;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.mockito.Mockito.when;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
public class ControllerTest {
//    @Autowired
//    private MockMvc mockMvc;
//    @MockBean
//    private ProfileQueryServiceImpl profileQueryService;
//    @MockBean
//    private ProfileCommandServiceImpl profileCommandService;
//    @MockBean
//    private ProfileRepo profileRepo;
//    private ProfileDetails n;
//    @BeforeEach
//    void init() {
//        n = new ProfileDetails();
//        n.setUsername("harish");
//        n.setEmail("harish@gmail.com");
//        n.setDob("12/02/2002");
//        n.setGender("male");
//        n.setLocation("chennai");
//        n.setContactnumber("9876543210");
//        n.setHighest_qualification("B.E");
//        n.setSpecialization("CSE");
//        n.setInstitute_name("CIT");
//        n.setPassing_year(2022);
//        n.setCgpa(9.3);
//        n.setSkill1("Java");
//        n.setSkill2("C");
//        n.setSkill3("Angular");
//        n.setDesignation("SE");
//        n.setCompanyname("CGI");
//        n.setNoticeperiod("30");
//        n.setExperience("7.5");
//        n.setCurrentsalary("10.5");
//        n.setLevel1("Advance");
//        n.setLevel2("Advance");
//        n.setLevel3("Advance");
//    }
//
//    @Test
//    void shouldCreateNewMovie() throws Exception {
//        this.mockMvc.perform(delete("/profile/delete/{email}", "laptop@gmail.com"))
//                .andExpect(status().is2xxSuccessful());
//    }
//
//    @Test
//    void shouldFetchAllMovies() throws Exception {
//        List<ProfileDetails> list = new ArrayList<>();
//        list.add(n);
//
//        when(profileQueryService.getAllProfile()).thenReturn((ArrayList<ProfileDetails>) list);
//        this.mockMvc.perform(get("/profile/getAllProfile"))
//                .andExpect(status().isOk()).andExpect(jsonPath("$.size()", is(list.size())));
//    }
//
//    @Test
//    void shouldFetchOneMovieById() throws Exception {
//        List<ProfileDetails> list = new ArrayList<>();
//        list.add(n);
//        when(profileQueryService.generateRecommendationByCity(any())).thenReturn((ArrayList<ProfileDetails>) list);
//        this.mockMvc.perform(get("/profile/recommendByCity/{location}", "Hyderabad"))
//                .andExpect(status().isOk());
//
//    }

}
