package com.egotec.starterproject

import com.egotec.starterproject.entity.TodoEntity
import jakarta.persistence.Persistence
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@Path("/todo")
class TodoAPI {

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    fun getTodo(@PathParam("id") id: Long): TodoEntity {
        val state = ThreadState.begin()
        return state.em.find(TodoEntity::class.java, id) ?: throw WebApplicationException(Response.Status.NOT_FOUND)
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun createTodo(todoEntity: TodoEntity): TodoEntity {
        val state = ThreadState.begin()
        state.em.transaction.begin()
        state.em.persist(todoEntity)
        state.em.transaction.commit()
        return todoEntity
    }

    // TODO:
    // getAllTodos
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    fun getAllTodos(): List<TodoEntity> {
        val state = ThreadState.begin();
        return state.em.createQuery("SELECT todo FROM TodoEntity todo", TodoEntity::class.java).resultList
    }


    // deleteTodo
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    fun deleteTodo(@PathParam("id") id: Long): TodoEntity {
        val state = ThreadState.begin();
        val entity = state.em.find(TodoEntity::class.java, id);
        state.em.transaction.begin();
        state.em.remove(entity);
        state.em.transaction.commit();
        return entity;
    }

    // updateTodo
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    fun updateTodo(@PathParam("id") id:Long, todoEntity: TodoEntity): TodoEntity {
        val state = ThreadState.begin()
        val entity = state.em.find(TodoEntity::class.java, id)
        entity.name = todoEntity.name
        entity.content = todoEntity.content
        entity.done = todoEntity.done
        state.em.transaction.begin()
        state.em.merge(entity)
        state.em.transaction.commit();
        return entity
    }

}