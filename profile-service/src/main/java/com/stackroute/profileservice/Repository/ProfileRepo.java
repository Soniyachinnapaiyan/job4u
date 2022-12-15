package com.stackroute.profileservice.Repository;

import com.stackroute.profileservice.Model.ProfileDetails;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileRepo extends Neo4jRepository<ProfileDetails,String> {

   @Query("MATCH(u:ProfileDetails {email:$email}) RETURN u")
    ProfileDetails findUserByEmail(String email);

    @Query("OPTIONAL MATCH (a:ProfileDetails {email:$email}),(b:location {name:$location}) MERGE (a)-[r:loc_of]->(b)")
   void createLocationRelationshipWithPersonalDetails(String email, String location);
    @Query("OPTIONAL MATCH (a:ProfileDetails {email:$email}),(b:skill {name:$skill1}) MERGE (a)-[r:has_skl{level1:$level1}]->(b)")
    void createSkill1RelationshipWithPersonalDetails(String email, String skill1,String level1);
    @Query("OPTIONAL MATCH (a:ProfileDetails {email:$email}),(b:skill {name:$skill2}) MERGE (a)-[r:has_skl{level2:$level2}]->(b)")
    void createSkill2RelationshipWithPersonalDetails(String email, String skill2,String level2);
    @Query("OPTIONAL MATCH (a:ProfileDetails {email:$email}),(b:skill {name:$skill3}) MERGE (a)-[r:has_skl{level3:$level3}]->(b)")
    void createSkill3RelationshipWithPersonalDetails(String email, String skill3,String level3);
    @Query("OPTIONAL MATCH (a:ProfileDetails {email:$email}),(b:gender {name:$gender}) MERGE (a)-[r:is_a]->(b)")
    void createGenderRelationshipWithPersonalDetails(String email, String gender);
    @Query("OPTIONAL MATCH (a:ProfileDetails {email:$email}),(b:experience {name:$experience}) MERGE (a)-[r:has_exp]->(b)")
    void createExperienceRelationshipWithPersonalDetails(String email, String experience);


    @Query("MATCH (a:ProfileDetails{email:$email}) DETACH DELETE a")
    void deletenodewithrelation(String email);



    @Query("MATCH (a:ProfileDetails) where (a.location)=$location return a")
    List<ProfileDetails> getRecommendedUserByCity(String location);

 @Query("MATCH (a:ProfileDetails) where (a.skill1)=$skill1 and (a.level1)=$level1 return a")
 List<ProfileDetails> getRecommendedUserBySkill(String skill1, String level1);
    @Query("MATCH (a:ProfileDetails) where (a.experience)=$experience return a")
    List<ProfileDetails> getRecommendedUserByExperience(String experience);
    @Query("MATCH (a:ProfileDetails) where (a.skill1)=$skill1 and (a.level1)=$level1 and (a.experience)=$experience return a")
    List<ProfileDetails> getRecommendedUserBySLE(String skill1, String level1,String experience);

    @Query("MATCH (a:ProfileDetails) where (a.skill1)=$skill1 and (a.level1)=$level1 and (a.location)=$location return a")
    List<ProfileDetails> getRecommendedUserBySLL(String skill1, String level1,String location);
    @Query("MATCH (a:ProfileDetails) where (a.location)=$location and (a.skill1)=$skill1 and (a.experience)=$experience return a")
    List<ProfileDetails>getRecommendedUserByChoice(String location, String skill1, String experience);

 @Query("MATCH (a:ProfileDetails) where (a.location)=$location and (a.skill1)=$skill1 return a")
 List<ProfileDetails>getRecommendedUserByLocationandSkill(String location, String skill1);

    @Query("MATCH (a:ProfileDetails) where (a.location)=$location and (a.skill1)=$skill1 and (a.experience)=$experience and (a.level1)=$level1 return a")
    List<ProfileDetails>getRecommendedUserByPreference(String location, String skill1, String experience,String level1);
}
