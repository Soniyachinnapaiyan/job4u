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
    @Query("MATCH (a:ProfileDetails{name:$name}),(b:Location{Hydrebad:$Hydrebad}) MERGE (a)-[r:locationof]->(b)")
    void createInterestRelationshipWithLoanDetails(String name, String location);

}
