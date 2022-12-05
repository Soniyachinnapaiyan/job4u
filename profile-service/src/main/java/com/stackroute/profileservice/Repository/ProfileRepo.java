package com.stackroute.profileservice.Repository;

import com.stackroute.profileservice.Model.ProfileDetails;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileRepo extends Neo4jRepository<ProfileDetails,String> {

    @Query("MATCH(u:ProfileDetails {emailId:$email}) RETURN u")
    ProfileDetails findUserByEmail(String emailId);


    @Query("OPTIONAL MATCH (a:ProfileDetails{email:$email}),(b:Location{location:$location}) MERGE (a)-[r:loc_of]->(b)")
    void createLocationRelationshipWithPersonalDetails(String email, String location);

}
