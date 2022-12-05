package com.stackroute.userauthenticationservice.RabbitmqConfig;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.amqp.core.*;


@Configuration
public class MessageConfig {
    public static final String QUEUE = "authentication_queue";
    public static final String EXCHANGE = "authentication_exchange";
    public static final String ROUTING_KEY = "authentication_routingkey";

    public static final String QUEUE1 = "authentication_queue1";
    public static final String EXCHANGE1 = "authentication_exchange1";
    public static final String ROUTING_KEY1 = "authentication_routingkey1";

    public static final String QUEUE2 = "authentication_queue2";
    public static final String EXCHANGE2 = "authentication_exchange2";
    public static final String ROUTING_KEY2 = "authentication_routingkey2";

    public static final String QUEUE3 = "authentication_queue3";
    public static final String EXCHANGE3 = "authentication_exchange3";
    public static final String ROUTING_KEY3= "authentication_routingkey3";

    @Value("${rabbitmq.username}")
    private String username;

    @Value("${rabbitmq.password}")
    private String password;

    @Value("${rabbitmq.host}")
    private String host;

    @Value("${rabbitmq.virtualhost}")
    private String virtualHost;
   @Bean
    public Queue queue() {
        return new Queue(QUEUE);
    }
    @Bean
    public TopicExchange exchange() {
        return new TopicExchange(EXCHANGE);
    }

    @Bean
    public Binding binding(Queue queue, TopicExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(ROUTING_KEY);
    }

    @Bean
    public Queue queue1() {
        return new Queue(QUEUE1);
    }
    @Bean
    public TopicExchange exchange1() {
        return new TopicExchange(EXCHANGE1);
    }

    @Bean
    public Binding binding1(Queue queue1, TopicExchange exchange1) {
        return BindingBuilder.bind(queue1).to(exchange1).with(ROUTING_KEY1);
    }

    @Bean
    public Queue queue2() {
        return new Queue(QUEUE2);
    }
    @Bean
    public TopicExchange exchange2() {
        return new TopicExchange(EXCHANGE2);
    }

    @Bean
    public Binding binding2(Queue queue2, TopicExchange exchange2) {
        return BindingBuilder.bind(queue2).to(exchange2).with(ROUTING_KEY2);
    }

    @Bean
    public Queue queue3() {
        return new Queue(QUEUE3);
    }
    @Bean
    public TopicExchange exchange3() {
        return new TopicExchange(EXCHANGE3);
    }

    @Bean
    public Binding binding3(Queue queue3, TopicExchange exchange3) {
        return BindingBuilder.bind(queue3).to(exchange3).with(ROUTING_KEY3);
    }

    @Bean
    public MessageConverter jsonMessageConverter() {
        ObjectMapper objectMapper = new ObjectMapper();
        return new Jackson2JsonMessageConverter(objectMapper);
    }

    @Bean
    public ConnectionFactory connectionFactory() {
        CachingConnectionFactory connectionFactory = new CachingConnectionFactory();
        connectionFactory.setVirtualHost(virtualHost);
        connectionFactory.setHost(host);
        connectionFactory.setUsername(username);
        connectionFactory.setPassword(password);
        return connectionFactory;
    }

    @Bean
    public AmqpTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);

        rabbitTemplate.setDefaultReceiveQueue(QUEUE);
        rabbitTemplate.setMessageConverter(jsonMessageConverter());
        rabbitTemplate.setReplyAddress(queue().getName());
        rabbitTemplate.setUseDirectReplyToContainer(false);
        return rabbitTemplate;
    }

    @Bean
    public AmqpTemplate rabbitTemplate1(ConnectionFactory connectionFactory) {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);

        rabbitTemplate.setDefaultReceiveQueue(QUEUE1);
        rabbitTemplate.setMessageConverter(jsonMessageConverter());
        rabbitTemplate.setReplyAddress(queue1().getName());
        rabbitTemplate.setUseDirectReplyToContainer(false);
        return rabbitTemplate;
    }

    @Bean
    public AmqpTemplate rabbitTemplate2(ConnectionFactory connectionFactory) {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);

        rabbitTemplate.setDefaultReceiveQueue(QUEUE2);
        rabbitTemplate.setMessageConverter(jsonMessageConverter());
        rabbitTemplate.setReplyAddress(queue2().getName());
        rabbitTemplate.setUseDirectReplyToContainer(false);
        return rabbitTemplate;
    }

    @Bean
    public AmqpTemplate rabbitTemplate3(ConnectionFactory connectionFactory) {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);

        rabbitTemplate.setDefaultReceiveQueue(QUEUE3);
        rabbitTemplate.setMessageConverter(jsonMessageConverter());
        rabbitTemplate.setReplyAddress(queue3().getName());
        rabbitTemplate.setUseDirectReplyToContainer(false);
        return rabbitTemplate;
    }

    @Bean
    public AmqpAdmin amqpAdmin() {
        return new RabbitAdmin(connectionFactory());
    }
}



