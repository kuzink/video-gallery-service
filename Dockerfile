FROM amazoncorretto:11-alpine-jdk
ARG JAR_FILE=target/video-gallery-service.jar
ENV GIRL_NAME=Masha
WORKDIR /app
COPY ${JAR_FILE} app.jar
COPY data ./data
EXPOSE 8080
EXPOSE 9010
ENTRYPOINT ["java", "-Dcom.sun.management.jmxremote=true", "-Dcom.sun.management.jmxremote.port=9010", "-Dcom.sun.management.jmxremote.local.only=false", "-Dcom.sun.management.jmxremote.authenticate=false", "-Dcom.sun.management.jmxremote.ssl=false", "-Dcom.sun.management.jmxremote.rmi.port=9010", "-Djava.rmi.server.hostname=localhost", "-jar","app.jar"]
HEALTHCHECK --interval=30s --timeout=3s --retries=1 CMD wget -qO- http://localhost:8080/actuator/health/ | grep UP || exit 1