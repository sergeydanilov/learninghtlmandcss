package ru.bpal.reminder.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static ru.bpal.reminder.rest.JsonUtil.toJson;
import static spark.Spark.*;


/**
 * Created by serg on 21.10.15.
 */
public class MainPoint {

    public static final String APPLICATION_JSON = "application/json";

    static final Logger logger = LoggerFactory.getLogger(MainPoint.class);

    public static void main(String[] args) {
        //config
        port(9090);


        staticFileLocation("/public");


        get("/hello", (req, res) -> {
            return "Hello World !!! ";
        });

        exception(IllegalArgumentException.class, (e, req, res) -> {
            res.status(400);
            res.body(toJson(new ResponseError(e)));
        });
    }
}
