package com.sutek.GraphQLSpringBoot2.query;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

@Component
public class Query implements GraphQLQueryResolver {
	public String test() {
		return "Hello GraphQL";
	}

	public int sum(int a, int b) {
		return a + b;
	}
}
