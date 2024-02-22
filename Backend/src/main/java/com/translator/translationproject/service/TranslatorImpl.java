package com.translator.translationproject.service;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class TranslatorImpl implements ITranslator {
    @Value("${translator.api.url}")
    private String url;

    @Value("${translator.api.key}")
    private String key;

    @Value("${translator.api.location}")
    private String region;

    @Override
    public String translate(String prompt, String from, String to) throws IOException {
        OkHttpClient client = new OkHttpClient();
        Gson gson = new Gson();
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType,"[{\"Text\": "+gson.toJson(prompt)+"}]");
        Request request = new Request.Builder()
                .url(url + "?api-version=3.0&" + "from=" + from + "&to=" + to)
                .post(body)
                .addHeader("Ocp-Apim-Subscription-Key", key)
                .addHeader("Ocp-Apim-Subscription-Region", region)
                .addHeader("Content-type", "application/json")
                .build();
        try (Response response = client.newCall(request).execute()) {
            String responseBody = response.body().string();

            // Parse the JSON response to extract the translated text
            JsonArray jsonArray = JsonParser.parseString(responseBody).getAsJsonArray();
            JsonObject jsonObject = jsonArray.get(0).getAsJsonObject();
            JsonArray translationsArray = jsonObject.get("translations").getAsJsonArray();
            String translatedText = translationsArray.get(0).getAsJsonObject().get("text").getAsString();

            return translatedText;
        }
    }
}
