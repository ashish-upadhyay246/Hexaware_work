package com.hexa.web_2;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.hexa.web")
@EntityScan(basePackages = "com.hexa.web.Customer")
@EnableJpaRepositories(basePackages = "com.hexa.web.Bankrepository")
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}