package com.sutek.graphqlspringboot.repository;

import com.sutek.graphqlspringboot.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.relational.core.query.Query;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

import static org.springframework.data.relational.core.query.Criteria.where;

@Repository
public class BookRepository {
	private final R2dbcEntityTemplate template;

	@Autowired
	private DatabaseClient databaseClient;

	public BookRepository(R2dbcEntityTemplate template) {
		this.template = template;
	}

	public Mono<Book> getBook(String id) {
//		return databaseClient.select()
//			.from(Book.class)
//			.matching(Criteria.where("id").is(id))
//			.fetch()
//			.one();

		return template.selectOne(Query.query(where("id").is(id)), Book.class);
	}

	public Flux<Book> getBooks() {
//		return databaseClient.select().from(Book.class).fetch().all();

		return template.select(Book.class).all();
	}

	public Mono<UUID> createBook(Book book) {
		UUID bookId = UUID.randomUUID();
		book.setId(bookId);

//		return databaseClient.insert().into(Book.class).using(book).then().thenReturn(bookId);

		return template.insert(Book.class)
			.using(book)
			.map(b -> b.getId());
	}
}
