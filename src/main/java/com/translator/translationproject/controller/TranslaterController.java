package com.translator.translationproject.controller;

import com.translator.translationproject.service.ITranslator;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin("*")
public class TranslaterController {
    private final ITranslator translator;

    public TranslaterController(ITranslator translator) {
        this.translator = translator;
    }

    @PostMapping("/translate")
    public String translate(@RequestBody String prompt,
                            @RequestParam(name = "from") String from,
                            @RequestParam(name = "to") String to) throws IOException {

        return translator.translate(prompt, from, to);

    }
}
