package com.egotec.starterproject

import jakarta.persistence.Persistence


object ThreadState {
    /**
     * Create new state object and set it to thread.
     */
    fun begin() = State()
    

    private val factory = Persistence.createEntityManagerFactory(
        "db", mapOf(
            "jakarta.persistence.jdbc.url" to "jdbc:mysql://mariadb/starterProject",
            "jakarta.persistence.jdbc.user" to "starterUser",
            "jakarta.persistence.jdbc.password" to "Demo12+#")
        )

    // Wenn man Tomcat nicht in Docker sondern lokal ausführt muss man
    // die url zu localhost:3306 ändern
    /*private val factory = Persistence.createEntityManagerFactory(
        "db", mapOf(
            "jakarta.persistence.jdbc.url" to "jdbc:mysql://localhost:3306/starterProject",
            "jakarta.persistence.jdbc.user" to "starterUser",
            "jakarta.persistence.jdbc.password" to "Demo12+#")
    )*/


    @Synchronized
    fun createEntityManager() = factory.createEntityManager()!!
}