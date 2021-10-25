package com.sutek.graphqlspringboot.repository;

import com.sutek.graphqlspringboot.model.Author;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

import java.util.UUID;

import static org.springframework.data.relational.core.query.Criteria.where;

@Repository
public class AuthorRepository {
	private final R2dbcEntityTemplate template;

	@Autowired
	private DatabaseClient databaseClient;

	public AuthorRepository(R2dbcEntityTemplate template) {
		this.template = template;
	}

	public Mono<UUID> createAuthor(Author author) {
		UUID authorId = UUID.randomUUID();
		author.setId(authorId);

//		return databaseClient.insert().into(Author.class).using(author).then().thenReturn(authorId);

		return template.insert(Author.class)
			.using(author)
			.map(a -> a.getId());
	}

	public Mono<Author> getAuthor(UUID bookId) {
//		return databaseClient.select().from(Author.class).matching(Criteria.where("book_id").is(bookId)).fetch().one();

		return template.selectOne(Query.query(where("book_id").is(bookId)), Author.class);
	}
}
