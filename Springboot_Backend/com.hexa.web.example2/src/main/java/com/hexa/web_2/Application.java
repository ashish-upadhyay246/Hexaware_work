package com.hexa.web_2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.hexa.web")
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}