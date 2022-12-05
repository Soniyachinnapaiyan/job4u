package com.stackroute.personaldetailservice.Service;


import com.stackroute.personaldetailservice.Model.PersonalDetail;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class RabbitMQReceiver implements RabbitListenerConfigurer {

    private static final Logger logger = LoggerFactory.getLogger(RabbitMQReceiver.class);


//     @RabbitListener(queues ="authentication_queue2")
//    public void receivedMessageFromPersonalDetail(String email) {
//           PersonalDetail n = new PersonalDetail();
//           n.setEmail(email);
//         System.out.println( "email is received"+email);
//        //logger.info("Profile Details Received is.. " + personalDetail);
//       //   System.out.println( this.profileCommandService.saveUser(n));
//    }

    @Override
    public void configureRabbitListeners(RabbitListenerEndpointRegistrar rabbitListenerEndpointRegistrar) {

    }

}