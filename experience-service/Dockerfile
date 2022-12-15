FROM openjdk:11
ADD ./target/experience-service-0.0.1-SNAPSHOT.jar /usr/src/experience-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "experience-service-0.0.1-SNAPSHOT.jar"]