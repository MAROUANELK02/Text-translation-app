package com.translator.translationproject.service;

import java.io.IOException;

public interface ITranslator {
    String translate(String prompt, String from, String to) throws IOException;
}
