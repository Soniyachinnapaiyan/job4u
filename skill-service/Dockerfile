FROM openjdk:11
ADD ./target/skill-service-0.0.1-SNAPSHOT.jar /usr/src/skill-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "skill-service-0.0.1-SNAPSHOT.jar"]