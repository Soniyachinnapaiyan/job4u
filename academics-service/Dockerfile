FROM openjdk:11
ADD ./target/academics-service-0.0.1-SNAPSHOT.jar /usr/src/academics-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "academics-service-0.0.1-SNAPSHOT.jar"]