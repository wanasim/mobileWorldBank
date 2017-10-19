package com.databankapp;

import android.content.Intent;
import java.util.concurrent.TimeUnit;

/**
 * Created by nardos on 10/17/17.
 */

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        try {
            Intent intent = new Intent(this, MainActivity.class);
            startActivity(intent);
            TimeUnit.SECONDS.sleep(2);
            finish();
        } catch(Exception e){
            //Nothing
        }

    }
}