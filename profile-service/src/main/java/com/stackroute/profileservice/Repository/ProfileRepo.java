package com.stackroute.profileservice.Repository;

import com.stackroute.profileservice.Model.ProfileDetails;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepo extends Neo4jRepository<ProfileDetails,Long> {
}
