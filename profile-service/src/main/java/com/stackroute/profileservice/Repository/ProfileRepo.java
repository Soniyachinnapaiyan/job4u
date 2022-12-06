package com.stackroute.profileservice.Repository;

import com.stackroute.profileservice.Model.ProfileDetails;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileRepo extends Neo4jRepository<ProfileDetails,String> {

   //@Query("MATCH(u:ProfileDetails {emailId:$email}) RETURN u")
    List<ProfileDetails> findUserByEmail(String email);

    @Query("OPTIONAL MATCH (a:ProfileDetails {email:$email}),(b:location {name:$location}) MERGE (a)-[r:loc_of]->(b)")
   void createLocationRelationshipWithPersonalDetails(String email, String location);
    @Query(" MATCH (a:ProfileDetails {email:$email}),(b:skill {name:$skill}) MERGE (a)-[r:has_skl{skilllevel:$skilllevel}]->(b)")
    void createSkillRelationshipWithPersonalDetails(String email, String skill,String skilllevel);
    @Query("OPTIONAL MATCH (a:ProfileDetails {email:$email}),(b:gender {name:$gender}) MERGE (a)-[r:is_a]->(b)")
    void createGenderRelationshipWithPersonalDetails(String email, String gender);
    @Query("OPTIONAL MATCH (a:ProfileDetails {email:$email}),(b:experience {name:$experience}) MERGE (a)-[r:has_exp]->(b)")
    void createExperienceRelationshipWithPersonalDetails(String email, String experience);

 @Query("MATCH (a:ProfileDetails) where (a.location)=$location return a")
    List<ProfileDetails> getRecommendedUserByCity(String location);

    @Query("MATCH (a:ProfileDetails) where (a.location)=$location and (a.skill)=$skill and (a.experience)=$experience return a")
    List<ProfileDetails>getRecommendedUserByChoice(String location, String skill, String experience);

    @Query("MATCH (a:ProfileDetails) where (a.location)=$location and (a.skill)=$skill and (a.experience)=$experience and (a.skilllevel)=$skilllevel return a")
    List<ProfileDetails>getRecommendedUserByPreference(String location, String skill, String experience,String skilllevel);
}
